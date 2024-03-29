const { Sequelize } = require('sequelize')
const { MYSQL_HOST, MYSQL_PORT, MYSQL_USER, MYSQL_PWD, MYSQL_DB, MYSQL_DIALECT } = require('../config')

const seq = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  port: MYSQL_PORT,
  user: MYSQL_USER,
  password: MYSQL_PWD,
  database: MYSQL_DB,
  dialect: MYSQL_DIALECT,
  multipleStatements: true
})

module.exports = seq
