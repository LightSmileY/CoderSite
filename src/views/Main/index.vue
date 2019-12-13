<template>
  <div id="main">
    <search-bar/>
    <van-pull-refresh class="container" v-model="isLoading" @refresh="onRefresh">
      <div class="swiper">
        <van-swipe style="height: 130px;" :autoplay="3000">
          <van-swipe-item v-for="(image, index) in images" :key="index">
            <van-image :src="image" height="100%" fit="cover"/>
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="extends">
        <Extends/>
      </div>
      <div class="new">
        <div class="title">最新问题</div>
          <post-list/>
        <div class="more">加载更多···</div>
      </div>
      <div class="youlike">
        <div class="title">猜你喜欢</div>
          <post-list/>
        <div class="more">加载更多···</div>
      </div>
      <div class="hot">
        <div class="title">热门文章</div>
          <post-list/>
        <div class="more">加载更多···</div>
      </div>
    </van-pull-refresh>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar'
  import SearchBar from '@/components/searchbar'
  import Extends from '@/components/extends'
  import PostList from '@/components/postList'
  import {getHotArticles, getRecommendArticles} from '@/api/article'
  import {getNewQuestions} from '@/api/question'

  export default {
    data(){
      return {
        images: [
          "http://cdn.fengblog.xyz/banner1.png",
          "http://cdn.fengblog.xyz/banner2.jpg",
          "http://cdn.fengblog.xyz/banner3.png",
          "http://cdn.fengblog.xyz/banner4.png"
        ],
        isLoading: false,
        path: 'ws://10.100.238.63:8080/alicluster/server',
        socket: null
      }
    },
    components: {
      TabBar,
      SearchBar,
      Extends,
      PostList
    },
    mounted(){
      this.init()
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功')
          this.isLoading = false
        }, 500)
      },
      //获取该页面所有数据
      getData(){
        this.getNew()
        this.getYouLike()
        this.getHot()
      },
      //获取最新问题
      getNew(){
        getNewQuestions()
        .then(res => {

        })
      },
      //获取猜你喜欢
      getYouLike(){
        getRecommendArticles()
        .then(res => {
          
        })
      },
      //获取热门文章
      getHot(){
        getHotArticles()
        .then(res => {
          
        })
      },
      // 加载更多最新问题
      loadMoreNewQuestions(){
        this.getNew()
      },
      // 加载更多猜你喜欢
      loadMoreYouLikeArticles(){
        this.getYouLike()
      },
      // 加载更热门文章
      loadMoreHotArticles(){
        this.getHot()
      }
    },
    created(){
      this.getData() //获取该页面所有数据
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/main';
</style>