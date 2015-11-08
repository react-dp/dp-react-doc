var React = require("react");
var ReactDOMServer = require('react-dom/server');
var Router =  React.createFactory(require("../component/router"));

var markdownController = require("../controller/markdown-controller");
var createDocumentController = require("../controller/create-document-controller");
var fetchListController = require("../controller/fetch-list-controller");
var getDocumentController = require("../controller/get-document-controller");

module.exports = function(app){
	//webview
	app.get("/", fetchListController);
	app.get("/upload",function(req,res){
		res.render("upload", {"path": req.path});
	});

	//api
	app.post("/api/create", createDocumentController);
	app.post("/api/getdocument", getDocumentController);
}