// 导入数据库操作模块
const db = require('../db/index')
   const bcrypt = require('bcryptjs')

// 获取用户基本信息的处理函数
exports.getUserInfo = (req, res) => {
	const body = req.body;
	res.setHeader("Access-Control-Allow-Origin", "*");
	// const sql = 'select * from code_user_nodejs'
		const sql = 'select * from school_info'
	// 注意：req 对象上的 user 属性，是 Token 解析成功，expres-jwt 中间件帮我们挂载上去的
	db.query(sql ,(err, results) => {
	  // 1. 执行 SQL 语句失败
	  if (err) return res.cc(err)
	
	  // 2. 执行 SQL 语句成功，但是查询到的数据条数不等于 1
	  if (results.length == 0) return res.cc('没有信息！')
		console.log(results);
	  // 3. 将用户信息响应给客户端
	  res.send({
	    status: 0,
	    message: '获取用户基本信息成功！',
	    data: results,
	  })
	})
}
//请求的数据：id ，name,position,age
exports.updateUser=(req,res)=>{
	//第一个问号放一个对象，简便语法
	const sql = `update ev_users set ? where id=?`
	db.query(sql, [req.body, req.body.id], (err, results) => {
	  // 执行 SQL 语句失败
	  if (err) return res.cc(err)
	
	  // 执行 SQL 语句成功，但影响行数不为 1
	  if (results.affectedRows !== 1) return res.cc('修改用户基本信息失败！')
	
	  // 修改用户信息成功
	  return res.cc('修改用户基本信息成功！', 0)
	})
}

exports.updateUserInfo=(req,res)=>{
	//第一个问号放一个对象，简便语法
	const sql = `update code_user_nodejs set ? where id=?`
	db.query(sql, [req.body, req.body.id], (err, results) => {
	  // 执行 SQL 语句失败
	  if (err) return res.cc(err)
	
	  // 执行 SQL 语句成功，但影响行数不为 1
	  if (results.affectedRows !== 1) return res.cc('修改用户基本信息失败！')
	
	  // 修改用户信息成功
	  return res.cc('修改用户基本信息成功！', 0)
	})
}
exports.updatePassword = (req, res) => {
 // 定义根据 id 查询用户数据的 SQL 语句
 const sql = `select * from ev_users where id=?`
 console.log(req.body)
 // 执行 SQL 语句查询用户是否存在
 db.query(sql, req.body.id, (err, results) => {
   // 执行 SQL 语句失败
   if (err) return res.cc(err)
 
   // 检查指定 id 的用户是否存在
   if (results.length !== 1) return res.cc('用户不存在！')
 
   // TODO：判断提交的旧密码是否正确
   // 在头部区域导入 bcryptjs 后，
   // 即可使用 bcrypt.compareSync(提交的密码，数据库中的密码) 方法验证密码是否正确
   // compareSync() 函数的返回值为布尔值，true 表示密码正确，false 表示密码错误

   
   // 判断提交的旧密码是否正确
   const compareResult = bcrypt.compareSync(req.body.oldPwd, results[0].password)
   if (!compareResult) return res.cc('原密码错误！')
   
   // 定义更新用户密码的 SQL 语句
   const sql2 = `update ev_users set password=? where id=?`
   
   // 对新密码进行 bcrypt 加密处理
   const newPwd = bcrypt.hashSync(req.body.newPwd, 10)
   
   // 执行 SQL 语句，根据 id 更新用户的密码
   db.query(sql2, [newPwd, req.body.id], (err, results) => {
     // SQL 语句执行失败
     if (err) return res.cc(err)
   
     // SQL 语句执行成功，但是影响行数不等于 1
     if (results.affectedRows !== 1) return res.cc('更新密码失败！')
   
     // 更新密码成功
     res.cc('更新密码成功！', 0)
   })
   
 })
}