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
      <div class="hot">
        <div class="title">猜你喜欢</div>
        <post-list/>
      </div>
      <div class="youlike">
        <div class="title">热门文章</div>
        <post-list/>
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

  export default {
    data(){
      return {
        images: [
          "http://tva1.sinaimg.cn/large/0060lm7Tly1g64rb3s5djj32f80rs7gw.jpg",
          "http://tva1.sinaimg.cn/large/0060lm7Tly1g64rb3s5djj32f80rs7gw.jpg",
          "http://tva1.sinaimg.cn/large/0060lm7Tly1g64rb3s5djj32f80rs7gw.jpg"
        ],
        isLoading: false
      }
    },
    components: {
      TabBar,
      SearchBar,
      Extends,
      PostList
    },
    methods: {
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
  @import '@/assets/scss/views/main';
</style>