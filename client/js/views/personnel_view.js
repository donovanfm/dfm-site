define(['underscore','backbone','handlebars','js/collections/personnel','text!templates/personnel.hbs'], function(_, Backbone,Handlebars,Personnel,template){

  var PersonnelView = Backbone.View.extend({

  	name: 'Personnel',

  	template : Handlebars.compile(template),

  	initialize : function() {
  		this.personnel = new Personnel();
  		this.personnel.fetch({
  			success : _.bind(this.render, this)
  		});
  	},

	render : function() {
		this.$el.html(this.template(this.personnel.toJSON()));

		this.trigger('rendered');
	}

  });

  return PersonnelView;

});