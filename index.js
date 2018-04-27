const Koa = require('koa');
const path = require('path')
const config = require('./config.js');
const router = require('koa-router');
const bodyParser = require('koa-bodyparser')
const cors = require('koa-cors');
const app = new Koa();

app.use(cors());

app.use(bodyParser());

//  路由
app.use(require('./routers/blog.js').routes())


app.listen(config.port)

console.log(`listening on port ${config.port}`)
