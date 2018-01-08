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
	exp.log('AWA - P&O Wide Fare Finder - v1');


	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
			fareDiv: '<div id="awa-fare-container"></div>',
			sideDiv: '<div id="awa-side-container"></div>',
			hLine: '<span class="awa-line"></span>'
		};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		.awa-line {\
			width: 90%;\
			border-bottom: 1px solid #c4c2c2;\
			display: block;\
			margin: 0 auto 12px;\
		}\
		#awa-fare-container {\
			width: 30%;\
			height: auto;\
			margin-left: 42px;\
			z-index: 1;\
			float: left;\
			position: absolute;\
		}\
		#awa-side-container {\
			width: 100%;\
			height: auto;\
			display: block;\
		}\
		.farefinder-container {\
			top: 0;\
		}\
		#farefinder ul.nav {\
			top: -33px;\
			position: relative;\
			width: 35%;\
			background: white;\
			border: 1px solid #ff8d02;\
		}\
		.farefinder-container .farefinder {\
			background-color: white;\
		}\
		.farefinder-container .farefinder dl {\
			background: none;\
			margin-left: 2.5%;\
		}\
		.farefinder-container .farefinder dl dd .selectboxit.bb {\
			border: 1px solid #c4c2c2;\
		}\
		.farefinder-container .farefinder dl dd input[type=text].bb, .farefinder-container .farefinder dl dd select.bb {\
			border: 1px solid #c4c2c2;\
		}\
		.large-banner {\
			margin-top: 0;\
			height: auto;\
		}\
		.farefinder-container .farefinder dl dd.ffreturning>div>ul li:first-child label, .farefinder-container .farefinder dl dd.ffwho>div>ul li:first-child label {\
			background: none;\
			padding-top: 0;\
		}\
		.blk.bt.ms500 {\
			border: 1px solid #c4c2c2;\
		}\
		#fareFindersubmitButton {\
			background: #ff8d02;\
			box-shadow: none;\
			border-bottom: none;\
		}\
		';
	exp.ferryCss = '\
		.awa-rtrn-radio {\
			margin-left: 25px;\
			margin-top: 0 !important;\
		}\
		#ferrytab a:hover {\
			background-color: #f4f4f4;\
		}\
		#returnJourneyComboBoxSelectBoxIt {\
			z-index: -1;\
		}\
		#singleJourneyComboBoxSelectBoxItContainer {\
			margin-right: 13px;\
		}\
		#where-ff {\
			height: 42px;\
		}\
		#singleJourneyTimeComboBoxSelectBoxItContainer {\
			z-index: -1;\
		}\
		#returnJourneyTimeComboBoxSelectBoxItContainer {\
			z-index: -1;\
		}\
		.farefinder-container .farefinder dl dd input[type=text].hasDatepicker {\
			width: 129px;\
		}\
		.farefinder-container .farefinder dl dd .ui-datepicker-trigger {\
			border-bottom: none;\
			margin-bottom: 15px;\
		}\
		.form-group.when-out {\
			width: 50%;\
			float: left;\
			margin-top: 10px;\
		}\
		.form-group.when-return {\
			width: 50%;\
			display: inline-block;\
			margin-bottom: 0;\
			margin-top: 10px;\
		}\
		.awa-vehicle-form {\
			float: left;\
			clear: both;\
			width: 50%;\
		}\
		.awa-trailer-form {\
			display: inline-block;\
			width: 50%;\
		}\
		.awa-who-ul {\
			margin-right: 10% !important;\
		}\
		#trailerOutboundComboBoxSelectBoxItContainer {\
			float: none !important;\
		}\
		#vehicleTypeOutboundComboBoxSelectBoxItContainer {\
			float: none !important;\
		}\
		';


	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Add in HTML containers
		$('#page-content').prepend(exp.vars.sideDiv).prepend(exp.vars.fareDiv);
		var $fareContainer = $('#awa-fare-container')

		// Move page content to containers
		$fareContainer.append($('#fareFinderComponentWrapper'));
		var $sideContent = $('.row .col-xs-12.clearfix').eq(5).children().splice(0, 4);
		var $sideContainer = $('#awa-side-container');
		$sideContainer.append($sideContent);

		// Hide side container content
		$sideContainer.children('div').eq(0).hide();
		$sideContainer.children('div').eq(1).hide();
		$sideContainer.children('div').eq(2).hide();
		$('.large-banner-badge.pa.po-headerblue').hide();
		$sideContainer.find('img').css('width', '100%');

		// FERRY STYLE FUNCTION
		function ferryStyle() {
			// Add styles
			$('head').append('<style>' + exp.ferryCss + '</style>');

			// Re-arrange fare finder
			var $returnRadio = $('.form-group.where-returnopt').children('div.radio')
			$returnRadio.addClass('awa-rtrn-radio');
			$('.form-group.where-singleopt').children('div.radio').after($returnRadio);
			var $vehicleForm = $('.form-group.vehicle').first();
			var $trailerForm = $('.form-group.trailers').first();
			$('#when-ff').append($vehicleForm).append($trailerForm);
			$vehicleForm.addClass('awa-vehicle-form');
			$trailerForm.addClass('awa-trailer-form');
			var $whoUls = $('.fareFinderSelectWrapper').children('ul');
			$whoUls.each(function($whoUls) {
				$(this).addClass('awa-who-ul');
			})

			// Hide unwanted titles
			$('#where-ff').children('dt').first().hide();
			$('#when-ff').children('dt').first().hide();
			$('#who-ff').children('dt').first().hide();
			$('#how-ff').hide();
			$('.ico-vehicle').first().hide()
			$('.ico-trailers').first().hide();

			// Change WHO lables
			$('#adult').text('Adult 16+');
			$('#child').text('Child 4-15');
			$('#toddler').text('Infant 0-3');

			// Fix extra ad
			$fareContainer.find('div.c_46').hide();

			// Add divider lines
			$('#where-ff').after(exp.vars.hLine);
			$('#when-ff').after(exp.vars.hLine);
			$('#who-ff').after(exp.vars.hLine);
		}
		ferryStyle();

		// Mutation Observer
		var target = $('#awa-fare-container')[0];
		var observer = new MutationObserver(function(mutations) {
		  mutations.forEach(function(mutation) {
		    ferryStyle();
		  });    
		});
		var config = { attributes: true, childList: true, characterData: true };
		observer.observe(target, config);
		
	}

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);
