'use strict';

var React  = require('react');
var Config = require('./config');

var Footer = React.createClass({
	render: function() {
		return (
			<section id="footer">
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<span className="appInfo">
								React Vietnam Interaction v{Config.version}
							</span>
							<span className="copyright">
								Copyright &copy; 2015 React Vietnam Community.
								<br className="hidden-sm hidden-md hidden-lg" />
								&nbsp;All rights reserved.
							</span>
						</div>
					</div>
				</div>
			</section>
		);
	}
});

module.exports = Footer;
