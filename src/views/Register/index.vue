<template>
  <div id="register">
    <div class="container">
      <van-cell-group>
        <van-field
          v-model="userInfo.userId"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
        />
        <van-field
          v-model="userInfo.nickname"
          required
          clearable
          label="昵称"
          placeholder="请输入昵称"
        />
        <van-field
          v-model="userInfo.password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
      <div class="btn">
        <van-button plain round hairline size="large" type="primary" @click="signup">注册</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {register} from '@/api/user'

  export default {
    data(){
      return {
        userInfo: {   //注册信息
          avatarId: "",
          birthday: "",
          coverPicture: "",
          labels: [],
          mailbox: "",
          nickname: "",
          password: "",
          registerDate: "",
          sex: true,
          signature: "",
          userId: ""
        }
      }
    },
    methods: {
      signup(){
        register(this.userInfo)
        .then(res => {
          console.log(res)
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/register';
</style>