<template>
  <div id="myArticles">
    <van-nav-bar
      fixed
      left-arrow
      @click-left="goBack"
      title="我的文章"/>
    <div class="container">
      <div class="articles">
        <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <article-list :arrayList="articleList"/>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
  import ArticleList from '@/components/articleList'
  import {getUserNewestPM} from '@/api/article'

  export default {
    data(){
      return {
        isLoading: false,
        articleList: [],
        pageIndex: 0
      }
    },
    components: {
      ArticleList
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      onRefresh() {
        getUserNewestPM({
          page: 0,
          uid: this.$store.state.userInfo.userId
        })
        .then(res => {
          this.articleList = res.data.articleList
          this.$toast('刷新成功')
          this.isLoading = false
        })
      }
    },
    created(){
      getUserNewestPM({
        page: this.pageIndex,
        uid: this.$store.state.userInfo.userId
      })
      .then(res => {
        console.log(res)
        this.articleList = res.data.articleList
        this.pageIndex ++
      })
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/myArticles';
</style>