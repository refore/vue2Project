const express = require('express')
const router = express.Router()
// 导入用户信息的处理函数模块
const schoolInfo_handler = require('../router_handler/schoolInfo.js')
// 导入验证数据合法性的中间件

// 导入需要的验证规则对象

// 获取列表信息

router.get('/schoolInfo',schoolInfo_handler.getSchoolInfo)
// 向外共享路由对象
module.exports = router