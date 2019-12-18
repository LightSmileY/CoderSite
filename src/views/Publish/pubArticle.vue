<template>
  <div id="pubArticle">
    <van-nav-bar
      fixed
      :z-index="1000"
      title="发表文章"
      left-arrow
      @click-left="goback"
    />
    <div class="container">
      <!-- 折叠面板标签 -->
      <van-collapse v-model="activeNames">
        <van-collapse-item name="1">
          <div slot="title">标签
            <span class="tag-box" v-for="item in articleInfo.labels">
              <van-tag color="#f2826a" plain>{{item}}</van-tag>
            </span>
          </div>
          <van-checkbox-group v-model="articleInfo.labels" :max="3">
            <van-cell-group>
              <van-cell
                v-for="(item, index) in labelList"
                clickable
                :key="item"
                :title="`${item}`"
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
        <div class="uploadImage" @click="selectImage(key)">
          <van-uploader v-model="upImages[key].image0" :after-read="afterRead" :max-count='1'/>
        </div>
      </div>
      <!-- 添加段落 -->
      <div class="addPara">
        <van-button plain hairline icon="plus" type="primary" @click="pushPara">添加段落</van-button>
      </div>
      <!-- 发表帖子 -->
      <div class="post">
        <van-button type="primary" size="large" @click="publish">发表</van-button>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios' 
  import {uuid, getTime} from '@/assets/js/pubfuncs'
  import {getQiniuToken} from '@/api/other'
  import {addArticle} from '@/api/article'

  export default {
    data(){
      return {
        activeNames: [],   //折叠面板控制
        imageStatus: 0,
        upImages: [
          {
            image0: []
          }
        ],
        labelList: [
          'JavaScript',
          'Java',
          'Spring Boot',
          'Vue',
          'React',
          'element',
          'MySql',
          'MongoDB',
          'SCSS',
          'Tensorflow',
          'ES6'
        ],
        articleInfo: {   //文章发表接口参数
          aid: '',
          uid: this.$store.state.userInfo.userId,
          postTime: '',
          labels: [],
          title: '',
          content: [
            {
              para: '',
              image: ''   //实际上传
            }
          ]
        },
        qiniuData: {
          key: "",
          token: ""
        },
        upload_qiniu_url: "http://upload-z2.qiniup.com",
        // 七牛云返回储存图片的子域名
        upload_qiniu_addr: "http://cdn.fengblog.xyz/"
      }
    },
    methods: {
      goback(){
        this.$router.go(-1)
      },
      toggle(index) {
        this.$refs.checkboxes[index].toggle();
      },
      // 添加段落
      pushPara(){
        this.articleInfo.content.push({
          para: '',
          image: ''
        })
        this.upImages.push({image0: []})
      },
      selectImage(i){
        this.imageStatus = i   //记录图片所在段落
      },
      afterRead(file) {
        //上传图片到七牛云
        this.qiniuData.key = uuid()
        // 单个图片文件及参数
        let data = new FormData()
        data.append('file', file.file)
        data.append('token', this.qiniuData.token)
        data.append('key', this.qiniuData.key)
        //上传图片到七牛云
        axios({
          method: 'POST',
          url: this.upload_qiniu_url,
          data: data
        }).then(res =>{
          console.log(res)
          //存储图片外链
          this.articleInfo.content[this.imageStatus].image = this.upload_qiniu_addr + res.data.key
        }).catch(err => {
          console.log(err)
        })
      },
      publish(){
        this.articleInfo.aid = uuid()
        this.articleInfo.postTime = new Date()
        addArticle(this.articleInfo)
        .then(res => {
          console.log(res)
          this.$toast('发表成功')
          this.$router.go(-1)
        })
      }
    },
    mounted(){
      getQiniuToken()
      .then(res => {
        this.qiniuData.token = res.data
      })
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/pubArticle';
</style>