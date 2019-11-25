<template>
  <div id="mine">
    <van-nav-bar
    fixed="true"
    title="个人中心"
    right-text="更多"
    @click-right=""
  />
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar'
  import Header from '@/components/header'

  export default {
    data(){
      return {

      }
    },
    components: {
      TabBar,
      Header
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/mine';
</style>