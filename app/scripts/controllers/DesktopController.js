define([
		'scripts/views/App',
		'scripts/views/content/WelcomeLayout',
		'scripts/views/header/DesktopHeaderLayout',
		'scripts/views/content/message/MsgLayout',
		'backbone',
		'marionette'
	],
	
	function (App, WelcomeLayout, DesktopHeaderLayout,
			Message, Backbone) {
		return Backbone.Marionette.Controller.extend({
			initialize:function (options) {
				App.headerRegion.show(new DesktopHeaderLayout());
			},
			
			index:function () {
				App.mainRegion.show(new WelcomeLayout());
			}
		});
	});
