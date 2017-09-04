require.config({
	baseUrl: 'js/require',
	paths: {
		'jquery': '/%E5%8F%8C/0000/review_js/js/jquery-1.12.4'
	}
});

require(['jquery', '45api'], function($, api){
	$('#btn').click(function(){
		api.getUser().then(function(user){
			console.log(user);
		});
	});
});