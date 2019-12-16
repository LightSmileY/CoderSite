<template>
  <div id="login">
    <div class="container">
      <van-cell-group>
        <van-field
          v-model="userInfo.uid"
          required
          clearable
          label="用户名"
          placeholder="请输入用户名"
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
        <van-button plain round hairline size="large" type="primary" @click="signin">登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {login, getUserById} from '@/api/user'

  export default {
    data(){
      return {
        userInfo: {
          uid: '',
          password: ''
        }
      }
    },
    methods: {
      signin(){
        login(this.userInfo)
        .then(res => {
          console.log(res)
          if(res.data.code==0){
            getUserById({uid: this.userInfo.uid})
            .then(res => {
              console.log(res)
              this.$store.dispatch('getUserInfo', res.data.userInfo)
              localStorage.setItem('myUserId', res.data.userInfo.userId)
            })
          }
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/login';
</style>