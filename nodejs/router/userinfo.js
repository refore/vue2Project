const express = require('express')
const router = express.Router()
// 导入用户信息的处理函数模块
const userinfo_handler = require('../router_handler/userinfo')
// 导入验证数据合法性的中间件
const expressJoi = require('@escook/express-joi')
// 导入需要的验证规则对象
const { update_user_schema,update_password_schema , update_userinfo_schema} = require('../schema/user')
// 获取列表信息

// 更新用户的基本信息
router.post('/user', expressJoi(update_user_schema), userinfo_handler.updateUser)
//更新列表信息
router.post('/userinfo', expressJoi(update_userinfo_schema), userinfo_handler.updateUserInfo)

router.post('/updatepwd',expressJoi(update_password_schema), userinfo_handler.updatePassword)
// 向外共享路由对象
module.exports = router