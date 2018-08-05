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
		.awa-secondary-img {\
			display: block;\
		}\
	';

	// Init function
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Get secondary images
		var imgArr = [];
		var prodLinks = [];
		var altImgsObj = {};
		var products = $('ul.products-grid').find('li a.product-image');
		products.each(function() {
			prodLinks.push($(this).attr('href'))
		});
		var delay = 0;
		for (var i = 0; i < prodLinks.length; i++) {
			getImg(prodLinks[i], delay, i);
			delay = delay + 200;
		}

		//functions
		function getImg(url, delay, index) {
			setTimeout(function() {
				$.ajax({
					type: 'GET',
					url: url,
					dataType: 'text',
					success: function(data) {
						var altImg = $(data).find('.more-views li a').eq(1).attr('href');
						products[index].append('<p>' + altImg + '</p>');
					}
				})
			}, delay);
		}
		setTimeout(function() {
		console.table(altImgsObj);
	}, 6000);
	};


	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

})(window.jQuery);