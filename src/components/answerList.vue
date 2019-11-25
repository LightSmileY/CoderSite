<template>
  <ul id="messageList">
    <li v-for="item in 5">
      <div class="user">
        <div class="user-info">
          <div class="avatar">
            
          </div>
          <div class="name-time">
            <div class="name">
              浅笑半离兮
            </div>
            <div class="time">
              2019-11-23 21:56:30
            </div>
          </div>
        </div>
        <div class="attent">
          <van-button 
          plain 
          hairline 
          round
          color="#939393"
          type="default" 
          size="mini">+关注</van-button>
        </div>
      </div>
      <div class="message-type">
        回答了你的问题
      </div>
      <div class="answer-content">
        嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻嘻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻寻
      </div>
      <div class="detail">
        <div class="image">
          
        </div>
        <div class="desc">
          哈哈哈哈哈哈哈哈哈哈或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或或
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
  export default{
    data(){
      return{
        
      }
    },
    props: {
      
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/messageList';

  .answer-content{
    font-size: 12px;
    padding: 0 5px 3px;
  }
</style>
