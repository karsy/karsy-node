/*
 * @Author: yanhongwei 
 * @Date: 2018-05-11 09:55:55 
 * @Last Modified by: yanhongwei
 * @Last Modified time: 2018-05-11 09:56:41
 */


module.exports = (router)=>{
    router.get('/yhw',async(ctx, next) => {
        ctx.response.body = 'yhw is god';
    })
}