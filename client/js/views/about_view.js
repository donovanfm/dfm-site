define(['backbone', 'handlebars', 'text!templates/about.hbs'], function(Backbone, Handlebars, template){

  var AboutView = Backbone.View.extend({

  	name: 'About',

  	template : Handlebars.compile(template),

	render : function() {
		this.$el.html(this.template());

		this.trigger('rendered');
	}

  });

  return AboutView;

});