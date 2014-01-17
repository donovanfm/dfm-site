define(['underscore','backbone'], function(_,Backbone){

  var Projects = Backbone.Collection.extend({

  url : '/data/projects',

	initialize : function() {
		_.each(this.data, function(datum){
			this.add(new Backbone.Model(datum));
		}, this);
	},

  });

  return Projects;

});