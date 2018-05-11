const glob = require('glob');
const path = require('path');
const router = require('koa-router')();

const routesPath = 'routers/**/*.routes.js';
const routeFiles = glob(routesPath, {
  sync: true
});
routeFiles.forEach((file) => {
  require(path.resolve(file))(router);
});

module.exports = router;

