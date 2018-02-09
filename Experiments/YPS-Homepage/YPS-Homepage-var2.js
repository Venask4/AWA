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
	exp.log('AWA - YPS Home Var2 - v2');

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		h1Text: "Never Waste Time Searching for Parking Again",
		pText: "Over 250,000 parking spaces right here. Reserve monthly, daily or just for a few hours",
		formText: "Where are you going?",
		buttonHTML: '<i class="fa fa-search"></i> Find'
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		@media (min-width: 768px) {\
  			body.template-homepage section.search-header .overlay .o .i .search-content {\
    			width : 750px;\
  			}\
		}\
	';

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Change Header text
		var $searchHeader = $('.search-header');
		$searchHeader.find('h1').text(exp.vars.h1Text);
		$searchHeader.find('p').text(exp.vars.pText);

		// Change Form Text
		$('.placeholder').text(exp.vars.formText);

		// Poll for button
		function poll(element, change) {
			setTimeout(function(){if($(element).length > 1) {
				var cachedBtn = $(element);
				change(cachedBtn);
			}
			else {
				poll(element, change);
			}}, 100)
		}

		function changeBtnText(arg){
			arg[1].innerHTML = exp.vars.buttonHTML;
		}

		poll('.search .btn.btn-green', changeBtnText);
	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);