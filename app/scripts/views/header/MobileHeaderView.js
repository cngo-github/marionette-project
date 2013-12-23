define([
	'backbone',
	'marionette',
	'jquery',
	'jquerymobile',
	'hbs!templates/header/mobileHeader'], function (Backbone, Marionette, $, jqm, template) {
        return Backbone.Marionette.ItemView.extend({
            template: template,
            initialize: function() {
                _.bindAll(this);
            },
            onRender: function() {
                this.$el.navbar();
            }
        });
    });
