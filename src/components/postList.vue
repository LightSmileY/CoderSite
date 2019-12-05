<template>
  <ul id="postList">
    <li class="postList-item" v-for="item in 5" @click="toArticleDetailPage(123)">
      <!-- 左边图片 -->
      <div class="image">
        <!-- van图片 -->
        <van-image
          lazy-load
          fit="cover"
          src="http://cdn.fengblog.xyz/4b5190965f9d3befd880d3a333e67c4a.jpg">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </div>
      <div class="section">
        <!-- 文章首段 -->
        <div class="desc">哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或</div>
        <!-- 点赞、评论、收藏信息 -->
        <ul class="operinfo">
          <li class="operinfo-item">
            <div class="icon">
              <van-icon name="like-o" />
            </div>
            <div class="label">234</div>
          </li>
          <li class="operinfo-item">
            <div class="icon">
              <van-icon name="star-o" />
            </div>
            <div class="label">335</div>
          </li>
          <li class="operinfo-item">
            <div class="icon">
              <van-icon name="chat-o" />
            </div>
            <div class="label">124</div>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    data(){
      return {

      }
    },
    methods: {
      // 去文章详情页
      toArticleDetailPage(i){
        this.$router.push({
          name:'articleDetail',
          query: { id: i }
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/postList';
</style>