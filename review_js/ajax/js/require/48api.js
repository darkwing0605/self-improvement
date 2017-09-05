define(['jquery'], function($) {
	return {
		getUserByJsonp: function() {
			$.ajax({
				url: 'http://127.0.0.1:88/48user.js',
				dataType: 'jsonp',
				jsonpCallback: 'onloaded',
				success: function(data) {
					console.log(data);
				}
			})
		}
	}
});

function onloaded(user){
	console.log(user);
}