var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var getTags = function(tags){
	return tags.join(',');
}
var setTags = function(tags){
	return tags.split(',');
}

var Component = new Schema({
	name: {type: String, require: true, trim: true, index: {unique: true}},
	documents: {type: String, require: true, trim: true, default: ''},
	versions: {type: String, default: '', trim: true},
	keywords: {type: [], get: getTags, set: setTags, require: true},
	time: {type: Date, default: Date.now}
})

Component.methods = {};

mongoose.model('Component', Component);