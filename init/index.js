const sqlModule = require('../lib/sqlModule');
const sql = require('./sql');

const tables = Object.keys(sql).map((item) => {
  return sqlModule.createTable(sql[item]);
});

// 建表
Promise.all(tables)
  .then(() => {
    console.log('[SUCCESS] sql脚本文件执行成功 O(∩_∩)O !');
    console.log('请按 ctrl + c 键退出！');
  }).catch((err) => {
    console.log(err);
    console.log('[ERROR] sql脚本文件执行失败 o(╯□╰)o ！');
  })