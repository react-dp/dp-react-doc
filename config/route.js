var React = require("react");

var indexComponent =  React.createFactory(require("../component/main-component"));

module.exports = function(app){

	//webview
	app.get("/",function(req,res){
		var reactHtml = React.renderToString(indexComponent({'a':"react on react"}));
		res.render("index",{reactOutput: reactHtml});
	});

	//api
	app.post("/api",function(req,res){
		
	})
}