define([
	'jquery',
	'backbone',
	'handlebars',
	'text!templates/content/message/msgDetails.html',
	'scripts/models/MsgDetailsModel',
	'marionette'],
	
	function($, Backbone, Handlebars, template, Model) {
		return Backbone.Marionette.ItemView.extend({
			tagName: 'div class="max-height"',
			template: Handlebars.compile(template),
			model: new Model(),
			
			modelEvents: {
				"change": function() {
					this.render()
				}
			},

			serializeData: function(){
			  return {
			    message: this.model.get("message").attributes,
			    project: this.model.get("project").attributes,
			    dataset: this.model.get("dataset").attributes
			  }
			},

			
			setModel: function(model) {
				this.model.clear();
				this.model.set(model);
			}
		});
	});
