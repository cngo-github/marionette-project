define(["jquery", "backbone"],
	function($, Backbone) {
		return Backbone.Model.extend({
			urlRoot: '#',
			defaults: {
				'id': '',
				'name': '',
				'date': ''
			}
        });
    });
