const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const cors = require('koa-cors');
const routers = require('./routers/load-router.js');
const config = require('./config.js');

const app = new Koa();

// 设置跨域
app.use(cors());

app.use(bodyParser());


// app.use(require('./routers/blog.js').routes())

// 统一错误处理
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.response.status = err.statusCode || err.status || 500;
    ctx.response.body = {
      message: err.message
    };
  }
});

//  路由
app.use(routers.routes());

app.listen(config.port);

console.log(`listening on port ${config.port}`);
