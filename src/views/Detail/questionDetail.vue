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
              <van-button 
              plain 
              hairline 
              round
              color="#939393"
              type="default" 
              size="mini">+关注</van-button>
            </div>
          </div>
          <div class="title">#{{questionInfo.title}}#</div>
          <div class="labels">
            <span class="tag-box" v-for="item in questionInfo.labels">
              <van-tag color="#f2826a" plain>{{item}}</van-tag>
            </span>
          </div>
          <ul class="content">
            <li>
              <p>{{questionInfo.content}}</p>
              <div class="image" v-for="item in questionInfo.images">
                <img :src="item" alt="">
              </div>
            </li>
          </ul>
          <div class="operinfo">
            <!-- 点赞、评论、收藏信息 -->
            <ul>
              <li>
                <div class="icon">
                  <van-icon name="like-o" />
                </div>
                <div class="label">{{questionInfo.likeCount}}</div>
              </li>
              <li>
                <div class="icon">
                  <van-icon name="star-o" />
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
          <comment-list :arrayList="questionInfo.answers"/>
        </van-pull-refresh>
      </div>
    </div>
    <!-- 评论、回复框 -->
    <van-overlay :show="showPostBox" @click="showPostBox = false">
      <div class="wrapper" @click.stop>
        <div class="postMessage">
          <van-field
            v-model="sms"
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
  import {getTime} from '@/assets/js/pubfuncs'
  import {getQuestionById} from '@/api/question'

  export default {
    data(){
      return {
        isLoading: false,
        showPostBox: false,
        questionInfo: {}
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
      getQuestion(){
        getQuestionById({qid: this.$route.query.id})
        .then(res => {
          console.log(res)
          this.questionInfo = res.data.question
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