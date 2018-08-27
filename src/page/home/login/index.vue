<template>
  <div class="wechat_login"></div>
</template>

<script>
console.log(555)
import { getAccessToken } from "@/api/index";
// import { Toast } from "vant";
import axios from "axios";

export default {
  data() {
    return {};
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      let link = window.location.href.split('=')[1]
      link = link.split('&')[0];

      this.$vux.loading.show('获取微信授权')
      await getAccessToken({
        code: link
      }).then(res => {
        this.$vux.loading.hide()
        if (res.data.token) {
          localStorage.token = res.data.token;
          this.getArea()
        } else {

        }
      });
    },
    //  获取本地地址信息
    getArea () {
      axios.get('/static/city.json').then(res => {
        localStorage.setItem('cityList',JSON.stringify(res.data))
        window.location.href = localStorage.getItem('skipUrl')
      }, res => {
          // error callback
      })
    },
  }
};
</script>

<style>

</style>
