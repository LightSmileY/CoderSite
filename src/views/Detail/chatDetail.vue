<template>
  <div id="chatDetail">
    <van-nav-bar
      :fixed="true"
      left-arrow
      @click-left="goBack"
      title="私聊"/>
    <div class="container">
      <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <!-- 消息列表 -->
        <ul class="messageList">
          <li class="message" v-for="item in chatList">
            <div class="you" v-if="item.uid != $store.state.userInfo.userId">
              <div class="avatar">
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
              <div class="message-content">
                {{item.message}}
              </div>
              <!-- <div class="time">
                {{item.time.slice(0.10)}}
              </div> -->
            </div>
            <div class="me" v-if="item.uid == $store.state.userInfo.userId">
              <div class="avatar">
                <van-image
                  lazy-load
                  fit="cover"
                  :src="$store.state.userInfo.avatarId">
                  <template v-slot:loading>
                    <van-loading type="spinner" size="20" />
                  </template>
                  <template v-slot:error>加载失败</template>
                </van-image>
              </div>
              <div class="message-content">
                {{item.message}}
              </div>
            </div>
          </li>
        </ul>
      </van-pull-refresh>
    </div>
    <div class="post">
      <van-field
        v-model="message"
        center
        rows="1"
        autosize
        type="textarea"
        placeholder="请输入···"
      >
        <van-button slot="button" @click="postChat" size="small" type="primary">发送</van-button>
      </van-field>
    </div>
  </div>
</template>

<script>
  import {uuid, getTime} from '@/assets/js/pubfuncs'
  import {getMyChatListWithUser, addChat} from '@/api/other'

  export default {
    data(){
      return {
        isLoading: false,
        chatList: [],
        message: ''
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
      },
      getMyChat(){
        getMyChatListWithUser({
          uid: this.$store.state.userInfo.userId,
          objId: this.$route.query.id
        })
        .then(res => {
          console.log(res)
          this.chatList = res.data.chatList
        })
      },
      postChat(){
        addChat({
          id: uuid(),
          message: this.message,
          objId: this.$route.query.id,
          time: new Date(),
          uid: this.$store.state.userInfo.userId
        })
        .then(res => {
          console.log(res)
          this.message = ''
          this.getMyChat()
        })
      }
    },
    created(){
      this.getMyChat()
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/chatDetail';
</style>