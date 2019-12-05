<template>
  <div id="pubArticle">
    <van-nav-bar
      fixed
      z-index="1000"
      title="发表文章"
      left-arrow
      @click-left="goback"
    />
    <div class="container">
      <van-field
        v-model="message"
        rows="1"
        autosize
        label="话题"
        placeholder="请输入话题"
        clearable
        label-width="60px"
      />
      <!-- 段落 -->
      <div class="para" v-for="item in 1">
        <van-field
          v-model="message1"
          rows="1"
          autosize
          :label="'段落'+para"
          type="textarea"
          placeholder="请输入内容"
          clearable
          label-width="60px"
        />
        <div class="uploadImage">
          <van-uploader v-model="imageList" multiple />
        </div>
      </div>
      <!-- 添加段落 -->
      <div class="addPara">
        <van-button plain hairline icon="plus" type="primary">添加段落</van-button>
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
        message1: "",
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
  @import '@/assets/scss/views/pubArticle';
</style>