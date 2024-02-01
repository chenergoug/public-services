const path = require('path')
const Koa = require('koa')
const koaStatic = require('koa-static')
const koaBody = require('./body')
const paramenter = require('koa-parameter')
const error = require('./error')
const router = require('../router')
const app = new Koa()

app.use(koaBody())
// 文件读取地址
app.use(koaStatic(path.join(__dirname, '../uploads')))
// 格式校验
app.use(paramenter(app))
// 加载路由
app.use(router.routes())
app.use(router.allowedMethods())
// 错误统一处理
app.on('error', error)

module.exports = app
