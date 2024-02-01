const jwt = require('jsonwebtoken')
const { authFailure, authExpired } = require('../constant/unusual.constant')
const auth = async (ctx, next) => {
  const { authorization = '' } = ctx.request.header
  const token = authorization.replace('Bearer ', '')
  try {
    const user = jwt.verify(token)
    ctx.state.user = user
  } catch (err) {
    switch (err.name) {
      case 'TokenExpiredError':
        return ctx.app.emit('error', authExpired, ctx)
      case 'JsonWebTokenError':
        return ctx.app.emit('error', authFailure, ctx)
    }
    return
  }
  await next()
}
module.exports = {
  auth
}
