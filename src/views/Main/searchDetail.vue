<template>
  <div id="searchDetail">
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
    <div class="navs">
      <ul>
        <li>
          <div class="label">综合</div>
          <van-icon name="arrow-down" />
        </li>
        <li>
          <div class="label">最新</div>
          <van-icon name="arrow-down" />
        </li>
        <li>
          <div class="label">热门</div>
          <van-icon name="arrow-down" />
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="articleList">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <article-list/>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
  import ArticleList from '@/components/articleList'

  export default {
    data(){
      return {
        isLoading: false,
        value: ""
      }
    },
    components: {
      ArticleList
    },
    methods: {
      onSearch(i){
        
      },
      goBack(){
        this.$router.go(-1)
      },
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功')
          this.isLoading = false
        }, 500)
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/searchDetail';
</style>