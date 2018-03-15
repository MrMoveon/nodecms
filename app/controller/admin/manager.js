'use strict';

const Controller = require('../base_controller');

// 定义创建接口的请求参数规则
const createRule = {
  account: {type: 'string', required: true},
  password: 'string',
  repassword:'string',
};
class ManagerController extends Controller {
  async add() {
    const {ctx} = this;
    if(ctx.method==='POST'){
      // 表单验证,验证ctx.request.body传过来的数据，如果是j'son请求出错，返回json格式，如果是form表单请求，返回html错误页
      /**
       * {"code":"invalid_param","message":"Validation Failed","errors":[{"message":"should not be empty","code":"invalid","field":"account"}]}
       */
      ctx.validate(createRule);
      console.log(ctx.request.body)
      var managerInfo={
        account:ctx.request.body.account,
        password:ctx.request.body.password,
      }
      
      var id = await ctx.service.admin.manager.add(managerInfo);
      ctx.body = id;
      if(id){
        this.success('添加成功！');
      }else{
        this.error('添加失败！');
      }
      return;
    }
    //表单提交需要获取session,cookies中的csrfToken 安全token
    var csrfToken = ctx.session.csrfToken;
    
    await ctx.render('admin/manager_add',{title:'管理员添加',csrfToken:csrfToken});
  }
}

module.exports = ManagerController;
