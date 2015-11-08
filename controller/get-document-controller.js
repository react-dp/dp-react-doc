var mongoose = require('mongoose');
var _ = require("underscore");
var Component = mongoose.model('Component');

module.exports = function(req,res){
	Component.find(req.body, function(err, doc){
		if(err){
			return res.status(500).send({code: 500, msg: "can not find"});
		}else{
			var msg = {};
			doc.forEach(function(item){
				var date = new Date(item.time);
				var year = date.getFullYear(),
				    month = date.getMonth() + 1,
				    day = date.getDate();
				msg.name = item.name;
				msg.documents = item.documents;
				msg.versions = item.versions;
				msg.time = year + "-" + month + "-" + day
			})
			res.status(200).send({code: 200, msg: msg});
		}
	})
}