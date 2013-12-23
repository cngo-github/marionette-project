define([
	'jquery',
	'backbone',
	'handlebars',
	'text!templates/content/dataset/dsListHeader.html',
	'scripts/models/DSListPageModel',
	'marionette'],
	
	function($, Backbone, Handlebars, template, Model) {
		return Backbone.Marionette.ItemView.extend({
			template: Handlebars.compile(template),
			model: new Model(),
			tagName: 'div class="max-width dslistHeader"',
			
			events: {
				'click #nextPage': function() {
					this.trigger('dslist:next', this.model);
				},
				'click #prevPage': function() {
					this.trigger('dslist:prev', this.model);
				}
			},
			
			modelEvents: {
				"change": function() {
					this.render();
				}
			},
		});
	});
