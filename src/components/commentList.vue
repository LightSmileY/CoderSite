<template>
  <div id="commentList">
    <li v-for="item in 5">
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
      <div class="main">
        <div class="name">浅笑半离兮</div>
        <div class="content">
          哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或
        </div>
        <div class="info">
          <div class="info-time">35分钟前</div>
          <div class="info-reply">回复</div>
        </div>
      </div>
    </li>
  </div>
</template>

<script>

  export default {
    data(){
      return {

      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/commentList';
</style>