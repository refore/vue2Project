const db = require('../db/index')
const bcrypt = require('bcryptjs')


exports.addUserPosition = (req, res) => {
	//请求参数：用户名、职位名称、校招社招类型
	res.setHeader("Access-Control-Allow-Origin", "*");
	console.log("userpoisition!")
  // 接收请求数据
  var userPosition = req.body
  userPosition.time=new Date()
  // 判断数据是否合法
  if (!userPosition.username||!userPosition.positionname||!userPosition.type) {
    return res.cc(err)
  }
  const sql = 'select * from user_position where username=? and positionname=? and type=?'
  db.query(sql, [userPosition.username,userPosition.positionname,userPosition.type], function (err, results) {
    // 执行 SQL 语句失败
    if (err) {
      return res.cc(err)
    }
    // 用户名被占用
    if (results.length > 0) {
      return res.cc('该用户已投递该岗位！' )
    }
    // TODO: 用户名可用，继续后续流程...
	const sql2 = 'insert into user_position set ?'
	db.query(sql2, { username: userPosition.username, positionname: userPosition.positionname,state:0,type:userPosition.type,time:userPosition.time}, function (err, results) {
	  // 执行 SQL 语句失败
	  if (err) return res.cc(err)
	  // SQL 语句执行成功，但影响行数不为 1
	  if (results.affectedRows !== 1) {
	    return res.cc('投递失败！' )
	  }
	  // 注册成功
		
		res.send({
		  status: 0,
		  message: '投递成功！'
		})
	}) 
  })

  
}

exports.getUserPositionList = (req, res) => {
	//请求参数：用户名
	//要根据positionID和type从社招、校招表中分别获得职位名字
	const body = req.body;
	res.setHeader("Access-Control-Allow-Origin", "*");
	//获得该用户的所有申请
	const sql = 'select * from user_position where username=? '
	db.query(sql ,[body.username],(err, results) => {
	  // 1. 执行 SQL 语句失败
	  if (err) return res.cc(err)
	  // 2. 执行 SQL 语句成功，但是查询到的数据条数不等于 1
	  if (results.length == 0) return res.cc('没有信息！')
	console.log(results)

	  

	
	  console.log("node端获取申请列表成功！")
	  res.send({
	    status: 0,
	    message: '获取申请列表成功！',
	    data: results,
	  })
	  
	})
}