'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const manager = await this.ctx.service.home.find(1);
    var result = { manager };
    console.log(manager)
    console.log(this.config.mysql)
    this.ctx.body = result;
  }
}

module.exports = HomeController;
