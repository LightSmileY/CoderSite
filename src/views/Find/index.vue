<template>
  <div id="find">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      
    </van-pull-refresh>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar'

  export default {
    data(){
      return {
        isLoading: false
      }
    },
    components: {
      TabBar
    },
    methods: {
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
  @import '@/assets/scss/views/find';
</style>