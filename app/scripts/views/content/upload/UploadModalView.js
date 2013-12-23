define([
	'jquery',
	'text!templates/content/upload/uploadModal.html',
	'handlebars',
	'backbone',
	'marionette',
	'bs-modal',
	'bs-manager'],
	
	function ($, template, Handlebars, Backbone) {
        return Backbone.Marionette.ItemView.extend({
            template: Handlebars.compile(template),
			fileList : null,
			
			events: {
				'hidden.bs.modal': 'teardown',
				
				"click #browseButton": function() {
					this.$('#uploadFiles').click();
				},
				
				"change #uploadFiles" : function(e) {
					this.fileList = e.target.files;
					var files = this.fileList;
					var names = "";
					
					if (files != null) {
						for (x=0; x<files.length;x++) {
							names += files[x].name + "\n";
						}
					}
					
					this.$('#uploadList')[0].value = names;
				},
				
				"click #uploadButton" : function() {
					var name = this.$('#dataset').val();				
					var files = this.fileList;
				
					if (files == null) {
						alert("No files selected.");
						return;
					}
				
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

			},
			
			show: function() {
				this.$el.modal('show');
			},
			
			teardown: function() {
				this.$el.data('modal', null);
				this.remove();
			}
        });
    });
