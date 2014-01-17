define([
	'underscore',
	'jquery',
	'backbone', 
	'handlebars',
	'js/views/nav_view',
	'js/views/main_view',
	'js/views/about_view',
	'js/views/technology_view',
	'js/views/personnel_view',
	'js/views/projects_view',
	'js/views/contact_view',
	'text!templates/app.hbs'], 
function(_, $, Backbone, Handlebars, NavView, MainView, AboutView, TechnologyView, PersonnelView, ProjectsView, ContactView, template){

  var AppView = Backbone.View.extend({

  	sectionViews : [AboutView, TechnologyView, PersonnelView, ProjectsView, ContactView],

  	template : Handlebars.compile(template),

  	initialize : function() {
  		var sections = {};
  		_.each(this.sectionViews, function(viewClass){
  			var view = new viewClass();
  			sections[view.name] = view;
  			view.on('rendered', function(){
  				var mq = window.matchMedia( "(min-width: 900px)" );
		    	if (mq.matches) {
		    		this.$el.scrollspy('refresh');
			    	this.scrollToActiveEl();
			    }
  			}, this);
  		}, this);

  		this.navView = new NavView({ sections : sections });
  		this.mainView = new MainView({ sections : sections });
  	},

    render : function() {
    	this.$el.html(this.template());

    	this.navView.setElement(this.$('#left-hand-nav')).render();
    	this.mainView.setElement(this.$('#main-well')).render();

    	var mq = window.matchMedia( "(min-width: 900px)" );
    	if (mq.matches) {
	    	this.$el.scrollspy({ target: '#left-hand-nav', offset : 20 });
	    	this.scrollToActiveEl();
	    }

    	return this;
    },

    scrollToActiveEl : function() {
    	var $activeEl = $(window.location.hash || this.$("#left-hand-nav .nav a:first").prop('hash'));
		$(window).scrollTop($activeEl.offset().top);
    },

  });

  return AppView;

});