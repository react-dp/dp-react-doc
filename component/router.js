var React = require("react");
var Router = require('react-router').Router
var Route = require('react-router').Route
var Content = require("./content");

var RouterApp = React.createClass({
	render: function(){
		return <Router>
                    <Route path="/" component={Content}>
                            <Route path="/:component" component={Content} />
                    </Route>
                </Router>
	}
})

module.exports = RouterApp;