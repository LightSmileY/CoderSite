<template>
  <div id="chatDetail">
    <van-nav-bar
      fixed="true"
      left-arrow
      @click-left="goBack"
      title="私聊"/>
    <div class="container">
      <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <!-- 消息列表 -->
        <ul class="messageList">
          <li class="message" v-for="item in 5">
            <div class="you">
              <div class="avatar">
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
              <div class="message-content">
                哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或嘻嘻嘻嘻嘻嘻嘻嘻寻寻
              </div>
              <!-- <div class="time">
                14:45
              </div> -->
            </div>
            <div class="me">
              <div class="avatar">
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
              <div class="message-content">
                嘻嘻嘻嘻嘻嘻嘻嘻寻寻
              </div>
              <!-- <div class="time">
                14:45
              </div> -->
            </div>
          </li>
        </ul>
      </van-pull-refresh>
    </div>
    <div class="post">
      <van-field
        v-model="sms"
        center
        rows="1"
        autosize
        type="textarea"
        placeholder="请输入···"
      >
        <van-button slot="button" size="small" type="primary">发送</van-button>
      </van-field>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        isLoading: false
      }
    },
    methods: {
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
  @import '@/assets/scss/views/chatDetail';
</style>