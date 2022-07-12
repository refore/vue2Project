<template>
  <div class="content">

	<div class="header">
		<img class="logo" src="../assets/logo.png" >
		<el-menu :default-active="activeIndex"  class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1" @click="goToHomeBody()">首页</el-menu-item>
		  <el-menu-item index="2" @click="goToSocial()">社会招聘</el-menu-item>
		  <el-menu-item index="3" @click="goToSchool()">校园招聘</el-menu-item>
		  <el-submenu index="4">
		    <template slot="title">个人中心</template>
		    <el-menu-item index="2-1" @click="goToUserInfo()">我的简历</el-menu-item>
		    <el-menu-item index="2-2" @click="goToUserApply()">我的申请</el-menu-item>
		  </el-submenu>
		  <template v-if="username!='登录'">
			  <el-submenu  style="background-color: #000000;color: #fff;"
		   index="5" @click="goToLogin()">
				  <template slot="title">{{username}}</template>
				    <el-menu-item index="5-1" @click="exitLogin()">退出登录</el-menu-item>
			  </el-submenu>
		  </template>
		  <template v-else>
			  <el-menu-item
			  style="background-color: #000000;color: #fff;"
			   index="5" @click="goToLogin()"> {{username}}
			  </el-menu-item>
		   </template>
		  
		</el-menu>
	</div>
	<router-view></router-view>
	<loginBox  ref="loginBoxRef" @goToRegBox="goToReg()" @emitUsername='(val)=>{this.username=val}' ></loginBox>
	<regBox  ref="regBoxRef" @emitUsername='(val)=>{this.username=val}' ></regBox>
		
		
  </div>
</template>

<script>
import loginBox from './user/loginBox.vue'
import regBox from './user/regBox.vue'
export default{
	components:{
		loginBox,
		regBox
	},
  name: 'home',
  props: {
    
  },
  data(){
	  return{
		  username:"登录",
	  }
  },
  watch:{
  	username(newVal,oldVal){
  		if(newVal!=oldVal){
			this.goToHomeBody();
		}
  	}
  },
  methods:{
		isLogged(){
			if(this.username=="登录"){return false}
			else {return true}
		},
		goToHomeBody(){
			this.$router.push({
				path:`/homeBody/${this.username}`
			});
		},
		goToSchool(){
			console.log("路由跳转函数！")
			this.$router.push({
				path:`/school/${this.username}`
			});
		},
		goToUserInfo(){
			if(!this.isLogged())this.goToLogin()
			else this.$router.push({
				path:`/userinfo/${this.username}`
			});
		},
		goToUserApply(){
			if(!this.isLogged())this.goToLogin()
			else this.$router.push({
				path:`/userApply/${this.username}`
			});
		},
		goToSocial(){
			this.$router.push({
				path:`/social/${this.username}`
			});
		},
		goToLogin(){
			if(!this.isLogged()){
			this.$nextTick(()=>{
				this.$refs.loginBoxRef.displayCreateDialog=true;
			})
			}
			
		},
		goToReg(){
			if(!this.isLogged()){
				// alert("注册函数启动！")
			this.$nextTick(()=>{
				this.$refs.loginBoxRef.displayCreateDialog=false;
				this.$refs.regBoxRef.displayCreateDialog=true;
			})
			}
			
		},
		exitLogin(){
			this.goToHomeBody();
			this.username="登录";
			
		}

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
/* html{height:100%;}
body{    
	background: url(../assets/1.png) no-repeat center 0;    
	background-size: cover;
	} */
a{
	text-decoration: none;
}
.el-menu-demo{
	float: right;
	 background-color: rgba(0,0,0,0);
}
.header{
	height: 60px;
	 background-color: rgba(0, 0, 0, 0.7);
	position: fixed;
	top: 0;
	right: 0;
	height: 60px;width: 100%;
	z-index:999
}
.homeBody{
	position: relative;
	height: 100%;
	width: 100%;
	background-color: #000FFF;
}
.router-link-exact-active{
	color:red;
}
router-link{
	height: 58px;
	width: 68px;
}

</style>
<style>
	.el-menu-item{
		text-color:#ffffff;
		active-text-color:#ffffff;
		/* background-color: #ffaa7f; */
	}
.logo{
	height: 80%;
	margin-top: 5px;
	margin-left: 10px;
}
</style>
