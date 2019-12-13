<template>
  <div id="myProfile">
    <van-nav-bar
      fixed
      title="资料"
      left-arrow
      @click-left="goBack"
    />
    <div class="container">
      <van-cell-group>
        <van-field
          v-model="lightsmiley"
          clearable
          label="用户名"
          placeholder="lightsmiley"
          disabled
        />
        <van-field
          v-model="userInfo.nickname"
          label="昵称"
          placeholder="请输入昵称"
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
            :min-date="minDate"
            :show-toolbar="false"
            :item-height="35"
          />
        </van-dialog>
        
        <van-field
          v-model="userInfo.email"
          label="邮箱"
          placeholder="请输入邮箱"
        />
        <van-field
          v-model="signiture"
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
  import {getUserInfo, updateUserInfo} from '@/api/article'

  export default {
    data(){
      return {
        show: false,
        userInfo: {}
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
          
        })
      }
    },
    created(){
      getUserInfo({
          
      })
      .then(res => {

      })
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/myProfile';
</style>