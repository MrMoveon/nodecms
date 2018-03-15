/**
 * Created by yifeng on 2017/9/20.
 */
$(function(){
    form_main_auto();
    $(window).resize(function () {
        form_main_auto();
    });
});
function form_main_auto() {
    $screen_height=$(window).height();
    $form_height=$('#form-main').height();
    $top=($screen_height-$form_height)/2;
    $('#form-main').css('margin-top',$top+"px");
}