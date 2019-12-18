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
          <user-list attent="true" :arrayList="userList"/>
        </van-pull-refresh>
        <div 
        class="loading" 
        style="display:flex;justify-content:center;align-items: center;height:90vh;"
        v-if="loading">
          <van-loading color="#1989fa" size="40px" vertical>玩命加载中...</van-loading>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import UserList from '@/components/userList'
  import {getAllFollows} from '@/api/user'

  export default {
    data(){
      return {
        isLoading: false,  //下拉刷新
        loading: true,  //刚进入页面时加载
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
      },
      getAttentList(){
        getAllFollows({uid: this.$store.state.userInfo.userId})
        .then(res => {
          console.log(res)
          this.userList = res.data.attents
          this.loading = false
        })
      }
    },
    created(){
      this.getAttentList()
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/myAttents';
</style>