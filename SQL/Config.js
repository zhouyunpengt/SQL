/**
 * SQL Config 模块
 * @summary 设置sqlite3数据库地址
 * @author 周云鹏
 * @date 2018年12月18日
 */

const sqlite3 = require('sqlite3');
const sqlite = new sqlite3.Database('./db/database.db');

module.exports = sqlite;