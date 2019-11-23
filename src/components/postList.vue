<template>
  <ul id="postList">
    <li v-for="item in 5">
      <!-- 左边图片 -->
      <div class="image">
        <!-- <img src="@/assets/icons/index.png" alt=""> -->
      </div>
      <div class="section">
        <!-- 文章首段 -->
        <div class="desc">哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或</div>
        <!-- 点赞、评论、收藏信息 -->
        <div class="operinfo">
          <div class="item">
            <div class="icon">
              <img src="@/assets/icons/index.png" alt="">
            </div>
            <div class="label">喜欢</div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="@/assets/icons/index.png" alt="">
            </div>
            <div class="label">收藏</div>
          </div>
          <div class="item">
            <div class="icon">
              <img src="@/assets/icons/index.png" alt="">
            </div>
            <div class="label">评论</div>
          </div>
        </div>
      </div>
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
  @import '@/assets/scss/components/postList';
</style>