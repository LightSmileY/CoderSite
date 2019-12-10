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
      <!-- 折叠面板标签 -->
      <van-collapse v-model="activeNames">
        <van-collapse-item title="标签" name="1">
          <van-checkbox-group v-model="articleInfo.labels" :max="3">
            <van-cell-group>
              <van-cell
                v-for="(item, index) in labelList"
                clickable
                :key="item"
                :title="`复选框 ${item}`"
                @click="toggle(index)"
              >
                <van-checkbox
                  :name="item"
                  ref="checkboxes"
                  slot="right-icon"
                />
              </van-cell>
            </van-cell-group>
          </van-checkbox-group>
        </van-collapse-item>
      </van-collapse>
      <van-field
        v-model="articleInfo.title"
        rows="1"
        autosize
        label="标题"
        placeholder="请输入标题"
        clearable
        label-width="60px"
      />
      <!-- 段落 -->
      <div class="para" v-for="(item, key) in articleInfo.content">
        <van-field
          v-model="item.para"
          rows="1"
          autosize
          :label="'段落'+(key+1)"
          type="textarea"
          placeholder="请输入内容"
          clearable
          label-width="60px"
        />
        <div class="uploadImage">
          <van-uploader v-model="item.images" max-count='1'/>
        </div>
      </div>
      <!-- 添加段落 -->
      <div class="addPara">
        <van-button plain hairline icon="plus" type="primary" @click="pushPara">添加段落</van-button>
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
        imageList: [],
        activeNames: [],   //折叠面板控制
        labelList: ['1','2','3','4','5','6','7','8','9','10','11','12'],
        articleInfo: {   //文章发表接口参数
          aid: '',
          uid: '',
          postTime: '',
          labels: [],
          title: '',
          content: [
            {
              para: '',
              image: [],  //本地选择
              image: ''   //实际上传
            }
          ]
        }
      }
    },
    methods: {
      goback(){
        this.$router.go(-1)
      },
      toggle(index) {
        this.$refs.checkboxes[index].toggle();
      },
      pushPara(){
        this.articleInfo.content.push({
          para: '',
          images: [],
          image: ''
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/pubArticle';
</style>