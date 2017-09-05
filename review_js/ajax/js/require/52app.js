// 读取cookie
var language = document.cookie.match(/language=([^;]+)/);
var locale = 'zh-cn';
if (language) {
	locale = language[1].split('_')[0];
}
// document.cookie = 'language = en_US'

requirejs.config({
	baseUrl: 'js/require',
	paths: {
		'jquery': '../jquery-1.12.4.min',
		'i18n': '../i18n'
	},
	config: {
		i18n: {
			locale: locale
		}
	}
});

require(['52api', 'i18n!nls/message'], function(api, i18n){
	$('#btn1').after('<button>'+ i18n.edit +'</button>');
});