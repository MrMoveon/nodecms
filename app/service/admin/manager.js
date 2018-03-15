'use strict';

const Service = require('egg').Service;
class ManagerService extends Service {
    async add(managerInfo) {
        // 添加数据，成功返回id
        try {
            var id = await this.app.mysql.insert('manager', managerInfo);
            return id;
        } catch (error) {
            return 0
        }
       
    }
}
module.exports = ManagerService;