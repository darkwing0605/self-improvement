require.config({
	baseUrl: 'js/require',
	paths: {
		'jquery': '../jquery-1.12.4',
		'bootstrap': '../../../bootstrap-3.3.7-dist/js/bootstrap.min',
		'modernizr': 'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min',
		'backbone': 'http://apps.bdimg.com/libs/backbone.js/1.1.2/backbone-min',
		'underscore': 'http://apps.bdimg.com/libs/underscore.js/1.7.0/underscore-min'
	},
	shim: {
		'modernizr': {
			exports: 'Modernizr'
		},
		'bootstrap': ['jquery']
	}
});

require(['jquery', 'modernizr', 'backbone', 'bootstrap'], function($, modernizr, Backbone){
	console.log($);
	console.log(modernizr);
	console.log(Backbone);
});