// 导入 express 模块
const express = require('express')
const cors = require('cors')
const userRouter = require('./router/user.js')
const bodyParser = require('body-parser')
const config = require('./config')
const { expressjwt: expressJWT }  = require('express-jwt')
const userinfoRouter = require('./router/userinfo')
const schoolinfoRouter = require('./router/schoolInfo.js')
const userPositionRouter = require('./router/userPosition.js')
const joi = require('@hapi/joi')

// 创建 express 的服务器实例
const app = express()
// 导入并使用用户信息路由模块





// 响应数据的中间件
app.use(function (req, res, next) {
  // status = 0 为成功； status = 1 为失败； 默认将 status 的值设置为 1，方便处理失败的情况
  res.cc = function (err, status = 1) {
    res.send({
      // 状态
      status,
      // 状态描述，判断 err 是 错误对象 还是 字符串
      message: err instanceof Error ? err.message : err,
    })
  }
  next()
})



// 使用 .unless({ path: [/^\/api\//] }) 指定哪些接口不需要进行 Token 的身份认证
//路径带api的不需要登录
app.use(expressJWT({ secret: config.jwtSecretKey ,algorithms: ["HS256"],}).unless({ path: [/^\/api\//] }))


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//路由注册并添加路径前缀/api
app.use('/api',schoolinfoRouter)
app.use('/api',userPositionRouter)

app.use('/api',userRouter)
app.use('/my', userinfoRouter)
// 将 cors 注册为全局中间件
app.use(cors())
app.use(express.urlencoded({ extended: false }))



app.use(function (err, req, res, next) {
  // 数据验证失败
  if (err instanceof joi.ValidationError) return res.cc(err)
  // 未知错误
  if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
  res.cc(err)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(3007, function () {
  console.log('api server running at http://127.0.0.1:3007')
})