const express=require("express");
const router = express.Router()
const userHandler = require('../router_handler/user.js')
const { update_user_schema,update_password_schema , update_userinfo_schema} = require('../schema/user')
const userinfo_handler = require('../router_handler/userinfo')

// 1. 导入验证表单数据的中间件
const expressJoi = require('@escook/express-joi')
// 2. 导入需要的验证规则对象
const { reg_login_schema } = require('../schema/user')

// router.post("/reguser",expressJoi(reg_login_schema),userHandler.regUser)
router.post("/reguser",userHandler.regUser)

router.post('/login',userHandler.login)
router.get('/userinfo',userinfo_handler.getUserInfo)


module.exports = router;