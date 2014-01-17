define(['underscore','backbone'], function(_, Backbone){
	
	var Contact = Backbone.Model.extend({

		url : '/contact',

		defaults : {
			senderName : '',
			senderOrganization : '',
			senderEmail : '',
			text : '',
		},

		validationRegex : {
			'text' : /.+/,
			'senderName' : /.+/,
			'senderEmail' : /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i,
		},

		validate : function() {
			var invalidAttrs = _.filter(_.map(this.validationRegex, function(regex, attr){
				if (!this.get(attr).match(regex)) return attr;
			}, this));
			return (invalidAttrs.length ? invalidAttrs : null);
		}

	});

	return Contact;

})