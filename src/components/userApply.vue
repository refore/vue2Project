<template>
	<div class="myApply">
		<div class="myApplyHead">我的申请</div>
		<hr style="height: 1px;background-color: #d8d8d8;border: none;width: 400px;">
		<div class="cards">
			<applycard state="待审核" name="前端工程师" date="2022-5-7"></applycard>
			<applycard state="待审核" name="前端开发实习生" date="2022-5-7"></applycard>
		</div>
	</div>
</template>

<script>
	import applycard from "./applycard.vue"
export default{
	name:"myApply",
	data(){
		return{
			schoolList:[]
		}
	},
	created() {
	// this.getSchoolList();
	},
	methods:{
		
		
	},
	components:{
		applycard,
	}
}
</script>

<style scoped="scoped">
	
	.myApplyHead{
		height: 100px;
		width: 100%;
		text-align: center;
		line-height: 100px;
		font-size: 30px;
	}
	.myApply{
		width: 100%;
		/* height: 657px; */
		/* background-color: #ff0000; */
		margin-top: 58px;
		margin-left: 10px;
		margin-right: 10px;
	}
/* 	.cards{
		float: left;
		display:inline-block;
	} */
</style>
