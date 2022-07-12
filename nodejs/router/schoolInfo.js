const express = require('express')
const router = express.Router()
// 导入用户信息的处理函数模块
const schoolInfo_handler = require('../router_handler/schoolInfo.js')
const { reg_login_schema } = require('../schema/user')
const expressJoi = require('@escook/express-joi')
const userHandler = require('../router_handler/user.js')
// 导入验证数据合法性的中间件

// 导入需要的验证规则对象

// 获取列表信息

router.get('/schoolInfo',schoolInfo_handler.getSchoolInfo)
router.get('/socialInfo',schoolInfo_handler.getSocialInfo)
// 向外共享路由对象
module.exports = router