import appConfigs from 'src/configs'
import vueRequest from './vueRequest'

/**
 * 登录
 */
export const post_login = (params) => vueRequest(appConfigs.urlWebHttp + '/fd-sign-pc/user/login?', params, 'POST');

