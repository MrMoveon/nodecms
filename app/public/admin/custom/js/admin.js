/**
 * Created by yifeng on 2017/9/21.
 */
$(function () {

//    左侧菜单
    $('.layui-nav-item').on('click','a',function(){
        var obj=$(this);
        if(obj.attr('href')!='javascript:;'){
           $('.breadcrumb-text').text(obj.text())
        }
    });



})