'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  // 验证登录中间件，需要在验证的路由添加
  const checkLoginAdmin = app.middleware.checkLogin();

  router.get('/', controller.home.index);
  // 错误成功提示页
  router.get('/admin/success',controller.common.success)
  router.get('/admin/error',controller.common.error)

  router.get('/login',checkLoginAdmin,controller.admin.login.index);
  router.post('/login',checkLoginAdmin,controller.admin.login.index);
  router.get('/logout',checkLoginAdmin,controller.admin.login.logout);
  router.get('/captch',controller.admin.login.captch);
  
  // admin
  router.get('/admin',checkLoginAdmin,controller.admin.index.index);
  router.get('/admin/info',checkLoginAdmin,controller.admin.index.info);
 
  // 管理员
  router.get('/admin/manager',checkLoginAdmin,controller.admin.manager.index);
  router.get('/admin/manager/add',checkLoginAdmin,controller.admin.manager.add);
  router.post('/admin/manager/add',checkLoginAdmin,controller.admin.manager.add);
  router.get('/admin/manager/edit',checkLoginAdmin,controller.admin.manager.edit);
  router.post('/admin/manager/edit',checkLoginAdmin,controller.admin.manager.edit);
  router.delete('/admin/manager',checkLoginAdmin,controller.admin.manager.del);

  //栏目管理
  router.get('/admin/category',checkLoginAdmin,controller.admin.category.index);
  router.get('/admin/category/add',checkLoginAdmin,controller.admin.category.add);
  //模型

  router.get('/admin/model/list',checkLoginAdmin,controller.admin.model.list);
  router.get('/admin/model',checkLoginAdmin,controller.admin.model.index);
  router.get('/admin/model/add',checkLoginAdmin,controller.admin.model.add);
  router.post('/admin/model/add',checkLoginAdmin,controller.admin.model.add);
  router.get('/admin/model/del',checkLoginAdmin,controller.admin.model.del);
  //RBAC
  router.get('/admin/role',checkLoginAdmin,controller.admin.rbac.role);
  router.get('/admin/role/add',checkLoginAdmin,controller.admin.rbac.role_add);
  router.post('/admin/role/add',checkLoginAdmin,controller.admin.rbac.role_add);
  router.get('/admin/role/del',checkLoginAdmin,controller.admin.rbac.role_del);
  router.get('/admin/node',checkLoginAdmin,controller.admin.rbac.node);
  router.get('/admin/node/add',checkLoginAdmin,controller.admin.rbac.node_add);
  router.post('/admin/node/add',checkLoginAdmin,controller.admin.rbac.node_add);
  router.get('/admin/node/del',checkLoginAdmin,controller.admin.rbac.node_del);
  // 网站配置
  router.get('/admin/config',checkLoginAdmin,controller.admin.config.index);
  router.post('/admin/config',checkLoginAdmin,controller.admin.config.index);

  //api
  router.post('/upload',checkLoginAdmin,controller.api.upload);
};
