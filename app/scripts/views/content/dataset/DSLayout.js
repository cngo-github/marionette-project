define([
	'jquery',
	'scripts/views/content/dataset/DSListLayout',
	'scripts/views/content/dataset/DSDetailsLayout',
	'text!templates/content/dataset/ds.html',
	'handlebars',
	'backbone',
	'marionette'],

	function ($, List, DS, template, Handlebars, Backbone) {
		return Backbone.Marionette.Layout.extend({
			template: Handlebars.compile(template),
			tagName: 'div class="max-size"',
			
			regions: {
				listRegion: '#dsList',
				datasetRegion: '#dsDetailsImport'
			},
			
			initialize: function() {
				this.listView = new List();
				this.dsDetailsLayout = new DS();
			},
			
			onRender: function() {
				this.listRegion.show(this.listView);
				this.datasetRegion.show(this.dsDetailsLayout);
			},
			
			populateMediator: function(mediator) {
				this.listView.populateMediator(mediator);
				this.dsDetailsLayout.populateMediator(mediator);
			}
		});
    });
