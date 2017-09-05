requirejs.config({
	baseUrl: 'js/require',
	paths: {
		'jquery': '../jquery-1.12.4.min',
		'text': '../text'
	},
	config: {
		text: {
			onXhr: function(xhr, url) {
				xhr.setRequestHeader('x-Requested-With', 'XMLHttpRequest');
			}
		}
	}
});
require(['50api'], function(api) {
	$('#btn').click(function() {
		api.loadUser();
	});
});
