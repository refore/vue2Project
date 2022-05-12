<template>
  <div class="content">

	<div class="header">
		<el-menu :default-active="activeIndex"  class="el-menu-demo" mode="horizontal" @select="handleSelect">
		  <el-menu-item index="1" @click="goToHomeBody()">首页</el-menu-item>
		  <el-menu-item index="2" @click="goToSocial()">社会招聘</el-menu-item>
		  <el-menu-item index="3" @click="goToSchool()">校园招聘</el-menu-item>
		  <el-submenu index="4">
		    <template slot="title">个人中心</template>
		    <el-menu-item index="2-1" @click="goToUserInfo()">我的简历</el-menu-item>
		    <el-menu-item index="2-2" @click="goToUserApply()">我的申请</el-menu-item>
		  </el-submenu>
		</el-menu>
	</div>
	<router-view></router-view>
	
		
		
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    
  },
  methods:{
		goToHomeBody(){
			this.$router.push("/homeBody");
		},
		goToSchool(){
			console.log("路由跳转函数！")
			this.$router.push("/school");
		},
		goToUserInfo(){
			this.$router.push("/userInfo");
		},
		goToUserApply(){
			this.$router.push("/userApply");
		},
		goToSocial(){
			this.$router.push("/social");
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

</style>
