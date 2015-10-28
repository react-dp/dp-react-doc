var path = require('path');
var express = require("express");
var bodyParser = require('body-parser');
var multer = require("multer");
var ejs = require("ejs");
var config = require("../config");

/**
	init
**/
module.exports = function(app){

	// static file middle
	app.use(express.static(path.join(config.root,config.static)));

	// set template
	app.set('views', path.join(config.root, config.html));
	app.set('view engine', 'html');
	app.engine( 'html', require( 'ejs' ).__express );

	// set bodyParser
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	// app.use(multer());

}