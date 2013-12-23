define([
    "jquery",
    "backbone",
    "scripts/models/ProjectPreviewModel"],
    
    function($, Backbone, Model) {
        return Backbone.Collection.extend({
            model: Model,
            url: ''
        });
    });
