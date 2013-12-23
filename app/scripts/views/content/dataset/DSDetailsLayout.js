define([
	'jquery',
	'scripts/views/content/dataset/DSDetailsView',
	'scripts/views/content/upload/UploadModalView',
	'text!templates/content/dataset/dsDetailsImport.html',
	'handlebars',
	'backbone',
	'marionette'],

	function ($, DS, Dialog, template, Handlebars, Backbone) {
		return Backbone.Marionette.Layout.extend({
			template: Handlebars.compile(template),
			tagName: 'div class="max-size"',
			
			regions: {
				datasetRegion: '#dsView',
				dialogRegion: '#importDialog'
			},
			
			events: {
				"click #importButton": function() {
					this.dialogRegion.show(new Dialog);
					this.dialogRegion.$el.modal();
				}
			},
			
			initialize: function() {
				this.dsDetailsView = new DS();
			},
			
			onRender: function() {
				this.datasetRegion.show(this.dsDetailsView);
			},
			
			populateMediator: function(mediator) {
				mediator.setDSDetails(this.dsDetailsView);
			}
		});
    });
