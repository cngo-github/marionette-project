// Monitor Notice Dialog
// --------------------------
// Creates the classification banner for the headers and footers.

define([
	'jquery',
	'text!templates/common/usageAgreement.html',
	'handlebars',
	'backbone',
	'marionette',
	'bs-modal',
	'bs-manager'],
	
	function ($, template, Handlebars, Backbone) {
        return Backbone.Marionette.ItemView.extend({
            template: Handlebars.compile(template),
			
			events: {
				'hidden.bs.modal': 'teardown'
			},
			
			show: function() {
				this.$el.modal('show');
			},
			
			teardown: function() {
				this.$el.data('modal', null);
				this.remove();
			}
        });
    });
