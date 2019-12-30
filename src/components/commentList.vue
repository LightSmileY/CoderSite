<template>
  <ul id="commentList">
    <li v-for="item in question.answers">
      <div class="avatar">
        <!-- van图片 -->
        <van-image
          lazy-load
          fit="cover"
          :src="item.avatar">
          <template v-slot:loading>
            <van-loading type="spinner" size="20" />
          </template>
          <template v-slot:error>加载失败</template>
        </van-image>
      </div>
      <div class="main">
        <div class="name">{{item.nickname}}</div>
        <div class="content">
          {{item.content}}
        </div>
        <div class="info">
          <div class="info-time">{{item.time}}</div>
          <div class="info-reply">回复</div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

  export default {
    data(){
      return {

      }
    },
    props: {
      question: Object
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/commentList';
</style>