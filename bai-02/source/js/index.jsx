var React  = require('react');
var Config = require('./config');
var App    = require('./App');

global.newsLoaded = function( data ) {
	// data chứa dữ liệu từ server
	console.log('Nhận được dữ liệu từ Server', data);
	
	React.render(<App data={data} />, document.getElementById('wrapper'));
};

// nạp JSONP từ server
var script    = document.createElement('script');
script.type   = "text/javascript";
script.src    = Config.updateNewsUrl + '?callback=newsLoaded';

var scriptTag = document.getElementsByTagName("script")[0];
scriptTag.parentNode.insertBefore(script,scriptTag);

