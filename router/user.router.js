const route = require('koa-router')
const router = new route({ prefix: '/user' })
const { auth } = require('../middleware')
router.get('/', auth)

module.exports = router
