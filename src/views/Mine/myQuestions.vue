<template>
  <div id="myQuestions">
    <van-nav-bar
      fixed="true"
      left-arrow
      @click-left="goBack"
      title="我的问题"/>
    <div class="container">
      <div class="articles">
        <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <article-list/>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
  import ArticleList from '@/components/articleList'

  export default {
    data(){
      return {
        isLoading: false
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
        setTimeout(() => {
          this.$toast('刷新成功')
          this.isLoading = false
        }, 500)
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/myQuestions';
</style>