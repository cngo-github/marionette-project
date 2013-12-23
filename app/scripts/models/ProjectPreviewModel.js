define(["jquery", "backbone"],
    function($, Backbone) {
        return Backbone.Model.extend({
            urlRoot: '#',
            defaults: {
                'id': '012345',
                'name': 'Some title',
                'creationDate': '1/1/1111'
            }
        });
    });
