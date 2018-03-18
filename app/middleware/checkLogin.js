'use strict';

module.exports = ()=>{
    return async function checkLogin (ctx,next) {
       if(ctx.session.userId){
        await next();
       }else{
           if(!ctx.url==='/login'){
             return ctx.body='请先登录'
           }
       }
       
        
        console.log(ctx.session.userId,"-----------------")
    }
   
}