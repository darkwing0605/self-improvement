requirejs.config({
	baseUrl: 'js/require',
	paths: {
		'jquery': '../jquery-1.12.4.min',
		'jquery-ui': '../jquery-ui-1.12.1/jquery-ui.min',
		// css 代替下面的map
		'css': '../css'
	},
	// map: {
	// 	'*': {
	// 		'css': '../css'
	// 	}
	// },
	shim: {
		// shim代替下面require内的css
		'jquery-ui': ['css!../jquery-ui-1.12.1/jquery-ui.css', 'css!../jquery-ui-1.12.1/jquery-ui.theme.css']
	}
});

// require(['51api', 'jquery-ui', 'css!../jquery-ui-1.12.1/jquery-ui.css', 'css!../jquery-ui-1.12.1/jquery-ui.theme.css'], function(api){});

require(['51api', 'jquery-ui'], function(api){});