'use strict';

var React  = require('react');

var Menu = React.createClass({
	getInitialState: function(){
		return {
			isOpen: false
		};
	},
	
	handleNavToggleClick: function(){
		this.setState({
			isOpen: !this.state.isOpen
		});
	},

	render: function() {
		var navClassName = '';
		if(this.state.isOpen)
			navClassName = 'open-nav';
		
		return (
			<nav id="global-nav" className={navClassName}>
				<div className="container">
					<div className="row">
						<div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
							<div id="nav-toggle" onClick={this.handleNavToggleClick}>
								<span className="top"><span></span></span>
								<span className="bottom"><span></span></span>
							</div>
							<div id="logo">
								<a href="http://reactvn.com/"><img alt="" src="img/logo.svg" /></a>
							</div>
							<div id="global-nav-items">
								<ul>
									<li>
										<a href="http://reactvn.com/blog">Blog</a>
									</li>
									<li>
										<a href="http://reactvn.com/hoi-dap">Hỏi Đáp</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
});

module.exports = Menu;
