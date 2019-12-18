<template>
  <div id="myCollections">
    <van-nav-bar
      fixed
      left-arrow
      @click-left="goBack"
      title="我的收藏"/>
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
  import {getFollowsArticles} from '@/api/article'

  export default {
    data(){
      return {
        isLoading: false,
        articleList: []
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
        getFollowsArticles({
          uid: this.$store.state.userInfo.userId
        })
        .then(res => {
          this.questionList = res.data.questionList
          this.$toast('刷新成功')
          this.isLoading = false
        })
      }
    },
    created(){
      getFollowsArticles({
        uid: this.$store.state.userInfo.userId
      })
      .then(res => {
        console.log(res)
        this.questionList = res.data.questionList
      })
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/myCollections';
</style>