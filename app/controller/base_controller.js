'use strict';

const Controller = require('egg').Controller;

class BaseController  extends Controller {
    // 后台首页
    async success(info) {
        var {ctx} = this;
        ctx.body={
            code:0,
            msg:info
        }
    }
    async error(info){
        var {ctx} = this;
        ctx.body={
            code:1,
            msg:info
        }
    }
    
}

module.exports = BaseController;
