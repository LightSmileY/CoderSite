<template>
  <ul id="messageList">
    <li v-for="item in 5">
      <div class="user">
        <div class="user-info">
          <div class="avatar">
            <!-- van图片 -->
            <van-image
              lazy-load
              fit="cover"
              src="http://cdn.fengblog.xyz/avatar.jpg">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
              <template v-slot:error>加载失败</template>
            </van-image>
          </div>
          <div class="name-time">
            <div class="name">
              浅笑半离兮
            </div>
            <div class="time">
              2019-11-23 21:56:30
            </div>
          </div>
        </div>
        <div class="attent">
          <van-button 
          plain 
          hairline 
          round
          color="#939393"
          type="default" 
          size="mini">+关注</van-button>
        </div>
      </div>
      <div class="message-type">
        收藏了你的文章
      </div>
      <div class="detail">
        <div class="image">
          <!-- van图片 -->
          <van-image
            lazy-load
            fit="cover"
            src="http://cdn.fengblog.xyz/makeup.jpg">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
            <template v-slot:error>加载失败</template>
          </van-image>
        </div>
        <div class="desc">
          哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default{
    data(){
      return{
        
      }
    },
    props: {
      
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/messageList';
</style>
