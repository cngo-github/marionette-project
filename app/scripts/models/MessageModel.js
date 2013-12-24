define([
	"jquery",
	"backbone"],

	function($, Backbone) {
		return Backbone.Model.extend({
			urlRoot: 'web/message',
			defaults: {
				id: '',
				parent: '',
				title: '',
				creationDate: '',
				text: ''
			}
        });
    });
