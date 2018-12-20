## Sqlite3 SQL封装模块
#### Select 封装
使用方法：如果列名和位置默认为空，传null

```
function select() {
  return new Promise(async function (resolve, reject) {
    await Select('表名', '列名', '位置');
    resolve(true);
  });
};
```
#### Insert 封装
使用方法：

```
function insert() {
  return new Promise(async function (resolve, reject) {
    let a = await Insert('表名', '列名', '数值');
    resolve(true);
  });
};
```
#### Update 封装
使用方法：

```
function update() {
  return new Promise(async function (resolve, reject) {
    let a = await Update('表名', '数值', '位置');
    resolve(true);
  });
};
```
#### Delete 封装

使用方法：

```
function delete () {
  return new Promise(async function (resolve, reject) {
    let a = await Delete('表名', '位置');
    resolve(true)
  });
};
```