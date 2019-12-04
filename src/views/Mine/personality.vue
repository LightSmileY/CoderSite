<template>
  <div id="personality">
    <van-nav-bar
      fixed
      title="个性化配置"
      left-arrow
      @click-left="goBack"
    />
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
  @import '@/assets/scss/views/personality';
</style>