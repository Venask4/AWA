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
		awaModal: '<div id="awa-modal"><div id="awa-modal-content"><span class="awa-close">&times;&nbsp;</span><br><br><div class="awa-title-container"><h3>Your space is for you and only you to use for the duration of your booking and your host knows this.</h3><h2 class="awa-close-txt">OK, got it!</h2></div></div></div>',
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		.awa-text {\
			color: #679bef;\
    		font-weight: 400;\
    		font-family: Montserrat;\
		}\
		.awa-img {\
			height: 15px;\
		}\
		#awa-modal {\
			display: none;\
    		position: fixed;\
    		z-index: 1;\
    		left: 0;\
    		top: 0;\
    		width: 100%;\
    		height: 100%;\
     		background-color: rgba(0,0,0,0.4);\
		}\
		#awa-modal-content {\
			width: 800px;\
			height: auto;\
			background-color: white;\
			margin: 15% auto;\
			display: block;\
			padding: 0 0 0 40px;\
			border-radius: 10px;\
		}\
	';

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// // Add styles
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
			$(this).html('<div class="awa-guarantee"><span>Guaranteed  </span><img class="awa-img" data-v-995a4c6e="" src="/images/info-colour.png?8a209c06ec7a56d81233d00ddfdb240f" srcset="/images/info-colour@2x.png?89ce35c2dc495ea257c0501ec7965c4e2x" class="icon-image" data-original-title="" title=""></div>');
		});

		// Add in and display modal
		$('body').append(exp.vars.awaModal);
		var $awaModal = $('#awa-modal');
		var $closeButton = $('.awa-close');
		var $awaModalContent = $('#awa-modal-content');

		$('.awa-guarantee').on('click', function() {
			$('#awa-modal').show();
			console.log('ran');
		})

		   // Close functions
    	$closeButton.on('click', function() {
		    $awaModal.css('display', 'none');
		})

		$closeButton.on('click', function() {
		    $('.awa-close-txt').css('display', 'none');
		})

		// $(document).click(function(event) { 
  //   		if(!$(event.target).closest($awaModalContent).length && $awaModal.css('display') === 'block') {
  //   			$awaModal.css('display', 'none');
  //   		}
  //   	})
	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);