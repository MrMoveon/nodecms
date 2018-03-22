const captchapng = require('captchapng');
/**
 * 
 * @param {*} ctx 需要传递ctx对象
 * @param {*} len 验证码长度
 */
exports.captch=function(ctx,len=4){
    var code = '0123456789';
    var length = len;
    var randomcode = '';
    for (var i = 0; i < length; i++) {
        randomcode += code[parseInt(Math.random() * 1000) % code.length];
    }
    // 保存到session
    ctx.session.captch = randomcode;
    // 输出图片
    var p = new captchapng(80,30,parseInt(randomcode)); // width,height,numeric captcha
    p.color(255, 255, 255, 0);  // First color: background (red, green, blue, alpha)
    p.color(80, 80, 80, 255); // Second color: paint (red, green, blue, alpha)
    var img = p.getBase64();
    var imgbase64 = new Buffer(img,'base64');
    ctx.res.type='image/png';
    ctx.body=imgbase64;

}
/**
 * @param {*} ctx 需要传递ctx对象
 * @param {*} captch 验证码
 * return true | false
 */
exports.checkCaptch = function (ctx,captch){
    if(ctx.session.captch!=captch){
        return false
    }
    return true;
}
