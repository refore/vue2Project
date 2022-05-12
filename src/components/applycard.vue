<template>
	<div class="applycard" >
		<div class="cardhead">申请岗位：{{name}}</div>
		
		<div class="carddate">投递时间：{{date}}</div>
		<div class="cardstate">状态：{{state}}</div>
	</div>
	
	
</template>

<script>
export default{
	name:"applycard",
	props:['name','state','date'],
	data(){
		return{
			schoolList:[]
		}
	},
	created() {
	this.getSchoolList();
	},
	methods:{
		
		
	}
}
</script>

<style scoped="scoped">
.applycard{
	height: 250px;
	width: 300px;
	/* background-color: #0000EE; */
	margin: 20px;
	border-radius: 20px;
	box-shadow: 1px 1px 3px 3px rgb(0 0 0 / 10%);	
	position: relative;
	float: left;
	display:inline-block;
}
.cardhead{
	position: absolute;
	font-size: 20px;
	width: 100%;
	height: 50px;
	text-align: center;
	margin-top: 50px;
}
.carddate{
	position: absolute;
	font-size: 16;
	width: 100%;
	height: 20px;
	text-align: center;
	margin-top: 100px;
	color: #6a6a6a;
}
.cardstate{
	position: absolute;
	font-size: 16;
	width: 100%;
	height: 20px;
	text-align: center;
	margin-top: 150px;

}
</style>
