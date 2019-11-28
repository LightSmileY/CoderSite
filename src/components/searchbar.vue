<template>
  <div id="searchbar">
    <div class="box">
      <van-search
        v-model="value"
        placeholder="搜索你想要的内容···"
        show-action
        shape="round"
        disabled
        @click="toSearchPage"
      >
        <div slot="action" @click="toSearchPage">搜索</div>
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
      toSearchPage(){
        this.$router.push({
          name:'search'
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/searchbar';
</style>
