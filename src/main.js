import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import qs from 'qs'
// 1. 导入 element-ui
import ElementUI from 'element-ui'
// 2. 导入 element-ui 的样式表
import 'element-ui/lib/theme-chalk/index.css'


axios.defaults.baseURL =  'http://localhost:3007/'

axios.interceptors.request.use(
	config => {
		if (config.method === 'post') {
			config.data = qs.stringify(config.data)
		}
		return config
	},
	error => {
		console.log(error)
		Promise.reject(error)
	}
)

Vue.config.productionTip = false
// 3. 将 ElementUI 安装为 vue 的插件
Vue.use(ElementUI)
Vue.prototype.$http = axios
Vue.prototype.$qs=qs

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')