'use strict';

const Controller = require('../common')

class ConfigController extends Controller{
    async index(){
        var {ctx} = this;
        var config={};
         // 查询配置信息
         var result = await this.app.mysql.get('config');
        if(ctx.method==='POST'){
            var data={};
            const {id,title,logo,keyword,desc,phone,online,address,state,closeinfo} = ctx.request.body
            data.id=ctx.request.body.id;
            data.config=JSON.stringify({
                title:title,
                logo:logo,
                keyword:keyword,
                desc:desc,
                phone:phone,
                online:online,
                address:address,
                state:state,
                closeinfo:closeinfo
            })
            if(result){//数据库有信息，更新
                result = await this.app.mysql.update('config',data)
                if(result.affectedRows===1){
                   return this.success('修改成功!','/admin/config')
                }
                return this.error('修改失败!','/admin/config')
            }else{//无信息，插入
                result = await this.app.mysql.insert('config',data)
                if(result.affectedRows===1){
                    return this.success('修改成功!','/admin/config')
                 }
                 return this.error('修改失败!','/admin/config')
            }

        }else{
           
            if(result){
                config=JSON.parse(result.config)
                config.id=result.id
            }else{
                config={}
                // var data={title:'双语版企业网站'};
                // data=JSON.stringify(data);
                // var result = await this.app.mysql.insert('config',{config:data})
                // console.log(result)
                //result.affectedRows===1
            }
            
            var csrfToken = ctx.session.csrfToken;
            await ctx.render('admin/config',{title:'网站配置',csrfToken:csrfToken,config:config})
        }

    }
}
module.exports = ConfigController;