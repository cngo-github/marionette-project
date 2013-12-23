define([
		'scripts/views/App',
		'scripts/mediators/DSMediator',
		'scripts/views/content/dataset/DSLayout',
		'backbone',
		'marionette'
	],
	
	function (App, Mediator, DSLayout, Backbone) {
		return Backbone.Marionette.Controller.extend({
			initialize: function() {
				this.View = new DSLayout();
				
				this.mediator = new Mediator();
				this.View.populateMediator(this.mediator);
				this.mediator.startMediator();
			},
			
			dataset: function() {
				App.mainRegion.show(this.View);
			}
		});
	});
