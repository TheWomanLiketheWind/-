// 存放常量配置
import Env from './env'

const ajaxUrl = Env === 'development' ? 'http://ningy.frp.dev.wmeimob.com/api' : Env === 'production' ? 'http://pwx.mjt.wmeimob.com/api' : '7'

const loginUrl = Env === 'development' ? 'http://ningy.frp.dev.wmeimob.com' : Env === 'production' ? 'http://pwx.mjt.wmeimob.com' : '7'

const mpid = Env === 'development'
  ? '3'
  : Env === 'production'
    ? '1'
    : '7'

const wxInfo = {
  'appId': 'wx81691754f0bb7793'
  // 'appId': 'wx8b804ab2c3772ae6', // 公司测试
  // 'appId': 'wx2e713d6d755d09e2' // 个人测试
}

const qiniu = {
  'URL': 'http://upload.qiniu.com/',
  'BUCKET': 'angels',
  'IMG_PATH': 'http://files.wx.loreal.wmeimob.com/',
  'IMAGEMODE': 'imageView2/1/'
}

let config = {
  api: ajaxUrl,
  qiniu: qiniu,
  wxInfo: wxInfo,
  loginUrl,
  mpid
}
export default config
