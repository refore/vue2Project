<template>
	<div class="school">
		<div class="socialHead">社会招聘</div>
		<el-collapse accordion>
		  <el-collapse-item  v-for="item in socialList" ref="positionRef">
		    <template class = "socialtitle" slot="title">
		      {{item.positionname}}
		    </template>
		    <div class="describe">{{item.describe}}</div>
		    
			 <div class="apply">
				 <el-button class="apply" type="primary" @click="positionInfo.positionname=item.positionname;doPost()" plain >立即投递</el-button>
			 </div>
		  </el-collapse-item>
		</el-collapse>
		
		
		
	</div>
</template>

<script>
export default{
	name:"social",
	data(){
		return{
			socialList:[],
			positionInfo:{positionname:'',username:this.username,type:1},
			//type为0表示是校招岗位
		}
	},
	props:{
		username:''
	},
	created() {
		
	this.getSocialList();
	},
	methods:{
		async getSocialList(){
			console.log("前端获取成功！");
		 const { data: res } = await this.$http.get('/api/socialInfo');
		  if(res.status!==0){this.$message("获取数据异常！")}
		  else{
			  console.log(res.data);
			  this.socialList=res.data;

		  }
		},
		doPost(){
			if(this.username=='登录'){
				this.$router.push({
					path:`/userApply/${this.username}`
				})
			}
			else{
				this.addPosition()
			}
		},
		async addPosition(){
			console.log(this.positionInfo)

				const { data: res } = await this.$http.post('/api/addUserPosition', this.positionInfo);
				if (res.status !== 0) this.$message.error("投递失败");
				else{this.$message.success('岗位投递成功');
				}
				// res.status 等于 0 表示数据请求成功，否则，请求失败！
		},
			
	
	},
}
	
</script>

<style >
.socialHead{
	height: 100px;
	width: 100%;
	text-align: center;
	line-height: 100px;
	font-size: 30px;
}
/* .el-collapse-item__header{
	font-size: 200px;
} */
.social{
	/* width: 100%; */
	/* height: 657px; */
	/* background-color: #ff0000; */
	margin-top: 58px;
	margin-left: 30px;
	margin-right: 30px;
}
.describe{
	margin: 50px 50px;
}
.apply{
	text-align: center;
}
	
	
</style>
