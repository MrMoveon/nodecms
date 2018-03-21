'use strict';

const Controller = require('../common')
let md5 = require('../../common/md5');
// 定义创建接口的请求参数规则
const createRule = {
  account: {type: 'string', required: true,min:5,max:12},
  password:{type: 'string', required: true,min:5,max:12},
  repassword:{type: 'string', required: true,min:5,max:12}
};
const updateRule = {
  account: {type: 'string', required: true,min:5,max:12},
  password:{type: 'password',compare:'repassword',min:5,max:12},
  state:{type:'enum',values:['0','1']}
};

class ManagerController extends Controller {
  // 管理员列表
  async index () {
    const {ctx} = this;
    const page = ctx.query.page || 1;
    var limit = 10;
    var offset=(page-1)*limit;
    // 总数
    var count = await ctx.service.admin.manager.count();
    var results =await ctx.service.admin.manager.find(limit,offset);
    
    var csrfToken = ctx.session.csrfToken;
    await ctx.render('admin/manager_index',{title:'管理员列表',count:count,limit:limit,page:page,data:results,csrfToken:csrfToken});
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
      let {account,password} = ctx.request.body;
      // 加密入库
      password=md5(md5(password).substr(4,10)+password);
      // 查询管理员是否存在
      var hasManager = await ctx.service.admin.manager.findOne({account:account})
      if(hasManager){
        return await this.error('添加的账户已存在','/admin/manager/add');
      }
      // 插入数据库,添加管理员
      var result = await ctx.service.admin.manager.add({account:account,password:password});
      if(result){
        return await this.success('添加成功','/admin/manager/add');
      }
      
    }
    //表单提交需要获取session,cookies中的csrfToken 安全token
    var csrfToken = ctx.session.csrfToken;
    await ctx.render('admin/manager_add',{title:'管理员添加',csrfToken:csrfToken});
  }
  // 管理员编辑
  async edit () {
    const {ctx} = this;
    if(ctx.method==='POST'){
      console.log(ctx.request.body)
      ctx.validate(updateRule);
      const {password,state,id} = ctx.request.body;
      var data={
        id:Number(id),
        password:password,
        state:Number(state)
      }
      var result = await ctx.service.admin.manager.update(data);
      if(result){
        return await this.success('编辑成功','/admin/manager');
      }
      
    }else{
      var id =Number(ctx.query.id);
      var csrfToken = ctx.session.csrfToken;
      var manager = await ctx.service.admin.manager.findOne({id:id})
      await ctx.render('admin/manager_edit',{title:'管理员编辑',csrfToken:csrfToken,data:manager});
    }
    
  }
  // 管理员删除
  async del () {
    const {ctx} = this;
    var id = Number(ctx.request.body.id);
   
    var result = await ctx.service.admin.manager.del(id)
   
    if(result){
      ctx.body={
        code:0,
        message:'删除成功'
      }
    }
  }
  
}

module.exports = ManagerController;
