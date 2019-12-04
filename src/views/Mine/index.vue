<template>
  <div id="mine">
    <van-nav-bar
      fixed="true"
      title="我的"
      right-text="资料"
      @click-right="viewProfile"/>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="container">
        <div class="banner">
          <!-- van图片 -->
          <van-image
            lazy-load
            fit="cover"
            src="http://cdn.fengblog.xyz/makeup.jpg">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
            <template v-slot:error>加载失败</template>
          </van-image>
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
        </div>
        <div class="user">
          <div class="user-name">
            浅笑半离兮
          </div>
          <div class="user-profile">
            不纠结，不抱怨，不后悔，不解释~
          </div>
        </div>
        <ul class="infos">
          <router-link to="/myArticles">
          <li>
            <div class="count">35</div>
            <div class="label">文章</div>
          </li>
          </router-link>
          <router-link to="/myQuestions">
          <li>
            <div class="count">18</div>
            <div class="label">问题</div>
          </li>
          </router-link>
          <router-link to="/myAttents">
          <li>
            <div class="count">13</div>
            <div class="label">关注</div>
          </li>
          </router-link>
          <router-link to="/myFanses">
          <li>
            <div class="count">234</div>
            <div class="label">粉丝</div>
          </li>
          </router-link>
        </ul>
        <ul class="about">
          <li>
            <img src="@/assets/icons/index.png" alt="">
            <div class="title">我的喜欢</div>
            <van-icon name="arrow" />
          </li>
          <li>
            <img src="@/assets/icons/index.png" alt="">
            <div class="title">我的收藏</div>
            <van-icon name="arrow" />
          </li>
          <li>
            <img src="@/assets/icons/index.png" alt="">
            <div class="title">我的回答</div>
            <van-icon name="arrow" />
          </li>
          <li>
            <img src="@/assets/icons/index.png" alt="">
            <div class="title">安全中心</div>
            <van-icon name="arrow" />
          </li>
        </ul>
        <div class="go-out">
          <van-button color="#FF9D9D" plain hairline size="large" type="danger">退出登录</van-button>
        </div>
      </div>
    </van-pull-refresh>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar'
  import Header from '@/components/header'

  export default {
    data(){
      return {
        isLoading: false
      }
    },
    components: {
      TabBar,
      Header
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功')
          this.isLoading = false
        }, 500)
      },
      viewProfile(){
        this.$router.push({
          name: "myProfile"
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/mine';
</style>