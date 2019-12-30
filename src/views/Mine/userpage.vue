<template>
  <div id="userpage">
    <van-nav-bar
      fixed
      :title="userInfo.nickname"
      left-arrow
      @click-left="goBack"
      right-text="资料"
      @click-right="viewProfile"/>
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="container">
        <div class="banner" v-if="userInfo.userId = this.$store.state.userInfo.userId">
          <!-- van图片 -->
          <van-image
            lazy-load
            fit="cover"
            :src="userInfo.coverPicture">
            <template v-slot:loading>
              <van-loading type="spinner" size="20" />
            </template>
            <template v-slot:error>加载失败</template>
          </van-image>
          <div class="avatar">
            <!-- van图片 -->
            <van-image
              lazy-load
              fit="cover"
              :src="userInfo.avatarId">
              <template v-slot:loading>
                <van-loading type="spinner" size="20" />
              </template>
              <template v-slot:error>加载失败</template>
            </van-image>
          </div>
          <!-- 修改封面图 -->
          <div class="changeBanner">
            <van-uploader>
              <van-button size="small" plain hairline type="primary">上传封面图</van-button>
            </van-uploader>
          </div>
        </div>
        <div class="user">
          <div class="user-name">
            {{userInfo.nickname}}
          </div>
          <div class="user-profile">
            {{userInfo.signature}}
          </div>
        </div>
        <ul class="infos">
          <router-link to="/myArticles">
          <li>
            <div class="count">{{userInfo.articleCount}}</div>
            <div class="label">文章</div>
          </li>
          </router-link>
          <router-link to="/myQuestions">
          <li>
            <div class="count">{{userInfo.questionCount}}</div>
            <div class="label">问题</div>
          </li>
          </router-link>
          <router-link to="/myAttents">
          <li>
            <div class="count">{{userInfo.attentCount}}</div>
            <div class="label">关注</div>
          </li>
          </router-link>
          <router-link to="/myFanses">
          <li>
            <div class="count">{{userInfo.fansCount}}</div>
            <div class="label">粉丝</div>
          </li>
          </router-link>
        </ul>
      </div>
    </van-pull-refresh>
    <tab-bar/>
  </div>
</template>

<script>
  import TabBar from '@/components/tabbar'
  import Header from '@/components/header'
  import {getUserById} from '@/api/user'

  export default {
    data(){
      return {
        isLoading: false,
        userInfo: {}
      }
    },
    components: {
      TabBar,
      Header
    },
    methods: {
      goBack(){
        this.$router.go(-1)
      },
      onRefresh() {
        setTimeout(() => {
          getUserById({
            uid: this.$query.uid
          })
          .then(res => {
            console.log(res)
            this.userInfo = res.data.userInfo
            this.$toast('刷新成功')
            this.isLoading = false
          })
        }, 500)
      },
      viewProfile(){
        this.$router.push({
          name: "myProfile"
        })
      }
    },
    created(){
      getUserById({
        uid: this.$route.query.uid
      })
      .then(res => {
        console.log(res)
        this.userInfo = res.data.userInfo
      })
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/views/userpage';
</style>