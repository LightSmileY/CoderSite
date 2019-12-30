<template>
  <div id="articleDetail">
    <van-nav-bar
      fixed
      left-arrow
      @click-left="goBack"
      title="文章"/>
    <div class="container">
      <div class="article">
        <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div class="user">
            <div class="user-info">
              <div class="avatar">
                <!-- van图片 -->
                <van-image
                  lazy-load
                  fit="cover"
                  :src="articleInfo.avatar">
                  <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                  </template>
                  <template v-slot:error>加载失败</template>
                </van-image>
              </div>
              <div class="name-time">
                <div class="name">
                  {{articleInfo.userNickname}}
                </div>
                <div class="time">
                  {{articleInfo.postTime}}
                </div>
              </div>
            </div>
            <div class="attent">
              <span v-if="articleInfo.userId == $store.state.userInfo.userId">删除
              </span>
              <van-button
              v-else
              plain 
              hairline 
              round
              color="#939393"
              type="default" 
              size="small">{{articleInfo.isAttent ? "+关注" : "已关注"}}</van-button>
            </div>
          </div>
          <div class="title">#{{articleInfo.title}}#</div>
          <div class="labels">
            <span class="tag-box" v-for="item in articleInfo.labels">
              <van-tag color="#f2826a" plain>{{item}}</van-tag>
            </span>
          </div>
          <ul class="content">
            <li v-for="item in articleInfo.content">
              <p style="font-size:16px;">{{item.para}}</p>
              <div class="image">
                <img :src="item.image" alt="">
              </div>
            </li>
          </ul>
          <div class="operinfo">
            <!-- 点赞、评论、收藏信息 -->
            <ul>
              <li>
                <div class="icon">
                  <van-icon 
                  @click="like"
                  v-if="!articleInfo.isLike"
                  name="like-o"/>
                  <van-icon 
                  @click="unLike"
                  v-else
                  name="like" />
                </div>
                <div class="label">{{articleInfo.likeCount}}</div>
              </li>
              <li>
                <div class="icon">
                  <van-icon 
                  @click="collect"
                  v-if="!articleInfo.isCollect"
                  name="star-o"/>
                  <van-icon 
                  @click="unCollect"
                  v-else
                  name="star" />
                </div>
                <div class="label">{{articleInfo.collectCount}}</div>
              </li>
              <li>
                <div class="icon" @click="showPostBox = true">
                  <van-icon name="chat-o" />
                </div>
                <div class="label">{{articleInfo.commentCount}}</div>
              </li>
            </ul>
          </div>
          <van-divider content-position="left">评论</van-divider>
          <ul id="commentList">
            <li v-for="item in articleInfo.comment">
              <div class="avatar">
                <!-- van图片 -->
                <van-image
                  lazy-load
                  fit="cover"
                  :src="item.avatar">
                  <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                  </template>
                  <template v-slot:error>加载失败</template>
                </van-image>
              </div>
              <div class="main">
                <div class="name">{{item.nickname}}</div>
                <div class="content">
                  {{item.content}}
                </div>
                <div class="info">
                  <div class="info-time">{{item.time}}</div>
                  <div class="info-reply">回复</div>
                </div>
              </div>
            </li>
          </ul>
        </van-pull-refresh>
      </div>
    </div>
    <!-- 评论、回复框 -->
    <van-overlay :show="showPostBox" @click="showPostBox = false">
      <div class="wrapper" @click.stop>
        <div class="postMessage">
          <van-field
            v-model="commentContent"
            center
            rows="1"
            autosize
            autofocus
            type="textarea"
            placeholder="请输入···"
          >
            <van-button slot="button" size="small" type="primary">发送</van-button>
          </van-field>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar'
  import CommentList from '@/components/commentList'
  import {getTime, uuid} from '@/assets/js/pubfuncs'
  import {
    getArticleById,  /*获取问题*/
    deleteArticleById,
    addLike,  /*点赞*/
    deleteLike,
    addFavorite,  /*收藏*/
    deleteFavorite,
    addComment,  /*评论*/
    deleteComment
  } from '@/api/article'
  import {
    addFollow,  /*关注*/
    deleteFollow
  } from '@/api/user'

  export default {
    data(){
      return {
        isLoading: false,    //控制下拉刷新
        showPostBox: false,  //控制评论输入框
        articleInfo: {},  //页面内容对象
        commentContent: ''
      }
    },
    components: {
      TabBar,
      CommentList
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功')
          this.isLoading = false
        }, 500)
      },/*传递给点赞等操作的参数*/
      getAddInfo(param){
        return {
          id: uuid(),
          aid: this.articleInfo.aid,
          uid: this.$store.state.userInfo.userId,
          content: param,
          time: new Date()
        }
      },
      /*获取文章*/
      getArticle(){
        getArticleById({
          aid: this.$route.query.id,
          uid: this.$store.state.userInfo.userId
        })
        .then(res => {
          console.log(res)
          this.articleInfo = res.data.article
        })
      },
      /*删除问题*/
      deleteArticle(){
        // Dialog.confirm({
        //   title: '标题',
        //   message: '弹窗内容'
        // }).then(() => {
          
        // }).catch(() => {
          
        // });
        // deleteArticleById({
        //   aid: this.articleInfo.aid
        // })
        // .then(res => {
        //   console.log(res)
        //   this.articleInfo = res.data.Article
        // })
      },
      /*关注*/
      follow(){
        if(!this.articleInfo.isAttent)
          addFollow({
            uid: this.$store.state.userInfo.userId,
            objId: this.articleInfo.userId
          })
          .then(res => {
            console.log(res)
            this.articleInfo.isAttent = true
          })
          .catch(err => {
            console.log(err)
          })
        else
          deleteFollow({
            uid: this.$store.state.userInfo.userId,
            objId: this.articleInfo.userId
          })
          .then(res => {
            console.log(res)
            this.articleInfo.isAttent = false
          })
          .catch(err => {
            console.log(err)
          })
      },
      /*点赞*/
      like(){
        // ImagePreview({
        //   images: [
        //     'https://img.yzcdn.cn/1.jpg',
        //     'https://img.yzcdn.cn/2.jpg'
        //   ],
        //   startPosition: 1,
        //   onClose() {
        //     // do something
        //   }
        // });
        addLike(this.getAddInfo())
        .then(res => {
          console.log(res)
          this.articleInfo.isLike = true
          this.articleInfo.likeCount ++
        })
        .catch(err => {
          console.log(err)
        })
      },
      unLike(){
        deleteLike({
          uid: this.$store.state.userInfo.userId,
          aid: this.articleInfo.aid
        })
        .then(res => {
          console.log(res)
          this.articleInfo.isCollect = false
          this.articleInfo.collectCount --
        })
        .catch(err => {
          console.log(err)
        })
      },
      /*收藏*/
      collect(){
        addFavorite(this.getAddInfo())
        .then(res => {
          console.log(res)
          this.articleInfo.isCollect = true
          this.articleInfo.collectCount ++
        })
        .catch(err => {
          console.log(err)
        })
      },
      /*取消收藏*/
      unCollect(param){
        deleteFavorite({
          uid: this.$store.state.userInfo.userId,
          aid: this.articleInfo.aid
        })
        .then(res => {
          console.log(res)
          this.articleInfo.isLike = false
          this.articleInfo.likeCount --
        })
        .catch(err => {
          console.log(err)
        })
      },
      /*评论*/
      comment(){
        addComment(this.getAddInfo(this.commentContent))
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      },
      /*删除评论*/
      unComment(param){
        deleteComment(getDeleteInfo(param))
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    created(){
      this.getArticle()
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/articleDetail';
</style>