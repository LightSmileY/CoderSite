<template>
  <ul id="tabbar">
    <li>
      <router-link to="/">
        <img src="@/assets/icons/index.png" alt="">
      </router-link>
    </li>
    <li>
      <router-link to="/find">
        <img src="@/assets/icons/find.png" alt="">
      </router-link>
    </li>
    <li @click="showpub = !showpub">
      <img src="@/assets/icons/publish.png" alt="" v-if="!showpub">
      <img src="@/assets/icons/delete.png" alt="" v-if="showpub">
      <div class="publish animated fadeInUp" v-if="showpub">
        <dl @click.stop="toPubArticlePage">
          <dt>
            <img src="@/assets/icons/post.png" alt="">
          </dt>
          <dd>发帖子</dd>
        </dl>
        <dl @click.stop="toPubQuestionPage">
          <dt>
            <img src="@/assets/icons/question.png" alt="">
          </dt>
          <dd>提问题</dd>
        </dl>
      </div>
    </li>
    <li>
      <router-link to="/message">
        <img src="@/assets/icons/message.png" alt="">
      </router-link>
    </li>
    <li>
      <router-link to="/mine">
        <img src="@/assets/icons/mine.png" alt="">
      </router-link>
    </li>
  </ul>
</template>

<script>
  export default {
    data(){
      return{
        showpub: false
      }
    },
    methods: {
      toPubArticlePage(){
        this.$router.push({
          name:'pubArticle'
        })
      },
      toPubQuestionPage(){
        this.$router.push({
          name:'pubQuestion'
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/tabbar.scss';
</style>