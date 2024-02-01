const fs = require('fs')
const route = require('koa-router')
const router = new route()
fs.readdirSync(__dirname).forEach((file) => {
  if (file !== 'index.js') {
    const r = require('./' + file)
    router.use(r.routes())
  }
})
module.exports = router
