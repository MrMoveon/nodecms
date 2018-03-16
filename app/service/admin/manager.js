'use strict';

const Service = require('egg').Service;
class ManagerService extends Service {
    // 添加数据
    async add(managerInfo) {
        var result = await this.app.mysql.insert('manager', managerInfo);
        const insertSuccess = result.affectedRows === 1;
        return insertSuccess;
    }
    // 查找一条数据
    async findOne(data) {
        return await this.app.mysql.get('manager',data);
    }
    // 查找所有数据
    async find(limit=10,offset=0) {
        return await this.app.mysql.select('manager',{
            orders: [['id','desc']], // 排序方式
            limit: limit, // 返回数据量
            offset: offset, // 数据偏移量
        });
    }
}
module.exports = ManagerService;