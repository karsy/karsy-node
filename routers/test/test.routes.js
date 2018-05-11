const ctrl = require('./test.controller');
// 为避免路由冲突 命名时可以采用 /文件夹名/xx
module.exports = (router)=>{
    router.get('/test/a',ctrl.test)
}