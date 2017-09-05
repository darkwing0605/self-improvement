define(['jquery'], function($) {
	return {
		getUserByJsonp: function() {
			require(['http://127.0.0.1:88/49user.js'], function(user){
				console.log(user);
			});
		}
	}
});
