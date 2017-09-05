define(['jquery'], function($){
	return {
		loadUser: function() {
			require(['text!/../../ajax/50user.html!strip'], function(template) {
				$('#userinfo').html(template);
			});
		}
	}
});