const route = require('koa-router')
const router = new route({ prefix: '/user' })
// const { auth } = require('../middleware')
const { login } = require('../middleware/user.middleware')
router.post('/login', login)

module.exports = router
