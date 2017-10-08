//
// CGIT Optimizely Boilerplate - version 0.1.4
//
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
  exp.log('AWA - Paypal v1');


  // Variables
  // Object containing variables, generally these would be strings or jQuery objects
  exp.vars = {
  		paypalButton: '<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/checkout-logo-large.png" alt="Check out with PayPal" class="awa-paypal-button" onclick="oscPlaceOrder(this);" />'
  };

  // Styles
  // String containing the CSS for the experiment
  exp.css = '\
  		.awa-paypal-button {\
  			display: inline;\
  			margin-top: 15px;\
			padding-left: 15px;\
			cursor: pointer;\
		}\
    ';


  // Init function
  // Called to run the actual experiment, DOM manipulation, event listeners, etc
  exp.init = function() {
    // Add styles
    $('head').append('<style>' + exp.css + '</style>');

    var $orderButton = $('.btn-proceed-checkout.onestepcheckout-btn-checkout.onestepcheckout-place');
    $orderButton.after(exp.vars.paypalButton);
    };

  exp.init();
  // Return the experiment object so we can access it later if required
  return exp;

  // Close the IIFE, passing in jQuery and any other global variables as required
  // if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);