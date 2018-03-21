const crypto = require('crypto');
/**
 * md5加密
 * @param {*} mima 
 * 
 */
function md5(mima){
    var md5 = crypto.createHash('md5');
    return md5.update(mima).digest('base64');
}

module.exports=md5;