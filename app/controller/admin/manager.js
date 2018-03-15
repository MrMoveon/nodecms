'use strict';

const Controller = require('egg').Controller;

const addRule = {
  account: {type: 'xx', required: true,message:'数据不正确'},
  password: 'string',
  repassword:'string',
};
class ManagerController extends Controller {
  async add() {
    const {ctx} = this;
    if(ctx.method==='POST'){
      ctx.body="post";
      return;
    }
    //表单提交需要获取session,cookies中的csrfToken 安全token
    var csrfToken = ctx.session.csrfToken;
    
    await ctx.render('admin/manager_add',{title:'管理员添加',csrfToken:csrfToken});
  }
}

module.exports = ManagerController;
