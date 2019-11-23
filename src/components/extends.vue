<template>
  <ul id="extends">
    <li v-for="item in 8">
      <div class="image">
        <img src="@/assets/icons/index.png" alt="">
      </div>
      <div class="label">功能一</div>
    </li>
  </ul>
</template>

<script>
  export default {
    data(){
      return {

      }
    }
  };
</script>

<style lang="scss" scoped>
  @import '@/assets/scss/components/extends';
</style>