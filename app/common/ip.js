

/**
 * 获取ip
 */
module.exports=function (ctx) {
    var ipAddress;
    var headers = ctx.req.headers;
    console.log(ctx.req.connection.remoteAddress)
    var forwardedIpsStr = headers['x-real-ip'] || headers['x-forwarded-for'];
    forwardedIpsStr ? ipAddress = forwardedIpsStr : ipAddress = null;
    if (!ipAddress) {
        ipAddress = ctx.req.connection.remoteAddress;
    }
    return ipAddress;
   
}