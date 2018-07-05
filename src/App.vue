<template>
  <div class="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  mounted() { },
  beforeDestroy() { },
  methods: {}
}
</script>
<style lang="less">
@import './style/style';
@screenWidth: 100%;
@screenHeight: 100%;
.weui-dialog__btn_primary{
  color: #0268BA!important;
}
.personDataType .vux-cell-box{
  width: 100%!important;
}
.weui-cell{
  padding: 0!important;
  // padding: 10px 15px;
    /* position: relative; */
    display: flex;
    align-items: center;
}
.vux-cell-box{
  width: 100%
}
.vux-cell-value{
  color: #222!important;
}
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .van-swipe{
    height: 100%;
  }
  select{
    background: #ffffff;
  }
  a{
    text-decoration: none;
  }
  .van-swipe-item img{
    width: 100%;
  }
  .van-swipe__indicators .van-swipe__indicator--active{
    background-color: #444444;
  }
  .vux-header{
    background: #FFFFFF;
    .vux-header-title{
      color: #222222;
    }
  }
  input{
    -webkit-appearance: none;
  }
  .weight{
    font-weight: bold;
  }
  .font20{
    font-size: .266667rem /* 20/75 */;
  }
  .font26{
    font-size: .346667rem /* 26/75 */;
  }
  .font28{
    font-size: .373333rem /* 28/75 */;
  }
  .font30{
    font-size: .4rem /* 30/75 */;
  }
  .font32{
    font-size: .426667rem /* 32/75 */;
  }
  .font34{
    font-size: .453333rem /* 34/75 */;
  }
  .font36{
    font-size: .48rem /* 36/75 */;
  }
  .buttonColor{
    background: #0268BA;
    border-radius: .586667rem;
    font-size: .4rem; 
    color: #ffffff;
    height: 1.173333rem;
    margin: 1.333333rem .533333rem 0 .533333rem;
    line-height: 1.173333rem;
    text-align: center;
    a{
      color: #ffffff;    
      text-decoration: none;  
    }
  }
  .button_submit{
    background: #0268BA;
    font-size: .4rem;
    color: #ffffff;
    height: 1.173333rem;
    line-height: 1.173333rem;
    text-align: center;
  }
}
</style>

