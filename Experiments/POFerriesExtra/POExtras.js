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
	exp.log('AWA - P&O Extras - v1');


	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
			extrasHTML: '<dl id="awa-extras"><dt>UPGRADES?</dt><div class="awa-extras"><ul class="awa-extra-ul"><li id="awa-PB-li" class="awa-toolTipContainer"><img class="awa-icon" src="http://i67.tinypic.com/33ehjwo.png"><img class="awa-help" src="http://i66.tinypic.com/35ho951.png"></li><li><input id="awa-priority-boarding" type="checkbox" class="awa-checkbox"><label for="awa-priority-boarding"><span class="test"></span>Priority Boarding</label></li></ul><ul class="awa-extra-ul"><li id="awa-CL-li" class="awa-toolTipContainer"><img class="awa-icon" src="http://i67.tinypic.com/2r764r5.png"><img class="awa-help" src="http://i66.tinypic.com/35ho951.png"></li><li><input id="awa-lounge" type="checkbox" class="awa-checkbox"><label for="awa-lounge"><span class="test"></span>Club Lounge</label></li></ul></div></dl>'
		};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		.awa-extra-ul {\
			display: inline-block;\
			list-style: none;\
			padding-left: 10px;\
		}\
		.awa-checkbox {\
			display: none;\
		}\
		.test {\
		    background: url(http://www.poferries.com/_ui/desktop/theme-poferries/bootstrap/imgs/pao-frm-sprite.png) 0 -19px no-repeat;\
    		width: 19px;\
    		height: 21px;\
    		border: 1px solid #707070;\
    		border-bottom: 2px solid #707070;\
    		display: inline-block;\
    		vertical-align: middle;\
    		margin-right: 3px;\
    	}\
    	.awa-checkbox:checked + label span.test {\
    		background-position: -1px -1px;\
    	}\
    	.awa-help {\
    		box-shadow: 0px 0px  7px rgba(0,0,0,0.6);\
			-moz-box-shadow: 0px 0px  7px  rgba(0,0,0,0.6);\
			-webkit-box-shadow: 0px 0px 7px  rgba(0,0,0,0.6);\
			-o-box-shadow: 0px 0px 7px  rgba(0,0,0,0.6);\
			border-radius: 50%;\
		}\
		.awa-icon {\
			margin-left: 30px;\
		}\
		.awa-toolTipContainer {\
			position: relative;\
		}\
		.awa-tooltip {\
			visibility: hidden;\
			width: 504px;\
			height: auto;\
			position: absolute;\
			background-color: #555;\
			display: inline-block;\
			opacity: 0;\
    		transition: opacity 0.3s;\
    		color: #f2f2f2;\
    		border-radius: 8px;\
    		padding: 4px 4px 8px 11px;\
    		z-index: 1;\
    		font-size: 13px;\
		}\
		';


	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// ADD HTML FOR EXTRAS
		$('#who-ff').after(exp.vars.extrasHTML);

		// TOOLTIPS
		// Create and define tooltip HTML
		var PBtoolTipHtml = '<span id="PBTT" class="awa-tooltip">For extra special treatment, be first to board and depart by adding Priority boarding for £12 per car. Jump the queues. Be one of the first to get on (and off) the ferry. (Sorry – pets aren’t allowed to jump the queue.)</span>';
		var CLtoolTipHtml = '<span id="CLTT" class="awa-tooltip">Start your holiday early. Upgrade to Club Lounge for just £12 per person and travel in comfort in our exclusive area with a bit of added luxury.\r\rEnjoy a free glass of champagne, soft or hot drink, served at your table by one of our friendly stewards. Order a light bite from our special club Lounge menu, then sit back, relax, take in the view or read a free newspaper.</span>';
		// Add in HTML
		$('#awa-PB-li').append(PBtoolTipHtml);
		$('#awa-CL-li').append(CLtoolTipHtml);		
		// Show tooltip on hover
		$('#awa-PB-li').hover(function(){$('#PBTT').css({'visibility':'visible', 'opacity': '1'})}, function(){$('#PBTT').css({'visibility':'hidden', 'opacity':'0'})});
		$('#awa-CL-li').hover(function(){$('#CLTT').css({'visibility':'visible', 'opacity': '1'})}, function(){$('#CLTT').css({'visibility':'hidden', 'opacity':'0'})});

		// Edit drop down titles
		$('#vehicleTypeOutboundComboBoxSelectBoxItText').text('Please select');
		var $DDoptions = $('#vehicleTypeOutboundComboBoxSelectBoxItOptions .selectboxit-option-anchor');
		$DDoptions.eq(0).remove();
		$DDoptions.eq(1).html($DDoptions.eq(1).children('span')).append('Car under 6ft');
		$DDoptions.eq(2).html($DDoptions.eq(2).children('span')).append('Car over 6ft');

		// Set cookies for extras
		var priorityBoarding = 0;
		var clubLounge = 0;
		$('#awa-priority-boarding').on('click', function() {
			priorityBoarding = !priorityBoarding;
		});
		$('#awa-lounge').on('click', function() {
			clubLounge = !clubLounge;
		})
		$('.getaquotebtn').on('click', function(e){
			e.preventDefault();
			if (clubLounge) {

					var passQty = parseInt($('#ou_AD_pass_comboBoxSelectBoxItText').text());

					$.ajax({
						type: 'POST',
						url: 'http://www.poferries.com/cart/addExtra',
						dataType: 'json',
						data: {
							productCode:'CS_cabin',
							quantity: passQty,
							journey:'outbound',
							shared:false,
							gender:''
						},
						async: false
					});
					$.ajax({
						type: 'POST',
						url: 'http://www.poferries.com/cart/addExtra',
						dataType: 'json',
						data: {
							productCode:'CS_cabin',
							quantity: passQty,
							journey:'return',
							shared:false,
							gender:''
						},
						async: false
					});
			}
			if (priorityBoarding) {
				// Priority Boarding
				$.ajax({
					type: 'POST',
					url: 'http://www.poferries.com/cart/addExtra',
					dataType: 'json',
					data: {
						productCode:'PR_extra',
						quantity:1,
						journey:'outbound'
					},
					async: false
				});
				$.ajax({
					type: 'POST',
					url: 'http://www.poferries.com/cart/addExtra',
					dataType: 'json',
					data: {
						productCode:'PR_extra',
						quantity:1,
						journey:'return'
					},
					async: false
				});
			}
			window.location.href = "http://www.poferries.com/quote";
		})


		if (window.location.href.indexOf('www.poferries.com/quote') > -1) {

			// REPLACE PRICING DIV FROM EXTRAS PAGE
			$.ajax({
  				url: 'http://www.poferries.com/extras', 
  				type: 'GET',
  				dataType: 'text',
  				success : function(data) {
				$extrasDiv = $(data).find('.journeys');
				$('.journeys').eq(1).html($extrasDiv.html());
  				},
  				async: false
  			});
		}
	}

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);
