'use strict';

const Controller = require('../common')
const loginRule={
    account: {type: 'string', required: true,min:5,max:12},
    password:{type: 'password',required: true,min:5,max:12},
}
class LoginController extends Controller{
    async index () {
        let { ctx } = this;
       
        if(ctx.method==='POST'){
           ctx.validate(loginRule);
           const {account,password} = ctx.request.body;
            // 查询登录用户是否存在
           var result =await ctx.service.admin.manager.findOne({account:account});
           if(!result) return this.error('用户名或密码错误')
           if(result.account===account && result.password===password){
               ctx.session.userId=result.id;
               return this.success('登录成功！','/admin');
           }
            
        }else{
            var csrfToken = ctx.session.csrfToken;
            await ctx.render('admin/login',{csrfToken:csrfToken})
        }
    }
}
module.exports = LoginController;