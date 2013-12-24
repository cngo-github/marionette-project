// DEPENDENCIES
// ============
var express = require('express'),
	http = require("http"),
	port = (process.env.PORT || 8001),
	server = module.exports = express();

// SERVER CONFIGURATION
// ====================
server.configure(function () {
	server.use(express["static"](__dirname + "/../app"));
	server.use(express.errorHandler({
		dumpExceptions:true,
		showStack:true
	}));
   // server.use(server.router);
});

// SERVER
// ======

// Start Node.js Server
http.createServer(server).listen(port);

server.get("/web/message/:id", function (req, res) {
  res.json({
      id: req.params.id,
      parent: 1,
      title: "Message Title",
      creationDate: '1/1/1',
      text: 'Message Text'
  });
});

server.get("/web/dataset/:id", function (req, res) {
  res.json({
    id: req.params.id,
    parent: 123,
    name:"My DataSet"
  });
});


console.log('Welcome to Marionette-Require-Boilerplate!\n\nPlease go to http://localhost:' + port + ' to start using Require.js and Marionette');
