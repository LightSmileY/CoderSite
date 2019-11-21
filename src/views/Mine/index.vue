<template>
  <div id="mine">
    mine
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
  @import '@/assets/scss/views/mine';
</style>