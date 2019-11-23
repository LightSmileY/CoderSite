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
    <li>
      <img src="@/assets/icons/publish.png" alt="">
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

<style lang="scss" scoped>
  @import '@/assets/scss/components/tabbar.scss';
</style>
