<template>
	<div class="userInfo">
		<div class="infoHead">我的简历</div>
		<hr style="height: 1px;background-color: #d8d8d8;border: none;width: 400px;">
		<div class="upload">
			<el-upload
			  class="upload-demo"
			  action="https://jsonplaceholder.typicode.com/posts/"
			  :on-preview="handlePreview"
			  :on-remove="handleRemove"
			  :before-remove="beforeRemove"
			  multiple
			  :limit="3"
			  :on-exceed="handleExceed"
			  :file-list="fileList">
			  <el-button size="small" type="primary">点击上传</el-button>
			  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
			</el-upload>
		</div>
		
<el-tooltip class="item" effect="dark" content="Top Left 提示文字" placement="top-start">
         <div class="aa"> dsd</div>
        </el-tooltip>		
		
	</div>
</template>

<script>
export default{
	name:"userInfo",
	methods:{
		 handleRemove(file, fileList) {
		        console.log(file, fileList);
		      },
		      handlePreview(file) {
		        console.log(file);
		      },
		      handleExceed(files, fileList) {
		        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
		      },
		      beforeRemove(file, fileList) {
		        return this.$confirm(`确定移除 ${ file.name }？`);
		      }
	}
}
	
	
	
	
	
</script>

<style scoped="">
	.aa{
		display: inline-block;
	}
	.userInfo{
		width: 100%;
		/* height: 657px; */
		/* background-color: #ff0000; */
		margin-top: 58px;
		margin-left: 10px;
		margin-right: 10px;
	}
	.infoHead{
		height: 100px;
		width: 100%;
		text-align: center;
		line-height: 100px;
		font-size: 30px;
	}
	.upload{
		padding-top: 100px;
		height: 300px;
		width: 100%;
		text-align: center;
		/* line-height: 300px; */
	}
</style>
