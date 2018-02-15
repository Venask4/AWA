document.addEventListener("DOMContentLoaded", function(event) { 
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
	exp.log('AWA - YPS Guarantee - v1');

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		awaModal: '<div id="awa-modal"><div id="awa-modal-content"><span class="awa-close">&times;&nbsp;</span><div class="awa-title-container"><h7>Your space is for you and only you to use for the duration of your booking and your space owner knows this.</h7><h6 class="awa-close-txt">OK, got it!</h6></div></div></div>',
		mobileDiv: '<tr class="awa-mobile-guarantee"><th class="awa-th">Guaranteed Parking</th><td class="awa-td">More Info  <img class="awa-mobile-img" data-v-995a4c6e="" src="/images/info-colour.png?8a209c06ec7a56d81233d00ddfdb240f" srcset="/images/info-colour@2x.png?89ce35c2dc495ea257c0501ec7965c4e2x" class="icon-image" data-original-title="" title=""></td></tr>',
		mobileModal: '<div id="awa-mobile-modal"><div id="awa-mobile-modal-content"><span class="awa-mobile-close">&times;&nbsp;</span><div class="awa-mobile-title-container"><h7>Your space is for you and only you to use for the duration of your booking and your space owner knows this.</h7><h6 class="awa-mobile-close-txt">OK, got it!</h6></div></div></div>',
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
			height: 12px;\
			margin-right: 10px;\
			margin-bottom: 2px;\
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
			width: 250px;\
			height: auto;\
			background-color: white;\
			margin: 15% 11%;\
			display: block;\
			border: solid 1px #2f4f4f\
		}\
		#awa-mobile-modal {\
			display: none;\
			position: fixed;\
			z-index: 1031;\
			left: 0;\
			top: 0;\
			width: 100%;\
			height: 100%;\
 			background-color: rgba(0,0,0,0.4);\
		}\
		#awa-mobile-modal-content {\
			width: 250px;\
			height: auto;\
			background-color: white;\
			margin: 55% 15%;\
			display: block;\
			border: solid 1px #2f4f4f\
		}\
		.awa-mobile-title-container {\
			padding: 20px 20px 25px 20px;\
		}\
		.awa-mobile-close {\
			float: right;\
			font-size: 25px;\
		}\
		.awa-mobile-close-txt {\
			font-size: 14px;\
			color: #679bef;\
			float: right;\
			padding-top: 8px;\
			font-weight: bold;\
		}\
		.awa-title-container {\
			padding: 20px 20px 25px 20px;\
		}\
		.awa-close {\
			float: right;\
			font-size: 25px;\
		}\
		.awa-close-txt {\
			font-size: 14px;\
			color: #679bef;\
			float: right;\
			padding-top: 8px;\
			font-weight: bold;\
		}\
		.awa-close:hover {\
			cursor: pointer;\
		}\
		.awa-close-txt:hover {\
			cursor: pointer;\
		}\
		.awa-guarantee:hover {\
			cursor: pointer;\
		}\
		.awa-td {\
			float: right;\
			padding: 15px 0;\
		}\
		.awa-mobile-img {\
			height: 15px;\
		}\
		.awa-th {\
			padding: 15px 0;\
		}\
	';

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// // Add styles
		$('head').append('<style>' + exp.css + '</style>');

		function testCB() {

			// // MOBILE TEST
			// $('.quote-details.no-reviews').find('tr').last().after(exp.vars.mobileDiv);
			// // Add in and display modal
			// $('body').append(exp.vars.mobileModal);
			// var $awaMobileModal = $('#awa-mobile-modal');
			// var $mobileCloseButton = $('.awa-mobile-close');
			// var $awaMobileModalContent = $('#awa-mobile-modal-content');
			// var openMobileBool = false;

			// $('.awa-mobile-guarantee').on('click', function() {
			// 	$awaMobileModal.show();
			// 	setTimeout(function() {openMobileBool = true;},1);
			// 	setTimeout(function() {
			// 		if (openMobileBool === true) {
			// 			$awaMobileModal.css('display','none');
			// 			openMobileBool = false;				
			// 		}
			// 	}, 7000);
			// })

			//    // Close functions
	  //   	$MobilecloseButton.on('click', function() {
			//     $awaMobileModal.css('display', 'none');
			// 	openMobileBool = false;
			// })

			// $('.awa-mobile-close-txt').on('click', function() {
			//     $awaMobileModal.css('display', 'none');
			// 	openMobileBool = false;
			// })

			//  $(document).click(function(event) { 
	  //    		if(!$(event.target).closest($awaMobileModalContent).length && $awaMobileModal.css('display') === 'block' && openMobileBool === true) {
	  //    			$awaMobileModal.css('display', 'none');
			// 	openMobileBool = false;
	  //    		}
	  //    	})

			// DESKTOP VERSION
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
			var openBool = false;

			$('.awa-guarantee').on('click', function() {
				$awaModal.show();
				$('#search-results').css('z-index','0');
				setTimeout(function() {openBool = true;},1);
				setTimeout(function() {
					if (openBool === true) {
						$awaModal.css('display','none');
						openBool = false;				
					}
				}, 7000);
			})

			   // Close functions
	    	$closeButton.on('click', function() {
			    $awaModal.css('display', 'none');
				$('#search-results').css('z-index','5');
				openBool = false;
			})

			$('.awa-close-txt').on('click', function() {
			    $awaModal.css('display', 'none');
				$('#search-results').css('z-index','5');
				openBool = false;
			})

			 $(document).click(function(event) { 
	     		if(!$(event.target).closest($awaModalContent).length && $awaModal.css('display') === 'block' && openBool === true) {
	     			$awaModal.css('display', 'none');
				$('#search-results').css('z-index','5');
				openBool = false;
	     		}
	     	})
		}

		// Poll for button
		function poll(selector, cb) {
			console.log($(selector).length);
			setTimeout(function(){if($(selector).length > 1) {
				console.log($(selector).length);
				cb();
			}
			else {
				poll(selector, cb);
			}}, 50)
		}

		poll('.buttons', testCB);
	};

	exp.init();

	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);

});