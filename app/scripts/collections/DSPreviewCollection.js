define([
	"jquery",
	"backbone",
	"scripts/models/DSPreviewModel"],
	
	function($, Backbone, Model) {
		return Backbone.Collection.extend({
			model: Model,
			url: ''
		});
	});
