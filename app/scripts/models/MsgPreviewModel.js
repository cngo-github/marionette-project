define(["jquery", "backbone"],
	function($, Backbone) {
		return Backbone.Model.extend({
			urlRoot: 'anothertest',
			url: function() {
				console.log('model url fetched');
			},
			defaults: {
				'id': '',
				'title': '',
				'date': ''
			}
        });
    });
