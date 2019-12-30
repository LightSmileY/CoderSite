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
      <div class="btn">
        <van-button plain round hairline size="large" type="primary" @click="toLoginPage">去登录</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import {register} from '@/api/user'
  import {getTime} from '@/assets/js/pubfuncs'

  export default {
    data(){
      return {
        userInfo: {   //注册信息
          avatarId: "http://cdn.fengblog.xyz/3333.jpg",
          birthday: "",
          coverPicture: "http://cdn.fengblog.xyz/bg.jpg",
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
        this.userInfo.registerDate = getTime()
        register(this.userInfo)
        .then(res => {
          console.log(res)
          this.toMainPage()
          if(res.data.code==0){
            getUserById({uid: this.userInfo.uid})
            .then(res => {
              console.log(res)
              this.$store.dispatch('getUserInfo', res.data.userInfo)
              localStorage.setItem('myUserId', res.data.userInfo.userId)
            })
          }
        })
      },
      toLoginPage(){
        this.$router.push({
          name: "login"
        })
      },
      toMainPage(){
        this.$router.push({
          name: "main"
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/register';
</style>