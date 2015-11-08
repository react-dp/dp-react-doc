var React = require("react");

var FormBox = React.createClass({

	render: function(){
		return <fieldset>
			  		<label>package.json</label>
			      	<textarea ref="packageDoc" rows="5" id="doc-ta-1"></textarea>
			      	<label>markdown文档</label>
			      	<textarea ref="markdown" rows="5" id="doc-ta-1"></textarea>
			    	<p><button type="button" onClick={this.submit.bind(this)} className="am-btn am-btn-default">提交</button></p>
			    </fieldset>
	},

	submit: function(){
		var _this = this;
		var packageDocument = _this.refs.packageDoc.value;
		var markdownDocument = _this.refs.markdown.value;
		if(!packageDocument && !packageDocument){
			alert("请填写完整");
			return;
		}
		$.ajax({
		    type: 'POST',
		    url: "/api/create" ,
		    data: {
		    	packageDocument: packageDocument,
		    	markdownDocument: markdownDocument
		    } ,
		    success: function(res){
		    	if(res.code == 200){
		    		alert("提交成功");
		    	}
		    }
		});
	}
})

module.exports = FormBox;