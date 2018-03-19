CREATE TABLE IF NOT EXISTS `manager` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '管理员id',
  `account` VARCHAR(50) NOT NULL COMMENT '管理账号',
  `password` VARCHAR(32) NOT NULL COMMENT '管理员密码',
  `state` TINYINT(1) NOT NULL DEFAULT 1 COMMENT '账号状态 0：锁定，1：正常',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `account_UNIQUE` (`account` ASC))
ENGINE = InnoDB


CREATE TABLE `config` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`config` TEXT NULL COMMENT '配置信息',
	PRIMARY KEY (`id`)
)
COMMENT='配置信息'
COLLATE='utf8_general_ci'
ENGINE=MyISAM
AUTO_INCREMENT=3;
