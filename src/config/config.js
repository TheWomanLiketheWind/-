// 存放常量配置
import Env from './env'

const ajaxUrl = Env === 'development' ? 'http://gaoqx.frp.dev.wmeimob.com/api' : Env === 'production' ? 'http://voteqy.onlyedu.com.cn/api' : Env === 'dug' ? 'http://vote.onlyedu.com.cn/api' : 'http://gaoqx.frp.dev.wmeimob.com/api'

const loginUrl = Env === 'development' ? 'http://gaoqx.frp.dev.wmeimob.com' : Env === 'production' ? 'http://voteqy.onlyedu.com.cn' : Env === 'dug' ? 'http://vote.onlyedu.com.cn' : 'http://gaoqx.frp.dev.wmeimob.com'

const mpid = Env === 'development'
  ? '3'
  : Env === 'production'
    ? '1'
    : Env === 'dug'
    ? '7'
    : '1'

const wxInfo = Env === 'development' ? {
  'appId': 'wxcc9a425363989bf2' // 服务号测试
} : Env === 'production' ? {
  'corpId': 'wx863f0e34ac540835', // 企业号
  'appId': 'wx863f0e34ac540835'
} : Env === 'dug' ? {
  'appId': 'wx5ea206de0ca38409' // 服务号
} : {
  'corpId': 'wx06ce44fe02f77813',
  'appId': 'wx06ce44fe02f77813'
}

const agentId = Env === 'development' ? '' : Env === 'production' ? '1000037' : Env === 'dug' ? '' : '1000007'

const wxName = Env === 'development' ? '服务' : Env === 'production' ? '企业' : Env === 'dug' ? '服务' : '企业'

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
  mpid,
  wxName,
  agentId
}
export default config
