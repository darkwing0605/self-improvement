requirejs.config({
	baseUrl: 'js/require',
	paths: {
		'jquery': [
			'http://apps.bdimg.com/libs/jquery/2.1.4/jquery.min', //首选项
			'/%E5%8F%8C/0000/review_js/js/jquery-1.12.4' // 备选项
		]
	}
});
require(['44helper'], function(helper){
	var str = helper.trim('   amd       ');
	console.log(str);
});