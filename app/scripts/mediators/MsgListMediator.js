define([
		'backbone',
		'marionette'
	],
	
	function (Backbone) {
		return Backbone.Marionette.Controller.extend({			
			setMsgList: function(list) {
				this.msgList = list;
			},
			
			setMsgPager: function(pager) {
				this.msgPager = pager;
			},
			
			startMediator: function() {
				this.listenTo(this.msgPager, 'msglist:next', function(source) {
					var model = source.attributes;
					
					if(model.isLastPage == false) {
						//Grab next page.
						var i = model.currentPage + 1;
						this.msgPager.model.set({
							currentPage: i
						});
						
						if(i > 1) {
							this.msgPager.model.set({
								isFirstPage: false
							});
						}
						
						if(i > 9) {
							this.msgPager.model.set({
								isLastPage: true
							});
						}
					}
				});
				
				this.listenTo(this.msgPager, 'msglist:prev', function(source) {
					var model = source.attributes;
					
					if(model.isFirstPage == false) {
						//Grab next page.
						var i = model.currentPage - 1;
						this.msgPager.model.set({
							currentPage: i
						});
						
						if(i < 2) {
							this.msgPager.model.set({
								isFirstPage: true
							});
						}
						
						if(i < 10) {
							this.msgPager.model.set({
								isLastPage: false
							});
						}
					}
				});
				
				this.listenTo(this.msgList, 'itemview:msg:updateDetails', function(source) {
					this.msgList.markShownChild(source.model);
				});
				
				this.listenTo(this.msgList, 'msglist:toggleAll', function() {
					this.msgList.toggleSelectAll();
				});
				
				this.listenTo(this.msgList, 'msglist:newMessage', function(source) {
					this.msgList.markShownChild(source);
				});
			}
		});
	});
