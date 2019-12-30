<template>
  <div id="message">
    <van-nav-bar
      fixed
      :z-index="1000"
      title="消息"
    />
    <div id="main">
      <!-- 标签页 -->
      <van-tabs 
      swipeable
      title-active-color="#90C2EF">
        <van-tab 
        title="最新"
        >
        <!-- 下拉刷新 -->
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="message-list">
              <message-list :arrayList="newMessage"/>
            </div>
          </van-pull-refresh>
        </van-tab>
        <van-tab 
        title="私聊"
        >
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="chat-list">
              <chat-list :arrayList="myChatList"/>
            </div>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar'
  import Header from '@/components/header'
  import MessageList from '@/components/messageList'
  import AnswerList from '@/components/answerList'
  import ChatList from '@/components/chatList'
  import {getUserInfo} from '@/api/user'
  import {getNewMessage, getMyChatList} from '@/api/other'

  export default {
    data(){
      return {
        isLoading: false,
        newMessage: [],
        myChatList: []
      }
    },
    components: {
      TabBar,
      Header,
      MessageList,
      AnswerList,
      ChatList
    },
    methods: {
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功')
          this.isLoading = false
        }, 500)
      }
    },
    created(){
      getNewMessage({
        time: '2019',
        uid: this.$store.state.userInfo.userId
      })
      .then(res => {
        console.log(res)
        this.newMessage = res.data.messages
      })

      getMyChatList({
        uid: this.$store.state.userInfo.userId
      })
      .then(res => {
        console.log(res)
        this.myChatList = res.data.chatList
      })
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/message';
</style>