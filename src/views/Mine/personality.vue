<template>
  <div id="personality">
    
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