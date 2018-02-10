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
	exp.log('AWA - Superfi Checkout - v2');

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		imgCont: '<div class="awa-img-cont"></div>',
		emailText: 'Hit continue to sign in or checkout as a guest:',
		emailLabel: 'Enter your email address so we can keep you informed about your order:',
		previousState: 1
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#hrflnkCoupon {\
			background-image: none !important;\
			color: grey;\
		}\
		.awa-img-cont {\
			height: 64px;\
			overflow: hidden;\
		}\
		#ctl00_PageContent_OnePageCheckout1_LoginView_EmailHelperText {\
			font-style: normal;\
		}\
		#ctl00_PageContent_OnePageCheckout1_LoginView_btnEmailSubmit {\
			background-color: #e98517;\
			text-transform: none;\
		}\
		#ctl00_PageContent_OnePageCheckout1_ShippingAddressEditUKView_ButtonSaveAddress {\
			background-color: #e98517;\
			text-transform: none;\
		}\
		#ctl00_PageContent_OnePageCheckout1_PaymentView_CreditCardPaymentViewForm_CreditCardPaymentForm1_ButtonSaveCreditCardPaymentForm {\
			background-color: #e98517;\
			text-transform: none;\
		}\
		@media screen and (min-width: 48em) {\
			.mediumlarge-4 {\
				position: sticky;\
				top: 20px;\
			}\
		}\
	';

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		function mutationChanges() {
			// Hide Unwanted Sections
			var $sections = $('.callout.collapse-btm');
			$sections.eq(9).hide();
			$sections.eq(10).hide();
			$sections.eq(11).hide();
			$sections.eq(12).hide();

			// Move Credit Card Image and add Class
			$sections.eq(8).after(exp.vars.imgCont);
			$('.awa-img-cont').prepend($('.callout.collapse-btm').eq(10).children('img'));

			// Change Email Text
			$('#ctl00_PageContent_OnePageCheckout1_LoginView_EmailHelperText').text(exp.vars.emailText);

			// Hide Padlock icon/change text
			$('.callout.collapse-btm').eq(8).find('h3').text('Your shopping basket');

			// Change Subtotal copy
			$('#ctl00_PageContent_OnePageCheckout1_cartView_cartViewOnline_lblSubtotalText').text('Subtotal');
			// Change Total copy
			var $totalText = $('#ctl00_PageContent_OnePageCheckout1_cartView_cartViewOnline_lblTotalText');
			$totalText.text('Total');
			// Poll for 2nd change
			function textPoll(element) {
				setTimeout(function(){if(element.text() !== 'Total') {
					$totalText.text('Total');
				}
				else {
					textPoll(element);
				}}, 1)
			}
			textPoll($totalText);

			// Delivery copy
			var $deliveryText = $('#ctl00_PageContent_OnePageCheckout1_cartView_cartViewOnline_lblShippingTotalText');
			$deliveryText.text('Delivery');
			var $total = $('#ctl00_PageContent_OnePageCheckout1_cartView_cartViewOnline_lblTotal');
			var totalInt = $total.text().replace('£','');
			if (parseInt(totalInt) > 75) {
				$deliveryText.text('Free Delivery');
			}

			// Hide delivery error message
			$('#ctl00_PageContent_OnePageCheckout1_ShipMethodView_LabelError').hide();

			// Remove Asterisks
			var $firstName = $('#ctl00_PageContent_OnePageCheckout1_ShippingAddressEditUKView_LabelShipFirstName');
			if ($firstName.length) {
				$firstName.html($firstName.html().replace('*',''));

				var $lastName = $('#ctl00_PageContent_OnePageCheckout1_ShippingAddressEditUKView_LabelShipLastName');
				$lastName.html($lastName.html().replace('*',''));

				var $phone = $('#ctl00_PageContent_OnePageCheckout1_ShippingAddressEditUKView_LabelPhone');
				$phone.html($phone.html().replace('*',''));

				var $address = $('#ctl00_PageContent_OnePageCheckout1_ShippingAddressEditUKView_LabelShipAddress1');
				$address.html($address.html().replace('*',''));

				var $city = $('#ctl00_PageContent_OnePageCheckout1_ShippingAddressEditUKView_LabelShipCity');
				$city.html($city.html().replace('*',''));

				var $country = $('#ctl00_PageContent_OnePageCheckout1_ShippingAddressEditUKView_LabelShipCountry');
				$country.html($country.html().replace('*',''));

				var $county = $('#ctl00_PageContent_OnePageCheckout1_ShippingAddressEditUKView_LabelShipCounty');
				$county.html($county.html().replace('*',''));
			}

			// Change continue checkout button text
			$('#ctl00_PageContent_OnePageCheckout1_PaymentView_CreditCardPaymentViewForm_CreditCardPaymentForm1_ButtonSaveCreditCardPaymentForm').attr('value', 'Pay Now');
		}
		mutationChanges();

		// Post Code error message
		$('#ctl00_PageContent_OnePageCheckout1_ShippingAddressEditUKView_nopostcode').hide();
		function checkZipError() {
			if ($('#ctl00_PageContent_OnePageCheckout1_ShippingAddressEditUKView_pnlZipCode').find('option:contains("No Results Found")').length) {
				$('#ctl00_PageContent_OnePageCheckout1_ShippingAddressEditUKView_nopostcode').show();
			}
			else {
				$('#ctl00_PageContent_OnePageCheckout1_ShippingAddressEditUKView_nopostcode').hide();
			}
		}

		// Snap window to delivery section
		function snapToDelivery() {
			var currentState = $('#ctl00_PageContent_OnePageCheckout1_ShippingAddressEditUKView_LabelShipFirstName').length;
			if (exp.vars.previousState > currentState) {
				$('#ctl00_PageContent_OnePageCheckout1_PanelShippingMethod')[0].scrollIntoView({behavior: 'smooth'})
				$('#ctl00_PageContent_OnePageCheckout1_ShipMethodView_ShippingMethods_0').click();
			}
			exp.vars.previousState = currentState;
		}

		// Mutation Observer
		var target = $('#ctl00_PageContent_OnePageCheckout1_OPCUpdateProgress')[0];
		var observer = new MutationObserver(function(mutations) {
		  mutations.forEach(function(mutation) {
		  	checkZipError();
		  	snapToDelivery();
		  	mutationChanges();
		  });    
		});
		var config = { attributes: true, childList: true, characterData: true };
		observer.observe(target, config);

	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);