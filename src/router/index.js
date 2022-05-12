import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import homeBody from '../components/homeBody.vue'
import userApply from '../components/userApply.vue'
import userInfo from '../components/userInfo.vue'
import school from '../components/school.vue'
import social from '../components/social.vue'
// 安装路由插件
Vue.use(VueRouter);
// app.use(router)
// 创建路由实例对象
const router = new VueRouter({
  // 路由规则
  routes: [
    // 路由重定向
   { path: '/', redirect: '/homeBody', },
    // 用户列表的路由规则
   { path: '/homeBody', component: homeBody },
   { path: '/userApply', component: userApply },
   { path: '/userInfo', component: userInfo },
    { path: '/school', component: school },
	{ path: '/social', component: social },

 ],
})
// 向外共享路由实例对象
export default router