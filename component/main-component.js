var React = require("react");

var ReactApp = React.createClass({
	render: function(){
		return <div>{this.props.a}</div>
	}
})

module.exports = ReactApp;