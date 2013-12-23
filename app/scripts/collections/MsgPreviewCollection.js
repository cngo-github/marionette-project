define([
	"jquery",
	"backbone",
	"scripts/models/MsgPreviewModel"],
	
	function($, Backbone, Model) {
		return Backbone.Collection.extend({
			model: Model,
			url: function() {
				console.log('fetching collection');
			}
		});
	});
