<template>
  <ul id="chatList">
    <li v-for="item in arrayList" @click="toChatDetailPage(item.uid)">
      <div class="infos">
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
        <div class="name-message">
          <div class="name">
            {{item.nickname}}
          </div>
          <div class="message">
            {{item.message}}
          </div>
        </div>
      </div>
      <div class="tag">
        <van-tag round type="danger">1</van-tag>
      </div>
    </li>
  </ul>
</template>

<script>
  export default{
    data(){
      return{
        value: ""
      }
    },
    props: {
      arrayList: Array
    },
    methods: {
      toChatDetailPage(i){
        this.$router.push({
          name:'chatDetail',
          query: { id: i }
        })
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/chatList';
</style>