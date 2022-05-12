<template>
	<div class="school">
		<div class="schoolHead">校园招聘</div>
		<el-collapse accordion>
		  <el-collapse-item  v-for="item in schoolList">
		    <template class = "schooltitle" slot="title">
		      {{item.positionname}}
		    </template>
		    <div class="describe">{{item.describe}}</div>
		    
			 <div class="apply">
				 <el-button class="apply" type="primary" plain>立即投递</el-button>
			 </div>
		  </el-collapse-item>
		</el-collapse>
		
		
		
	</div>
</template>

<script>
export default{
	name:"school",
	data(){
		return{
			schoolList:[]
		}
	},
	created() {
	this.getSchoolList();
	},
	methods:{
		async getSchoolList(){
			console.log("前端获取成功！");
					  const { data: res } = await this.$http.get('/api/schoolInfo');
					  if(res.status!==0){this.$message("获取数据异常！")}
					  else{
						  console.log(res.data);
						  this.schoolList=res.data;

					  }
		},
		//  getSchoolList(){
		// 	console.log("前端获取成功！");
		// 			  this.$http.get('/api/schoolInfo').then((res)=>{
		// 				  console.log(res.data);
		// 				  if(res.status!==0){this.$message("获取数据异常！")}
		// 			  else{
		// 				  console.log(res.data);
		// 				  this.schoolList=res.data;
		
		// 			  }
		// 			  })
					  
		// }
	}
}
	
</script>

<style >
.schoolHead{
	height: 100px;
	width: 100%;
	text-align: center;
	line-height: 100px;
	font-size: 30px;
}
/* .el-collapse-item__header{
	font-size: 200px;
} */
.school{
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
