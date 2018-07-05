<template lang="html">
  <div class="layout">
    <router-view></router-view>

    <tabbar v-if="isShowTabBar">
      <tabbar-item :selected="currentUri === '/'" link="/">
        <img slot="icon" src="../assets/shouye_icon.png">
        <img slot="icon-active" src="../assets/shouye_iconActive.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item :selected="currentUri === '/product'" link="/product">
        <img slot="icon" src="../assets/gouwuche_icon.png">
        <img slot="icon-active" src="../assets/gouwuche_iconActive.png">
        <span slot="label">产品</span>
      </tabbar-item>
      <tabbar-item :selected="currentUri === '/personalCenter'" link="/personalCenter">
        <img slot="icon" src="../assets/me_icon.png">
        <img slot="icon-active" src="../assets/me_iconActive.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'

export default {
  data () {
    return {

    }
  },
  computed: {
    currentUri () {
      return this.$route.path
    },
    isShowTabBar () {
      const path = this.$route.path
      if (path === '/' || path === '/product' || path === '/personalCenter') {
        return true
      }
      return false
    }
  },
  components: {
    Tabbar,
    TabbarItem
  }
}
</script>

<style lang="less">
.weui-tabbar {
  position: fixed !important;
  background-color: #ffffff !important;
}
.weui-tabbar__item {
  display: flex !important;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 1.306667rem /* 98/75 */;
  .weui-tabbar__label {
    font-size: .29rem;
  }
}
.weui-bar__item_on {
  .weui-tabbar__label {
    color: #0268BA !important;
    font-size: .29rem;
  }
}
.weui-tabbar__icon {
  width: .72rem !important;
  height: .72rem !important;
  img {
    width: auto !important;
  }
}
</style>
