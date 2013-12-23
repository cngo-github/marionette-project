require([
		"scripts/views/App",
		"scripts/routers/AppRouter",
		"scripts/controllers/DesktopController",
		"scripts/routers/MsgRouter",
		"scripts/controllers/MsgController",
		"scripts/routers/DSRouter",
		"scripts/controllers/DSController",
		"jquery",
		"backbone",
		"marionette",
		"bootstrap"
	],
	
	function (App, AppRouter, AppController, MsgRouter, MsgController, DSRouter, DSController) {
		App.appRouter = new AppRouter({
			controller:new AppController()
		});
		
		App.msgRouter = new MsgRouter({
			controller: new MsgController()
		});
        
		App.dsRouter = new DSRouter({
			controller: new DSController()
		});
		
		App.start();
	});
