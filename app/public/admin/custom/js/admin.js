/**
 * Created by yifeng on 2017/9/21.
 */
$(function () {

//    左侧菜单
    $('.layui-nav-item').on('click','dd a',function(){
        var obj=$(this);
        $('.breadcrumb-text').text(obj.text())
    });



})