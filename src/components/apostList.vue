<template>
  <ul id="postList">
    <li class="postList-item" v-for="item in arrayList" @click="toArticleDetailPage(item.aid)">
      <!-- 左边图片 -->
      <div class="image">
        <!-- van图片 -->
        <van-image
          lazy-load
          fit="cover"
          :src="item.content.image">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </div>
      <div class="section">
        <!-- 文章内容 -->
        <div class="desc">{{item.content.para}}</div>
        <!-- 点赞、评论、收藏信息 -->
        <ul class="operinfo">
          <li class="operinfo-item">
            <div class="icon">
              <van-icon name="like-o" />
            </div>
            <div class="label">{{item.likeCount}}</div>
          </li>
          <li class="operinfo-item">
            <div class="icon">
              <van-icon name="star-o" />
            </div>
            <div class="label">{{item.collectCount}}</div>
          </li>
          <li class="operinfo-item">
            <div class="icon">
              <van-icon name="chat-o" />
            </div>
            <div class="label">{{item.commentCount}}</div>
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
    props: {
      arrayList: Array
    },
    methods: {
      // 去文章详情页
      toArticleDetailPage(i){
        this.$router.push({
          name:'articleDetail',
          query: { id: i }
        })
      }
    },
    mounted(){
      console.log(this.arrayList)
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/postList';
</style>