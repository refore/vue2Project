<template>
	<div class="homeBody">
		 <div class="block"> 
		  </div>
		  <div class="btn">
			  <a :href="'#/school/'+this.username">加入我们</a>
			 <!-- <button type="button" @click="change()">aaaaa</button> -->
			
		  </div>
		  <loginBox  ref="loginBoxRef" ></loginBox>
		  

		  
	</div>
</template>

<script>
	import loginBox from './user/loginBox.vue'
export default{
	components:{
		loginBox
	},
	methods:{
		
	},
	props:['username']
}
</script>

<style scoped>
	a{
		text-decoration: none;
		color: #fff;
		display: inline-block;
		width: 100%;
		height: 100%;
	}

	.block{
			width: 100%;
		height: 657px;
		 background: url(../assets/2.jpg) no-repeat center 0; 
			background-size: cover;
			background-position:0;
	
			
	}
	.homeBody{
			position: relative;
	}
	.btn{
		position: absolute;
		bottom: 200px;
		left: 65px;
		height: 80px;
		width: 200px;
		text-align: center;
		line-height: 80px;
		background-color: #000038;
		border-radius: 20px;
		color: white;
		font-size: 30px;
	}
</style>
