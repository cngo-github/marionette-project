define([
	'jquery',
	'text!templates/content/upload/fileUpload.html',
	'backbone',
	'handlebars',
	'marionette'],
	
	function($, template, Backbone, Handlebars) {
		return Backbone.Marionette.ItemView.extend({
			template : Handlebars.compile(template),
			fileList : null,

			events : {
				"change #fileName" : function(e) {
					this.fileList = e.target.files;
				},
				"click #uploadButton" : function() {
					var name = $(this.el).find('#dataset').val();				
					var files = this.fileList;
				
					if (files == null) {
						alert("No files selected.");
						return;
					}
				
					console.log(files);

					var formData = new FormData();
					formData.append('dataset', name);
				
					for (x=0; x<files.length;x++) {
						formData.append(x, files[x]);
					}
				
				
					$.ajax({
						url: 'http://localhost:8080/web/v1/upload',
						data: formData,
						cache: false,
						contentType: false,
						processData: false,
						type: 'POST',
						success: function(data) {
							alert("Data uploaded.");
						}
					});
				}
			}
		});
	});
