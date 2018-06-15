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
	exp.log('AWA - PayPal Credit v1');

	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		strapDiv: '<div class="columns_mav columns awa-pp-tooltip"> <p class="bar-phone"> <i class="fas fa-pound-sign awa-pound-icon"></i> <span>0% interest for 4 months</span> <span class="awa-pp-tooltip-text"><a href="https://www.paypal.com/uk/webapps/mpp/paypal-virtual-credit" target="_blank"><img src="//useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/ab8c49e0308aa83c6e879441f71c43f7_320x50_paypal_credit_spread_the_cost_static_banner.png"></a></span> </p> </div>',
		checkoutDiv: '<div class="awa-checkout-text"><a href="https://www.paypal.com/uk/webapps/mpp/paypal-virtual-credit" target="_blank"><img src="//useruploads.visualwebsiteoptimizer.com/useruploads/268527/images/ab8c49e0308aa83c6e879441f71c43f7_320x50_paypal_credit_spread_the_cost_static_banner.png"></a></div>'
	};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#desktop_bar .columns_mav.columns {\
			width: 25%;\
		}\
		.row .awa-pp-tooltip .bar-phone .awa-pound-icon {\
			line-height: inherit;\
			font-size: 1.5em;\
			color: rgb(0, 159, 148);\
		}\
		.awa-pp-tooltip-text {\
			visibility: hidden;\
			width: 320px;\
			height: auto;\
			position: absolute;\
			display: inline-block;\
			opacity: 0;\
    		transition: opacity 0.3s;\
    		color: #f2f2f2;\
    		border-radius: 4px;\
    		padding: 4px 4px 8px 11px;\
    		z-index: 100;\
    		font-size: 13px;\
    		top: 40px;\
    		left: 0px;\
    		line-height: 18px;\
    		text-align: left !important;\
		}\
		.row .awa-pp-tooltip .bar-phone .awa-pp-tooltip-text a {\
			color: #f2f2f2;\
			text-decoration: underline;\
		}\
		.awa-checkout-text {\
			clear: both;\
			margin-bottom: 18px;\
		}\
		.awa-button {\
			height: 30px;\
			line-height: 0;\
			color: white;\
			margin-left: 6px;\
		}\
	';

	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		jQuery('head').append('<style>' + exp.css + '</style>');

		// Add Font Awesome
		jQuery('head').append('<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.12/css/all.css" integrity="sha384-G0fIWCsCzJIMAVNQPfjH08cyYaUtMwjJwqiRKxxE/rx96Uroj1BtIQ6MLJuheaO9" crossorigin="anonymous">');

		// Add in Strap Div
		jQuery('#desktop_bar .row .columns.small-12').children('.columns_mav').eq(1).after(exp.vars.strapDiv);

		// Show tooltip on hover
		jQuery('.awa-pp-tooltip').hover(function(){jQuery('.awa-pp-tooltip-text').css({'visibility':'visible', 'opacity': '1'})}, function(){jQuery('.awa-pp-tooltip-text').css({'visibility':'hidden', 'opacity':'0'})});

		// Add in text on checkout page
		if (window.location.href.indexOf('https://www.interiorpanelsystems.co.uk/onestepcheckout/index/') > -1) {
			jQuery('.main .col-main .one-step-checkout.clearfix').children('li').children('p').before(exp.vars.checkoutDiv);
		}

	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);