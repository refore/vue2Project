const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

exports.regUser = (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
  // 接收表单数据
  const userinfo = req.body
  // 判断数据是否合法
  console.log(req.body)
  if (!userinfo.username||!userinfo.password) {
    return res.cc(err)
  }
  const sql = 'select * from ev_users where username=?'
  db.query(sql, [userinfo.username], function (err, results) {
    // 执行 SQL 语句失
    if (err) {
      return res.cc(err)
    }
    // 用户名被占用
   else if (results.length > 0) {
      return res.cc('用户名被占用，请更换其他用户名！' )
    }
    // TODO: 用户名可用，继续后续流程...
	//???????
	userinfo.password = bcrypt.hashSync(userinfo.password, 10)
	
	const sql2 = 'insert into ev_users set ?'
	db.query(sql2, { username: userinfo.username, password: userinfo.password }, function (err, results) {
	  // 执行 SQL 语句失败
	  if (err) return res.cc(err)
	  // SQL 语句执行成功，但影响行数不为 1
	 else if (results.affectedRows !== 1) {
	    return res.cc('注册用户失败，请稍后再试！' )
	  }
	  // 注册成功
	  res.cc('注册成功',0)
	})
  })
  
  
  
}

exports.login = (req, res) => {
	res.setHeader("Access-Control-Allow-Origin", "*");
	// res.setHeader( "Access-Control-Max-Age", "2592000" )
	// res.setHeader("Access-Control-Allow-Headers","content")
	const userinfo = req.body
	const sql = 'select * from ev_users where username=?'
	//查询用户名
	db.query(sql, userinfo.username, function (err, results) {
	  // 执行 SQL 语句失败
	  if (err) return res.cc(err)
	  // 执行 SQL 语句成功，但是查询到数据条数不等于 1
	  if (results.length !== 1) return res.cc('用户名不存在！')
	  // TODO：判断用户输入的登录密码是否和数据库中的密码一致
	  // 拿着用户输入的密码,和数据库中存储的密码进行对比
	  const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
	  
	  // 如果对比的结果等于 false, 则证明用户输入的密码错误
	  if (!compareResult) {
	    return res.cc('登录失败！')
	  }
	  
	  // TODO：登录成功，生成 Token 字符串
	  //剔除 **密码** 
	  const user = { ...results[0], password: '' }
	  
	  // 生成 Token 字符串
	  const tokenStr = jwt.sign(user, config.jwtSecretKey, {
	    expiresIn: '10h', // token 有效期为 10 个小时
	  })
	  
	  res.send({
	    status: 0,
	    message: '登录成功！',
	    // 为了方便客户端使用 Token，在服务器端直接拼接上 Bearer 的前缀
	    token: 'Bearer ' + tokenStr,
	  })
	  
	})
	
	
	
 
}