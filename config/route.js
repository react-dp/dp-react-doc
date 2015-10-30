var React = require("react");
var ReactDOMServer = require('react-dom/server');
var Router =  React.createFactory(require("../component/router"));
var data = require("../data/list");
module.exports = function(app){
	//webview
	app.get("/",function(req,res){
		res.render("index",{"componentlist": data.componentlist, "path": req.path});
	});
	app.get("/upload",function(req,res){
		res.render("upload", {"path": req.path});
	});
	//api
	app.post("/api",function(req,res){
		
	})
}