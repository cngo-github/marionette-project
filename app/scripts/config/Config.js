require.config({
	baseUrl:".",
	paths: {
		"jquery": "lib/jquery/jquery",
		"underscore": "lib/lodash/dist/lodash",
		"bootstrap": "lib/bootstrap/dist/js/bootstrap",
		"backbone": "lib/backbone/backbone",
		"bs-modal": "lib/bootstrap-modal/js/bootstrap-modal",
		"bs-manager": "lib/bootstrap-modal/js/bootstrap-modalmanager",
		"marionette": "lib/backbone.marionette/lib/backbone.marionette",
		"text":"lib/text/text",
		"handlebars": "lib/handlebars/handlebars"
	},
	shim: {
		"backbone":{
			"deps":["underscore", "jquery"],
			"exports":"Backbone"
		},
		"bootstrap":["jquery"],
		"marionette": {
			"deps":["underscore", "backbone", "jquery"],
			"exports":"Marionette"
		},
		"bs-modal":["bootstrap", "jquery"],
		"bs-manager":["bootstrap", "jquery"],
		"handlebars": {
			exports: "Handlebars"
		}
	}
});
