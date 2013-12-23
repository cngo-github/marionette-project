define([
	'jquery',
	'backbone',
	'handlebars',
	'text!templates/content/message/msgPreview.html',
	'scripts/models/MsgPreviewModel',
	'marionette'],
	
	function($, Backbone, Handlebars, template, Model) {
		return Backbone.Marionette.ItemView.extend({
			template: Handlebars.compile(template),
			tagName: 'div class="table-row"',
			selected: false,
			
			events: {
				'click #message': function() {
					this.trigger("msg:updateDetails", this.model);
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
				var $target = this.$('#message');
				
				if(this.model.get('id') == id) {
					$target.addClass('shown-message');
				} else {
					$target.removeClass('shown-message');
				}
			}
		});
	});
