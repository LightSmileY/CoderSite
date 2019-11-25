<template>
  <div id="find">
    <!-- 发现页头部 -->
    <div class="header">
      <div class="navs">
        <li>推荐</li>
        <li class="li-active">关注</li>
        <li>最新</li>
        <li>热门</li>
        <li>问题</li>
      </div>
      <div class="search">
        <van-icon name="search" size="25px"/>
      </div>
    </div>
    <div class="container">
      <div class="articleList">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <article-list/>
        </van-pull-refresh>
      </div>
    </div>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar'
  import ArticleList from '@/components/articleList'

  export default {
    data(){
      return {
        isLoading: false
      }
    },
    components: {
      TabBar,
      ArticleList
    },
    methods: {
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
  @import '@/assets/scss/views/find';
</style>