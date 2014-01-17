define(['underscore','backbone','handlebars','text!templates/nav.hbs'], function(_, Backbone, Handlebars, template){

  var NavView = Backbone.View.extend({

  	template : Handlebars.compile(template),

  	initialize : function(options) {
  		_.each(options, function(val, key){
  			this[key] = val;
  		}, this);
  	},

	render : function() {
		this.$el.html(this.template(this));
	},

  });

  return NavView;

});