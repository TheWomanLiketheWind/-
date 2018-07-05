import Util from '@/utils/util'
import config from '@/config/config'
import { formatFormData, formatGetUri } from '@/utils/index'

//  只为授权
export const getAccessToken = data => Util.http.get(`/core/token?mpid=${config.mpid}&code=${data.code}`, {})
export const getUserInfo = data => Util.http.get('/wx/users/userInfo', {})

