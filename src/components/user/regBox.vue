<template>
	<!-- 父组件中使用ref控制变量 -->
	<div class="register">
		<el-dialog
		  title="新用户请注册"
		  :visible.sync="displayCreateDialog"
		  width="30%"
		  @close="resetAddForm()"
		  center
		 >
		  <div class="inputUser">
			<el-form  :model="form" label-width="80px" :rules="rules" ref="addFormRef">
				<el-form-item label="用户名" prop="username">
				    <el-input v-model="form.username" placeholder="请输入2~8位用户名"></el-input>
				  </el-form-item>
				<el-form-item label="密码" prop="password">
				    <el-input type="password" placeholder="请输入2~8位密码" v-model="form.password"></el-input>
				  </el-form-item> 
					
			</el-form>
			  
		  </div>
		  <span slot="footer" class="dialog-footer">
		    <el-button @click="displayCreateDialog = false;">取 消</el-button>
		    <el-button type="primary"  @click="submitUser()">注 册</el-button>
			<br>
			<span class="tolog">已有账号？立即登录</span>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'regBox',
		data() {
			let checkAge=(rule, value, callback)=>{
				let reg=/\W/g
				if(reg.test(value)){
					return callback(new Error('请输入数字或字母'));
				}
				callback();
			};
	
			return {
				displayCreateDialog:false,
				userList: [],
				// displayCreateDialog:false,
				form:{
					username:"",
					password:"",
				},
				rules:{
					username:[
						 { required: true, message: '请输入用户名', trigger: 'blur' },
						 { min:2,max:8 , message: '请输入2~8位', trigger: 'blur' },
					],
					password:[
						{required: true, message: '请输入密码', trigger: 'blur'},
						{validator:checkAge,trigger: 'blur' },
						{ min:2,max:8 , message: '请输入2~8位', trigger: 'blur' },
					],
					
				},
				
			}
		},
		created() {
		
		},
		emits:['emitUsername'],
		methods:{

			async submitUser(){
				 this.$refs.addFormRef.validate(async (isValid)=>{
					if(!isValid){
						//根据rules判断是否符合规范
						return;
						}
					const { data: res } = await this.$http.post('/api/reguser', this.form);
					if (res.status !== 0) this.$message.error("注册失败");
					else{this.$message.success('注册成功');
					this.$emit('emitUsername',this.form.username);
					}
					this.displayCreateDialog = false;
					
				})
				// res.status 等于 0 表示数据请求成功，否则，请求失败！
			},
			resetAddForm(){
				this.$refs.addFormRef.resetFields();
			},

			
			
			}
}
	
	
</script>

<style>
.register{
	/* width: 100%; */
	/* height: 657px; */
	/* background-color: #ff0000; */
	margin-top: 58px;
	margin-left: 30px;
	margin-right: 30px;
}
.tolog{
	color: #409EFF;
	font-size: 14px;
	margin-top: 5px;
	cursor: pointer;
}
</style>
