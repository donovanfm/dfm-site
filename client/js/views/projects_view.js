define(['underscore','jquery','backbone','handlebars','js/collections/projects','text!templates/projects.hbs'], function(_,$,Backbone,Handlebars,Projects,template){

  var ProjectsView = Backbone.View.extend({

  	name: 'Projects',

  	template : Handlebars.compile(template),

  	initialize : function() {
  		this.projects = new Projects();
  		this.projects.fetch({
  			success : _.bind(this.render, this)
  		});
  	},

	render : function() {
		var json = this.projects.toJSON();

		// group technologies into nested array by twos
		var n = 0;
		json = _.chain(json).groupBy(function(){ return Math.floor(n++/2) }).values().value();

		this.$el.html(this.template(json));

		this.$('.row').each(function(){
			var cols = $(this).find('.col-md-4');
			cols.first().addClass(cols.length==2 ? 'col-md-offset-2' : 'col-md-offset-4');
		});

		this.trigger('rendered');
	}

  });

  return ProjectsView;

});