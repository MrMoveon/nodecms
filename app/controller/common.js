'use strict';

const Controller = require('egg').Controller;

class CommonController extends Controller {
    /**
     * @description 添加成功跳转页
     * @param {*} type String success or error
     * @param {*} message String
     * @param {*} url 跳转地址
     * @param {*} wait 等待时间，自动跳转
     * @example 
     * this.jump('success','添加成功','/admin/manager/add',3)
     * this.jump('error','添加失败','/admin/manager/add',3)
     */
    async jump(type='success',message,url,wait=3) {
        var {ctx} = this;
        var url =url || ctx.referer;
        await ctx.render('admin/jump',{type:type,message:message,url:url,wait:wait})
    }
    
    
}

module.exports = CommonController;
