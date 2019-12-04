<template>
  <ul id="userList">
    <li v-for="item in 15" @click="toUserProfile(123)">
      <div class="infos">
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
        <div class="name-message">
          <div class="name">
            浅笑半离兮
          </div>
          <div class="signiture">
            我推荐你用element-ui
          </div>
        </div>
      </div>
      <div class="attent">
        <van-button v-if="attent" type="primary" color="#47CE8E" size="mini">已关注</van-button>
        <van-button v-if="fans" type="primary" color="#47CE8E" size="mini">关注TA</van-button>
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
      attent: String,
      fans: String
    },
    methods: {
      // 去文章详情页
      toUserProfile(i){
        this.$router.push({
          name:'userProfile',
          query: { id: i }
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/userList';
</style>