const { Select, Insert, Update, Delete } = require('./SQL/SQL.js');

function select() {
  return new Promise(async function (resolve, reject) {
    let a = await Select('user', null, null);
    console.log(a);
    resolve(true);
  });
};

function insert() {
  return new Promise(async function (resolve, reject) {
    let a = await Insert('user', 'name, number', `'李祎帆', 123`);
    console.log(a);
    resolve(true);
  });
};

function update() {
  return new Promise(async function (resolve, reject) {
    let a = await Update('user', 'number = 123456789', `name = '周云鹏'`);
    console.log(a);
    resolve(true);
  });
};

function delete1 () {
  return new Promise(async function (resolve, reject) {
    let a = await Delete('user', `name = '张晗雨'`);
    console.log(a);
    resolve(true)
  });
};

delete1 ();