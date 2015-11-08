var mongoose = require('mongoose');
var _ = require("underscore");
var Component = mongoose.model('Component');

module.exports = function(req,res){
	var result = [];
	Component.find(function(err, doc){
		if(err){
			return;
		}
		doc.forEach(function(item, index){
			var obj = {"name": item.name, id: index};
			result.push(obj);
		})
		res.render("index",{"componentlist": result, "path": req.path});
	})
}