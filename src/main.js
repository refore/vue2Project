import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// 1. 导入 element-ui
import ElementUI from 'element-ui'
// 2. 导入 element-ui 的样式表
import 'element-ui/lib/theme-chalk/index.css'
axios.defaults.baseURL =  'http://localhost:3007/'


Vue.config.productionTip = false
// 3. 将 ElementUI 安装为 vue 的插件
Vue.use(ElementUI)
Vue.prototype.$http = axios

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')