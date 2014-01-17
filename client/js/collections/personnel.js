define(['underscore','backbone'], function(_,Backbone){

  var Personnel = Backbone.Collection.extend({

  url : '/data/personnel',

	initialize : function() {
		_.each(this.data, function(datum){
			this.add(new Backbone.Model(datum));
		}, this);
	},

  });

  return Personnel;

});