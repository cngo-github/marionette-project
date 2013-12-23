define(["jquery", "backbone"],
	function($, Backbone) {
		return Backbone.Model.extend({
			urlRoot: '#',
			defaults: {
				'isFirstPage': true,
				'isLastPage': false,
				'currentPage': 0,
				'totalPage': 0
			}
        });
    });
