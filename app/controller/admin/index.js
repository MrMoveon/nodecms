'use strict';

const Controller = require('egg').Controller;



class IndexController extends Controller {
    // 后台首页
    async index() {
        let { ctx } = this;
        await ctx.render('admin/index',{title:'后台首页',userInfo:ctx.session.user});
    }
    //后台配置页面
    async info(){
        let { ctx } = this;
       
        await ctx.render('admin/info',{title:'后台信息'});
    }
   
}

module.exports = IndexController;
