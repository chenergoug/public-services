const bcrypt = require('bcryptjs')
const { getUserInfo } = require('../service/user.service')
const { userRegister } = require('../constant/unusual.constant')
// 登录
const login = async (ctx, next) => {
  const { user_name, password } = ctx.request.body

  try {
    const res = await getUserInfo({ user_name })
    console.log('res', res)
    if (res) {
      return ctx.app.emit('error', userAlready, ctx)
    }
  } catch (err) {
    return ctx.app.emit('error', userRegister, ctx)
  }
  await next()
}

module.exports = {
  login
}
