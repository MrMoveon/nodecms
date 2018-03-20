'use strict';

const Controller = require('egg').Controller;

const fs = require('fs');
const path = require('path');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class ApiController extends Controller {
    // 上传接口
    async upload() {
        // 读取文件流
        const stream = await this.ctx.getFileStream();
        // 上传的目录
        var dir =path.join(this.config.baseDir, 'app/public/upload/'+new Date().toLocaleDateString());
        //检测目录是否存在 不存在创建目录
        if(!this.fsExistsSync(dir)){
            await fs.mkdir(dir);
        }
        // 文件名
        const filename = new Date().getTime() + path.extname(stream.filename).toLowerCase();
        // 上传到的目标
        const target = path.join(dir, filename);
        // 写入流
        const writeStream = fs.createWriteStream(target);
        try {
            await awaitWriteStream(stream.pipe(writeStream));
        } catch (err) {
            await sendToWormhole(stream);
            throw err;
            // 接口返回失败
            return this.ctx.body={
                code:0,
                msg:'上传失败',
                data:{}
            }
        }
        // 接口返回成功
        return this.ctx.body={
            code:0,
            msg:'上传成功',
            data:{
                src:path.join('/public/upload/',new Date().toLocaleDateString(),filename)
            }
        }
    }
    //检测文件或者文件夹存在
    fsExistsSync(path) {
        try{
            fs.accessSync(path,fs.F_OK);
        }catch(e){
            return false;
        }
        return true;
    }
}

module.exports = ApiController;
