define(['underscore', 'backbone', 'handlebars', 'text!templates/main.hbs'], function(_, Backbone, Handlebars, template){

  var MainView = Backbone.View.extend({

  	template : Handlebars.compile(template),

  	initialize : function(options) {
  		_.each(options, function(val, key){
  			this[key] = val;
  		}, this);
  	},

	render : function() {
     	this.$el.html(this.template(this));
     	_.each(this.sections, function(section, name){
     		section.setElement(this.$('#'+name+' .content')).render();
     	}, this);
	},

  });

  return MainView;

});