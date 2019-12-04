<template>
  <div id="myFanses">
    <van-nav-bar
      fixed="true"
      left-arrow
      @click-left="goBack"
      title="我的粉丝"/>
    <div class="container">
      <div class="articles">
        <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <user-list/>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
  import UserList from '@/components/userList'

  export default {
    data(){
      return {
        isLoading: false
      }
    },
    components: {
      UserList
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
  @import '@/assets/scss/views/myFanses';
</style>