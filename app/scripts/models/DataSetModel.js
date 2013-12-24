define([
	"jquery",
	"backbone"],

	function($, Backbone) {
		return Backbone.Model.extend({
			urlRoot: 'web/dataset',
			defaults: {
				id: '',
				parent: '',
				name: '',
			}
        });
    });
