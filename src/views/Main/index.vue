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
          <qpost-list :arrayList="postList.newQuestions"/>
        <div class="more">加载更多···</div>
      </div>
      <div class="youlike">
        <div class="title">猜你喜欢</div>
          <apost-list/>
        <div class="more">加载更多···</div>
      </div>
      <div class="hot">
        <div class="title">热门文章</div>
          <apost-list/>
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
  import ApostList from '@/components/apostList'
  import QpostList from '@/components/qpostList'
  import {getHotArticles, getRecommendArticles} from '@/api/article'
  import {getNewQuestions} from '@/api/question'
  import {getUserById} from '@/api/user'

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
        pageIndex: {        //分页控制
          newQuestions: 0,
          hotArticles: 0,
          recommendArticles: 0
        },
        postList: {        //数据列表
          newQuestions: [],
          hotArticles: [],
          recommendArticles: []
        }
      }
    },
    components: {
      TabBar,
      SearchBar,
      Extends,
      ApostList,
      QpostList
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功')
          this.isLoading = false
        }, 500)
      },
      /*获取该页面所有数据*/
      getAllData(){
        this.getNew()
        this.getYouLike()
        this.getHot()
      },
      /*获取数据*/
      getNew(){
        getNewQuestions({page: this.pageIndex.newQuestions})
        .then(res => {
          console.log(res)
          this.postList.newQuestions = res.data.questionList
        })
      },
      getYouLike(){
        // getRecommendArticles({page: this.pageIndex.recommendArticles})
        // .then(res => {
          
        // })
      },
      getHot(){
        // getHotArticles({page: this.pageIndex.hotArticles})
        // .then(res => {
          
        // })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/main';
</style>