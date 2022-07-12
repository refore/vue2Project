import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../components/home.vue'
import homeBody from '../components/homeBody.vue'
import userApply from '../components/userApply.vue'
import userInfo from '../components/userInfo.vue'
import school from '../components/school.vue'
import social from '../components/social.vue'
import login from '../components/user/loginBox.vue'
// 安装路由插件
Vue.use(VueRouter);
// app.use(router)
// 创建路由实例对象
const router = new VueRouter({
  // 路由规则
  routes: [
    // 路由重定向
   { path: '/', redirect: "/homeBody/登录", },
    // 用户列表的路由规则
   { path: '/homeBody/:username', component: homeBody,props:true },
   { path: '/userApply/:username', component: userApply ,props:true},
   { path: '/userInfo/:username', component: userInfo,props:true },
    { path: '/school/:username', component: school ,props:true},
	{ path: '/social/:username', component: social ,props:true},
	{ path: '/login', component: login },

 ],
})

router.beforeEach((to,from,next)=>{
	if(to.path.includes('/userApply/登录')){
		alert("请先登录!")
		next(false)
	}
	else next()
})

// 向外共享路由实例对象
export default router