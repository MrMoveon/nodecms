'use strict';

const Controller = require('../common')
const loginRule={
    account: {type: 'string', required: true,min:5,max:12},
    password:{type: 'password',required: true,min:5,max:12},
    captch:{type: 'string',required: true}
}
let md5 = require('../../common/md5');
let {captch,checkCaptch} = require('../../common/captch');
const moment = require('moment');
class LoginController extends Controller{
    async index () {
        let { ctx } = this;
        if(ctx.method==='POST'){
           ctx.validate(loginRule);
           let {account,password,captch} = ctx.request.body;
           password = md5(md5(password).substr(4,10)+password);

            // 验证码验证
           if(!checkCaptch(ctx,captch)){
                return this.error('验证码错误','/login')
           }
            // 查询登录用户
           var result =await ctx.service.admin.manager.findOne({account:account});
            // 用户名
           if(!result) return this.error('用户名错误','/login')
            
            // 日志
            var log = {
                account:result.account,
                ip:ctx.request.ip,
                msg:'',
                time:new Date().getTime()
            }
            // 密码
           if(result.password!=password){
                log.msg="密码错误";
                await ctx.service.admin.log.add(log)
                return this.error(log.msg)
           } 
           // 状态
           if(result.state==0) return this.error('该帐户已禁止登录，请联系管理员','/login')
           //登录成功，用户信息存储session
           ctx.session.user={
                id:result.id,
                account:result.account,
            };
            log.msg="登录成功！";
            await ctx.service.admin.log.add(log)
            return this.success(log.msg,'/admin');
            
        }else{
            var csrfToken = ctx.session.csrfToken;
            await ctx.render('admin/login',{csrfToken:csrfToken})
        }
    }
    // 退出登录
    async logout(){
        let { ctx } = this;
        ctx.session.user=null;
        return this.success('退出成功!','/login');
    }
    // 验证码
    async captch(){
        const {ctx} = this;
        captch(ctx);
    }
}
module.exports = LoginController;