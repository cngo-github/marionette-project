define(["jquery","backbone","scripts/models/NavModel"],
	function($, Backbone, Model) {
		return Backbone.Collection.extend({
			model: Model,
			url: ''
		});
	});
