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
	exp.log('AWA - IPSL PLP Value Prop/Link to Detail Page v1');

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		h3Text: '<h3 class="awa-h3">The easy, DIY alternative to tiling</h3>',
		h4Link: '<h4 class="awa-h4">First time buying wall cladding? <a href="https://www.interiorpanelsystems.co.uk/bathroom-wall-panels.html">Learn more and compare products here</a></h4>'
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	.awa-h3 {\
		font-style: italic;\
		color: rgb(51, 51, 51);\
	}\
	.awa-h4 {\
		font-style: italic;\
		color: #636363;\
	}\
	.awa-h4 a {\
		text-decoration: underline;\
		color: #333333;\
	}\
	';

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Add h3 text
		$('.Commercial_text').after(exp.vars.h3Text);

		// Add link
		$('.Commercial_text').parent().append(exp.vars.h4Link);
	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);