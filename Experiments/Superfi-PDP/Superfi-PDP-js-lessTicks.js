var exp = (function($) {

	var exp = {};

	exp.log = function (str) {
	    if (typeof window.console !== 'undefined') {
	        console.log(str);
	    }
	};

	exp.log('AWA - Superfi PDP v1');

	exp.vars = {
		html: '<div id="awa-box"><div class="awa-img-cont"><div id="awa-big-img"></div><div id="awa-enl-cont"></div><div id="awa-icon-cont"></div></div><div class="awa-second-half"><div class="awa-title"></div><div class="awa-ticks"></div><div class="awa-stock-order"><div class="awa-stock-wrng"></div></div></div></div>',
		ticks: '<div id="awa-free-delivery"></div><p><span class="fi-check"></span>&nbsp<span id="awa-wrnty-num">12</span>&nbspmonth guarantee</p><p class="awa-30d"><span class="fi-check"></span> 30 day no hassle returns</p><div id="awa-price-cont"></div>',
		freeDelivery: '<p id="awa-FD"><span class="fi-check"></span> Free next day delivery</p>',
		specs: '<span class="awa-specs">Full spec & reviews</span>',
		financeText: '<h3>Buy Now, Pay Later</h3>',
		financeP: '<p>finance available for this product</p>',
		enlargeImg: '<a onclick="OpenLargeImage()" class="awa-enl-img">&#128269 Enlarge image</a>'
	};

	exp.init = function() {

		// Add HTML
		$('.product-layout').children('.row').eq(1).before(exp.vars.html);

		// cache HTML
		var $imgCont = $('#awa-big-img');
		var $iconCont = $('#awa-icon-cont');
		var $enlCont = $('#awa-enl-cont');
		var $secondHalf = $('.awa-second-half');
		var $titleDiv = $('.awa-title');
		var $tickDiv = $('.awa-ticks');
		var $stockOrderDiv = $('.awa-stock-order');

		// Move Image
		$('#zoom1').parent().hide();
		$imgCont.append($('#zoom2'));
		$enlCont.append(exp.vars.enlargeImg);
		// Style icons
		$('.columns.mediumlarge-5 .callout.collapse').addClass('awa-icons');
		$iconCont.append($('.awa-icons'));

		// Move title
		$titleDiv.append($('.columns.large-8.text-left').children('h1'));
		// Add container for product code
		$titleDiv.prepend('<span id="code-div"></span>');
		// Add container for reviews
		$titleDiv.append('<span id="reviews-div"></span>');
		// Add container for finish
		$titleDiv.append('<span id="finish-div"></span>');

		// Add ticks
		$tickDiv.append(exp.vars.ticks);
		var $freeDelivery = $('#awa-free-delivery');
		// Add spec link
		$tickDiv.append(exp.vars.specs);
		$('.awa-specs').on('click', function() {
			$('html, body').animate({
				scrollTop: $('#product-tabs').offset().top
			}, 1150);
		})
		// Define priceInt for later
		var priceInt = 0;

		// Add stock and order info
		$stockOrderDiv.append($('.callout.collapse-btm.grey1.add-to-cart-form').first()).append($('#divFinanceOptions'));
		// Check if low stock and add warning
		var $loading = $('#divMainInprogress');
		$secondHalf.append($loading);
		function variationChanges() {
			if ($loading.css('display') === 'none') {
				// Add price
				var $price = $('#divProductPriceInventoryLoad .live-price').first();
				if ($price.text().indexOf('Our Price') > -1) {
		          $price.text($price.text().replace('Our Price:', 'Our price'));
		        }
				var priceStr = $price.text().replace('Our price', 'Only');
				$price.text(priceStr);
				$('#awa-price-cont').html($price);
				priceInt = parseInt(priceStr.replace('Only £',''));
				// Add product code
 				var $prodCode = $('.productPrice').eq(1).find('small');
 				$prodCode.addClass('awa-prod-code')
 				$('#code-div').html($prodCode);
				// Check for free delivery
				if (priceInt > 75 && $('.productpagestockout').length < 1) {
					$freeDelivery.html(exp.vars.freeDelivery);
				}
				else {
					$freeDelivery.html(null);
				}

				// Move reviews
				var $reviews = $('#testfreaks-answer-link').parent();
				$('#reviews-div').html($reviews);

				// Add finish string
				var finishStr = $('#divSelectedAttributeInfo').find('div:contains("Currently showing details for: ")').text();
				finishStr = finishStr.replace('Currently showing details for: ', '');
				$('#finish-div').html(finishStr);
				// Hide accordion
				$('#divAccordionFinance').hide();

				// Low Stock
				if ($('.productpagestockhurry').length) {
					var stockInt = parseInt($('.productpagestockhurry').text().replace('HURRY! Only ',''))
					var stockWrng = '<span class="awa-red-star fi-alert"></span> Hurry, only ' + stockInt + ' left in stock!';
					$('.awa-stock-wrng').html(stockWrng);
				}
				// Out Of Stock
				if ($('.productpagestockout').length) {
					var m = new Date();
					m.setDate(m.getDate()+5);
					var dateString = ("0" + m.getUTCDate()).slice(-2) + "/" + ("0" + (m.getUTCMonth()+1)).slice(-2) + "/" +  m.getUTCFullYear();
					var stockMsg = '<span class="awa-blue-star fi-calendar"></span> Approximate dispatch date ' + dateString;
					$('.awa-stock-wrng').html(stockMsg);
				}
				// In Stock
				if ($('#divProductPriceInventoryLoad .productpagestockin').length) {
					$('.awa-stock-wrng').html($('#divProductPriceInventoryLoad .productpagestockin'));
				}
			}
			else {
				setTimeout(variationChanges, 50);
			}
		}
		variationChanges();
		$('.callout.collapse-btm.grey1.add-to-cart-form').prepend($('.AddToCartButton').first());
		$('.callout.collapse-btm.grey1.add-to-cart-form').prepend($('.variantdiv'));
		// Style add to cart form
		$('.callout.collapse-btm.grey1.add-to-cart-form').addClass('awa-add-to-cart')
		// Style finance element
		if (priceInt > 250) {
			$('#divFinanceOptions').find('div').eq(0).addClass('awa-fix-green');
			$('.awa-fix-green').find('h3').first().hide();
			$('.awa-fix-green').prepend(exp.vars.financeText);
			$('#afinanceOptions').children('div').text('View Quote').addClass('awa-quote-btn');
			$('.awa-fix-green').prepend($('#afinanceOptions'));
			$('.awa-fix-green').append('<div id="awa-align"></div>');
			$('#awa-align').append($('.awa-fix-green').children('a').eq(1).addClass('awa-flt-rt')).append(exp.vars.financeP);
		}
		else {
			$('#divFinanceOptions').hide();
		}
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
		$('.follow-us').first().hide();
		$('.columns.mediumlarge-7 .callout.grey1').eq(1).hide();
		$('.lozengeImage').hide();
		$('.button.light-grey.expanded.show-for-mediumlarge').hide();

		// Links to open in new tabs
		$('.awa-flt-rt').attr('target', '_blank');
		$('input[name="outofstockemailnotify"]').attr('target', '_blank');

		// Re-check stock after variation change
		$('.variantdiv').children('select').change(variationChanges);

		// Calculate warranty
		var wrntInt = parseInt($('.product-layout-warranty').text().replace('Superfi ',''));
		var wrntMonths = wrntInt*12;
		$('#awa-wrnty-num').html(wrntMonths);

		// Collect In Store Variation
		if ($('.product-layout-cis-only').length) {
			$('.lozengeImage').show();
			$('.awa-img-cont').prepend($('.lozengeWrapper'));
			$('.awa-stock-wrng').after($('.product-layout-cis-only'));
			$('#awa-FD').hide();
			$('.awa-30d').hide();
			$('.columns.mediumlarge-7 .callout.grey1').eq(0).hide();
		}
	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

})(window.jQuery);