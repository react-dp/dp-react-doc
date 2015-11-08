var React = require("react");

var Content = React.createClass({
	getInitialState: function(){
		return {};
	},
	componentWillReceiveProps: function(nextProps){
		var _this = this;
		$.ajax({
			type: 'post',
			url: "/api/getdocument",
			data:{
				name: nextProps.params.component
			},
			success: function(res){
				if(res.code == 200){
					_this.setState(res.msg);
				}else{
					alert(res.msg);
				}
			}
		})
	},
	shouldComponentUpdate: function(nextProps, nextState){
		return nextProps.params.component == this.props.params.component;
	},

	render: function(){
		if(this.state.name){
			return <article className="am-article">
					  <div className="am-article-hd">
					    <h1 className="am-article-title">
					    	{this.state.name} ({this.state.versions})
					    </h1>
					    <p className="am-article-meta">创建时间：{this.state.time}</p>
					  </div>
					  <div className="am-article-bd">
					  	{this.state.documents}
					  </div>
					</article>
		}else{
			return <div className="loading"></div>
		}
	}
})

module.exports = Content;