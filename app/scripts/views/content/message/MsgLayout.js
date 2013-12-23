define([
	'jquery',
	'scripts/views/content/message/MsgListLayout',
	'scripts/views/content/message/MsgDetailsView',
	'text!templates/content/message/msg.html',
	'handlebars',
	'backbone',
	'marionette'],

	function ($, List, Msg, template, Handlebars, Backbone) {
		return Backbone.Marionette.Layout.extend({
			template: Handlebars.compile(template),
			tagName: 'div class="max-size"',
			
			regions: {
				listRegion: '#msgList',
				messageRegion: '#msgView'
			},
			
			initialize: function() {
				this.listView = new List();
				this.msgDetailsView = new Msg();
			},
			
			onRender: function() {
				this.listRegion.show(this.listView);
				this.messageRegion.show(this.msgDetailsView);
			},
			
			populateMediator: function(mediator) {
				this.listView.populateMediator(mediator);
				mediator.setMsgDetails(this.msgDetailsView);
			}
		});
    });
