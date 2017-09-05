requirejs.config({
	baseUrl: 'js/require',
	paths: {
		'jquery': '../jquery-1.12.4.min'
	}
});
require(['49api'], function(api) {
	api.getUserByJsonp();
});