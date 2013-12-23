// Desktop Header Layout
// ---------------------
// Creates the header with all needed nested views.

define([
	'jquery',
	'text!templates/header/desktopHeader.html',
	'handlebars',
	'backbone',
	'marionette'],
	
	function ($, template, Handlebars, Backbone) {
        return Backbone.Marionette.Layout.extend({
			template: Handlebars.compile(template),
			
			events: {
				'click a': function(source) {
					var target = $(source.target);
					target.parent().siblings('li').removeClass('active');
					$(source.target).parent().addClass('active');
				},
				'test' : function(){
                    console.log("triggered");
                }
            },
			
            regions: {
				selectableNavRegion: "#selectNav"
			}
        });
    });
