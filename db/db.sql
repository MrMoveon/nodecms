CREATE TABLE IF NOT EXISTS `qy_manager` (
  `id` INT NOT NULL AUTO_INCREMENT COMMENT '管理员id',
  `account` VARCHAR(50) NOT NULL COMMENT '管理账号',
  `password` VARCHAR(32) NOT NULL COMMENT '管理员密码',
  `state` TINYINT(1) NOT NULL DEFAULT 1 COMMENT '账号状态 0：锁定，1：正常',
  PRIMARY KEY (`id`),
  UNIQUE INDEX `account_UNIQUE` (`account` ASC))
ENGINE = InnoDB