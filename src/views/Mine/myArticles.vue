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
          <article-list/>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
  import ArticleList from '@/components/articleList'
  import {getArticlesByUserId} from '@/api/article'

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
        getArticlesByUserId({

        })
        .then(res => {
          this.$toast('刷新成功')
          this.isLoading = false
        })
      }
    },
    created(){
      getArticlesByUserId({

      })
      .then(res => {

      })
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/myArticles';
</style>