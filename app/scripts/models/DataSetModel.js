define([
	"jquery",
	"backbone"],

	function($, Backbone) {
		return Backbone.Model.extend({
			urlRoot: 'http://localhost:8080/web/dataset',
			defaults: {
				id: '',
				parent: '',
				name: '',
			}
        });
    });
