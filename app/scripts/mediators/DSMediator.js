define([
		'scripts/mediators/DSDetailsMediator',
		'scripts/mediators/DSListMediator',
		'backbone',
		'marionette'
	],
	
	function (Details, List, Backbone) {
		return Backbone.Marionette.Controller.extend({
			initialize: function() {
				this.detailsMediator = new Details();
				this.listMediator = new List();
			},
			
			setDSList: function(view) {
				this.detailsMediator.setDSList(view);
				this.listMediator.setDSList(view);
			},
			
			setDSListHeader: function(view) {
				this.listMediator.setDSPager(view);
			},
			
			setDSDetails: function(view) {
				this.detailsMediator.setDSDetails(view);
			},
			
			startMediator: function() {
				this.detailsMediator.startMediator();
				this.listMediator.startMediator();
			}
		});
	});
