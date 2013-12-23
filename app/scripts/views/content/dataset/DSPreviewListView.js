define([
	'jquery',
	'handlebars',
	'scripts/views/content/dataset/DSPreviewView',
	'text!templates/content/dataset/dsPreviewList.html',
	'scripts/collections/DSPreviewCollection',
	'scripts/models/DSModel',
	'backbone'
	],
	
	function($, Handlebars, ItemView, template, Collection, Model, Backbone) {
		return Backbone.Marionette.CompositeView.extend({
			collection: new Collection(),
			itemView: ItemView,
			itemViewContainer: '.dsPreviewList',
			template: Handlebars.compile(template),
			tagName: 'div class="max-height"',
			selectedAll: false,
			
			events: {
				'click #selectAll': function() {
					this.trigger('dslist:toggleAll');
				},
				'click #newDataset': function() {
					this.trigger('dslist:newDataset', new Model());
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
