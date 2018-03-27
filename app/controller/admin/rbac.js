'use strict';

const Controller = require('egg').Controller;

class RbacController extends Controller {
    async role() {
        const {ctx} = this;
        ctx.body = "role"
    }
    async role_add() {
        const {ctx} = this;
        ctx.body = "role_add"
    }
    async role_del() {
        const {ctx} = this;
        ctx.body = "role_del"
    }
    async node() {
        const {ctx} = this;
        ctx.body = "node"
    }
    async node_add() {
        const {ctx} = this;
        ctx.body = "node_add"
    }
    async node_del() {
        const {ctx} = this;
        ctx.body = "node_del"
    }
}

module.exports = RbacController;
