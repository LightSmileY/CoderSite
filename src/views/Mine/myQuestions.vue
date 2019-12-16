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
  import {getQuestionsByUserId} from '@/api/question'

  export default {
    data(){
      return {
        isLoading: false,
        questionList: []
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
        getQuestionsByUserId({

        })
        .then(res => {
          this.$toast('刷新成功')
          this.isLoading = false
        })
      }
    },
    created(){
      getQuestionsByUserId({
          
      })
      .then(res => {

      })
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/myQuestions';
</style>