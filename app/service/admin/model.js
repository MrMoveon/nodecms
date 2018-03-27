'use strict';

const Service = require('egg').Service;

class ModelService extends Service {
    // 添加数据
    async add(data) {
        var result = await this.app.mysql.insert('model', data);
        const insertSuccess = result.affectedRows === 1;
        return insertSuccess;
    }
}

module.exports = ModelService;
