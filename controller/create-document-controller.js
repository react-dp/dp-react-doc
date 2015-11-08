var mongoose = require('mongoose');
var _ = require("underscore");
var Component = mongoose.model('Component');

module.exports = function(req,res){
	var packageString = req.body && JSON.parse(req.body.packageDocument);
	var markdownString = req.body && req.body.markdownDocument;
	
	var componentModels = new Component({
		name: packageString.name,
		documents: markdownString,
		versions: packageString.version,
		keywords: _.isArray(packageString.keywords) ? 
				  packageString.keywords.join(" ") :
				  packageString.keywords.toString()
	});

	componentModels.save(function(err){
		if(err){
			res.status(500).send({code: 500, msg: err.message});
			return;
		}
		res.status(200).send({code: 200, msg: "保存成功"});
	})
}