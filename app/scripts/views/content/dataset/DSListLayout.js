define([
	'jquery',
	'scripts/views/content/dataset/DSListHeaderView',
	'scripts/views/content/dataset/DSPreviewListView',
	'text!templates/content/dataset/dsList.html',
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
				mediator.setDSList(this.listView);
				mediator.setDSListHeader(this.headerView);
			}
		});
    });
