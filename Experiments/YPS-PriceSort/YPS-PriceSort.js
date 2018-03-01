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
	exp.log('AWA - YPS Price Sort v2');

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		radioBtns: '<div id="awa-sort-cont"> <form> <span>Price: </span> <label>Low-high&nbsp<input type="radio" name="awa-low-high" id="LH" value="low-high"></label>&nbsp&nbsp<label>High-low&nbsp<input type="radio" name="awa-low-high" id="HL" value="high-low"></label>  </form> </div>'
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
	#awa-sort-cont {\
		float: left;\
		margin: 3px 10px 0px 10px;\
	}\
	';

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Add radio buttons
		$('#search-results-header-title .location-name').after(exp.vars.radioBtns);

		function sortLowHigh() {
			var $spaces = [];
			$('#search-results-content').children('ul').children('li').each(function(){
				$spaces.push($(this));
			});
			$spaces.sort(function(a,b) {
				return parseInt(a.find('.price').text().replace('£','')) - parseInt(b.find('.price').text().replace('£',''));
			});

			$('#search-results-content').children('ul').html($spaces);
		}

		function sortHighLow() {
			var $spaces = [];
			$('#search-results-content').children('ul').children('li').each(function(){
				$spaces.push($(this));
			});
			$spaces.sort(function(a,b) {
				return parseInt(b.find('.price').text().replace('£','')) - parseInt(a.find('.price').text().replace('£',''));
			});

			$('#search-results-content').children('ul').html($spaces);
		}

		function radioClk() {
			if ($('#LH').prop('checked') === true) {
				sortLowHigh()
			}
			else if ($('#HL').prop('checked') === true) {
				sortHighLow();
			}
		}

		$('#awa-sort-cont label').on('click', radioClk);

		// Mutation observer
		var target = $('#search-results-content').children('ul').children('li').get(0);
		var observer = new MutationObserver(function(mutations) {
		  mutations.forEach(function(mutation) {
		    setTimeout(function(){radioClk();},3500);
		  });    
		});
		var config = { attributes: true, childList: true, characterData: true };
		observer.observe(target, config);
	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);