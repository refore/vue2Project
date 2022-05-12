// 导入数据库操作模块
const db = require('../db/index')
const bcrypt = require('bcryptjs')

// 获取用户基本信息的处理函数
exports.getSchoolInfo = (req, res) => {
	const body = req.body;
	console.log("shool!")
	res.setHeader("Access-Control-Allow-Origin", "*");
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



