'use strict';

// had enabled by egg
// exports.static = true;
// 开启mysql
exports.mysql = {
  enable: true,
  package: 'egg-mysql'
};
//模版视图
exports.ejs = {
  enable: true,
  package: 'egg-view-ejs'
};
// 开启数据验证 
exports.validate = {
  enable: true,
  package: 'egg-validate',
};