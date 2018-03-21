'use strict';

const Controller = require('egg').Controller;

class CategoryController extends Controller {
  async index() {
      const {ctx} = this;
    ctx.body="category"
  }
}

module.exports = CategoryController;
