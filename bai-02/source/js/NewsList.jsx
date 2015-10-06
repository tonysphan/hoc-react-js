'use strict';

var React    = require('react');
var moment   = require('moment');
var NewsItem = require('./NewsItem');

var NewsList = React.createClass({
	getDefaultProps: function(){
		return {
			data: []
		};
	},
	
	render: function() {
		console.log('Render NewsList');
		var lists = this.props.data.map(function(item){
			console.log('Gọi NewsItem với dữ liệu là', item);
			
			var time = '';
			if(item.time > 0)
				time = moment(item.time*1000).format('HH:mm DD/MM/YYYY');
				
			return (
				<NewsItem 
					key={item.id}
					time={time}
					title={item.title}
					url={item.url}
					content={item.desc}
				/>
			)
		});
		return (
			<section id="main">
				<div className="container">
					<div className="row">
						<div id="reactvn-news" className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
						{lists}
						</div>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = NewsList;
