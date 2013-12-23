define([
	'jquery',
	'backbone',
	'handlebars',
	'text!templates/content/dataset/dsPreview.html',
	'scripts/models/DSPreviewModel',
	'marionette'],
	
	function($, Backbone, Handlebars, template, Model) {
		return Backbone.Marionette.ItemView.extend({
			template: Handlebars.compile(template),
			tagName: 'div class="table-row"',
			selected: false,
			
			events: {
				'click #dataset': function() {
					this.trigger("ds:updateDetails", this.model);
				},
				'click #selection': function(source) {
					this.toggleSelection();
				}
			},
			
			toggleSelection: function() {
				var $target = this.$('#selection');
				
				if($target.hasClass('selected-notice')) {
					this.setSelection(false);
				} else {
					this.setSelection(true);
				}
			},
			
			setSelection: function(selected) {
				this.selected = selected;
				
				if(selected == false) {
					this.$('#selection').removeClass('selected-notice');
				} else {
					this.$('#selection').addClass('selected-notice');
				}
			},
			
			setShown: function(id) {
				var $target = this.$('#dataset');
				
				if(this.model.get('id') == id) {
					$target.addClass('shown-dataset');
				} else {
					$target.removeClass('shown-dataset');
				}
			}
		});
	});
