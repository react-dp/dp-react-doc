var React = require("react");
var ReactDom = require("react-dom");
var RouterApp = require("../component/router");
var data = require("../data/list");
ReactDom.render(
	<RouterApp componentlist={data.componentlist}/>,
	document.querySelector("#root")
);