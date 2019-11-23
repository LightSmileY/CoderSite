<template>
  <div id="message">
    <van-nav-bar
      fixed="true"
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left=""
      @click-right=""
    />
    <div class="main">
      <!-- 标签页 -->
      <van-tabs 
      v-model="active" 
      swipeable
      sticky="true"
      title-active-color="#90C2EF">
        <van-tab 
        title="选项"
        >
        <!-- 下拉刷新 -->
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="message-list">1</div>
          </van-pull-refresh>
        </van-tab>
        <van-tab 
        title="选项"
        >
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="answer-list">2</div>
          </van-pull-refresh>
        </van-tab>
        <van-tab 
        title="选项"
        >
          <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="chat-list">3</div>
          </van-pull-refresh>
        </van-tab>
      </van-tabs>
    </div>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar'
  import Header from '@/components/header'

  export default {
    data(){
      return {
        isLoading: false
      }
    },
    components: {
      TabBar,
      Header
    },
    methods: {
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
  @import '@/assets/scss/views/message';
</style>