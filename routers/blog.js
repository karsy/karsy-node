const router = require('koa-router')();
const moment = require('moment');
const sqlModule = require('../lib/sqlModule');
const retValue = require('../lib/retValue');

// 插入文章
router.post('/blog/insertArticle', async(ctx, next) => {
  const queryData = ctx.request.body;
  console.log(queryData);
  await sqlModule.insertArticle([queryData.title, queryData.sort, queryData.digest, queryData.content, new Date()])
          .then(result => {
              ctx.body = {
                content: retValue(true, null)
              };
          }).catch((err)=>{
            ctx.response.status = '500';
            ctx.body = {
              content: retValue(false, null),
              error: err
            };
          })  
})

// 新增分类
router.post('/blog/insertSort', async(ctx, next) => {
  const queryData = ctx.request.body;
  await sqlModule.insertSort(['javascript', 'javascript','html5', new Date(1524811580694)])
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