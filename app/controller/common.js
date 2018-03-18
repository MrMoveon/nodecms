'use strict';

const Controller = require('egg').Controller;

class CommonController extends Controller {

    /**
     * @description 成功跳转页
     * @param  {} message 信息
     * @param  {} url   跳转地址
     * @param  {} wait=3 等待时间，自动跳转
     * @example 
     * this.success('添加成功','/admin/manager/add')
     */
    async success(message,url,wait=3) {
        var {ctx} = this;
        var url =url || ctx.referer;
        await ctx.render('admin/jump',{type:'success',message:message,url:url,wait:wait})
    }
    /**
     * @description 失败跳转页
     * @param  {} message 信息
     * @param  {} url   跳转地址
     * @param  {} wait=3 等待时间，自动跳转
     * @example 
     * this.error('添加失败','/admin/manager/add')
     */
    async error(message,url,wait=3) {
        var {ctx} = this;
        var url =url || ctx.referer;
        await ctx.render('admin/jump',{type:'error',message:message,url:url,wait:wait})
    }
    
}

module.exports = CommonController;
