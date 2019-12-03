<template>
  <div id="myArticles">
    <van-nav-bar
      fixed="true"
      left-arrow
      @click-left="goBack"
      title="我的文章"/>
    <div class="container">
      <div class="articles">
        <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        loading: false
      }
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
  @import '@/assets/scss/views/myArticles';
</style>