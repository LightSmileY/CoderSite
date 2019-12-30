<template>
  <div id="search">
    <div class="searchbar">
      <div class="goback" @click="goBack">
        <van-icon name="arrow-left"/>
      </div>
      <div class="box">
        <van-search
          v-model="value"
          placeholder="搜索你想要的内容···"
          show-action
          shape="round"
          @search="onSearch"
        >
          <div slot="action" @click="onSearch(value)">搜索</div>
        </van-search>
      </div>
    </div>
    <!-- 搜索导航 -->
    <div class="navigation">
      <van-divider content-position="left">最近搜索</van-divider>
      <div class="newsearch">
        <ul>
          <li v-for="item in searchWords" @click="onSearch(item)">{{item}}</li>
        </ul>
      </div>
      <van-divider content-position="left">猜你喜欢</van-divider>
      <div class="youlike">
        <ul>
          <li v-for="item in youLike" @click="onSearch(item)">{{item}}</li>
        </ul>
      </div>
      <div class="hotSearch">
        <div class="title">热搜榜</div>
        <div class="hotSearchList">
          <ul>
            <li v-for="(item,key) in hotSeaches" @click="onSearch(item)">
              {{key+1}}. {{item}}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {searchWords, youLike, hotSeaches} from '@/assets/js/data'

  export default {
    data(){
      return {
        searchWords: [],
        youLike: [],
        hotSeaches: [],
        value: ''
      }
    },
    methods: {
      onSearch(i){
        this.$router.push({
          name:'searchDetail',
          query: { key: i }
        })
      },
      goBack(){
        this.$router.go(-1)
      }
    },
    created(){
      this.searchWords = searchWords
      this.youLike = youLike
      this.hotSeaches = hotSeaches
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/search';
</style>