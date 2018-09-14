import appConfigs from 'src/configs'
import vueRequest from './vueRequest'

/**
 * 健康列表
 */
export const health_list = (params) => vueRequest(appConfigs.urlWebHttp + '/mall/news/categoryList?', params, 'GET');

/**
 * 详情页面
 */
export const health_details = (params) => vueRequest(appConfigs.urlWebHttp + '/mall/news/getHealthInformation?', params, 'GET');
