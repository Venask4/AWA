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
	exp.log('AWA - Paperstone- Basket PRE v1');


	// Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
			awaModal: '<div id="awa-modal"><div id="awa-modal-content"><span class="awa-close">&times;&nbsp;</span><br><br><div class="awa-title-container"><h2>Before you checkout, did you forget any of our bestsellers?</h2><button type="button" class="blue-button awa-close-button">View basket & checkout</button></div><div class="popup-notification awa-popup" style="opacity: 1; display: none;"><span class="product-added-to-basket">Added to basket</span></div></div></div>',
			prodArray: [{"ProductCode":"295160","Url":"/filing-archiving/dividers-indexes-tabs/5-star-subject-dividers-10-part-a4-assorted/p-19574","Title":"5 Star Subject Dividers / 10-Part / A4 / Assorted","ExVat":0.79,"IncVat":0.94},{"ProductCode":"362003","Url":"/paper/copier-printer-paper/navigator-universal-a4-paper-white-80gsm-box-5-x-500-sheets/p-25486","Title":"Navigator Universal A4 Paper / White / 80gsm / Box (5 x 500 Sheets)","ExVat":14.95,"IncVat":17.94},{"ProductCode":"397980","Url":"/desktop-essentials/post-its/post-it-notes/5-star-re-move-notes-cube-76x76mm-neon-rainbow-400-notes/p-18025","Title":"5 Star Re-Move Notes Cube / 76x76mm / Neon Rainbow / 400 Notes","ExVat":1.99,"IncVat":2.38},{"ProductCode":"137567","Url":"/office-personal-planning/wall-planners/sasco-2018-wall-planner-unmounted/p-88455","Title":"Sasco 2018 Wall Planner - Unmounted","ExVat":3.39,"IncVat":4.06},{"ProductCode":"108376","Url":"/desktop-essentials/sticky-tapes/invisible-tape/5-star-invisible-tape-19mmx33m/p-64631","Title":"5 Star Invisible Tape - 19mmx33m","ExVat":0.99,"IncVat":1.18},{"ProductCode":"022179","Url":"/catering/water/evian-natural-mineral-water-24-x-330ml-plastic-bottles/p-15857","Title":"Evian Natural Mineral Water - 24 x 330ml Plastic Bottles","ExVat":9.99,"IncVat":11.98},{"ProductCode":"383915","Url":"/pens-pencils/ballpoint-pens/bic-cristal-ball-pen-clear-barrel-black-pack-of-50/p-27110","Title":"Bic Cristal Ball Pen / Clear Barrel / Black / Pack of 50","ExVat":8.99,"IncVat":10.78},{"ProductCode":"153377","Url":"/office-machines-supplies/calculators/casio-desktop-calculator-batterysolar-powered-white/p-82591","Title":"Casio Desktop Calculator / Battery/Solar-powered / White","ExVat":3.99,"IncVat":4.78},{"ProductCode":"101660","Url":"/janitorial/toilet-rolls-dispensers/toilet-roll/cushelle-toilet-rolls-2-ply-white-12-rolls-for-the-price-of-9/p-57999","Title":"Cushelle Toilet Rolls / 2-Ply / White / 12 Rolls for the Price of 9","ExVat":7.49,"IncVat":8.98},{"ProductCode":"1C100","Url":"/envelopes/postage-stamps/royal-mail-1st-class-postage-stamps-100-per-pack/p-78723","Title":"Royal Mail 1st class postage stamps - 100 per pack","ExVat":65.0,"IncVat":65.0},{"ProductCode":"413853","Url":"/office-furniture/office-chairs/operator-chairs/influx-posture-high-back-chair-blue/p-52222","Title":"Influx Posture High Back Chair - Blue","ExVat":123.99,"IncVat":148.78},{"ProductCode":"507842","Url":"/books-pads/notebooks/pukka-pad-wirebound-jotta-notebook-a4-ruled-200-pages-pack-of-3/p-15413","Title":"Pukka Pad Wirebound Jotta Notebook / A4 / Ruled / 200 Pages / Pack of 3","ExVat":10.99,"IncVat":13.18},{"ProductCode":"123862","Url":"/computer-accessories/batteries/duracell-plus-power-alkaline-battery-aa-pack-of-4/p-72324","Title":"Duracell Plus Power Alkaline Battery / AA / Pack of 4","ExVat":1.99,"IncVat":2.38},{"ProductCode":"327013","Url":"/meeting-presentation/laminators-pouches/laminating-pouches/gbc-a4-laminating-pouches-thin-150-micron-glossy-pack-of-25/p-24769","Title":"GBC A4 Laminating Pouches / Thin / 150 Micron / Glossy / Pack of 25","ExVat":5.49,"IncVat":6.58},{"ProductCode":"509169","Url":"/artists-graphics-supplies/foamboard/foamboard-a3-white-5mm-thick-box-of-10/p-14676","Title":"Foamboard / A3 / White / 5mm Thick / Box of 10","ExVat":9.99,"IncVat":11.98},{"ProductCode":"320643","Url":"/labels/address-labels/avery-laser-labels-21-per-sheet-63-5x38-1mm-white-l7160-40/p-22458","Title":"Avery Laser Labels / 21 per Sheet / 63.5x38.1mm / White / L7160-40","ExVat":15.99,"IncVat":19.18},{"ProductCode":"344885","Url":"/mailroom-warehouse/packaging/packing-tapes-dispensers/tapes/5-star-packaging-tape-polypropylene-50mm-x-66m-buff/p-17336","Title":"5 Star Packaging Tape / Polypropylene / 50mm x 66m / Buff","ExVat":1.99,"IncVat":2.38},{"ProductCode":"288013","Url":"/office-interiors/waste-bins/mesh-waste-bin-lightweight-scratch-resistant-black/p-51564","Title":"Mesh Waste Bin / Lightweight / Scratch Resistant / Black","ExVat":7.49,"IncVat":8.98},{"ProductCode":"936658","Url":"/health-safety/first-aid/first-aid-kits-refills/5-star-first-aid-kit-hs1-1-10-users/p-72832","Title":"5 Star First Aid Kit HS1 - 1-10 Users","ExVat":13.99,"IncVat":16.78},{"ProductCode":"918893","Url":"/security-products/money-handling/cash-boxes/5-star-cash-box-8-inch-blue/p-26151","Title":"5 Star Cash Box - 8 Inch - Blue","ExVat":7.99,"IncVat":9.58},{"ProductCode":"134976","Url":"/workwear/gloves/knitted-grip-gloves-pvc-lattice-one-size-pair/p-34269","Title":"Knitted Grip Gloves / PVC Lattice / One Size / Pair","ExVat":1.39,"IncVat":1.66},{"ProductCode":"26966X","Url":"/school-supplies/school-books/silvine-ruled-exercise-book-229x178mm-80-pages-blue-pack-of-10/p-50076","Title":"Silvine Ruled Exercise Book / 229x178mm / 80 Pages / Blue / Pack of 10","ExVat":2.69,"IncVat":3.22}]
		};

	// Styles
	// String containing the CSS for the experiment
	exp.css = '\
		#awa-modal {\
			display: none;\
    		position: fixed;\
    		z-index: 1;\
    		left: 0;\
    		top: 0;\
    		width: 100%;\
    		height: 100%;\
     		background-color: rgba(0,0,0,0.4);\
		}\
		#awa-modal-content {\
			width: 800px;\
			height: auto;\
			background-color: white;\
			margin: 15% auto;\
			display: block;\
			padding: 0 0 0 40px;\
			border-radius: 10px;\
		}\
		#awa-modal-content h1 {\
			color: #bf4b2f;\
			font-size: 29px;\
			margin-bottom: 10px;\
			margin-top: 14px;\
		}\
		#awa-modal-content h2 {\
			font-weight: bold;\
			font-size: 20px;\
			display: inline;\
		}\
		#awa-modal-content h3 {\
			height: 40px;\
			font-weight: normal;\
			margin-top: 14px;\
			overflow: hidden;\
		}\
		#awa-modal-content a {\
			color: black;\
		}\
		.awa-close {\
			display: block;\
			float: right;\
			font-size: 32px;\
			cursor: pointer;\
		}\
		.awa-PR {\
			width: 160px;\
			margin: 20px 19px 30px 0;\
			height: 300px;\
			background-color: white;\
			border-right: 1px solid gainsboro;\
			display: inline-block;\
			vertical-align: top;\
			color: black;\
			padding: 0 19px 0 0;\
		}\
		.awa-vat {\
			font-size: 12px;\
		}\
		.awa-img {\
			width: 100%;\
			height: auto;\
		}\
		.awa-qty {\
			float: left;\
			height: 23px;\
			width: 22px;\
		}\
		span.product-added-to-basket {\
		    background: url(/statics/css/decoration/icons/product-icons-sprite-v7.png) no-repeat 0 -146px;\
		    display: block;\
		    height: 41px;\
		    line-height: 41px;\
		    padding: 0 0 0 35px;\
		    font-size: 20px;\
		    margin: 11px 0 0 10px;\
		}\
		.popup-notification {\
			width: 300px;\
			left: 40.4%;\
			height: 62px;\
			top: 50%;\
		}\
		.awa-add-to-basket-button {\
			height: 30px !important;\
			font-size: 15px;\
			margin-left: 9px;\
		}\
		.awa-close-button {\
			float: right;\
			margin-right: 38px;\
		}\
		.awa-title-container {\
			overflow: auto;\
		}\
		@media screen and (max-width: 670px){\
			#awa-modal-content {\
				width: auto;\
			}\
			.awa-PR {\
				width: 100px;\
				height: auto;\
				margin: 20px 9% 15px 9%;\
			}\
			#awa-modal-content h2 {\
				font-size: 16px;\
			}\
			#awa-modal {\
				position: absolute;\
			}\
			.awa-qty {\
				float: none;\
				display: block;\
				margin: 0 auto;\
			}\
			.awa-add-to-basket-button {\
				display: block;\
				width: 100% !important;\
				font-size: 12px;\
			}\
			#awa-modal-content h3 {\
				height: 80px;\
			}\
			#awa-modal-content h1 {\
				font-size: 20px;\
			}\
		}\
		@media screen and (max-width: 413px){\
			.awa-PR {\
				margin: 0 auto;\
				display: block;\
				border-right: none;\
				margin-bottom: 15px;\
				border-bottom: 1px solid gainsboro;\
				padding-bottom: 15px;\
			}\
	';


	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Add in and display modal
		$('body').append(exp.vars.awaModal);
		var $awaModal = $('#awa-modal');
		var $closeButton = $('.awa-close');
		var $awaModalContent = $('#awa-modal-content');

		if (document.cookie.indexOf('returningVisitor=True') < 0) {
    		$(document).ready(function(){
    			$awaModal.show();
    		});
    	}


    	// Close functions
    	$closeButton.on('click', function() {
		    $awaModal.css('display', 'none');
		    location.reload();
		})

		$(document).click(function(event) { 
    		if(!$(event.target).closest($awaModalContent).length && $awaModal.css('display') === 'block') {
    			$awaModal.css('display', 'none');
    			location.reload();
    		}
    	})

    	$('.awa-close-button').on('click', function() {
    		$awaModal.css('display', 'none');
    		location.reload();
    	})


		// Round vat
		var i = 0
		while (i < exp.vars.prodArray.length) {
			exp.vars.prodArray[i].IncVat = exp.vars.prodArray[i].IncVat.toFixed(2);
			i++;
		}


		// Dedupe array for current products
		var basketLinks = $('#order-lines').find('a');
		var basketArray = [];
		$.each(basketLinks, function () {
			basketArray.push($(this).attr('href'));
		})

		i = 0;
		while (i < basketArray.length) {
			var str = basketArray[i];
			var n = str.indexOf('/');
			var n1 = str.indexOf('/',parseInt(n+1));
			str = str.slice(n, parseInt(n1+1));
			basketArray[i] = str;
			i++;
		}

		var titleArray = [];
		i = 0;
		while (i < exp.vars.prodArray.length) {
			var str = exp.vars.prodArray[i].Url;
			var n = str.indexOf('/');
			var n1 = str.indexOf('/',parseInt(n+1));
			str = str.slice(n, parseInt(n1+1));
			titleArray[i] = str;
			i++;
		}

		var matchingArray = [];
		for (i = 0; i < basketArray.length; i++) {
		    for (var j = 0; j < titleArray.length; j++) {
		        if (basketArray[i] == titleArray[j]) {
		        	if (matchingArray.indexOf(j) < 0) {
		          		matchingArray.push(j);
		          	}
		        }
		    }
		}
		matchingArray.sort(function(a, b){return a-b});

		i = 0;
		while (i < matchingArray.length) {
			exp.vars.prodArray.splice(matchingArray[i] - i, 1);
			i++
		}

		if (exp.vars.prodArray.length < 1) {
			$awaModal.hide();
		}


		//Add in recommended products
		i = 0;
		while (i < 4) {
			if (i >= exp.vars.prodArray.length) {
				break;
			}
			var product = null;
			var prodID = exp.vars.prodArray[i].Url;
			prodID = prodID.slice(prodID.length - 5, prodID.length);
			if (document.cookie.indexOf('inc-vat=True') > -1) {
				product = '<div class="awa-PR awa-PR-' + i + '"><div class="awa-img-container-' + i + '"><img src=/images/300/' + exp.vars.prodArray[i].ProductCode + '.jpg class="awa-img"></div><h3><a href="' + exp.vars.prodArray[i].Url + '">' + exp.vars.prodArray[i].Title + '</a></h3><h1>£<span class="awa-vat-container-' + i +'">' + exp.vars.prodArray[i].IncVat + '</span><span class="awa-vat"> inc VAT</span></h1><div class="awa-form-container"><input type="text" name="awa-add-to-basket-' + exp.vars.prodArray[i].ProductCode + '" value="1" class="awa-qty"><input type="hidden" id="Name_' + exp.vars.prodArray[i].ProductCode + '" class="Name" value="' + exp.vars.prodArray[i].Title + '" > <input type="hidden" id="ProductCode_' + exp.vars.prodArray[i].ProductCode + '" class="awa-ProductCode" value="' + prodID + '" ><input type="hidden" id="Price_' + exp.vars.prodArray[i].ProductCode + '" class="awa-Price" value="' + exp.vars.prodArray[i].IncVat + '"><button type="button" class="blue-button awa-add-to-basket-button" id="awa-add-to-basket-button-' + i + '">Add to Basket</button></div></div>';
			}
			else {
				product = '<div class="awa-PR awa-PR-' + i + '"><div class="awa-img-container-' + i + '"><img src=/images/300/' + exp.vars.prodArray[i].ProductCode + '.jpg class="awa-img"></div><h3><a href="' + exp.vars.prodArray[i].Url + '">' + exp.vars.prodArray[i].Title + '</a></h3><h1>£<span class="awa-vat-container-' + i +'">' + exp.vars.prodArray[i].ExVat + '</span><span class="awa-vat"> ex VAT</span></h1><div class="awa-form-container"><input type="text" name="awa-add-to-basket-' + exp.vars.prodArray[i].ProductCode + '" value="1" class="awa-qty"><input type="hidden" id="Name_' + exp.vars.prodArray[i].ProductCode + '" class="awa-Name" value="' + exp.vars.prodArray[i].Title + '" > <input type="hidden" id="ProductCode_' + exp.vars.prodArray[i].ProductCode + '" class="awa-ProductCode" value="' + prodID + '" ><input type="hidden" id="Price_' + exp.vars.prodArray[i].ProductCode + '" class="awa-Price" value="' + exp.vars.prodArray[i].ExVat + '"><button type="button" class="blue-button awa-add-to-basket-button" id="awa-add-to-basket-button-' + i + '">Add to Basket</button></div></div>';
			}
			$('#awa-modal-content').append(product);
			i++;
		}
		$('.awa-PR-3').css('border-right', 'none');


		// Add to Basket Button
		var $popup = $('.popup-notification.awa-popup');
		$('.awa-add-to-basket-button').on('click', function() {
			$popup.css('display', 'block');
			$popup.fadeOut(1500);
			var qty = $(this).siblings('.awa-qty').val();
			var name = $(this).siblings('.awa-Name').val();
			var code = $(this).siblings('.awa-ProductCode').val();
			var price = $(this).siblings('.awa-Price').val();
			$.ajax({
				type: 'POST',
				url: '/MasterPage/AddToBasket',
				data: {
					productId: code,
					quantity: qty,
					pageType: 'Basket',
					feature: 'BasketCrossSell',
					displayMode: ''
				}
			});
		})


		// Set returning visitor cookie
		document.cookie = 'returningVisitor=True';
	}

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);