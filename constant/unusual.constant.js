// 异常反参
module.exports = {
  authFailure: {
    code: 10000,
    message: '鉴权失败'
  },
  authExpired: {
    code: 10001,
    message: 'token过期'
  },
  userRegister: {
    code: 10002,
    message: '注册失败'
  },
  userAlready: {
    code: 10003,
    message: '用户名已经存在'
  }
}
