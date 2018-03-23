const moment = require('moment');
// 格式化时间
exports.relativeTime = (time) => { return moment(time).format('YYYY-MM-DD HH:mm:ss') }