<template>
	<div class="login">
		<button type="button">asudgsagduiasdguasdhiasdhasiu</button>
		<el-button type="primary"  size="mini" @click="displayCreateDialog=true">添加用户</el-button>
		<el-dialog
		  title="提示"
		  :visible.sync="displayCreateDialog"
		  width="30%"
		  @close="resetAddForm()"
		 >
		  <div class="inputUser">
			<el-form  :model="form" label-width="80px" :rules="rules" ref="addFormRef">
				<el-form-item label="用户名" prop="name">
				    <el-input v-model="form.name"></el-input>
				  </el-form-item>
				<el-form-item label="年龄" prop="age">
				    <el-input v-model.number="form.age"></el-input>
				  </el-form-item>
					<el-form-item label="职位" prop="position">
					<el-input v-model="form.position"></el-input>
					</el-form-item> 
			</el-form>
			  
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="displayCreateDialog = false;">取 消</el-button>
		    <el-button type="primary"  @click="submitUser()">确 定</el-button>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'loginBox',
		props:{
			displayCreateDialog:{
				default:false
			}
		},
		data() {
			let checkAge=(rule, value, callback)=>{
				if(!Number.isInteger(value)){
					return callback(new Error('请输入数字'));
				}
				if(value<0||value>200){
					return callback(new Error('年龄不合规范'));
				}
				callback();
			};
	
			return {
				userList: [],
				// displayCreateDialog:false,
				form:{
					name:"",
					age:"",
					position:""
				},
				rules:{
					name:[
						 { required: true, message: '请输入用户名', trigger: 'blur' },
						 { min:1,max:15 , message: '用户名过长', trigger: 'blur' },
					],
					age:[
						{required: true, message: '请输入名字', trigger: 'blur'},
						{validator:checkAge,trigger: 'blur' }
					],
					position:[
						{required: true, message: '请输入名字', trigger: 'blur'},
						]
				},
				
			}
		},
		created() {
		
		},
		methods:{
			
		
			submitUser(){
				 this.$refs.addFormRef.validate(async (isValid)=>{
					if(!isValid){
						return;
						}
					const { data: res } = await this.$http.post('/api/users', this.form);
					if (res.status !== 0) this.$message.error("失败");
					else{this.$message.success('这是一条消息提示');}
					this.displayCreateDialog = false;
					
				})
				// res.status 等于 0 表示数据请求成功，否则，请求失败！
			},
			resetAddForm(){
				console.log("ssssss");
				this.$refs.addFormRef.resetFields();
			},

			
			
			}
}
	
	
</script>

<style>
.login{
	/* width: 100%; */
	/* height: 657px; */
	/* background-color: #ff0000; */
	margin-top: 58px;
	margin-left: 30px;
	margin-right: 30px;
}
</style>
