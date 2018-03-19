'use strict';

const Controller = require('egg').Controller;

const fs = require('fs');
const path = require('path');
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class ApiController extends Controller {

    async upload() {
        const stream = await this.ctx.getFileStream();
       
        const filename = encodeURIComponent(stream.fields.name) + path.extname(stream.filename).toLowerCase();
        const target = path.join(this.config.baseDir, 'app/public/upload', filename);
        const writeStream = fs.createWriteStream(target);
        try {
            await awaitWriteStream(stream.pipe(writeStream));
        } catch (err) {
            await sendToWormhole(stream);
            throw err;
        }
        console.log(filename)
        return this.ctx.body={
            code:0,
            msg:'上传成功',
            data:{
                src:'/public/upload/' + filename
            }
        }


       
    }

}

module.exports = ApiController;
