// Desktop Footer Layout
// ---------------------
// Creates the footer with all needed nested views.

define([
	'jquery',
	'text!templates/footer/desktopFooter.html',
	'handlebars',
	'backbone',
	'marionette'],
	
	function ($, template, Handlebars, Backbone) {
        return Backbone.Marionette.Layout.extend({
            template: Handlebars.compile(template)
        });
    }
);
