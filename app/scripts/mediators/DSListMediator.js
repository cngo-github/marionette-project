define([
		'backbone',
		'marionette'
	],
	
	function (Backbone) {
		return Backbone.Marionette.Controller.extend({			
			setDSList: function(list) {
				this.dsList = list;
			},
			
			setDSPager: function(pager) {
				this.dsPager = pager;
			},
			
			startMediator: function() {
				this.listenTo(this.dsPager, 'dslist:next', function(source) {
					var model = source.attributes;
					
					if(model.isLastPage == false) {
						//Grab next page.
						var i = model.currentPage + 1;
						this.dsPager.model.set({
							currentPage: i
						});
						
						if(i > 1) {
							this.dsPager.model.set({
								isFirstPage: false
							});
						}
						
						if(i > 9) {
							this.dsPager.model.set({
								isLastPage: true
							});
						}
					}
				});
				
				this.listenTo(this.dsPager, 'dslist:prev', function(source) {
					var model = source.attributes;
					
					if(model.isFirstPage == false) {
						//Grab next page.
						var i = model.currentPage - 1;
						this.dsPager.model.set({
							currentPage: i
						});
						
						if(i < 2) {
							this.dsPager.model.set({
								isFirstPage: true
							});
						}
						
						if(i < 10) {
							this.dsPager.model.set({
								isLastPage: false
							});
						}
					}
				});
				
				this.listenTo(this.dsList, 'itemview:ds:updateDetails', function(source) {
					this.dsList.markShownChild(source.model);
				});
				
				this.listenTo(this.dsList, 'dslist:toggleAll', function() {
					this.dsList.toggleSelectAll();
				});
				
				this.listenTo(this.dsList, 'dslist:newDataset', function(source) {
					this.dsList.markShownChild(source);
				});
			}
		});
	});
