define(["jquery", "backbone"],
	function($, Backbone) {
		// Creates a new Backbone Model class object
		var Model = Backbone.Model.extend({
			// Default values for all of the Model attributes
			defaults: {
				id: '1234',
				parent: '',
				name: 'Project name is here',
				description: 'Project Description is here'
			}
		});

        // Returns the Model class
        return Model;
    });
