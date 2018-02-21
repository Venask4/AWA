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
	exp.log('AWA - Superfi PDP v1');

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		html: '<div class="awa-img-cont"></div><div class="awa-second-half"><div class="awa-title"></div><div class="awa-ticks"></div><div class="awa-stock-order"></div></div>',
		ticks: '<p><span class="awa-checkmark">&#10004;</span> 12 month guarantee</p><p><span class="awa-checkmark">&#10004;</span> Superfi 10% price promise</p><p><span class="awa-checkmark">&#10004;</span><b> 30 day</b> no hassle returns</p><p><span class="awa-checkmark">&#10004;</span> Trusted highstreet retailer</p>',
		freeDelivery: '<p><span class="awa-checkmark">&#10004;</span><b> Free next day delivery</b></p>',
		specs: '<span class="awa-specs">Full spec & reviews</span>',
		financeText: '<h3>Buy Now, Pay Later</h3><p>finance available for this product</p>'
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#zoom2 {\
			width: 100%;\
			padding: 0 8px 0 8px;\
		}\
		.awa-img-cont {\
			width: 47%;\
			display: inline-block;\
			border: solid 1px grey;\
		}\
		.awa-second-half {\
			width: 53%;\
			display: inline-block;\
			vertical-align: top;\
		}\
		.awa-title {\
			border-top: solid 1px grey;\
			border-bottom: solid 1px grey;\
			padding-left: 12px;\
		}\
		.awa-title h1 {\
			width: 80%;\
			margin-bottom: 0;\
			}\
		.awa-ticks {\
			border-bottom: solid 1px grey;\
			padding-left: 12px;\
		}\
		.awa-ticks p {\
			margin-bottom: 8px;\
		}\
		.awa-checkmark {\
			color: #3BBA00;\
			font-size: 18px;\
			font-weight: 800;\
		}\
		.awa-prod-code {\
			float: right;\
			margin-top: 10px;\
			margin-right: 8px;\
		}\
		.awa-specs {\
			float: right;\
			text-decoration: underline;\
			cursor: pointer;\
		}\
		.AddToCartButton {\
			width: 70% !important;\
			float: right;\
			color: black;\
		}\
		.awa-fix-green {\
			background-color: #474646 !important;\
		}\
		.button.light-grey.expanded.awa-quote-btn {\
			width: 30%;\
			float: right;\
			color: black;\
		}\
	';

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Add HTML
		$('.product-layout').children('.row').eq(1).before(exp.vars.html);

		// cache HTML
		var $imgCont = $('.awa-img-cont');
		var $secondHalf = $('.awa-second-half');
		var $titleDiv = $('.awa-title');
		var $tickDiv = $('.awa-ticks');
		var $stockOrderDiv = $('.awa-stock-order');

		// Move Image
		$('.awa-img-cont').append($('#zoom2'));

		// Move title
		$titleDiv.append($('.columns.large-8.text-left').children('h1'));
		// Add product code
		var $prodCode = $('.productPrice').eq(1).find('small');
		var prodStr = $('.productPrice').eq(1).find('small').text().replace('Product code: ', '');
		$prodCode.text(prodStr);
		$titleDiv.prepend($prodCode.addClass('awa-prod-code'));
		// Add finish string
		var finishStr = $('#divSelectedAttributeInfo').find('div:contains("Currently showing details for: ")').text();
		finishStr = finishStr.replace('Currently showing details for: ', '');
		$titleDiv.append(finishStr);

		// Add ticks
		$tickDiv.append(exp.vars.ticks);
		// Add price
		var $price = $('.live-price').first();
		var priceStr = $price.text().replace('Our price', 'Only');
		$price.text(priceStr);
		$tickDiv.append($price);
		// Add spec link
		$tickDiv.append(exp.vars.specs);
		$('.awa-specs').on('click', function() {
			$('#product-tabs')[0].scrollIntoView({behavior: 'smooth'});
		})

		// Add stock and order info
		$stockOrderDiv.append($('.productpagestockin').first()).append($('.callout.collapse-btm.grey1.add-to-cart-form').first()).append($('#divFinanceOptions'));
		$('.callout.collapse-btm.grey1.add-to-cart-form').prepend($('.AddToCartButton').first());
		// Style finance element
		$('#divFinanceOptions').find('div').eq(0).addClass('awa-fix-green');
		$('.awa-fix-green').find('h3').first().hide();
		$('.awa-fix-green').prepend(exp.vars.financeText);
		$('#afinanceOptions').children('div').text('View Quote').addClass('awa-quote-btn');
		$('.awa-fix-green').prepend($('#afinanceOptions'));

		// Hide unwanted content
		$('.variantdiv').hide();
	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);