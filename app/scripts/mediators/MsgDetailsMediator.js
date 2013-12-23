define([
		'jquery',
		'backbone',
		'marionette'
	],
	
	function ($, Backbone) {
		return Backbone.Marionette.Controller.extend({
			setMsgList: function(list) {
				this.msgList = list;
			},
			
			setMsgDetails: function(msg) {
				this.msgDetail = msg;
			},
			
			startMediator: function() {
				this.setInitialList();
				
				this.listenTo(this.msgList, 'itemview:msg:updateDetails', function(source) {
					this.updateMessageFull(source.model);
				});
				
				this.listenTo(this.msgList, 'msglist:newMessage', function(source) {
					this.updateMessageFull(source);
				});
			},
			
			setInitialList: function() {
				this.msgList.updateCollection([
					{
						'id': '525eb06de4b099f1cfd7fd5a',
						'title': 'Yet another Some title',
						'date': '2010-01-13'
//					},
//					{
//						'id': 'tests',
//						'title': 'Some other title',
//						'date': '2013-02-12'
					}
				]);
			},
			
			updateMessageFull: function(model) {
				console.log('clicked');
				var newModel = this.msgDetail.model;
				console.log(newModel);
				newModel.get('message').set({'id': model.get('id')});
				newModel.fetch();
			}
		});
	});
