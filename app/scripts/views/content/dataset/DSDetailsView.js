define([
	'jquery',
	'backbone',
	'handlebars',
	'text!templates/content/dataset/dsDetails.html',
	'scripts/views/content/upload/UploadModalView',
	'scripts/models/DSModel',
	'marionette'],
	
	function($, Backbone, Handlebars, template, Dialog, Model) {
		return Backbone.Marionette.ItemView.extend({
			tagName: 'div class="max-size"',
			template: Handlebars.compile(template),
			model: new Model(),
			
			modelEvents: {
				"change": function() {
					this.render();
				}
			},
			
			setModel: function(model) {
				this.model.clear();
				this.model.set(model);
			}
		});
	});
