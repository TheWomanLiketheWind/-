<template>
  <div class="nothing">
    <div class="nothingAll">
      <img src="../../assets/fenzu.png">
      <div>{{title}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang="less">
.nothing{
  padding-top: 4rem /* 300/75 */;
  background: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  // z-index: -1;
  text-align: center;
  .nothingAll{
    div{
      font-size: .426667rem /* 32/75 */;
      color: #999999;
    }
    img{
      width: 3.28rem /* 246/75 */;
      height: 2.666667rem /* 200/75 */;
      margin-bottom: .533333rem /* 40/75 */;
    }
  }
}
</style>
