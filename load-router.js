const glob = require('glob');
const router = require('koa-router')();
const path = require('path');
const routesPath = 'routers/**/*.routes.js';
const routeFiles = glob(routesPath, {
        sync: true
});
routeFiles.forEach(file => {
    require(path.resolve(file))(router);
});

module.exports = router;