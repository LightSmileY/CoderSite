<template>
  <div id="questionPublishSuccess">
    <van-nav-bar
      fixed
      z-index="1000"
      title="发表问题"
      left-arrow
      @click-left="goback"
    />
    <div class="container">
      <div class="success">
        <img src="@/assets/icons/success.png" alt="">
        <div>发表成功</div>
      </div>
      <div class="title">
        为您推荐以下用户
      </div>
      <user-list answer="true"/>
    </div>
  </div>
</template>

<script>
  import UserList from '@/components/userList'

  export default {
    data(){
      return {

      }
    },
    components: {
      UserList
    },
    methods: {
      goback(){
        this.$router.go(-2)
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/questionPublishSuccess';
</style>