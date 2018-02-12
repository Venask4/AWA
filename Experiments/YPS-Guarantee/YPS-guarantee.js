//
// CGIT Optimizely Boilerplate - version 0.1.4
// Wrap the experiment code in an IIFE, this creates a local scope and allows us to
// pass in jQuery to use as $. Other globals could be passed in if required.
var exp = (function($) {

	// Initialise the experiment object
	var exp = {};

	// Wrapper for console.log, to prevent the exp breaking on browsers which don't
	// (always) have 'console' set (e.g. IE9)
	exp.log = function (str) {
	    if (typeof window.console !== 'undefined') {
	        console.log(str);
	    }
	};

	// Log the experiment, useful when multiple experiments are running
	exp.log('AWA - YPS Home Var1 - v2');

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		.awa-text {\
			color: #679bef;\
    		font-weight: 400;\
    		font-family: Montserrat;\
		}\
		.awa-tooltip {\
		    background-color: #679bef;\
		    border-radius: 50%;\
		    width: 15px;\
		    display: inline-block;\
		    color: white;\
		    font-weight: bold;\
		    padding-right: 6px;\
		    height: 0px;\
		    font-family: Montserrat;\
		    padding-bottom: 15px;\
		    font-size: 11px;\
		    line-height: 16px;\
		}\
	';

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Create Object Array
		var $divs = [];
		$.each($('.buttons'), function(){
			$divs.push($(this).children('div').first());
		});
		$divs.shift();

		// Add text
		$.each($divs, function(){
			$(this).addClass('awa-text');
			$(this).html('<span>Guaranteed </span><span class="awa-tooltip">i</span>');
		});
	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);