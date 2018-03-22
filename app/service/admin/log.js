'use strict';

const Service = require('egg').Service;
// 日志信息处理
class LogService extends Service {
  async all () {
    const ctx=this;
    var result = await ctx.app.mysql.select('log');
    var findSuccess = result.affectedRows===1;
    return findSuccess;
  }
  async add(data) {
    const ctx=this;
    // 查询当前用户所有日志
    var log = await this.find();
    // 当前用户日志大于=30条的时候，删除当前用户的第一条日志
    if(log.length>=30){
      var id = await this.findMinId(data.account);
      await ctx.app.mysql.delete('log',{id:id})
    }
    //添加日志
    var result = await ctx.app.mysql.insert('log',data)
    const insertSuccess = result.affectedRows === 1;
    return insertSuccess;
  }
  // 查询当前用户所有日志
  async find(account){
    const ctx=this;
    var result = await ctx.app.mysql.select('log',{account:account});
    return result;
  }
  // 查询当前用户第一条日志 id
  async findMinId(account){
    const ctx=this;
    var id = await ctx.app.mysql.query('select min(id) from log where account=?',[account]);
    return id[0]['min(id)'];
  }
}

module.exports = LogService;
