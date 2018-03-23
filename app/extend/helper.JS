const moment = require('moment');
// 格式化时间
function relativeTime(time) { return moment(parseInt(time)).format('YYYY-MM-DD HH:mm:ss') }
// // 无限级分类
// function limitless(category=[],data,pid=0,level=0){
//     this.category=category;
// 	data.forEach(function(item,index){
// 		if(item.pid===pid){
// 			item.level=level
// 			item.html='-'.repeat(level*5)
// 			category.push(item)
// 			limitless(this.category,data,item.id,level+1);
// 		}
// 	})
// 	return category
// }
module.exports={
  //  limitless:limitless,
    relativeTime:relativeTime
}