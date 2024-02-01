const route = require('koa-router')
const router = new route({ prefix: '/user' })
router.get('/', async (ctx) => {
  ctx.body = {
    msg: '111',
    code: '200',
    data: '123456'
  }
})

module.exports = router
