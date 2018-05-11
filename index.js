
const Koa = require('koa');
const path = require('path')
const config = require('./config.js');
const router = require('koa-router');
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors');
const app = new Koa();
// const router = require('koa-router')();
// const test = require('./load-router')
app.use(cors());

app.use(bodyParser());
// console.log('test:',test);


//  路由
// app.use(require('./routers/blog.js').routes())
//统一加载路由
app.use(require('./load-router.js').routes())

app.listen(config.port)

console.log(`listening on port ${config.port}`)
