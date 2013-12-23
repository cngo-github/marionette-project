define([
		'backbone',
		'marionette'
	],
	
	function (Backbone) {
		return Backbone.Marionette.Controller.extend({
			setDSList: function(list) {
				this.dsList = list;
			},
			
			setDSDetails: function(dataset) {
				this.dsDetail = dataset;
			},
			
			startMediator: function() {
				this.setInitialList();
				
				this.listenTo(this.dsList, 'itemview:ds:updateDetails', function(source) {
					this.updateDatasetFull(source.model);
				});
				
				this.listenTo(this.dsList, 'dslist:newDataset', function(source) {
					this.updateDatasetFull(source);
				});
			},
			
			setInitialList: function() {
				this.dsList.updateCollection([
					{
						'id': '01234',
						'name': 'Some title',
						'date': '2010-01-13'
					},
					{
						'id': '56789',
						'name': 'Some other title',
						'date': '2013-02-12'
					}
				]);
			},
			
			updateDatasetFull: function(model) {
				this.dsDetail.setModel({
					id: model.get('id'),
					name: model.get('name'),
					projectId: 'PId ' + model.get('id'),
					projectName: 'A project name',
					date: model.get('date')
				});
			}
		});
	});
