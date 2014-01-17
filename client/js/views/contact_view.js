define([
	'underscore',
	'jquery',
	'backbone',
	'handlebars',
	'js/models/contact',
	'text!templates/contact.hbs',
	'text!templates/success.hbs',
	'text!templates/error.hbs'
], function(_,$,Backbone,Handlebars,Contact,template,successTemplate,errorTemplate){

  var ContactView = Backbone.View.extend({

  	name: 'Contact',

  	template : Handlebars.compile(template),

  	events : {
  		'click .send.btn' : 'sendEmail',
  		'focus .form-control' : 'removeFormErrorState',
  	},

  	attrSelectors : {
  		'senderName' 			: 'input.name',
  		'senderOrganization' 	: 'input.organization',
  		'senderEmail' 			: 'input.email',
  		'text'					: 'textarea.description',
  	},

	render : function() {
		this.$el.html(this.template());

		this.trigger('rendered');
	},

	sendEmail : function() {
		var contact = new Contact(_.object(_.map(this.attrSelectors, function(selector, attr){
			return [attr, this.$(selector).val()];
		}, this)));

		contact.on('invalid', _.bind(function(model, errorAttrs){
			_.each(errorAttrs, function(attr){
				this.$(this.attrSelectors[attr]).parents('.form-group').addClass('has-error');
			}, this);
		}, this));

		if (contact.isValid()) {
			$.blockUI({ message: '<h4><img class="spinning-logo" src="assets/dfm-logo-small.png"/>Sending...</h4>' });
			var deg = 0;
			var spinInterval = setInterval(function(){
				deg += 2;
				$('.spinning-logo').css({
					transform: 'rotate(' + deg + 'deg)'
				});
			}, 15);
		}

		contact.save(null, {
			success : _.bind(function(){
				this.showResponseMessage(successTemplate, 'Message sent successfully. We will respond as soon as we can. Thank you.');
				clearInterval(spinInterval);
			}, this),
			error : _.bind(function(){
				this.showResponseMessage(errorTemplate, 'Error sending message. Please try again later.');
				clearInterval(spinInterval);
			}, this)
		});
	},

	showResponseMessage : function(template, message) {
		$.unblockUI();
		this.$('.alerts').html(template({
			message : message
		}));
		$('html body').animate({
			scrollTop : $('#Contact').offset().top
		}, 300);
	},

	removeFormErrorState : function(e) {
		$(e.currentTarget).parents('.form-group').removeClass('has-error');
	}

  });

  return ContactView;

});