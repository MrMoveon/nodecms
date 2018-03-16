'use strict';

const Service = require('egg').Service;
class ManagerService extends Service {
    // 添加数据
    async add(managerInfo) {
        var result = await this.app.mysql.insert('manager', managerInfo);
        const insertSuccess = result.affectedRows === 1;
        return insertSuccess;
    }
    // 查找一天条数据
    async findOne(data) {
        return await this.app.mysql.get('manager',data);
    }
}
module.exports = ManagerService;