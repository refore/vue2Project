<template>
	<div class="myApply">
		<div class="myApplyHead">我的申请</div>
		<hr style="height: 1px;background-color: #d8d8d8;border: none;width:400px;">
		<template v-if="isEmpty">
			<div class="info">尚未申请岗位，快去投递吧</div>
		</template>
		<template v-else>
			<div class="cards">
				<template v-for="item in userPositionList">
					<applycard :state="item.state" :name="item.positionname" :date="item.time" :type="item.type"></applycard>
					
				</template>
			</div>
		</template>
		
	</div>
</template>

<script>
	import applycard from "./applycard.vue"
export default{
	name:"myApply",
	data(){
		return{
			userPositionList:[],
			isEmpty:false
		}
	},
	props:{
		username:''
	},
	created() {
	this.getuserPositionList();
	},
	methods:{
		async getuserPositionList(){
		console.log("用户申请列表获取中");
	  console.log(this.username);
	  var postInfo={username:this.username}
		 const { data: res } = await this.$http.post('/api/getUserPositionList',postInfo);
		  if(res.status!==0){
			  this.isEmpty=true
			  }
		  else{
			  console.log(res.data);
			  this.userPositionList=res.data;
			this.userPositionList.forEach((item,index)=>{
				if(item.state=="0"){item.state="未审核"}
				if(item.type==0){item.type="校招"}
				else{item.type="社招"}
				let a = ""+item.time
				item.time=a.slice(0,10)
			})
		  }
		},
		
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
		/* width: 100%; */
		/* height: 657px; */
		/* background-color: #ff0000; */
		margin-top: 58px;
		margin-left: 10px;
		margin-right: 10px;
		/* overflow:scroll; */
	}
	.cards{
		display:flex;
		 justify-content: center;    align-items: center;
		 flex-wrap: wrap;
	}
	.info{
		font-size: 50px;
		color: #888;
		text-align: center;
		margin-top: 50px;
	}
</style>
