<template>
  <div id="searchbar">
    <div class="box">
      <van-search
        v-model="value"
        placeholder="搜索你想要的内容···"
        show-action
        shape="round"
        @search="onSearch"
      >
        <div slot="action" @click="onSearch">搜索</div>
      </van-search>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        value: ""
      }
    },
    methods: {
      onSearch(){
        
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/searchbar';
</style>
