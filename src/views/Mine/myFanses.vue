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
          <user-list fans="true"/>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
  import UserList from '@/components/userList'
  import {getFansList} from '@/api/user'

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
        getFansList({

        })
        .then(res => {
          this.$toast('刷新成功')
          this.isLoading = false
        })
      }
    },
    created(){
      getFansList({

      })
      .then(res => {

      })
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/myFanses';
</style>