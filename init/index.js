const sqlModule = require('../lib/sqlModule');
const { users, article } = require('./sql');

// 打印脚本执行日志
const eventLog = function( err , sqlFile, index ) {
  if( err ) {
    console.log(`[ERROR] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行失败 o(╯□╰)o ！`)
  } else {
    console.log(`[SUCCESS] sql脚本文件: ${sqlFile} 第${index + 1}条脚本 执行成功 O(∩_∩)O !`)
  }
}

Promise.all([sqlModule.createTable(users), sqlModule.createTable(article)])
  .then(() => {
    console.log('[SUCCESS] sql脚本文件执行成功 O(∩_∩)O !');
    console.log('请按 ctrl + c 键退出！');
  }).catch((err) => {
    console.log(err);
    console.log('[ERROR] sql脚本文件执行失败 o(╯□╰)o ！');
  })