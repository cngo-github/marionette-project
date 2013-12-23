define([
		'scripts/views/App',
		'scripts/mediators/MsgMediator',
		'scripts/views/content/message/MsgLayout',
		'backbone',
		'marionette'
	],
	
	function (App, Mediator, MsgLayout, Backbone) {
		return Backbone.Marionette.Controller.extend({
			initialize: function() {
				this.View = new MsgLayout();
				
				this.mediator = new Mediator();
				this.View.populateMediator(this.mediator);
				this.mediator.startMediator();
			},
			
			message: function() {
				App.mainRegion.show(this.View);
			}
		});
	});
