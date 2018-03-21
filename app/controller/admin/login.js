'use strict';

const Controller = require('../common')
const loginRule={
    account: {type: 'string', required: true,min:5,max:12},
    password:{type: 'password',required: true,min:5,max:12},
}
let md5 = require('../../common/md5');
class LoginController extends Controller{
    async index () {
        console.log(md5(md5('123456').substr(4,10)+'123456'))
        let { ctx } = this;
        if(ctx.method==='POST'){
           ctx.validate(loginRule);
           let {account,password} = ctx.request.body;
            // 查询登录用户是否存在
           password = md5(md5(password).substr(4,10)+password);
           var result =await ctx.service.admin.manager.findOne({account:account,password:password});
           console.log(result)
           if(!result) return this.error('用户名或密码错误')
           if(result.account===account && result.password===password){
               ctx.session.user={
                    id:result.id,
                    account:result.account,
               };
               return this.success('登录成功！','/admin');
           }
            
        }else{
            var csrfToken = ctx.session.csrfToken;
            await ctx.render('admin/login',{csrfToken:csrfToken})
        }
    }
    async logout(){
        let { ctx } = this;
        ctx.session.user=null;
        return this.success('退出成功!','/login');
    }
}
module.exports = LoginController;