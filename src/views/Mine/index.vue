<template>
  <div id="mine">
    <van-nav-bar
    fixed="true"
    title="标题"
    left-text="返回"
    right-text="按钮"
    left-arrow
    @click-left=""
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