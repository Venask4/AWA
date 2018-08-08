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

	// Log the experiment
	exp.log('AWA - IPSL Alt Img - v1');

	// Variables
	exp.vars = {};

	// Styles
	exp.css = '\
		.awa-secondary-img-container {\
			width: 100%;\
			margin-top: 100%;\
			display: none;\
		}\
		.awa-secondary-img {\
			display: block;\
			background-size: 100% 100% !important;\
    		background-repeat: no-repeat !important;\
    		background-position-y: center !important;\
			width: 100%;\
			height: 100%;\
			padding-top: 100%;\
			margin-top: -100%;\
		}\
	';

	// Init function
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Get secondary images
		var prodLinks = [];
		// cache product DOM elements
		var products = $('ul.products-grid').find('li a.product-image');
		// Push links to array, add in container for second image
		products.each(function() {
			prodLinks.push($(this).attr('href'));
			$(this).append('<div class="awa-secondary-img-container"></div>');
		});
		// Iterate through links, calling function for each and increase delay on iteration
		var delay = 0;
		for (var i = 0; i < prodLinks.length; i++) {
			getImg(prodLinks[i], delay, i);
			delay = delay + 300;
		}

		// Show/hide functionality
		products.hover(function(){
				$(this).find('img').first().css('display','none');
				$(this).find('.awa-secondary-img-container').css('display','block');
			}, function(){
				$(this).find('img').first().css('display','block');
				$(this).find('.awa-secondary-img-container').css('display','none');
			});

		//functions
		function getImg(url, delay, index) {
			setTimeout(function() {
				$.ajax({
					type: 'GET',
					url: url,
					dataType: 'text',
					success: function(data) {
						var altImg = $(data).find('.more-views li a').eq(1).attr('href');
						if (altImg !== undefined) {
							products[index].getElementsByClassName('awa-secondary-img-container')[0].innerHTML = '<div class="awa-secondary-img" style="background: url(' + altImg + ')"></div>';					
						}
						// ADD IN LOGIC FOR PRODUCTS WITH NO SECOND IMAGE
					}
				})
			}, delay);
		}
	};


	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

})(window.jQuery);