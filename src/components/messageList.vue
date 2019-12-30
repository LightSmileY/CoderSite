<template>
  <ul id="messageList">
    <li v-for="item in arrayList">
      <div class="user">
        <div class="user-info">
          <div class="avatar">
            <!-- van图片 -->
            <van-image
              lazy-load
              fit="cover"
              :src="item.avatar">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
              <template v-slot:error>加载失败</template>
            </van-image>
          </div>
          <div class="name-time">
            <div class="name">
              {{item.nickname}}
            </div>
            <div class="time">
              {{item.time}}
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
          size="mini">{{item.attent?'已关注':'+关注'}}</van-button>
        </div>
      </div>
      <div class="message-type" v-if="item.messageType=='1'">
        点赞了你的文章
      </div>
      <div class="message-type" v-if="item.messageType=='2'">
        收藏了你的文章
      </div>
      <div class="message-type" v-if="item.messageType=='3'">
        评论了你的文章
      </div>
      <div class="message-type" v-if="item.messageType=='4'">
        回答了你的文章
      </div>
      <div class="detail">
        <div class="image">
          <!-- van图片 -->
          <van-image
            lazy-load
            fit="cover"
            :src="item.post.image">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
            <template v-slot:error>加载失败</template>
          </van-image>
        </div>
        <div class="desc">
          {{item.post.para}}
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
      arrayList: Array
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/messageList';
</style>
