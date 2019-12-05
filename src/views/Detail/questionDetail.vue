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
                  src="http://cdn.fengblog.xyz/avatar.jpg">
                  <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                  </template>
                  <template v-slot:error>加载失败</template>
                </van-image>
              </div>
              <div class="name-time">
                <div class="name">
                  浅笑半离兮
                </div>
                <div class="time">
                  2019-11-23 21:56:30
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
          <div class="title">#嘻嘻嘻嘻嘻#</div>
          <ul class="content">
            <li v-for="item in 1">
              <p>哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或哈哈哈哈哈哈</p>
              <div class="image">
                <img src="http://cdn.fengblog.xyz/4b5190965f9d3befd880d3a333e67c4a.jpg" alt="">
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
                <div class="label">234</div>
              </li>
              <li>
                <div class="icon">
                  <van-icon name="star-o" />
                </div>
                <div class="label">128</div>
              </li>
              <li>
                <div class="icon" @click="showPostBox = true">
                  <van-icon name="chat-o" />
                </div>
                <div class="label">175</div>
              </li>
            </ul>
          </div>
          <van-divider content-position="left">回答</van-divider>
          <comment-list/>
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

  export default {
    data(){
      return {
        isLoading: false,
        showPostBox: false
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
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/articleDetail';
</style>