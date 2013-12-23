// Front Page with Modal Region
// ----------------------------
// Wraps the main content in a view that can be padded.

define([
	'jquery',
	'text!templates/content/welcome.html',
	'scripts/views/common/UsageAgreementView',
	'handlebars',
	'backbone',
	'marionette'],

	function ($, template, Dialog, Handlebars, Backbone) {
		return Backbone.Marionette.Layout.extend({
			template: Handlebars.compile(template),
			
			regions: {
				dialogRegion: '#dialog'
			},
			
			onRender: function() {
				this.dialogRegion.show(new Dialog);
				this.dialogRegion.$el.modal();
			}
		});
    });
