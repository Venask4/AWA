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
	exp.log('AWA - P&O Login - v1');


	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
			returnDiv: '<div class="awa-return-div awa-div-style"><h4>Have you booked with us online before?</h4></div>',
			newDiv: '<div class="awa-new-div awa-div-style"><h4>New to P&O online?</h4></div>',
			passHTML: '<h3>Passwords must:</h3><ul><li>be at least 8 characters long</li><li>have a capital letter</li><li>have a number</li></ul>',
			continueButton: '<button class="awa-cont-button btn btn-small btn-pink pull-left"><span class="right">CONTINUE</span></button>'
		};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#checkOutLogin {\
			display: none;\
    	}\
    	.need-password-text.pull-right {\
    		display: none;\
    	}\
    	.signin-wrap {\
    		padding: 0 8px 0 8px;\
    	}\
    	.form-group {\
    		background: none;\
    		padding: 0 0;\
    		margin-bottom: 0;\
    	}\
    	.btn.btn-small.btn-purple.pull-left {\
    		display: block;\
    		background: gray;\
    		border-bottom: 3px solid #404142;\
    		margin-top: 10px;\
    	}\
    	.radio.blk {\
    		display: none;\
    	}\
    	.signin-wrap .signin-details-area .remember-me .form-group .checkbox {\
    		display: none;\
    	}\
    	.forgotton-password.clearfix {\
    		clear: left;\
    		display: block;\
    		margin: 0 10px 0 160px;\
    	}\
    	#myAccountButton {\
    		margin-bottom: 10px;\
    	}\
    	.signin-details {\
    		display: block !important;\
    		min-height: 124px !important;\
    		overflow: visible !important;\
    	}\
    	.signin-wrap.pull-left.clearfix {\
    		width: 100%;\
    	}\
    	.awa-return-div {\
    		width: 48%;\
    		display: inline-block;\
    	}\
    	.awa-new-div {\
    		width: 48%;\
    		display: inline-block;\
    		vertical-align: top;\
    		min-height: 188px !important;\
    	}\
    	.email-details {\
    		display: none;\
    	}\
    	.awa-label {\
    		display: inline-block !important;\
    		font-weight: bold;\
    		width: 155px !important;\
    	}\
    	.awa-form {\
    		margin-top: 30px;\
    	}\
    	.marg-t-20 {\
    		margin-top: 0 !important;\
    	}\
    	#password {\
    		width: 163px;\
    	}\
    	#awa-new-email-form {\
    		width: 163px; \
    	}\
    	.awa-div-style {\
    		border: 2px solid #8d559f;\
    		padding-left: 10px;\
    		margin: 0 1% 0 1%;\
    		height: 260px;\
    		color: #707070;\
    	}\
    	.signin-wrap .signin-details-area #pswd_infot_strength_meter {\
			left: 820px;\
    		z-index: 1;\
    		top: -132px;\
    		padding: 0 0 20px 30px;\
    		width: 250px;\
    	}\
    	.awa-cont-button {\
    		margin: -20px 10px 19px 160px !important;\
    	}\
    	.pswd_info {\
    		padding: 0 0 20px 30px !important;\
    		width: 250px !important;\
    	}\
	';


	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Change breadcrumb to LOGIN
		$('li.active').children('a').text('LOGIN');

		// Change Email & Password labels
		$('.signin-wrap .signin-details-area .email-details .control-label').first().text('Email');
		$('.signin-wrap .signin-details-area .form-group .control-label').eq(1).text('Password');

		// Change header text and delete redundant text
		$('.pull-offset.ml10.sign-in-header.clearfix').children('h2').hide()
		$('.pull-offset.ml10.sign-in-header.clearfix').children('p').hide();

		// Change login button text
		$('#checkoutButton').children('span').text('LOGIN');
		$('#myAccountButton').children('span').text('LOGIN');

		// Move forgotten password link and change text
		$('#checkoutButton').after($('.forgotton-password.clearfix'));
		$('#myAccountButton').after($('.forgotton-password.clearfix'));
		$('.forgotton-password.clearfix').children('a').first().children('span').text('Forgotten your password?');

		// Add in new container divs for styling
		$('#loginForm').append(exp.vars.returnDiv).append(exp.vars.newDiv);

		var $returnDiv = $('.awa-return-div');
		var $newDiv = $('.awa-new-div');

		$returnDiv.append($('.pull-offset.ml10.sign-in-header.clearfix')).append($('.signin-details-area.clearfix'));

		$newDiv.append($('.signin-details'));

		// Create proxy email fields and bug inputs into "Retype" fields
		function addProxys() {
			var $proxyReturnEmail = $('.email-details').clone();
			$proxyReturnEmail.find('input').attr('id', 'awa-return-email-form');

			var $proxyNewEmail = $('.email-details').clone();
			$proxyNewEmail.find('input').attr('id', 'awa-new-email-form');

			$('.email-details').after($proxyReturnEmail);
			$('.signin-details .form-group.no-bg').first().after($proxyNewEmail);
			$proxyReturnEmail.show();
			$proxyNewEmail.show();
			$('.signin-details .form-group.no-bg').first().hide();
			$('.signin-details .form-group.no-bg').eq(3).hide();
			$('#awa-return-email-form').attr('name', 'proxy-return-email');
			$('#awa-new-email-form').attr('name', 'proxy-new-email');
		}

		addProxys();

		var $emailInput = $('#j_username');
		var $emailRetype = $('#re_j_username');
		var $passInput = $('#password');
		var $passRetype = $('#re_password');
		var $proxyReturnField = $('#awa-return-email-form');
		var $proxyNewField = $('#awa-new-email-form');

		function matchReturnInputs () {
			if ($proxyReturnField.val() != $emailInput.val()) {
				$emailInput.val($proxyReturnField.val());
				$emailRetype.val($proxyReturnField.val());
			}
			if ($passInput.val() != $passRetype.val()) {
				$passRetype.val($passInput.val());
			}
		}

		function matchNewInputs () {
			if ($proxyNewField.val() != $emailInput.val()) {
				$emailInput.val($proxyNewField.val());
				$emailRetype.val($proxyNewField.val());
			}
			if ($passInput.val() != $passRetype.val()) {
				$passRetype.val($passInput.val());
			}
		}

		$proxyReturnField.on('blur', matchReturnInputs);
		$proxyNewField.on('blur', matchNewInputs);
		$passInput.on('blur', matchNewInputs);

		// Correct autotab order
		$('#awa-new-email-form').on('focus', function () {
			var keycode = null;
			function getKey(e) {
				keycode = e.keyCode;
				if (keycode === 9) {
				$('#password').focus();
  			  }
			}
			document.onkeydown = getKey;
		})

		$('#awa-new-email-form').on('blur', function() {
			document.onkeydown = null;
		})

		$('#awa-return-email-form').on('focus', function () {
			var keycode = null;
			function getKey(e) {
				keycode = e.keyCode;
				if (keycode === 9) {
				$('#j_password').focus();
  			  }
			}
			document.onkeydown = getKey;
		})

		$('#awa-return-email-form').on('blur', function() {
			document.onkeydown = null;
		})

		// Add classes to new divs for styling
		$('.awa-new-div').find('label').addClass('awa-label');
		$('.awa-new-div').find('div.form-group.no-bg').eq(1).addClass('awa-form');
		$('.awa-new-div').find('div.form-group.no-bg').eq(2).addClass('awa-form');
		$('.awa-return-div').find('div.form-group').eq(4).addClass('awa-form');

		var $newPassLabel = $('.awa-new-div').find('div.form-group.no-bg').eq(2).find('label');
		$newPassLabel.text('Create a Password');

		// Modify password modal
		var $passModal = $('.pswd_info');
		$passModal.children('div').hide();
		$passModal.children('ul').hide();
		$passModal.append(exp.vars.passHTML);

		// Add continue button for new customers
		$('.awa-new-div').append(exp.vars.continueButton);
		$('.awa-cont-button').on('click', function() {
			$('#newCustomer').attr('checked', true)
			$('#checkoutButton').click();
		});

		// Move Back button
		$('.awa-new-div').after($('.btn.btn-small.btn-purple.pull-left'));

		// Move error div
		$('#page-content').first().before($('.error'));

		// Remove duplicate error messages
		var $validEmailErrors = $('.error.block.registration-errors:contains("Please enter a valid email")');
		if ($validEmailErrors.length > 1) {
			$validEmailErrors = $validEmailErrors.slice(1);
			$validEmailErrors.each(function() {
				$(this).remove();
			})
		}

		var $wrongPassErrors = $('.error.block.registration-errors:contains("Your username or password is incorrect.")');
		if ($wrongPassErrors.length > 1) {
			$wrongPassErrors = $wrongPassErrors.slice(1);
			$wrongPassErrors.each(function() {
				$(this).remove();
			})
		}
	}

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);