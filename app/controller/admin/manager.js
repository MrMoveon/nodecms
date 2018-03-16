'use strict';

const Controller = require('../common')

// 定义创建接口的请求参数规则
const createRule = {
  account: {type: 'string', required: true,min:6,max:12},
  password:{type: 'string', required: true,min:6,max:12},
  repassword:{type: 'string', required: true,min:6,max:12},
};


class ManagerController extends Controller {
  // 管理员列表
  async index () {
    const {ctx} = this;
    // const {limit,offset} = ctx.query
    var results =await ctx.service.admin.manager.find(10,0);
    await ctx.render('admin/manager_index',{title:'管理员添加',data:results});
  }

  // 管理员添加
  async add() {
    const {ctx} = this;

    if(ctx.method==='POST'){
      // 表单验证,验证ctx.request.body传过来的数据，如果是json请求出错，返回json格式，如果是form表单请求，返回html错误页
      /**
       * {"code":"invalid_param","message":"Validation Failed","errors":[{"message":"should not be empty","code":"invalid","field":"account"}]}
       */
      // 验证表单信息,自动获取表单
      ctx.validate(createRule);
      // 获取表单信息
      const {account,password} = ctx.request.body;
      // 查询管理员是否存在
      var hasManager = await ctx.service.admin.manager.findOne({account:account})
      if(hasManager){
        return await this.jump('error','添加的账户已存在','/admin/manager/add');
      }
      // 插入数据库,添加管理员
      var result = await ctx.service.admin.manager.add({account:account,password:password});
      if(result){
        return await this.jump('success','添加成功','/admin/manager/add');
      }
      
    }
    //表单提交需要获取session,cookies中的csrfToken 安全token
    var csrfToken = ctx.session.csrfToken;
    await ctx.render('admin/manager_add',{title:'管理员添加',csrfToken:csrfToken});
  }
}

module.exports = ManagerController;
