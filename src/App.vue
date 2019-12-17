<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {getUserById} from '@/api/user'
  
  export default {
    created(){
      getUserById({uid: localStorage.myUserId})
      .then(res => {
        this.$store.dispatch('getUserInfo', res.data.userInfo)
      })
    }
  }
</script>