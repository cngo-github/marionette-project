define([
	'jquery',
	'scripts/views/content/message/MsgListHeaderView',
	'scripts/views/content/message/MsgPreviewListView',
	'text!templates/content/message/msgList.html',
	'handlebars',
	'backbone',
	'marionette'],

	function ($, Header, List, template, Handlebars, Backbone) {
		return Backbone.Marionette.Layout.extend({
			template: Handlebars.compile(template),
			tagName: 'div class="max-width"',
			
			regions: {
				headerRegion: '#listHeader',
				bodyRegion: '#listBody',
				footerRegion: '#listFooter'
			},
			
			initialize: function() {
				this.headerView = new Header();
				this.listView = new List();
			},
			
			onRender: function() {
				this.headerRegion.show(this.headerView);
				this.bodyRegion.show(this.listView);
			},
			
			populateMediator: function(mediator) {
				mediator.setMsgList(this.listView);
				mediator.setMsgListHeader(this.headerView);
			}
		});
    });
