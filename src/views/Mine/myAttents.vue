<template>
  <div id="myAttents">
    <van-nav-bar
      fixed
      left-arrow
      @click-left="goBack"
      title="我的关注"/>
    <div class="container">
      <div class="users">
        <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <user-list attent="true"/>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
  import UserList from '@/components/userList'
  import {getAttentList} from '@/api/user'

  export default {
    data(){
      return {
        isLoading: false,
        userList: []
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
        getAttentList({

        })
        .then(res => {
          this.$toast('刷新成功')
          this.isLoading = false
        })
      }
    },
    created(){
      getAttentList({

      })
      .then(res => {

      })
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/myAttents';
</style>