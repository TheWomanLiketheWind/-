<style lang="less">
@pxtorem: 24rem;
.menu {
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100 / @pxtorem;
  background: #FFF;
  border-top: 1px solid #f0f0f0; 
  z-index:9999;
  .tab {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 50%;
    height: 100 / @pxtorem;
    background: #FFF;
    text-align: center;
    img {
      width: auto;
      height: 46 / @pxtorem;
    }
    span {
      color: #7f8389;
      font-size: 24 / @pxtorem;
      margin-top: 2px;
    }
  }
  .tab.active {
    span {
      color: #E50265;
    }
  }
}
</style>

<template>
  <div class="body">
    <div class="menu">
      <button to="" @click="toCurrentPage('/')" class="tab" :class="current === '/'?'active':''">
        <template v-if="current === '/'">
          <img src="../../assets/img/home1.png">
        </template>
        <template v-else>
          <img src="../../assets/img/home2.png">
        </template>
        <span>热卖现场</span>
      </button>
      <button to="" @click="toCurrentPage('/center')" class="tab" :class="current === '/center'?'active':''">
        <template v-if="current === '/center'">
          <img src="../../assets/img/my1.png">
        </template>
        <template v-else>
          <img src="../../assets/img/my2.png">
        </template>
        <span>我的</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      current: this.$route.path
    }
  },
  methods: {
    toCurrentPage (location) {
      this.current = location
      this.$router.replace({
        path: location
      })
    }
  }
}
</script>
