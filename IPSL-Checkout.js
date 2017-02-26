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
	exp.log('AWA - One Step Checkout');

	/*
	// Condition
	// If we cannot rely on URL's to target the experiment (always preferred), we can use a unique CSS selector
	exp.condition = $('.unique-selector');
	*/
	//exp.condition = $("#menuBanner"); // Very inclusive

	// Check for a condition and return false if it has not been met
	/*
	if (exp.condition && !exp.condition.length) {
		exp.log('Promo Banner failed a condition');
		return false;
	}
	*/

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		checkedRadio: null,
		telephoneSubtext: '<span class="telephoneSubtext">(To inform you about your delivery)</span>',
		returningCustomerText: '<p class="returningCustomerText" style="margin-left:15px;">Welcome Back</p>',
		gotCoupon: '<a id="gotCoupon" href="javascript:void(0);">Got a coupon?</a>'
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		.one-step-checkout #billing_step_header, .one-step-checkout {\
			background: none;\
		}\
		.one-step-checkout .shipping-method #shipping_method_step_header {\
			background: none;\
		}\
		.one-step-checkout h3 {\
			text-indent: 5px;\
		}\
		ol li ul, ol li ol {\
			margin-left: 0;\
		}\
		.order-review-section {\
			display: none;\
		}\
		.one-step-checkout .address-information .billing_address {\
			width: 100%;\
		}\
		.one-step-checkout .order-info-3-columns {\
			width: 48.5%;\
			margin: 0 3% 0 0;\
		}\
		.onestepcheckout-review-info {\
			width: 48.5%;\
			margin: 0;\
		}\
		#review_step_header {\
			text-indent: 85px;\
			opacity: 0.7;\
		}\
		#qty-42631 {\
			height: 20px;\
		}\
		#onestepcheckout-shipping-method-section {\
			display: none;\
		}\
		#one-step-checkout-form li {\
			overflow: auto;\
			display: block;\
		}\
		.telephoneSubtext {\
			font-size: 8px;\
		}\
		#ajax-shipping {\
			z-index: -5;\
		}\
		#onestepcheckout-login-link {\
			text-decoration: underline;\
		}\
		.returningCustomerText p {\
			margin-bottom: 1em;\
		}\
		#gotCoupon  {\
			text-decoration: underline;\
			display: block;\
			margin-left: 15px;\
		}\
		#onestepcheckout-button-place-order {\
			min-width: 272px;\
			max-width: 90%;\
			margin: 0 5%;\
		}\
		.onestepcheckout-btn-checkout span span {\
    		font-size: 18px !important;\
		}\
		.onestepcheckout-comment {\
			width: 90%;\
		}\
		@media only screen and (max-width: 1000px) {\
			.onestepcheckout-review-info {\
				width: 100%;\
				float: right;\
			}\
			.one-step-checkout .order-info-3-columns {\
				width: 100%;\
			}\
			.one-step-checkout .address-info-3-columns {\
				width: 48%;\
			}\
			.one-step-checkout .onestepcheckout-shipping-payment-review {\
				width: 50%;\
			}\
		}\
		@media only screen and (max-width: 660px) {\
			.one-step-checkout .address-info-3-columns {\
				width: 100%;\
			}\
			.one-step-checkout .onestepcheckout-shipping-payment-review {\
				width: 100%;\
			}\
		}\
		#one-step-checkout-form li {\
			overflow: hidden;\
		}\
		';

	// Functions
	// Object containing functions, some helpful functions are included
	exp.func = {};

	// This function waits till a condition returns true
	exp.func.waitFor = function(condition, callback, timeout, keepAlive) {
	    timeout = timeout || 20000;
	    keepAlive = keepAlive || false;
	    var intervalTime = 50,
	        maxAttempts = timeout / intervalTime,
	        attempts = 0,
	        interval = setInterval(function() {
	            if (condition()) {
	                if (!keepAlive) {
	                    clearInterval(interval);
	                }
	                callback();
	            } else if (attempts > maxAttempts) {
	                clearInterval(interval);
	            }
	            attempts ++;
	        }, intervalTime);
	};

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Change Billing Address to New Customers
		$('#billing_step_header').text('NEW CUSTOMERS');

		// Add Telephone Subtext
		$('#billing-new-address-form label:contains("Telephone")').append(exp.vars.telephoneSubtext);

		// Change 'Address' to 'Billing Address'
		$('#billing-new-address-form label:contains("Address")').text('Billing Address');

		//Remove account creation component
		$('#billing-new-address-form li:contains("Create an account")').css('display', 'none');


		// Change Shipping Method Element to Returning Customers Element
		$('#shipping_method_step_header').text('RETURNING CUSTOMERS');

		// Modify and move Returning Customers log in link
		var $loginLink = jQuery('#onestepcheckout-login-link');
		$loginLink.text('Click here to log in');
		$loginLink.css('margin-left', '15px');
		jQuery('#onestepcheckout-shipping-method-section').after($loginLink);
		$loginLink.before(exp.vars.returningCustomerText);

		// Clones shipping method section to the order review area
		function addShipping() {
			if (!jQuery('#awa-shipping').length) {
				var $shipping = jQuery('#onestepcheckout-shipping-method-section').clone();

				// Change ids of cloned div before adding to DOM so HTML is valid
				$shipping.attr('id', 'onestepcheckout-shipping-method-section-cloned');
				$shipping.find('input[type="radio"]').each(function() {
					jQuery(this).attr('id', jQuery(this).attr('id') + '-cloned');
				});

				var $subtotalRow = jQuery('#checkout-review-table td:contains("Subtotal")').closest('tr');
				$subtotalRow.after('<tr><td id="awa-shipping" colspan="3"></td></tr>');
				jQuery('#awa-shipping').append($shipping);
			}

				if (exp.vars.checkedRadio) {
					$('#' + exp.vars.checkedRadio).prop('checked', true);
				}
		}

		addShipping();

		jQuery('body').on('click', '#onestepcheckout-shipping-method-section-cloned li', function() {
			exp.vars.checkedRadio = $(this).find('input[type="radio"]').attr('id');
		});


		// Reapply addShipping on changes to order review section
		var target = jQuery('.checkout-review-load')[0];
		var observer = new MutationObserver(function(mutations) {
		  mutations.forEach(function(mutation) {
		  	console.log('Re-adding shipping clone');
		    addShipping();
		  });    
		});
		var config = { attributes: true, childList: true, characterData: true };
		observer.observe(target, config);
	};

	//Hide coupon code section
	var $couponCodeDiv = jQuery('body label:contains("Coupon code:")').parent();
	$couponCodeDiv.css('display', 'none');
	$couponCodeDiv.before(exp.vars.gotCoupon);
	jQuery('#gotCoupon').on('click', function(){
		$couponCodeDiv.css({'display': 'block', 'width': '75%'});
		$(this).remove();
	});

	//Move Place Order button
	$couponCodeDiv.after(jQuery('#onestepcheckout-button-place-order'));

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);