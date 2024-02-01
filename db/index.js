const { Sequelize } = require('sequelize')
const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require('../config')

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  dialect: 'mysql',
  timestamps: true, //添加/去除createAt updateAt
  freezeTableName: false, //使用自定义表名
  paranois: false,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: false, //删除数据时不删除数据，而是更新deleteAt字段 如果需要设置为true，则上面的deleteAt字段不能为false，也就是说必须启用
  timezone: '+08:00', //中国时间
  dialectOptions: {
    dateStrings: true, //查询数据时间戳格式化
    typeCast: true
  }
})

module.exports = seq
