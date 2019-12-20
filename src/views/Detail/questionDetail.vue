<template>
  <div id="articleDetail">
    <van-nav-bar
      fixed
      left-arrow
      @click-left="goBack"
      title="问题"/>
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
                  :src="questionInfo.avatar">
                  <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                  </template>
                  <template v-slot:error>加载失败</template>
                </van-image>
              </div>
              <div class="name-time">
                <div class="name">
                  {{questionInfo.userNickname}}
                </div>
                <div class="time">
                  {{questionInfo.postTime}}
                </div>
              </div>
            </div>
            <div class="attent">
              <span 
              @click="deleteQuestion"
              v-if="questionInfo.userId === $store.state.userInfo.userId">删除
              </span>
              <van-button
              @click="follow"
              v-else
              plain 
              hairline 
              round
              color="#939393"
              type="default" 
              size="small">{{questionInfo.isAttent ? "已关注" : "+关注"}}</van-button>
            </div>
          </div>
          <div class="title">#{{questionInfo.title}}#</div>
          <div class="labels">
            <span class="tag-box" v-for="item in questionInfo.labels">
              <van-tag color="#f2826a" plain>{{item}}</van-tag>
            </span>
          </div>
          <ul class="qcontent">
            <p>{{questionInfo.content}}</p>
            <div class="image">
              <li v-for="item in questionInfo.images">
                <van-image fit="cover" :src="item"/>
              </li>
            </div>
          </ul>
          <div class="operinfo">
            <!-- 点赞、评论、收藏信息 -->
            <ul>
              <li>
                <div class="icon">
                  <van-icon 
                  @click="like"
                  v-if="!questionInfo.isLike"
                  name="like-o"/>
                  <van-icon 
                  @click="unLike"
                  v-else
                  name="like" />
                </div>
                <div class="label">{{questionInfo.likeCount}}</div>
              </li>
              <li>
                <div class="icon">
                  <van-icon 
                  @click="collect"
                  v-if="!questionInfo.isCollect"
                  name="star-o"/>
                  <van-icon 
                  @click="unCollect"
                  v-else
                  name="star" />
                </div>
                <div class="label">{{questionInfo.collectCount}}</div>
              </li>
              <li>
                <div class="icon" @click="showPostBox = true">
                  <van-icon name="chat-o" />
                </div>
                <div class="label">{{questionInfo.answerCount}}</div>
              </li>
            </ul>
          </div>
          <van-divider content-position="left">回答</van-divider>
          <comment-list :question="questionInfo"/>
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
            <van-button @click="answer" slot="button" size="small" type="primary">发送</van-button>
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
    getQuestionById,  /*获取问题*/
    deleteQuestionById,
    addLike,  /*点赞*/
    deleteLike,
    addFavorite,  /*收藏*/
    deleteFavorite,
    addAnswer,  /*回答*/
    deleteAnswer
  } from '@/api/question'
  import {
    addFollow,  /*关注*/
    deleteFollow
  } from '@/api/user'

  export default {
    data(){
      return {
        isLoading: false,    //控制下拉刷新
        showPostBox: false,  //控制回答输入框
        questionInfo: {},  //页面内容对象
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
      },
      /*传递给点赞等操作的参数*/
      getAddInfo(param){
        return {
          id: uuid(),
          qid: this.questionInfo.qid,
          uid: this.$store.state.userInfo.userId,
          content: param,
          time: new Date()
        }
      },
      /*获取问题*/
      getQuestion(){
        getQuestionById({
          qid: this.$route.query.id,
          uid: this.$store.state.userInfo.userId
        })
        .then(res => {
          console.log(res)
          this.questionInfo = res.data.question
        })
      },
      /*删除问题*/
      deleteQuestion(){
        Dialog.confirm({
          title: '标题',
          message: '弹窗内容'
        }).then(() => {
          
        }).catch(() => {
          
        });
        // deleteQuestionById({
        //   qid: this.questionInfo.qid
        // })
        // .then(res => {
        //   console.log(res)
        //   this.questionInfo = res.data.question
        // })
      },
      /*关注*/
      follow(){
        if(!this.questionInfo.isAttent)
          addFollow({
            uid: this.$store.state.userInfo.userId,
            objId: this.questionInfo.userId
          })
          .then(res => {
            console.log(res)
            this.questionInfo.isAttent = true
          })
          .catch(err => {
            console.log(err)
          })
        else
          deleteFollow({
            uid: this.$store.state.userInfo.userId,
            objId: this.questionInfo.userId
          })
          .then(res => {
            console.log(res)
            this.questionInfo.isAttent = false
          })
          .catch(err => {
            console.log(err)
          })
      },
      /*点赞*/
      like(){
        ImagePreview({
  images: [
    'https://img.yzcdn.cn/1.jpg',
    'https://img.yzcdn.cn/2.jpg'
  ],
  startPosition: 1,
  onClose() {
    // do something
  }
});
        addLike(this.getAddInfo())
        .then(res => {
          console.log(res)
          this.questionInfo.isLike = true
          this.questionInfo.likeCount ++
        })
        .catch(err => {
          console.log(err)
        })
      },
      unLike(){
        deleteLike({
          uid: this.$store.state.userInfo.userId,
          qid: this.questionInfo.qid
        })
        .then(res => {
          console.log(res)
          this.questionInfo.isCollect = false
          this.questionInfo.collectCount --
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
          this.questionInfo.isCollect = true
          this.questionInfo.collectCount ++
        })
        .catch(err => {
          console.log(err)
        })
      },
      /*取消收藏*/
      unCollect(param){
        deleteFavorite({
          uid: this.$store.state.userInfo.userId,
          qid: this.questionInfo.qid
        })
        .then(res => {
          console.log(res)
          this.questionInfo.isLike = false
          this.questionInfo.likeCount --
        })
        .catch(err => {
          console.log(err)
        })
      },
      /*回答*/
      answer(){
        addAnswer(this.getAddInfo(this.commentContent))
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      },
      /*删除回答*/
      unAnswer(param){
        deleteAnswer(getDeleteInfo(param))
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    created(){
      this.getQuestion()
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/articleDetail';
</style>