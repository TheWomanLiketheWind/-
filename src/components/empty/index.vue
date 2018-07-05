  <template>
    <div class="no_myAttention">
      <img src="../../assets/yonhu_image1.png" class="myAttentionImg"/>
      <div>{{text}}</div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String
      }
    }
  }
  </script>
  
  <style lang="less">
  .no_myAttention{
    margin-top: .8rem /* 60/75 */; 
    text-align: center;
    div{
      color: #BBBBBB;
      font-size: .346667rem /* 26/75 */;
    }
    .myAttentionImg{
      width: 4.293333rem /* 322/75 */;
      height: 4.293333rem /* 322/75 */;
      margin: 0 auto .666667rem /* 50/75 */;
    }
  }
  </style>