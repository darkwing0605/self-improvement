requirejs.config({
	baseUrl: 'js/require',
	paths: {
		'jquery': '../jquery-1.12.4'
	}
});
require(['48api'], function(api) {
	api.getUserByJsonp();
});