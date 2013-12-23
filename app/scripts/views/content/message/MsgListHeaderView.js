define([
	'jquery',
	'backbone',
	'handlebars',
	'text!templates/content/message/msgListHeader.html',
	'scripts/models/MsgListPageModel',
	'marionette'],
	
	function($, Backbone, Handlebars, template, Model) {
		return Backbone.Marionette.ItemView.extend({
			template: Handlebars.compile(template),
			model: new Model(),
			tagName: 'div class="max-width msglistHeader"',
			
			events: {
				'click #nextPage': function() {
					this.trigger('msglist:next', this.model);
				},
				'click #prevPage': function() {
					this.trigger('msglist:prev', this.model);
				}
			},
			
			modelEvents: {
				"change": function() {
					this.render()
				}
			},
		});
	});
