// Classification Banner View
// --------------------------
// Creates the classification banner for the headers and footers.

define([
	'jquery',
	'text!templates/common/classificationBanner.html',
	'handlebars',
	'backbone',
	'marionette'], function ($, template, Handlebars, Backbone) {
        //ItemView provides some default rendering logic
        return Backbone.Marionette.ItemView.extend({
            template: Handlebars.compile(template)
        });
    });
