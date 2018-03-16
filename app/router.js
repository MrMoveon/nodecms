'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 错误成功提示页
  router.get('/admin/jump',controller.baseController.jump)
  // admin
  router.get('/admin',controller.admin.index.index);
  router.get('/admin/info',controller.admin.index.info);
  // 管理员添加
  router.get('/admin/manager/add',controller.admin.manager.add);
  router.post('/admin/manager/add',controller.admin.manager.add);
};
