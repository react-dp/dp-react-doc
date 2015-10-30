var React = require("react");

var Content = React.createClass({
	render: function(){
		if(this.props.params.component){
			return <div>{this.props.params.component}</div>
		}else{
			return <div className="loading"></div>
		}
	}
})

module.exports = Content;