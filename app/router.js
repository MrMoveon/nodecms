'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const checkLoginAdmin = app.middleware.checkLogin();
  router.get('/', controller.home.index);
  // 错误成功提示页
  router.get('/admin/success',controller.common.success)
  router.get('/admin/error',controller.common.error)

  router.get('/login',checkLoginAdmin,controller.admin.login.index);
  router.post('/login',checkLoginAdmin,controller.admin.login.index);
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
};
