<template>
  <div id="myProfile">
    <van-nav-bar
      fixed="true"
      title="资料"
      left-arrow
      @click-left="goBack"
    />
    <div class="container">
      <!-- <van-cell-group>
        <van-field
          v-model="username"
          clearable
          label="用户名"
          placeholder="lightsmiley"
          disabled
        />
        <van-field
          v-model="password"
          type="password"
          label="昵称"
          placeholder="请输入昵称"
        />
        <van-field
          v-model="username"
          clearable
          label="生日"
          placeholder="请选择生日"
        />
        <!-- 选择时间 -->
        <!-- <van-dialog
          v-model="show"
          :close-on-popstate="true"
          :close-on-click-overlay="true"
        >
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            :min-date="minDate"
            :show-toolbar="false"
            :item-height="35"
          />
        </van-dialog>
        
        <van-field
          v-model="password"
          type="password"
          label="邮箱"
          placeholder="请输入邮箱"
        />
        <van-field
          v-model="username"
          clearable
          label="个性签名"
          placeholder="请输入个性签名"
        />
      </van-cell-group> -->
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        show: true
      }
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/myProfile';
</style>