'use strict';

module.exports = () => {
    return async function checkLogin(ctx, next) {
        var s = /login/g;
        // 存在用户登录session，可以访问后台
       
        if (ctx.session.user && ctx.session.user.id) {
            //如果是登录页，重定向到/admin    
            if (s.test(ctx.originalUrl)) {
               ctx.redirect('/admin')
            }
            await next();
        } else {
            //不存在用户session
            //也不是登录页，就重定向到登录页
            if (!s.test(ctx.originalUrl)) {
                ctx.redirect('/login')
            } else {
                await next();
            }
        }

    }

}