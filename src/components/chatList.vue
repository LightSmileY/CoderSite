<template>
  <ul id="chatList">
    <li v-for="item in 5">
      <div class="infos">
        <div class="avatar">
          <!-- van图片 -->
          <van-image
            lazy-load
            fit="cover"
            src="http://cdn.fengblog.xyz/avatar.jpg">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
            <template v-slot:error>加载失败</template>
          </van-image>
        </div>
        <div class="name-message">
          <div class="name">
            浅笑半离兮
          </div>
          <div class="message">
            我推荐你用element-ui
          </div>
        </div>
      </div>
      <div class="tag">
        <van-tag round type="danger">5</van-tag>
      </div>
    </li>
  </ul>
</template>

<script>
  export default{
    data(){
      return{
        value: ""
      }
    },
    props: {
      
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/chatList';
</style>