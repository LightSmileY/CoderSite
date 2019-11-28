<template>
  <ul id="articleList">
    <li v-for="item in 10" @click="toQuestionDetailPage(123)">
      <div class="image">
        <!-- van图片 -->
        <van-image
          lazy-load
          fit="cover"
          src="http://cdn.fengblog.xyz/makeup.jpg">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </div>
      <div class="title">
        基于TensorFlow的实时妆容迁移
      </div>
      <div class="author">
        Qianfeng Yuan
      </div>
      <!-- 点赞、评论、收藏信息 -->
      <div class="operinfo">
        <div class="item">
          <div class="icon">
            <img src="@/assets/icons/index.png" alt="">
          </div>
          <div class="label">35</div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="@/assets/icons/index.png" alt="">
          </div>
          <div class="label">12</div>
        </div>
        <div class="item">
          <div class="icon">
            <img src="@/assets/icons/index.png" alt="">
          </div>
          <div class="label">27</div>
        </div>
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
      
    },
    methods: {
      // 去文章详情页
      toQuestionDetailPage(i){
        this.$router.push({
          name:'questionDetail',
          query: { id: i }
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/articleList';
</style>