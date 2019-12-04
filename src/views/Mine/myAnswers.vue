<template>
  <div id="myAnswers">
    <van-nav-bar
      fixed="true"
      left-arrow
      @click-left="goBack"
      title="我的回答"/>
    <div class="container">
      <div class="answers">
        <!-- 下拉刷新 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
          <div class="answer-list">
            <answer-list/>
          </div>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
  import AnswerList from '@/components/answerList'

  export default {
    data(){
      return {
        isLoading: false
      }
    },
    components: {
      AnswerList
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
  @import '@/assets/scss/views/myAnswers';
</style>