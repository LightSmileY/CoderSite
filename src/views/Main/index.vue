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
      init: function () {
       if(typeof(WebSocket) === "undefined"){
         alert("您的浏览器不支持socket")
           }else{
             this.socket = new WebSocket(this.path) // 实例化socket
             this.socket.onopen = this.open // 监听socket连接
             this.socket.onerror = this.error // 监听socket错误信息
             this.socket.onmessage = this.getMessage // 监听socket消息
             }
        },
      open: function () {
        console.log("socket连接成功")
      },
      error: function () {
         console.log("连接错误")
      },
      getMessage: function (msg) {
         console.log(msg.data)
      },
      send: function () {
        this.socket.send(params)
      },
      close: function () {
        console.log("socket已经关闭")
      }
    },
    destroyed () {  // 销毁监听
      this.socket.onclose = this.close
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/main';
</style>