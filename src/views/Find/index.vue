<template>
  <div id="find">
    <!-- 发现页头部 -->
    <div class="header">
      <div class="navs">
        <li :class="{'li-active': active === 1}" @click="changeList(1)">最新</li>
        <li :class="{'li-active': active === 2}" @click="changeList(2)">热门</li>
        <li :class="{'li-active': active === 3}" @click="changeList(3)">推荐</li>
        <li :class="{'li-active': active === 4}" @click="changeList(4)">关注</li>
        <li :class="{'li-active': active === 5}" @click="changeList(5)">问题</li>
      </div>
      <div class="search" @click="toSearchPage">
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
        isLoading: false,
        active: 1
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
      },
      changeList(i){
        this.active = i
      },
      toSearchPage(){
        this.$router.push({
          name: 'search'
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/find';
</style>