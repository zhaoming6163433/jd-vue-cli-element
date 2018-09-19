// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ELEMENTUI from 'element-ui'
import MintUI from 'mint-ui'
import $ from 'n-zepto'
import router from './router'
//import VueResource from 'vue-resource'
import axios from 'axios'
import vueutil from './util/vueutil.js'
import store from './store'
import '../static/css/animate.min.css'
import screenscale from '../static/js/screenscale.js'
//此处引用本地的element-ui
import '../static/css/element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'
import App from './App'

//阻止vue在启动时生成生产提示
Vue.config.productionTip = false
//Vue.use(VueResource);
Vue.use(ELEMENTUI);
Vue.use(MintUI);
Vue.use(vueutil);
Vue.prototype.$http = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
