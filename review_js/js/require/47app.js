requirejs.config({
	baseUrl: 'js/require',
	urlArgs: '_=' + (new Date()).getTime(),
	paths: {
		'jquery': '../jquery-1.12.4.min'
	},
	map: {
		'45api': {
			'jquery': '../jquery-1.12.4.min'
		},
		'47api': {
			'jquery': '../jquery-3.2.1.min'
		}
	}
});
require(['45api'], function(api){
	console.log(api);
});
require(['47api'], function(api){
	console.log(api);
});