define(['jquery'], function($){
	return {
		getUser: function(){
			var def = $.Deferred();
			require(['45user'], function(user){
				def.resolve(user);
			})
			return def;
			console.log(def);
		}
	}
})