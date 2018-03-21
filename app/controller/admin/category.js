'use strict';

const Controller = require('egg').Controller;
let limitless = require('../../common/limitless');
class CategoryController extends Controller {
  async index() {
      const {ctx} = this;
      var data=[
        {
            id:1,
            title:'资讯',
            pid:0
        },
        {
            id:2,
            title:'前端',
            pid:0
        },
        {
            id:3,
            title:'后端',
            pid:0
        },
        {
            id:4,
            title:'公司新闻',
            pid:1
        },
        {
            id:5,
            title:'行业新闻',
            pid:1
        },
        {
            id:6,
            title:'vue',
            pid:2
        },
        {
            id:7,
            title:'react',
            pid:2
        },
        {
            id:8,
            title:'php',
            pid:3
        },
        {
            id:9,
            title:'node',
            pid:3
        }
        ]
        var tree=limitless([],data);
        console.log(tree)
        await ctx.render('admin/category_index',{title:'栏目列表',data:tree})
  }
  async add () {
    const {ctx} = this;
    var csrfToken = ctx.session.csrfToken;
    await ctx.render('admin/category_add',{title:'栏目添加',csrfToken:csrfToken});
  }
}

module.exports = CategoryController;
