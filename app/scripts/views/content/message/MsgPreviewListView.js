define([
	'jquery',
	'handlebars',
	'scripts/views/content/message/MsgPreviewView',
	'text!templates/content/message/msgPreviewList.html',
	'scripts/collections/MsgPreviewCollection',
	'scripts/models/MsgDetailsModel',
	'backbone'
	],
	
	function($, Handlebars, ItemView, template, Collection, Model, Backbone) {
		return Backbone.Marionette.CompositeView.extend({
			collection: new Collection(),
			itemView: ItemView,
			itemViewContainer: '.msgPreviewList',
			template: Handlebars.compile(template),
			tagName: 'div class="max-height"',
			selectedAll: false,
			
			events: {
				'click #selectAll': function() {
					this.trigger('msglist:toggleAll');
				},
				'click #newMessage': function() {
					this.trigger('msglist:newMessage', new Model());
				}
			},
			
			updateCollection: function(collection) {
				this.collection.reset(collection);
			},
			
			markShownChild: function(model) {
				this.children.each(function(view) {
					view.setShown(model.get('id'));
				});
			},
			
			toggleSelectAll: function() {
				this.selectedAll = !this.selectedAll;
				var toggle = this.selectedAll;
				
				this.children.each(function(view) {
					view.setSelection(toggle);
				});
			}
		});
	});
