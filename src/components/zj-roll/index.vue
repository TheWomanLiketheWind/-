<template>
  <div>
    <slot></slot>
    <div class='bottom' v-if='(!lastPage.total && lastPage.empty!=0)'>---------- <span >我也是有底线的</span> ----------</div>
    <div class='loading'  v-if='lastPage.total && lastPage.empty!=0'>
      <!-- <img src='@/assets/loading.png' /> -->
      玩命加载中</div>
  </div>
</template>
<script>
export default {
  name: 'scroll',
  props: ['lastPage'],
  data: function () {
    return {
      startY: 0,
      endY: 0,
      initTop: null,
      move: 0,
      a: 0,
      b: 0
    }
  },
  methods: {
    getScrollTop () {
      let scrollTop = 0
      let bodyScrollTop = 0
      let documentScrollTop = 0
      if (document.body) {
        bodyScrollTop = document.body.scrollTop
      }
      if (document.documentElement) {
        documentScrollTop = document.documentElement.scrollTop
      }
      scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop
      return scrollTop
    },
// 文档的总高度
    getScrollHeight () {
      let scrollHeight = 0
      let bodyScrollHeight = 0
      let documentScrollHeight = 0
      if (document.body) {
        bodyScrollHeight = document.body.scrollHeight
      }
      if (document.documentElement) {
        documentScrollHeight = document.documentElement.scrollHeight
      }
      scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight
      return scrollHeight
    },
// 浏览器视口的高度
    getWindowHeight () {
      var windowHeight = 0
      if (document.compatMode === 'CSS1Compat') {
        windowHeight = document.documentElement.clientHeight
      } else {
        windowHeight = document.body.clientHeight
      }
      return windowHeight
    },
    handleScroll () {
      if (this.getScrollTop() + this.getWindowHeight() === this.getScrollHeight()) {
        this.$emit('zj-load')
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="less" scoped>
.bottom{
  padding:20px 0;
  width:100%;
  text-align: center;
  font-size:16px;
  color: #bbb;
  span{
    margin:0 16px;
  }
}
.loading{
  padding:20px 0;
  text-align: center;
  display: flex;
  justify-content:center;
  align-items: center;
  font-size:16px;
  color: #bbb;
  img{
    animation: mymove .5s linear infinite;
    width:30px;
    height:30px;
    margin-right:10px;
  }
}

@-webkit-keyframes mymove {
  0%   {transform:rotate(0deg);}
  50%  {transform:rotate(180deg);}
  100% {transform:rotate(360deg);}
}

</style>
