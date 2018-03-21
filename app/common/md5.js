const crypto = require('crypto');


module.exports=function(mima){
    var md5 = crypto.createHash('md5');
    return md5.update(mima).digest('base64');
}
