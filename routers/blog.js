const router = require('koa-router')();
const moment = require('moment');
const sqlModule = require('../lib/sqlModule');
const retValue = require('../lib/retValue');

// 插入文章
router.post('/blog/insertArticle', async(ctx, next) => {
  const queryData = ctx.request.body;
  console.log(queryData);
  await sqlModule.insertArticle(['第一篇', '摘要', '我是内容我是内容', new Date(1524811580694)])
          .then(result => {
              console.log(result);
              ctx.body = {
                content: retValue(true, null)
              };
          }).catch((err)=>{
            console.log(err);
            ctx.response.status = '500';
            ctx.body = {
              content: retValue(false, null),
              error: err
            };
          })  
})

module.exports = router;