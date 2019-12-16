<template>
  <ul id="articleList">
    <waterfall :col='2' :gutterWidth="gutterWidth">
      <template>
         <li v-for="item in 12" @click="toQuestionDetailPage(i)">
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
                <van-icon name="like-o" />
              </div>
              <div class="label">35</div>
            </div>
            <div class="item">
              <div class="icon">
                <van-icon name="star-o" />
              </div>
              <div class="label">12</div>
            </div>
            <div class="item">
              <div class="icon">
                <van-icon name="chat-o" />
              </div>
              <div class="label">27</div>
            </div>
          </div>
        </li>
      </template>
    </waterfall>
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
      /*查看问题详情*/
      toQuestionDetailPage(i){
        this.$router.push({
          name: 'questionDetail',
          query: {
            id: i
          }
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/articleList';
</style>