<template>
  <div id="pubQuestion">
    <van-nav-bar
      fixed
      :z-index="1000"
      title="发表问题"
      left-arrow
      @click-left="goback"
    />
    <div class="container">
      <!-- 折叠面板标签 -->
      <van-collapse v-model="activeNames">
        <van-collapse-item name="1">
          <div slot="title">标签
            <span class="tag-box" v-for="item in questionInfo.labels">
              <van-tag color="#f2826a" plain>{{item}}</van-tag>
            </span>
          </div>
          <van-checkbox-group v-model="questionInfo.labels" :max="3">
            <van-cell-group>
              <van-cell
                v-for="(item, index) in labelList"
                clickable
                :key="item"
                :title="`${item}`"
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
        v-model="questionInfo.title"
        rows="1"
        autosize
        label="标题"
        placeholder="请输入话题"
        clearable
        label-width="60px"
      />
      <!-- 段落 -->
      <div class="para">
        <van-field
          v-model="questionInfo.content"
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
          <van-uploader v-model="uploadImages" :after-read="afterRead" multiple />
        </div>
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
  import {addQuestion} from '@/api/question'

  export default {
    data(){
      return {
        activeNames: [],
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
        uploadImages: [],
        questionInfo: {   //问题发表接口参数
          qid: '',
          uid: this.$store.state.userInfo.userId,
          postTime: '',
          labels: [],
          title: '',
          content: '',
          images: []
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
      toSuccessPage(){
        this.$router.push({
          name: 'questionPublishSuccess'
        })
      },
      afterRead(file) {
        //上传图片到七牛云
        if (Array.isArray(file)) {
          file.forEach(async (el, index) => {
            this.qiniuData.key = uuid()
            // 单个图片文件及参数
            let data = new FormData()
            data.append('file', el.file)
            data.append('token', this.qiniuData.token)
            data.append('key', this.qiniuData.key)
            //上传图片到七牛云
            await axios({
              method: 'POST',
              url: this.upload_qiniu_url,
              data: data
            }).then(res =>{
              console.log(res)
              //存储图片外链
              this.questionInfo.images.push(this.upload_qiniu_addr + res.data.key)
              console.log('1'+ res.data.key)
            }).catch(err => {
              console.log(err)
            })
          })
        }else{
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
            this.questionInfo.images.push(this.upload_qiniu_addr + res.data.key)
          }).catch(err => {
            console.log(err)
          })
        }
      },
      publish(){
        this.questionInfo.qid = uuid()
        this.questionInfo.postTime = new Date()
        addQuestion(this.questionInfo)
        .then(res => {
          console.log(res)
          this.$toast('发表成功')
          this.$router.push({
            name: 'questionPublishSuccess',
            query: {
              qid: this.questionInfo.qid
            }
          })
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
  @import '@/assets/scss/views/pubQuestion';
</style>