<template>
  <div id="myFanses">
    <van-nav-bar
      fixed
      left-arrow
      @click-left="goBack"
      title="我的粉丝"/>
    <div class="container">
      <div class="articles">
        <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <user-list fans="true" :arrayList="userList"/>
        </van-pull-refresh>
        <!-- 加载 -->
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
  import {getAllFans} from '@/api/user'

  export default {
    data(){
      return {
        isLoading: false,
        loading: true,
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
        getFansList({

        })
        .then(res => {
          this.$toast('刷新成功')
          this.isLoading = false
        })
      },
      getFansList(){
        getAllFans({uid: this.$store.state.userInfo.userId})
        .then(res => {
          console.log(res)
          this.userList = res.data.attents
          this.loading = false
        })
      }
    },
    created(){
      this.getFansList()
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/myFanses';
</style>