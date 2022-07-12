<template>
	<!-- 父组件中使用ref控制变量 -->
	<div class="login">
		<el-dialog
		  title="请登录"
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
		    <el-button type="primary"  @click="submitUser()">登 录</el-button>
			<br>
			<span class="toReg" @click="goToRegBox()">没有账号？立即注册</span>
		  </span>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		name: 'loginBox',
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
		emits:['emitUsername','goToRegBox'],
		methods:{

			async submitUser(){
				 this.$refs.addFormRef.validate(async (isValid)=>{
					if(!isValid){
						//根据rules判断是否符合规范
						return;
						}
					const { data: res } = await this.$http.post('/api/login', this.form);
					if (res.status !== 0) this.$message.error("登陆失败");
					else{this.$message.success('登录成功');
					this.$emit('emitUsername',this.form.username);
					}
					this.displayCreateDialog = false;
					
				})
				// res.status 等于 0 表示数据请求成功，否则，请求失败！
			},
			resetAddForm(){
				this.$refs.addFormRef.resetFields();
			},
			goToRegBox(){
				// alert("登录box关闭！")
				// this.displayCreateDialog = false;
				
				this.$emit('goToRegBox');
				
			}
			
			
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
.toReg{
	color: #409EFF;
	font-size: 14px;
	margin-top: 5px;
	cursor: pointer;
}
</style>
