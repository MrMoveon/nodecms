'use strict';

const Controller = require('egg').Controller;

class BaseController  extends Controller {
    // 添加成功跳转页
    async jump(type='success',message,url,wait=3) {
        var {ctx} = this;
        var url =url || ctx.referer;
        await ctx.render('admin/jump',{type:type,message:message,url:url,wait:wait})
    }
    
    
}

module.exports = BaseController;
