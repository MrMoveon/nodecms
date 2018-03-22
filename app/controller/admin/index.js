'use strict';

const Controller = require('egg').Controller;

const os = require('os');
const dns = require('dns');
const url = require('url');
class IndexController extends Controller {
    // 后台首页
    async index() {
        let { ctx } = this;
        await ctx.render('admin/index',{title:'后台首页',userInfo:ctx.session.user});
    }
    //后台配置页面
    async info(){
        let { ctx } = this;
        
        var info={};
        // 数据库版本号
        var version = await ctx.app.mysql.query('select version()');
        
        info.servieInfo={
            ip:ctx.request.ip,
            hostname:ctx.hostname,    //域名
            port:new url.URL(ctx.href).port,
            versions: process.versions.node,  //node版本号
            platform:os.type(),   //系统
            database:ctx.app.config.mysql.client.database,   //数据库名称
            databaseVersion:version[0]['version()'],    //数据库版本号
            fileSize:ctx.app.config.multipart.fileSize  //上传文件最大尺寸
        }
       
       
        await ctx.render('admin/info',{title:'后台信息',info:info});
    }
   
}

module.exports = IndexController;
