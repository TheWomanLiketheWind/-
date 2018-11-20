<template>
  <div>
    <ul class="ulListData">
        <li v-for="(item, index ) in ulList" :key="index" @click="info(item.id)">
          <div :style="{backgroundImage: `url(${item.banner.split(',')[0]})`}" class="ulListDataImg"></div>
          <div class="ulListDataBottom">
            <div class="ulListDataTop font24">{{item.createdAt | moment('YYYY-MM-DD HH:mm')}}</div>
            <div class="font30 ulListDataTopHead">{{item.goodsBrandName}}</div>
            <div class="ulListDataTop">
              <div class="font24">{{item.name}}</div>
              <div class="font24">{{item.goodsSpecName}}</div>            
            </div>
            <div class="ulListDataTop">
              <div>
                <span class="font28 priceColor">¥{{item.salePrice}}</span>
                <span class="font20 priceColorOld" v-if="item.price">¥{{item.price}}</span>
              </div>
              <img src="../../assets/gz_icon3x.png" v-if="item.isCollect == 0" />
              <img src="../../assets/1538214296.png" v-else  @click.stop="collectNoClick(item.id, index, item.userId, 'left')"/>
            </div>
          </div>
        </li>   
    </ul>
  </div>
</template>

<script>
import { collectCancel, collect  } from '@/api'
export default {
  props: {
    ulList: Array,
    collection: String,
    similar: String,
  },
  mounted () {
  },
  methods: {
    async collectNoClick(id, index, userId, type){
      const { data } = await collectCancel({goodsId: id, sellerId: userId})
      if (data.code == 0) {
        this.ulList.splice(index,1)
        this.$vux.toast.text('取消收藏成功')
      }
    },
    info(id){
      if (this.similar) {
        this.$router.replace({path: '/storeInfo?id=' + id})              
        this.$emit('similarList', this.similar)
      } else {
        this.$router.push({path: '/storeInfo?id=' + id})
      }
    }
  }
}
</script>

<style lang="less">
.ulListData{
  padding: .346667rem /* 26/75 */ .24rem /* 18/75 */;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li{
    width: 4.586667rem /* 344/75 */;
    margin-bottom: .28rem /* 21/75 */;
    background: #FFFFFF;
    .ulListDataBottom{
      border: .026667rem /* 2/75 */ solid #E8EAEB;
      padding: .213333rem /* 16/75 */ .24rem /* 18/75 */ .053333rem /* 4/75 */ .266667rem /* 20/75 */;
      color: #666666;
      border-top: 0;
      .ulListDataTopHead{
        color: #333333;
        overflow: hidden;/*超出部分隐藏*/
        white-space: nowrap;/*不换行*/
        text-overflow:ellipsis;
        margin-bottom: .213333rem /* 16/75 */;
      }
      .ulListDataTop{
        display: flex;
        margin-bottom: .213333rem /* 16/75 */;
        justify-content: space-between;
        align-items: center;
        .priceColorOld{
          position: relative;
          color: #999999;
        }
        .priceColorOld::after{
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: .186667rem /* 14/75 */;
          height: .026667rem /* 2/75 */;
          background: #999999
        }
        img{
          width: .48rem /* 36/75 */;
          height: .48rem /* 36/75 */;
        }
      }
      .priceColor{
        color: #D51F48;
        margin-right: .333333rem /* 25/75 */;
      }
    }
  }
  .ulListDataImg{
    width: 100%;
    display: block;
    height: 5.413333rem /* 406/75 */;
    background-position: center;
    background-size: cover;
  }
}
</style>
