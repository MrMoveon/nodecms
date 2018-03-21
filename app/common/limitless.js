/**
 * 无限级分类
 * @param {*} category 
 * @param {*} data 数据
 * @param {*} pid 父id
 * @param {*} level 层级
 *  
 */
function limitless(category=[],data,pid=0,level=0){
	this.category=category;
	data.forEach(function(item,index){
		if(item.pid===pid){
			item.level=level
			item.html='-'.repeat(level*5)
			category.push(item)
			limitless(this.category,data,item.id,level+1);
		}
	})
	return category
}

module.exports=limitless;