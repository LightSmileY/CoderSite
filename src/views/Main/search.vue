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
          <div slot="action" @click="onSearch">搜索</div>
        </van-search>
      </div>
    </div>
    <!-- 搜索导航 -->
    <div class="navigation">
      <van-divider content-position="left">最近搜索</van-divider>
      <div class="newsearch">
        <ul>
          <li v-for="item in 9">TensorFlow</li>
        </ul>
      </div>
      <van-divider content-position="left">猜你喜欢</van-divider>
      <div class="youlike">
        <ul>
          <li v-for="item in 9">flex布局</li>
        </ul>
      </div>
      <div class="hotSearch">
        <div class="title">热搜榜</div>
        <div class="hotSearchList">
          <ul>
            <li v-for="item in 10">
              {{item}}. 热门框架Vue开发Web APP
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        value: ""
      }
    },
    methods: {
      onSearch(){

      },
      goBack(){
        this.$router.go(-1)
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/search';
</style>