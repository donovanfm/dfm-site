define([
	'underscore',
	'jquery',
	'blockui',
	'bootstrap',
	'js/views/app_view'
], function(_, $, blockUI, bs, AppView){
	
  var App = function(options) {

	// Add rotate effect to logo on scroll
	$(window).scroll(function () {
		$('.dfm-logo').css({
			'transform': 'rotate(' + ($(document.body).scrollTop() / 20) + 'deg)'
		});
	});

	new AppView(options).render();

  };

  return App;

});