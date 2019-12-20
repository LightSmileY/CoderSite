<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {getUserById} from '@/api/user'
  
  export default {
    beforeCreate(){
      getUserById({uid: localStorage.myUserId})
      .then(res => {
        this.$store.dispatch('getUserInfo', res.data.userInfo)
      })
    }
  }
</script>