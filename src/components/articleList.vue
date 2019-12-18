<template>
  <ul id="articleList">
    <li v-for="item in arrayList" @click="toArticleDetailPage(item.qid)">
      <div class="image">
        <!-- van图片 -->
        <van-image
          lazy-load
          fit="cover"
          :src="item.image">
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
  </ul>
</template>

<script>
  export default{
    data(){
      return{
        value: "",
        data: this.arrayList
      }
    },
    props: {
      arrayList: Array
    },
    computed:{
      itemWidth(){  
        return (138*0.5*(document.documentElement.clientWidth/375))
      },
      gutterWidth(){
        return (9*0.5*(document.documentElement.clientWidth/375))
      }
    },
    methods:{
      scroll(scrollData){
        console.log(scrollData)
      },
      switchCol(col){
        this.col = col
        console.log(this.col)
      },
      loadmore(index){
        this.data = this.data.concat(this.data)
      },
      /*查看文章详情*/
      toArticleDetailPage(i){
        this.$router.push({
          name: 'articleDetail',
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