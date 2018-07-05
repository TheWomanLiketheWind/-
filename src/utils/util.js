//  设置拦截器配置axios
// import Vue from 'vue'
import axios from 'axios'
import router from '@/router/index'
import config from '@/config/config'

let util = {

}

util.title = (title) => {
  title = title || ''
  window.document.title = title
}
//	创建axios实例
util.http = axios.create({
  baseURL: config.api,
  timeout: 30000
})

// http request 拦截器
util.http.interceptors.request.use(
  config => {
    const token = localStorage.token
    if (token) {
      config.headers.Authorization = `${token}`
    }
    return config
  },
  err => {
    return Promise.reject(err)
  })

// http response 拦截器
util.http.interceptors.response.use(
  response => {
    return response
  },
  error => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          console.log(111)
          localStorage.setItem('skipUrl', window.location.href)
          location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + config.wxInfo.appId + '&redirect_uri=' + config.loginUrl + '/home/login&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect'
          break
        case 403:
          // 403 用户未注册跳转注册页面
          router.push({
            path: '/bind',
            query: {}
          })
          break
      }
    }
    // console : Error: Request failed with status code 402
    console.log(error)
    return Promise.reject(error.response.message)
  })

export default util
