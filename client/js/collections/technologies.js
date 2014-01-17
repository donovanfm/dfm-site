define(['underscore','backbone'], function(_,Backbone){

  var Technologies = Backbone.Collection.extend({

  	url : '/data/technologies',

	initialize : function() {
		_.each(this.data, function(datum){
			this.add(new Backbone.Model(datum));
		}, this);
	},

  });

  return Technologies;

});