define([
	"jquery",
	'scripts/models/ProjectModel',
	'scripts/models/MessageModel',
	'scripts/models/DataSetModel',
	"backbone"],
	
	function($, Project, Message, DataSet, Backbone) {
		var Model = Backbone.Model.extend({			
			initialize: function() {
				console.log(arguments);
			},
			
			defaults: {
				name: 'sample view model',
				project: new Project({id: '0123456789', name: "sampleproject"}),
				message: new Message({id: '9876543210', name: 'sample message'}),
				dataset: new DataSet({id: '0246813579', name: 'sample dataset'})
			},
			
			fetch: function() {
				var deferred = $.Deferred();
				var message = this.get('message');
				
				var dataset = this.get('dataset');
				if(dataset == null) {
					dataset = new DataSet();
				}
				
				var _this = this;
				console.log('fetching 1');
				
				$.when(message.fetch()).done(function() {
					console.log('fetching 2');
					dataset.set({'id': message.parent});
//					$.when(dataset.fetch()).done(function() {
//						console.log('fetching 3');
//						_this.set({'message': message});
//						_this.set({'dataset': dataset});
//						deferred.resolve();
//					});
//					console.log(JSON.stringify(_this));
//					return _this;
				});
				
				return deferred.promise();
			}
		});
		
		return Model;
	});
