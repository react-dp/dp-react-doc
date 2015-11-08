var markdown = require( "markdown" ).markdown;
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder('utf8');

module.exports = function(string){
	return markdown.toHTML(decoder.write(string));
}