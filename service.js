var fs = require("fs");
var path = require("path");
var app = require("express")();

var port = process.env.PORT || 3000;

//init react
require("node-jsx").install();
//bootstrap application
require("./config/express")(app);

//bootstrap router
require('./config/route')(app);

app.listen(port);

console.log("the service started on " + port);

module.exports = app;
