define([
		'scripts/mediators/MsgDetailsMediator',
		'scripts/mediators/MsgListMediator',
		'backbone',
		'marionette'
	],
	
	function (Details, List, Backbone) {
		return Backbone.Marionette.Controller.extend({
			initialize: function() {
				this.detailsMediator = new Details();
				this.listMediator = new List();
			},
			
			setMsgList: function(view) {
				this.detailsMediator.setMsgList(view);
				this.listMediator.setMsgList(view);
			},
			
			setMsgListHeader: function(view) {
				this.listMediator.setMsgPager(view);
			},
			
			setMsgDetails: function(view) {
				this.detailsMediator.setMsgDetails(view);
			},
			
			startMediator: function() {
				this.detailsMediator.startMediator();
				this.listMediator.startMediator();
			}
		});
	});
