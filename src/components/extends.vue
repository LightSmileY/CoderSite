<template>
  <ul id="extends">
    <li v-for="item in 8">
      <div class="image">
        <!-- van图片 -->
        <van-image
          lazy-load
          fit="cover"
          src="http://cdn.fengblog.xyz/d993d003d35738a239941882b80f8f83.jpg">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </div>
      <div class="label">扩展{{item}}</div>
    </li>
  </ul>
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
  @import '@/assets/scss/components/extends';
</style>