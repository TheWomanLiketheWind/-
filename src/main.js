// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './store/index'
import Moment from 'moment'
import Vant from 'vant'
// import 'lib-flexible'
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import { LoadingPlugin, ConfirmPlugin, ToastPlugin, DatetimePlugin } from 'vux'
import 'vant/lib/vant-css/index.css'

Vue.use(LoadingPlugin)
Vue.use(ConfirmPlugin)
Vue.use(ToastPlugin)
Vue.use(DatetimePlugin)
Vue.use(Vuex)
Vue.use(Vant)

Vue.config.productionTip = false

Vue.filter('moment', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm:ss'
  return Moment(value).format(formatString)
})
Vue.filter('moment2', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD'
  return Moment(value).format(formatString)
})
Vue.filter('moment3', function (value, formatString) {
  formatString = formatString || 'YYYY-MM-DD HH:mm'
  return Moment(value).format(formatString)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
