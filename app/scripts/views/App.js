define([
		'jquery',
		'backbone',
		'marionette',
		'underscore',
		'handlebars'
	],
	
	function($, Backbone, Marionette, _, Handlebars) {
		var App = new Backbone.Marionette.Application();
		
		App.addRegions({
			headerRegion:"#header",
			mainRegion:"#content",
			footerRegion:"#footer"
		});

		App.addInitializer(function() {
			Backbone.history.start();
		});

		return App;
	});
