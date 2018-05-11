



const moment = require('moment');
const multer = require('koa-multer');
const formidable = require('formidable');
const fs = require('fs');
const sqlModule = require('../lib/sqlModule');
const retValue = require('../lib/retValue');

module.exports = function (router) {
  router.get('/onlytest', async(ctx,next)=>{
     ctx.response.body = 'yyy';
  })
  // 插入文章
  router.post('/blog/insertArticle', async (ctx, next) => {
    const queryData = ctx.request.body;
    await sqlModule.insertArticle([queryData.title, queryData.sort, queryData.digest, queryData.content, new Date()])
      .then(result => {
        ctx.body = {
          content: retValue(true, null)
        };
      }).catch((err) => {
        ctx.response.status = '500';
        ctx.body = {
          content: retValue(false, null),
          error: err
        };
      })
  })

  // 上传图片
  router.post('/upload.do', async (ctx, next) => {
    const form = new formidable.IncomingForm(),
      files = [],
      fields = [],
      docs = [];
    //存放目录  
    form.uploadDir = 'assests/';
    ctx.res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    form.on('field', function (field, value) {
      //console.log(field, value);  
      fields.push([field, value]);
    }).on('file', function (field, file) {
      files.push([field, file]);
      docs.push(file);
      var types = file.name.split('.');
      var date = new Date();
      var ms = Date.parse(date);
      fs.renameSync(file.path, `assests/files${ms}_${file.name}`);
    }).on('end', function () {
      console.log('-> upload done');
      console.log(docs);
      ctx.res.end(JSON.stringify(docs));
      // ctx.body = '123321'
    });

    form.parse(ctx.req, function (err, fields, files) {
      err && console.log('formidabel error : ' + err);
      console.log('parsing done');
    });
  })

  // 新增分类
  router.post('/blog/insertSort', async (ctx, next) => {
    const queryData = ctx.request.body;
    console.log(queryData);
    await sqlModule.insertSort([queryData.name, queryData.type, queryData.description, queryData.logo, new Date()])
      .then(result => {
        console.log(result);
        ctx.body = {
          content: retValue(true, null)
        };
      }).catch((err) => {
        console.log(err);
        ctx.response.status = '500';
        ctx.body = {
          content: retValue(false, null),
          error: err
        };
      })
  })
}