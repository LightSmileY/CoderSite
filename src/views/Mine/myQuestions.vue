<template>
  <div id="myQuestions">
    <van-nav-bar
      fixed
      left-arrow
      @click-left="goBack"
      title="我的问题"/>
    <div class="container">
      <div class="articles">
        <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <article-list :arrayList="questionList"/>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
  import ArticleList from '@/components/articleList'
  import {getUserNewestQuestion} from '@/api/question'

  export default {
    data(){
      return {
        isLoading: false,
        questionList: [],
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
        getUserNewestQuestion({
          page: 0,
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
      getUserNewestQuestion({
        page: this.pageIndex,
        uid: this.$store.state.userInfo.userId
      })
      .then(res => {
        console.log(res)
        this.questionList = res.data.questionList
        this.pageIndex ++
      })
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/myQuestions';
</style>