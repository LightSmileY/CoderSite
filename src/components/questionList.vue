<template>
  <ul id="articleList">
    <waterfall :col='2' :gutterWidth="gutterWidth">
      <template>
         <li v-for="item in arrayList" @click="toQuestionDetailPage(i)">
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
            {{item.title}}
          </div>
          <div class="author">
            {{item.userNickname}}
          </div>
          <!-- 点赞、评论、收藏信息 -->
          <div class="operinfo">
            <div class="item">
              <div class="icon">
                <van-icon name="like-o" />
              </div>
              <div class="label">{{item.likeCount}}</div>
            </div>
            <div class="item">
              <div class="icon">
                <van-icon name="star-o" />
              </div>
              <div class="label">{{item.collectCount}}</div>
            </div>
            <div class="item">
              <div class="icon">
                <van-icon name="chat-o" />
              </div>
              <div class="label">{{item.answerCount}}</div>
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
      arrayList: Array
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