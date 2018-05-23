
const sqlModule = require('../../lib/sqlModule');
const retValue = require('../../lib/retValue');

module.exports = function (router) {
  // 查询菜单
  router.get('/queryMenu', async (ctx) => {
    await sqlModule.queryMenu()
      .then((result) => {
        ctx.body = {
          content: retValue(true, result)
        };
      }).catch((err) => {
        console.log(err);
        ctx.response.status = '500';
        ctx.body = {
          content: retValue(false, []),
          error: err
        };
      });
  });
};
