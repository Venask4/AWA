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
			hLine: '<span class="awa-line"></span>',
			splitDiv: '<div class="awa-split"></div>',
			passTitle: '<p>Passengers:</p>',
			vehicleTitle: '<p>Vehicle:</p>'
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
			width: 55%;\
			height: auto;\
			margin-left: 0px;\
			z-index: 1;\
			float: left;\
			position: relative;\
		}\
		#awa-side-container {\
			width: 45%;\
			height: auto;\
			display: inline-block;\
		}\
		.farefinder-container {\
			top: 0;\
		}\
		#farefinder ul.nav {\
			top: 0px;\
			position: absolute;\
			width: 35%;\
			background: white;\
			border: 1px solid #ff8d02;\
		}\
		#fareFinderForm {\
			margin-top: 10px;\
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
		}\
		.blk.bt.ms500 {\
			border: 1px solid #c4c2c2;\
		}\
		#fareFindersubmitButton {\
			background: #ff8d02;\
			box-shadow: none;\
			border-bottom: none;\
		}\
		.awa-img {\
			float: right;\
			max-width: 940px;\
		}\
		.awa-banner {\
			float: none;\
		}\
		';
	exp.ferryCss = '\
		.awa-sngl-radio {\
			margin-right: 25px;\
			float: right;\
		}\
		.awa-rtrn-radio {\
			margin-right: 25px;\
			margin-top: 0 !important;\
			float: right;\
		}\
		#ferrytab a:hover {\
			background-color: #f4f4f4;\
		}\
		#singleJourneyComboBoxSelectBoxItContainer {\
			float: none !important;\
			display: block;\
			margin-bottom: 10px;\
		}\
		#returnJourneyComboBoxSelectBoxItContainer {\
			float: none !important;\
			display: block;\
			margin-bottom: 10px;\
		}\
		#where-ff {\
			height: 42px;\
		}\
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
			display: block;\
			width: 50%;\
		}\
		.awa-trailer-form {\
			display: block;\
			width: 50%;\
		}\
		.awa-who-ul {\
			margin-right: 6% !important;\
		}\
		#trailerOutboundComboBoxSelectBoxItContainer {\
			float: none !important;\
			margin-top: 8px;\
		}\
		#vehicleTypeOutboundComboBoxSelectBoxItContainer {\
			float: none !important;\
			margin-top: 8px;\
		}\
		#singleJourneyComboBoxSelectBoxIt {\
			width: 150px;\
		}\
		#returnJourneyComboBoxSelectBoxIt {\
			width: 150px;\
		}\
		.awa-split {\
			width: 50%;\
			display: inline-block;\
			vertical-align: top;\
		}\
		.farefinder-container .farefinder dl dd.ffreturning>div, .farefinder-container .farefinder dl dd.ffwho>div {\
			padding-left: 0 !important;\
		}\
		#ou_passengersSelectWrapperDD {\
			padding-left: 0 !important;\
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

		// Style side container content
		$sideContainer.children('div').eq(0).hide();
		$fareContainer.before($sideContainer.children('div').eq(1).addClass('awa-banner'));
		//$sideContainer.children('div').eq(2).hide();
		//$('.large-banner-badge.pa.po-headerblue').hide();

		// FERRY STYLE FUNCTION
		function ferryStyle() {
			// Add styles
			$('head').append('<style>' + exp.ferryCss + '</style>');

			// Re-arrange fare finder
			$('#routeout').after($('#singleJourneyComboBoxSelectBoxItContainer'));
			$('#routereturn').after($('#returnJourneyComboBoxSelectBoxItContainer'));
			var $singleRadio = $('.form-group.where-singleopt').children('div.radio');
			$singleRadio.addClass('awa-sngl-radio');
			var $returnRadio = $('.form-group.where-returnopt').children('div.radio');
			$returnRadio.addClass('awa-rtrn-radio');
			$singleRadio.after($returnRadio);

			// Add in split divs
			$('#who-ff').prepend(exp.vars.splitDiv).prepend(exp.vars.splitDiv);
			var $leftCol = $('.awa-split').eq(0);
			var $rightCol = $('.awa-split').eq(1);

			$leftCol.prepend($('#ou_passengersSelectWrapperDD'));
			var $whoUls = $('.fareFinderSelectWrapper').children('ul');
			$whoUls.each(function($whoUls) {
				$(this).addClass('awa-who-ul');
			})
			$leftCol.prepend(exp.vars.passTitle);

			var $vehicleForm = $('.form-group.vehicle').first();
			var $trailerForm = $('.form-group.trailers').first();
			$rightCol.prepend($vehicleForm);
			$rightCol.prepend($trailerForm);
			$vehicleForm.addClass('awa-vehicle-form');
			$trailerForm.addClass('awa-trailer-form');
			$rightCol.prepend(exp.vars.vehicleTitle);


			// Hide unwanted titles
			$('#where-ff').children('dt').first().hide();
			$('#when-ff').children('dt').first().hide();
			$('#who-ff').children('dt').first().hide();
			$('#how-ff').hide();
			// $('.ico-vehicle').first().hide()
			// $('.ico-trailers').first().hide();

			// Change WHO lables
			// $('#adult').text('Adult 16+');
			// $('#child').text('Child 4-15');
			// $('#toddler').text('Infant 0-3');

			// Add second set of split divs
			$('#samePassengerCheckBoxWrapper').prepend(exp.vars.splitDiv).prepend(exp.vars.splitDiv);
			var $botLeftCol = $('.awa-split').eq(2);
			var $botRightCol = $('.awa-split').eq(3);

			$botLeftCol.prepend($('.no-background.discount-code'));
			$botRightCol.prepend($('.return-party.clearfix')).prepend($('.getaquotebtn'));

			// Fix extra ad
			$fareContainer.find('div.c_46').hide();

			// Add divider lines
			$('#where-ff').after(exp.vars.hLine);
			$('#when-ff').after(exp.vars.hLine);
			$('#who-ff').after(exp.vars.hLine);

			// Fix img height
			var imgArrayLength = $sideContainer.find('img').length
			if (imgArrayLength > 1) {
				$sideContainer.find('img').eq(imgArrayLength - 1).addClass('awa-img');	
			}
			else {
				$sideContainer.find('img').first().addClass('awa-img');
			}
			var imgHeight = parseInt($fareContainer.css('height')) - 85 + 'px';
			$('.awa-img').css('height', imgHeight);
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
