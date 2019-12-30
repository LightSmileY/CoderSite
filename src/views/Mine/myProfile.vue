<template>
  <div id="myProfile">
    <van-nav-bar
      fixed
      title="资料"
      left-arrow
      @click-left="goBack"
      right-text="提交"
      @click-right="updateUser"
    />
    <div class="container">
      <van-cell-group>
        <van-field
          v-model="lightsmiley"
          clearable
          label="用户名"
          :placeholder="userInfo.userId"
          disabled
        />
        <van-field
          v-model="userInfo.nickname"
          label="昵称"
          placeholder="请输入昵称"
        />
        <van-field
          v-model="sex"
          label="性别"
          placeholder="男"
        />
        <van-field
          v-model="userInfo.birthday"
          clearable
          label="生日"
          right-icon="underway-o"
          @click="showDataPicer"
          placeholder="请选择生日"
        />
        <!-- 选择时间 -->
        <van-dialog
          v-model="show"
          :close-on-popstate="true"
          :close-on-click-overlay="true"
        >
          <van-datetime-picker
            v-model="userInfo.birthday"
            type="date"
            :show-toolbar="false"
            :item-height="35"
          />
        </van-dialog>
        <van-field
          v-model="userInfo.mailbox"
          label="邮箱"
          placeholder="请输入邮箱"
        />
        <van-field
          v-model="userInfo.signature"
          clearable
          label="个性签名"
          placeholder="请输入个性签名"
        />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  import AnswerList from '@/components/answerList'
  import {getUserById, updateUserInfo} from '@/api/user'

  export default {
    data(){
      return {
        show: false,
        userInfo: {},
        sex: '男'
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      showDataPicer(){
        this.show = true
      },
      updateUser(){
        updateUserInfo(this.userInfo)
        .then(res => {
          console.log(res)
        })
      }
    },
    created(){
      getUserById({
        uid: this.$store.state.userInfo.userId
      })
      .then(res => {
        console.log(res)
        this.userInfo = res.data.userInfo
        this.userInfo.birthday = '1998-08-22'
      })
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/myProfile';
</style>