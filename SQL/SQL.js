/**
 * SQL 模块
 * @summary 封装SQL语法
 * @author 周云鹏
 * @date 2018年12月18日
 */

//读取config数据库文件
const sqlite = require('./Config.js');

//查询 talbe(表名), column(列名), where(位置)
function Select(table, column, where) {
  return new Promise(function (resolve, reject) {
    column = (column === null) ? '*' : column;
    where = (where === null) ? '1=1' : where;
    sqlite.all(`select ${column} from ${table} where ${where}`, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      };
    });
  });
};

//增加 table(表名), column(列名), value(数值)
function Insert(table, column, value) {
  return new Promise(function (resolve, reject) {
    sqlite.run(`insert into ${table} (${column}) values (${value})`, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      };
    });
  });
};

//修改 table(表名), value(数值), where(位置)
function Update(table, value, where) {
  return new Promise(function (resolve, reject) {
    sqlite.run(`update ${table} set ${value} where ${where}`, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      };
    });
  });
};

//删除 table(表名), where(位置)
function Delete(table, where) {
  return new Promise(function (resolve, reject) {
    sqlite.run(`delete from ${table} where ${where}`, function (err) {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      };
    });
  });
};

module.exports = {
  Select,
  Insert,
  Update,
  Delete
};