import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/globle.css';
import './plugins/element.js'
// import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
//配置请求的根路径
axios.defaults.baseURL = 'http://47.115.124.102:8888/api/private/v1/'

Vue.prototype.$http = axios

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
