<template>
  <div id="articleDetail">
    <van-nav-bar
      fixed="true"
      left-arrow
      @click-left="goBack"
      title="详情"/>
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
          <ul class="content">
            <li v-for="item in 1">
              <p>哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或哈哈哈哈哈哈</p>
              <div class="image">
                <img src="http://cdn.fengblog.xyz/makeup.jpg" alt="">
              </div>
            </li>
          </ul>
          <div class="operinfo">
            <!-- 点赞、评论、收藏信息 -->
            <ul>
              <li>
                <div class="icon">
                  <img src="@/assets/icons/index.png" alt="">
                </div>
                <div class="label">234</div>
              </li>
              <li>
                <div class="icon">
                  <img src="@/assets/icons/index.png" alt="">
                </div>
                <div class="label">128</div>
              </li>
              <li>
                <div class="icon">
                  <img src="@/assets/icons/index.png" alt="">
                </div>
                <div class="label">175</div>
              </li>
            </ul>
          </div>
          <van-divider content-position="left">评论</van-divider>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar'

  export default {
    data(){
      return {
        isLoading: false
      }
    },
    components: {
      TabBar
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