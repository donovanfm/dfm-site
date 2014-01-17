define(['underscore','backbone','handlebars','js/collections/technologies','text!templates/technology.hbs'], function(_, Backbone,Handlebars,Technologies,template){

  var TechnologyView = Backbone.View.extend({

  	name: 'Technology',

  	template : Handlebars.compile(template),

  	initialize : function() {
  		this.technologies = new Technologies();
  		this.technologies.fetch({
  			success : _.bind(this.render, this)
  		});
  	},

	render : function() {
		var json = this.technologies.toJSON();

		// group technologies into nested array by threes
		var n = 0;
		json = _.chain(json).groupBy(function(){ return Math.floor(n++/3) }).values().value();

		this.$el.html(this.template(json));

		this.trigger('rendered');
	}

  });

  return TechnologyView;

});