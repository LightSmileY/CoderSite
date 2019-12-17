<template>
  <div id="find">
    <!-- 发现页头部 -->
    <div class="header">
      <div class="navs">
        <li :class="{'li-active': active === 1}" @click="changeList(1)">最新</li>
        <li :class="{'li-active': active === 2}" @click="changeList(2)">热门</li>
        <li :class="{'li-active': active === 3}" @click="changeList(3)">推荐</li>
        <li :class="{'li-active': active === 4}" @click="changeList(4)">关注</li>
        <li :class="{'li-active': active === 5}" @click="changeList(5)">问题</li>
      </div>
      <div class="search" @click="toSearchPage">
        <van-icon name="search" size="25px"/>
      </div>
    </div>
    <div class="container">
      <!-- 最新 -->
      <div class="articleList" v-if="active === 1">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <article-list :arrayList="dataList.newArticles"/>
        </van-pull-refresh>
      </div>
      <div class="articleList" v-if="active === 2">
      <!-- 热门 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <article-list :arrayList="dataList.hotArticles"/>
        </van-pull-refresh>
      </div>
      <div class="articleList" v-if="active === 3">
      <!-- 推荐 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <article-list :arrayList="dataList.recommendArticles"/>
        </van-pull-refresh>
      </div>
      <div class="articleList" v-if="active === 4">
      <!-- 关注 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <article-list :arrayList="dataList.followsArticles"/>
        </van-pull-refresh>
      </div>
      <div class="articleList" v-if="active === 5">
      <!-- 问题 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <question-list :arrayList="dataList.newQuestions"/>
        </van-pull-refresh>
      </div>
    </div>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar'
  import ArticleList from '@/components/articleList'
  import QuestionList from '@/components/questionList'
  import {
    getNewArticles,
    getHotArticles,
    getRecommendArticles,
    getFollowsArticles
  } from '@/api/article'
  import {
    getNewQuestions,
  } from '@/api/question'

  export default {
    data(){
      return {
        isLoading: false,
        active: 1,
        pageIndex: {        //分页参数
          newArticles: 0,
          hotArticles: 0,
          recommendArticles: 0,
          followsArticles: 0,
          newQuestions: 0
        },
        dataList: {        //数据列表
          newArticles: [],
          hotArticles: [],
          recommendArticles: [],
          followsArticles: [],
          newQuestions: []
        }
      }
    },
    components: {
      TabBar,
      ArticleList,
      QuestionList
    },
    methods: {
      toSearchPage(){
        this.$router.push({
          name: 'search'
        })
      },
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功')
          this.isLoading = false
        }, 500)
      },
      changeList(i){
        this.active = i
        switch(i){
          case 1:
            this.getNew()
            break;
          case 2:
            this.getHot()
            break;
          case 3:
            this.getRecommend()
            break;
          case 4:
            this.getFallows()
            break;
          case 5:
            this.getQuestion()
        }
      },
      getNew(){
        getNewArticles({page: this.pageIndex.newArticles})
        .then(res => {
          console.log(res)
          this.dataList.newArticles = res.data.articleList
        })
        .catch(err => {
          console.log(err)
        })
      },
      getHot(){
        getHotArticles({page: this.pageIndex.hotArticles})
        .then(res => {
          console.log(res)
          this.dataList.hotArticles = res.data.articleList
        })
        .catch(err => {
          console.log(err)
        })
      },
      getRecommend(){
        getRecommendArticles({page: this.pageIndex.recommendArticles})
        .then(res => {
          console.log(res)
          this.dataList.recommendArticles = res.data.articleList
        })
        .catch(err => {
          console.log(err)
        })
      },
      getFallows(){
        getFollowsArticles({
          uid: 'lightsmiley',
          page: this.pageIndex.followsArticles
        })
        .then(res => {
          console.log(res)
          this.dataList.followsArticles = res.data.articleList
        })
        .catch(err => {
          console.log(err)
        })
      },
      getQuestion(){
        getNewQuestions({page: this.pageIndex.newQuestions})
        .then(res => {
          console.log(res)
          this.dataList.newQuestions = res.data.questionList
        })
        .catch(err => {
          console.log(err)
        })
      }
    },
    created(){
      this.getNew()
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/find';
</style>