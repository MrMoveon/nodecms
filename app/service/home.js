const Service = require('egg').Service;

class HomeService extends Service {
    async find(uid) {
      const user = await this.app.mysql.get('manager', { id: uid })
      return user;
    }
  }
  
  module.exports = HomeService;