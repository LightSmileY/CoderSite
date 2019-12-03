<template>
  <div id="pubQuestion">
    <van-nav-bar
      fixed="true"
      z-index="1000"
      title="发表问题"
      left-arrow
      @click-left="goback"
    />
    <div class="container">
      <van-field
        v-model="message"
        rows="1"
        autosize
        label="标题"
        placeholder="请输入话题"
        clearable
        label-width="60px"
      />
      <!-- 段落 -->
      <div class="para" v-for="item in 1">
        <van-field
          v-model="message"
          rows="1"
          autosize
          label="内容"
          type="textarea"
          placeholder="请输入内容"
          clearable
          label-width="60px"
          show-word-limit
          maxlength="500"
        />
        <div class="uploadImage">
          <van-uploader v-model="imageList" multiple />
        </div>
      </div>
      <!-- 发表帖子 -->
      <div class="post">
        <van-button type="primary" size="large">发表</van-button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return {
        message: "",
        para: 1,
        imageList: []
      }
    },
    methods: {
      goback(){
        this.$router.go(-1)
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/pubQuestion';
</style>