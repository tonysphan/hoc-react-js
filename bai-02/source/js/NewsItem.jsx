'use strict';

var React  = require('react');

var NewsItem = React.createClass({
	getDefaultProps: function(){
		return {
			time   : '',
			title  : '',
			content: '',
			url    : 'http://reactvn.com',
			open   : false
		}
	},
	
	render: function() {
		console.log('Từng item được render bằng dữ liệu tại this.props');
		
		return (
			<div className="news-item">
				<div className="header">
					<a href={this.props.url} className="title">{this.props.title}</a>
					<span className="time">{this.props.time}</span>
				</div>
				<div className="content">{this.props.content}</div>
			</div>
		);
	}
});

module.exports = NewsItem;	
