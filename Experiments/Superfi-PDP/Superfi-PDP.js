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
		html: '<div id="awa-box"><div class="awa-img-cont"></div><div class="awa-second-half"><div class="awa-title"></div><div class="awa-ticks"></div><div class="awa-stock-order"><div class="awa-stock-wrng"></div></div></div></div>',
		ticks: '<p><span class="awa-checkmark">&#10004;</span> 12 month guarantee</p><p><span class="awa-checkmark">&#10004;</span> Superfi 10% price promise</p><p><span class="awa-checkmark">&#10004;</span><b> 30 day</b> no hassle returns</p><p><span class="awa-checkmark">&#10004;</span> Trusted highstreet retailer</p>',
		freeDelivery: '<p><span class="awa-checkmark">&#10004;</span><b> Free next day delivery</b></p>',
		specs: '<span class="awa-specs">Full spec & reviews</span>',
		financeText: '<h3>Buy Now, Pay Later</h3><p>finance available for this product</p>',
		enlargeImg: '<a onclick="OpenLargeImage()" class="awa-enl-img">Enlarge image</a>'
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
			border: solid 1px #c1c1c1;\
		}\
		.awa-second-half {\
			width: 53%;\
			display: inline-block;\
			vertical-align: top;\
		}\
		.awa-title {\
			border-top: solid 1px #c1c1c1;\
			border-bottom: solid 1px #c1c1c1;\
			padding-left: 24px;\
		}\
		.awa-title h1 {\
			width: 80%;\
			margin-bottom: 0;\
			}\
		.awa-ticks {\
			border-bottom: solid 1px #c1c1c1;\
			padding-left: 24px;\
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
			background: #ff9f3b;\
		}\
		.awa-fix-green {\
			background-color: #474646 !important;\
			border-radius: 4px !important;\
			text-align: left;\
			margin: 12px 12px 12px 12px;\
		}\
		.button.light-grey.expanded.awa-quote-btn {\
			width: 30%;\
			float: right;\
			color: black;\
		}\
		.awa-add-to-cart {\
			border-radius: 4px !important;\
			margin: 12px 12px 12px 12px;\
		}\
		.awa-flt-rt {\
			clear: both;\
			float: right;\
		}\
		.awa-enl-img {\
			float: right;\
			text-decoration: underline;\
			margin: 0 8px 4px 0;\
		}\
		.awa-icons {\
			border: none !important;\
		}\
		.awa-icons div div {\
			float: right !important;\
			border-right: none !important;\
		}\
		#awa-box {\
			margin-bottom: 20px;\
		}\
		#divAccordionFinance {\
			display: none;\
		}\
		.awa-stock-wrng {\
			margin: 12px 0 12px 24px;\
		    font-weight: bold;\
		    font-size: 20px;\
		}\
		.awa-red-star {\
			color: #ff9f3b;\
		}\
		.awa-blue-star {\
			color: #1c75cf;\
		}\
		@media screen and (max-width: 766px) {\
			.awa-img-cont {\
				width: 100%;\
				display: block;\
			}\
			.awa-second-half {\
				width: 100%;\
				display: block;\
			}\
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
		$('#zoom1').parent().hide();
		$imgCont.append($('#zoom2'));
		$imgCont.append(exp.vars.enlargeImg);
		// Style icons
		$('.columns.mediumlarge-5 .callout.collapse').addClass('awa-icons');

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
		// Check for free delivery
		var priceInt = parseInt(priceStr.replace('Only £',''));
		if (priceInt > 75) {
			$tickDiv.prepend(exp.vars.freeDelivery);
		}
		// Add spec link
		$tickDiv.append(exp.vars.specs);
		$('.awa-specs').on('click', function() {
			$('#product-tabs')[0].scrollIntoView({behavior: 'smooth'});
		})

		// Add stock and order info
		$stockOrderDiv.append($('.callout.collapse-btm.grey1.add-to-cart-form').first()).append($('#divFinanceOptions'));
		// Check if low stock and add warning
		if ($('.productpagestockhurry').length) {
			var stockInt = parseInt($('.productpagestockhurry').text().replace('HURRY! Only ',''))
			var stockWrng = '<span class="awa-red-star">&#10033</span> Hurry, only ' + stockInt + ' left in stock!';
			$('.awa-stock-wrng').html(stockWrng);
		}
		if ($('.callout.show-for-large').find('div:contains("Sorry, out of stock")').length) {
			var m = new Date();
			m.setDate(m.getDate()+7);
			var dateString = ("0" + m.getUTCDate()).slice(-2) + "/" + ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +  m.getUTCFullYear();
			console.log(dateString);
			var stockMsg = '<span class="awa-blue-star">&#10033</span> Approximate delivery date: ' + dateString;
			$('.awa-stock-wrng').html(stockMsg);
		}
		$('.callout.collapse-btm.grey1.add-to-cart-form').prepend($('.AddToCartButton').first());
		$('.callout.collapse-btm.grey1.add-to-cart-form').prepend($('.variantdiv'));
		// Style add to cart form
		$('.callout.collapse-btm.grey1.add-to-cart-form').addClass('awa-add-to-cart')
		// Style finance element
		$('#divFinanceOptions').find('div').eq(0).addClass('awa-fix-green');
		$('.awa-fix-green').find('h3').first().hide();
		$('.awa-fix-green').prepend(exp.vars.financeText);
		$('#afinanceOptions').children('div').text('View Quote').addClass('awa-quote-btn');
		$('.awa-fix-green').prepend($('#afinanceOptions'));
		$('.awa-fix-green').children('h3').first().after($('.awa-fix-green').children('a').eq(1).addClass('awa-flt-rt'));
		// Fix finance div
		$('.row .columns.mediumlarge-7').first().prepend($('#divAccordionFinance'))
		var accBool = false;
		$('#divAccordionFinance').hide();
		$('.awa-quote-btn').on('click', function() {
			if (accBool === false) {
				$('#divAccordionFinance').show();
				accBool = true;
			}
			else {
				$('#divAccordionFinance').hide();
				accBool = false;
			}
		})

		// Hide unwanted content
		//$('.variantdiv').hide();
		$('.follow-us').first().hide();
		$('.columns.mediumlarge-7 .callout.grey1').eq(1).hide();
		$('.lozengeImage').hide();
		$('.button.light-grey.expanded.show-for-mediumlarge').hide();

		// Links to open in new tabs
		//$('#afinanceOptions').attr('target', '_blank');
		$('.awa-flt-rt').attr('target', '_blank');
		$('input[name="outofstockemailnotify"]').attr('target', '_blank');
	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);