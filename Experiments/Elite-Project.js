// MATTHEW COLOE - ELITE SEM PROJECT
// Note: this experiment does not contain any doc ready checks or polls since this
// is intended to run in the Chrome console. Should this experiment be run through
// a CRO platform such as VWO, additional doc ready checks and polls may be required.

// Wrap the experiment in an IIFE to give the experiment local scope, and pass in
// jQuery if necessary.
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

	// Log the experiment (Helpful if there are more than 1 experiments running)
	exp.log('Elite - Matt Coloe Project v1');

	// Variables
	// Typically these would be strings of HTML, large data arrays, or objects
	exp.vars = {};

	// Styles
	exp.css = '\
		.elite__title {\
			color: #829da9;\
		}\
		.mod-featured-offers-section .mod-featured-offers .mod-featured-offers--group {\
			flex-direction: column-reverse;\
		}\
		.mod-featured-offers-section .mod-featured-offers .mod-featured-offers--group .mod-featured-offers--item {\
			display: flex;\
			width: 800px;\
			margin: 0 auto 20px !important;\
		}\
		.mod-featured-offers--group figure.o-offer__media.scaled {\
			height: 100%;\
		}\
		.mod-featured-offers--group figure.o-offer__media.scaled img {\
			height: 100%;\
		}\
		.js-details-content.o-offer__text {\
			width: 50%;\
		}\
		.elite__img-width {\
			width: 50%;\
		}\
		.elite__svg {\
			float: left;\
		}\
		.wiggle {\
			animation: wiggle 1.5s;\
			animation-iteration-count: infinite;\
		}\
		@keyframes wiggle {\
		    0% { transform: rotate(0deg); }\
		    10% { transform: rotate(-8deg); }\
		    20% { transform: rotate(0deg); }\
		    30% { transform: rotate(8deg); }\
		    40% { transform: rotate(-8deg); }\
		    50% { transform: rotate(0deg); }\
		    60% { transform: rotate(8deg); }\
		    70% { transform: rotate(0deg); }\
		    80% { transform: rotate(-8deg); }\
		    90% { transform: rotate(0deg); }\
		    100% { transform: rotate(8deg); }\
		}\
		@media (min-width: 641px) and (max-width: 800px) {\
			.mod-featured-offers-section .mod-featured-offers .mod-featured-offers--group .mod-featured-offers--item {\
				width: 100%;\
			}\
		}\
		@media (max-width: 640px) {\
			.mod-featured-offers-section .mod-featured-offers .mod-featured-offers--group {\
				width: 100%;\
			}\
			.mod-featured-offers-section .mod-featured-offers .mod-featured-offers--group .mod-featured-offers--item {\
				display: block;\
				width: 90%;\
				margin: 20px !important;\
			}\
			.js-details-content.o-offer__text {\
				width: 100%;\
			}\
		}\
	';

	// Init function
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Cache headers
		var $headers = $('main.primary section h2');
		// Add class to headers, skipping those not currently displayed
		for (var i = 1; i < $headers.length; i++) {
			if (i === 4) { continue; }
			$headers[i].classList.add('elite__title');
		}

		// Cache offer cards and add class for styling
		// NOTE: cards are different than mockup, cards were reversed with column-reverse
		var $cards = $('.mod-featured-offers--item.o-offer');
		$cards.each(function(){
			$(this).find('a').first().addClass('elite__img-width');
		})
		// Change text
		$cards.eq(0).find('h3').text('Save up to 25%');

		// Change view offer buttons text and styling
		var $cta = $cards.find('.js-details-content.o-offer__text a');
		$cta.find('span').text('Claim Offer');
		$cta.addClass('cta');
		// Style arrow
		$cta.find('svg use').attr('xlink:href', '/etc/clientlibs/venetian/mainplazzo/img/icons/icons.svg#cta_red')
		$cta.find('svg').addClass('elite__svg');

		// Gift box Wiggle
		// Cache gift box
		var $giftBox = $('.mod-global-nav__super-gallery-link svg');
		// Add event listener for window scroll. If offers section is in view, add wiggle class
		// to gift box element
		window.addEventListener('scroll', function(){
			if (isInViewport($('.mod-featured-offers-section')[0])) {
				$giftBox.addClass('wiggle');
			}
			else {
				$giftBox.removeClass('wiggle');
			}
		});

		// functions
		function isInViewport(element) {
		  var rect = element.getBoundingClientRect();
		  return (
		    rect.top < (window.innerHeight) &&
		    rect.bottom > (window.innerHeight/2)
		  );
		}
	};

	// Run the init function
	exp.init();

	// Return the experiment object so it can be accessed later if required
	return exp;
})(window.jQuery);
