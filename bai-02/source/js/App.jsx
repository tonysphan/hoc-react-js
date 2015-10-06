'use strict';

var React    = require('react');
var Menu     = require('./Menu');
var NewsList = require('./NewsList');
var Footer   = require('./Footer');

var App = React.createClass({
	render: function() {
		return (
			<div id="reactvn-app">
				<Menu />
				<NewsList data={this.props.data} />
				<Footer />
			</div>
		);
	}
});

module.exports = App;
