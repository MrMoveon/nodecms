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
    // 统计
    async count () {
       var results=await this.app.mysql.select('manager')
       return results.length;
    }
    // 删除
    async del (id) {
     var result = await this.app.mysql.delete('manager',{id:id});
     const delSuccess = result.affectedRows === 1;
     return delSuccess;
    }
    // 更新
    async update (data) {
        const result = await this.app.mysql.update('manager', data);
        const updateSuccess = result.affectedRows === 1;
        return updateSuccess;
    }

}
module.exports = ManagerService;