define([
	"jquery",
	"backbone"],

	function($, Backbone) {
		return Backbone.Model.extend({
			urlRoot: 'http://localhost:8080/web/message',
			defaults: {
				id: '',
				parent: '',
				title: '',
				creationDate: '',
				text: ''
			}
        });
    });
