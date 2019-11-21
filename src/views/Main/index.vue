<template>
  <div id="main">
    main
    <van-button type="default">默认按钮</van-button>
<van-button type="primary">主要按钮</van-button>
<van-button type="info">信息按钮</van-button>
<van-button type="warning">警告按钮</van-button>
<van-button type="danger">危险按钮</van-button>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar'

  export default {
    data(){
      return {

      }
    },
    components: {
      TabBar
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/main';
</style>