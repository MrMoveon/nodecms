/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50612
Source Host           : localhost:3306
Source Database       : nodecms

Target Server Type    : MYSQL
Target Server Version : 50612
File Encoding         : 65001

Date: 2018-03-27 15:13:57
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `access`
-- ----------------------------
DROP TABLE IF EXISTS `access`;
CREATE TABLE `access` (
  `role_id` smallint(6) unsigned NOT NULL,
  `node_id` smallint(6) unsigned NOT NULL,
  `level` tinyint(1) NOT NULL,
  `module` varchar(50) DEFAULT NULL,
  KEY `groupId` (`role_id`),
  KEY `nodeId` (`node_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of access
-- ----------------------------

-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL COMMENT '栏目标题',
  `pid` int(11) unsigned NOT NULL DEFAULT '0' COMMENT '上级栏目标识',
  `sort` int(11) NOT NULL DEFAULT '100' COMMENT '排序',
  `type` tinyint(1) NOT NULL DEFAULT '1' COMMENT '1:列表2:图片3:单页',
  `pic` varchar(100) DEFAULT NULL COMMENT '栏目图片',
  `keyword` varchar(100) DEFAULT NULL COMMENT '关键字',
  `desc` varchar(200) DEFAULT NULL COMMENT '描述',
  `remark` varchar(200) DEFAULT NULL COMMENT '摘要',
  `content` text COMMENT '栏目内容',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------

-- ----------------------------
-- Table structure for `config`
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `config` text COMMENT '配置信息',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COMMENT='配置信息';

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES ('5', '{\"title\":\"我的小站\",\"logo\":\"\\\\public\\\\upload\\\\2018-3-21\\\\1521604455963.png\",\"keyword\":\"vue,react,nodejs,egg\",\"desc\":\"cms内容管理\",\"phone\":\"023-8888168\",\"online\":\"565566223\",\"address\":\"重庆南岸区弹子石\",\"state\":\"1\",\"closeinfo\":\"网站维护中....\"}');

-- ----------------------------
-- Table structure for `log`
-- ----------------------------
DROP TABLE IF EXISTS `log`;
CREATE TABLE `log` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '日志',
  `account` varchar(50) NOT NULL COMMENT '帐户',
  `ip` char(32) DEFAULT NULL COMMENT 'ip',
  `time` varchar(32) NOT NULL DEFAULT '0' COMMENT '写入时间',
  `msg` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of log
-- ----------------------------
INSERT INTO `log` VALUES ('2', 'admin', null, '0', '登录成功！');
INSERT INTO `log` VALUES ('3', 'admin', '::ffff:127.0.0.1', '0', '密码错误');
INSERT INTO `log` VALUES ('4', 'admin', '::ffff:127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('5', 'admin', '::ffff:127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('6', 'admin', '::ffff:127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('7', 'admin', null, '0', '登录成功！');
INSERT INTO `log` VALUES ('8', 'admin', null, '0', '登录成功！');
INSERT INTO `log` VALUES ('9', 'admin', '127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('10', 'admin', '127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('11', 'admin', '127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('12', 'admin', '127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('13', 'admin', '127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('14', 'admin', '127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('15', 'admin', '127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('16', 'admin', '127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('17', 'testadmin', '127.0.0.1', '0', '密码错误');
INSERT INTO `log` VALUES ('18', 'testadmin', '127.0.0.1', '0', '密码错误');
INSERT INTO `log` VALUES ('19', 'testadmin', '127.0.0.1', '0', '密码错误');
INSERT INTO `log` VALUES ('20', 'admin', '127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('21', 'testadmin', '127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('22', 'admin', '127.0.0.1', '0', '登录成功！');
INSERT INTO `log` VALUES ('23', '', '127.0.0.1', '1521777356463', '登录成功！');
INSERT INTO `log` VALUES ('24', '', '127.0.0.1', '1521777392024', '登录成功！');
INSERT INTO `log` VALUES ('25', 'admin', '127.0.0.1', '1521783812322', '登录成功！');
INSERT INTO `log` VALUES ('26', 'admin', '127.0.0.1', '1521788953573', '密码错误');
INSERT INTO `log` VALUES ('27', 'admin', '127.0.0.1', '1521788982920', '登录成功！');
INSERT INTO `log` VALUES ('28', 'admin', '127.0.0.1', '1521789145184', '登录成功！');
INSERT INTO `log` VALUES ('29', 'admin', '127.0.0.1', '1521790097505', '登录成功！');
INSERT INTO `log` VALUES ('30', 'admin', '127.0.0.1', '1521796229792', '登录成功！');
INSERT INTO `log` VALUES ('31', 'admin', '127.0.0.1', '1522134703269', '登录成功！');

-- ----------------------------
-- Table structure for `manager`
-- ----------------------------
DROP TABLE IF EXISTS `manager`;
CREATE TABLE `manager` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '管理员id',
  `account` varchar(50) NOT NULL COMMENT '管理账号',
  `password` varchar(32) NOT NULL COMMENT '管理员密码',
  `state` tinyint(1) NOT NULL DEFAULT '1' COMMENT '账号状态 0：锁定，1：正常',
  `is_admin` tinyint(1) NOT NULL DEFAULT '0' COMMENT '0不是超级管理员 1 是超级管理员',
  `update_time` varchar(13) NOT NULL DEFAULT '0' COMMENT '更新时间',
  `create_time` varchar(13) NOT NULL DEFAULT '0' COMMENT '创建时间',
  PRIMARY KEY (`id`),
  UNIQUE KEY `account_UNIQUE` (`account`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of manager
-- ----------------------------
INSERT INTO `manager` VALUES ('1', 'admin', 'utUy7gZNc9IAxow0lWO2Mw==', '1', '0', '0', '0');
INSERT INTO `manager` VALUES ('2', 'editAdmin', '2KOxya5JHTYQgu2PrInwRQ==', '1', '0', '0', '0');
INSERT INTO `manager` VALUES ('3', 'testadmin', 'utUy7gZNc9IAxow0lWO2Mw==', '1', '0', '0', '0');

-- ----------------------------
-- Table structure for `node`
-- ----------------------------
DROP TABLE IF EXISTS `node`;
CREATE TABLE `node` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `title` varchar(50) DEFAULT NULL,
  `status` tinyint(1) DEFAULT '0',
  `remark` varchar(255) DEFAULT NULL,
  `sort` smallint(6) unsigned DEFAULT NULL,
  `pid` smallint(6) unsigned NOT NULL,
  `level` tinyint(1) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `level` (`level`),
  KEY `pid` (`pid`),
  KEY `status` (`status`),
  KEY `name` (`name`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of node
-- ----------------------------

-- ----------------------------
-- Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` smallint(6) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `pid` smallint(6) DEFAULT NULL,
  `status` tinyint(1) unsigned DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `pid` (`pid`),
  KEY `status` (`status`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role
-- ----------------------------

-- ----------------------------
-- Table structure for `role_user`
-- ----------------------------
DROP TABLE IF EXISTS `role_user`;
CREATE TABLE `role_user` (
  `role_id` mediumint(9) unsigned DEFAULT NULL,
  `user_id` char(32) DEFAULT NULL,
  KEY `group_id` (`role_id`),
  KEY `user_id` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of role_user
-- ----------------------------
