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
	exp.log('');
	
    // Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
        	};
	
    // Styles
	// String containing the CSS for the experiment
	exp.css = '\
		';
	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {

		var $form = jQuery('.summary.entry-summary form');
		var $inputs = $form.find('input');
		var $selects = $form.find('select');
		var $button = $form.find('button');

		function addToCart() {

			var dataObj = {};

			// Get data from forms
			for (var i = 0; i < $inputs.length; i++) {
				dataObj[$inputs[i].getAttribute('name')] = $inputs[i].value;
			}
			for (var i = 0; i < $selects.length; i++) {
				dataObj[$selects[i].getAttribute('name')] = $selects[i].value;
			}
			console.table(dataObj);
			$.ajax({
				type: 'POST',
				url: 'https://xeroshoes.com/shop/terraflex/terraflex-men/',
				datatype: 'json',
				data: dataObj,
				success: function() {
					console.log('success!');
					window.location.href = 'https://xeroshoes.com/cart/';
				}
			})
		}
		//addToCart();
		$button.on('click',function(e) {
			e.preventDefault();
		})
	};
	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;
	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);
