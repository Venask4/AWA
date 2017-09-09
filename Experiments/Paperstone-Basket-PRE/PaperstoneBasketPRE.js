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
			awaModal: '<div id="awa-modal"><div id="awa-modal-content"><span class="awa-close">&times;&nbsp;</span><br><br><br><h1>Before you checkout, did you forget any of our bestsellers?</h1></div></div>',
			prodArray: [	{"ProductCode":"295179",
							"Url":"/filing-archiving/dividers-indexes-tabs/5-star-subject-dividers-10-part-a4-assorted/p-19583",
							"Title":"5 Star Subject Dividers / 10-Part / A4 / Assorted",
							"ExVat":0.9900,
							"IncVat":1.18800},
							{"ProductCode":"362003",
							"Url":"/paper/copier-printer-paper/navigator-universal-a4-paper-white-80gsm-box-5-x-500-sheets/p-25486",
							"Title":"Navigator Universal A4 Paper / White / 80gsm / Box (5 x 500 Sheets)",
							"ExVat":14.9500,
							"IncVat":17.94000},
							{"ProductCode":"912971",
							"Url":"/desktop-essentials/post-its/post-it-notes/5-star-re-move-notes-76x76mm-assorted-neon-pack-of-12-x-100-notes/p-18008",
							"Title":"5 Star Re-move Notes / 76x76mm / Assorted Neon / Pack of 12 x 100 Notes",
							"ExVat":7.9900,
							"IncVat":9.58800},
							{"ProductCode":"137567",
							"Url":"/office-personal-planning/wall-planners/sasco-2018-wall-planner-unmounted/p-88455",
							"Title":"Sasco 2018 Wall Planner - Unmounted",
							"ExVat":2.6900,
							"IncVat":3.22800},
							{"ProductCode":"108376",
							"Url":"/desktop-essentials/sticky-tapes/invisible-tape/5-star-invisible-tape-19mmx33m/p-64631",
							"Title":"5 Star Invisible Tape - 19mmx33m",
							"ExVat":1.0900,
							"IncVat":1.30800},
							{"ProductCode":"022179",
							"Url":"/catering/water/evian-natural-mineral-water-24-x-330ml-plastic-bottles/p-15857",
							"Title":"Evian Natural Mineral Water - 24 x 330ml Plastic Bottles",
							"ExVat":9.9900,
							"IncVat":11.98800},
							{"ProductCode":"383915",
							"Url":"/pens-pencils/ballpoint-pens/bic-cristal-ball-pen-clear-barrel-black-pack-of-50/p-27110",
							"Title":"Bic Cristal Ball Pen / Clear Barrel / Black / Pack of 50",
							"ExVat":9.9900,
							"IncVat":11.98800},
							{"ProductCode":"153377",
							"Url":"/office-machines-supplies/calculators/casio-calculator-desktop-batterysolar-powered-8-digit-4-key-memory-103x31x137mm-white-ref-mx-8b-we/p-82591",
							"Title":"Casio Calculator Desktop Battery/Solar-powered 8 Digit 4 Key Memory 103x31x137mm White Ref MX-8B-WE",
							"ExVat":4.2900,
							"IncVat":5.14800},
							{"ProductCode":"101660",
							"Url":"/janitorial/toilet-rolls-dispensers/toilet-roll/cushelle-toilet-rolls-2-ply-white-12-rolls-for-the-price-of-9/p-57999",
							"Title":"Cushelle Toilet Rolls / 2-Ply / White / 12 Rolls for the Price of 9",
							"ExVat":8.7300,
							"IncVat":10.47600},
							{"ProductCode":"1C100",
							"Url":"/envelopes/postage-stamps/royal-mail-1st-class-postage-stamps-100-per-pack/p-78723",
							"Title":"Royal Mail 1st class postage stamps - 100 per pack",
							"ExVat":65.0000,
							"IncVat":65.0000},
							{"ProductCode":"413853",
							"Url":"/office-furniture/office-chairs/operator-chairs/influx-posture-high-back-chair-blue/p-52222",
							"Title":"Influx Posture High Back Chair - Blue",
							"ExVat":123.9900,
							"IncVat":148.78800},
							{"ProductCode":"507842",
							"Url":"/books-pads/notebooks/pukka-pad-wirebound-jotta-notebook-a4-ruled-margin-4-holes-200-pages-pack-of-3/p-15413",
							"Title":"Pukka Pad Wirebound Jotta Notebook / A4 / Ruled / Margin / 4 Holes / 200 Pages / Pack of 3",
							"ExVat":10.9900,
							"IncVat":13.18800},
							{"ProductCode":"123862",
							"Url":"/computer-accessories/batteries/duracell-plus-power-alkaline-battery-aa-pack-of-4/p-72324",
							"Title":"Duracell Plus Power Alkaline Battery / AA / Pack of 4",
							"ExVat":1.9900,
							"IncVat":2.38800},
							{"ProductCode":"327013",
							"Url":"/meeting-presentation/laminators-pouches/laminating-pouches/gbc-a4-laminating-pouches-thin-150-micron-glossy-pack-of-25/p-24769",
							"Title":"GBC A4 Laminating Pouches / Thin / 150 Micron / Glossy / Pack of 25",
							"ExVat":5.7900,
							"IncVat":6.94800},
							{"ProductCode":"509169",
							"Url":"/artists-graphics-supplies/foamboard/foamboard-a3-white-5mm-thick-box-of-10/p-14676",
							"Title":"Foamboard / A3 / White / 5mm Thick / Box of 10",
							"ExVat":9.9900,
							"IncVat":11.98800},
							{"ProductCode":"320643",
							"Url":"/labels/address-labels/avery-jam-free-laser-addressing-labels-21-per-sheet-63-5x38-1mm-white-l7160-40-840-labels/p-22458",
							"Title":"Avery Jam-free Laser Addressing Labels / 21 per Sheet / 63.5x38.1mm / White / L7160-40 / 840 Labels",
							"ExVat":13.9900,
							"IncVat":16.78800},
							{"ProductCode":"344885",
							"Url":"/mailroom-warehouse/packaging/packing-tapes-dispensers/tapes/5-star-packaging-tape-polypropylene-50mm-x-66m-buff/p-17336",
							"Title":"5 Star Packaging Tape / Polypropylene / 50mm x 66m / Buff",
							"ExVat":1.9900,
							"IncVat":2.38800},
							{"ProductCode":"288013",
							"Url":"/office-interiors/waste-bins/mesh-waste-bin-lightweight-scratch-resistant-w275xh350mm-black/p-51564",
							"Title":"Mesh Waste Bin / Lightweight / Scratch Resistant / W275xH350mm / Black",
							"ExVat":7.4900,
							"IncVat":8.98800},
							{"ProductCode":"936658",
							"Url":"/health-safety/first-aid/first-aid-kits-refills/5-star-first-aid-kit-hs1-1-10-users/p-72832",
							"Title":"5 Star First Aid Kit HS1 - 1-10 Users",
							"ExVat":13.9900,
							"IncVat":16.78800},
							{"ProductCode":"918893",
							"Url":"/security-products/money-handling/cash-boxes/5-star-cash-box-8-inch-blue/p-26151",
							"Title":"5 Star Cash Box - 8 Inch - Blue",
							"ExVat":8.3900,
							"IncVat":10.06800},
							{"ProductCode":"134976",
							"Url":"/workwear/gloves/knitted-grip-gloves-pvc-lattice-one-size-pair/p-34269",
							"Title":"Knitted Grip Gloves / PVC Lattice / One Size / Pair",
							"ExVat":1.3900,
							"IncVat":1.66800},
							{"ProductCode":"26966X",
							"Url":"/prod_50076_8521-8523_Silvine-Ruled-Exercise-Book-229x178mm-With-Margin-80-Pages-Blue-Pack-of-10.aspx",
							"Title":"Silvine Ruled Exercise Book / 229x178mm / With Margin / 80 Pages / Blue / Pack of 10",
							"ExVat":2.6900,
							"IncVat":3.22800}
						]
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
			height: 400px;\
			background-color: white;\
			margin: 300px auto;\
			display: block;\
			padding: 0 0 0 40px;\
		}\
		#awa-modal-content h1 {\
			text-align: center;\
		}\
		.awa-close {\
			display: block;\
			float: right;\
			font-size: 32px;\
		}\
		.awa-PR {\
			width: 160px;\
			margin: 20px 38px 0 0;\
			height: 300px;\
			background-color: white;\
			border: 1px solid black;\
			display: inline-block;\
			vertical-align: top;\
			color: black;\
		}\
		.awa-vat {\
			font-size: 12px;\
		}\
		.awa-img {\
			width: 100%;\
			height: auto;\
		}\
	';


	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Low Price Promise pop-up when product code is selected
		$('body').append(exp.vars.awaModal);
		var $awaModal = $('#awa-modal');
		var $closeButton = $('.awa-close');
		var $awaModalContent = $('#awa-modal-content');

    	$(document).ready(function(){
    		$awaModal.show();
    	});

    	$closeButton.on('click', function() {
		    $awaModal.css('display', 'none');
		});

		closeModal = function() {
			if (event.target == $awaModal) {
				$awaModal.css('display', 'none');
			}
		}

		window.onmousedown = closeModal;

		//Dedupe array for current products
		var basketLinks = $('#order-lines').find('a');
		var basketArray = [];
		$.each(basketLinks, function () {
			basketArray.push($(this).attr('href'));
		})

		var i = 0;
		while (i < basketArray.length) {
			var str = basketArray[i];
			var n = str.indexOf('/');
			var n1 = str.indexOf('/',parseInt(n+1));
			str = str.slice(n, parseInt(n1+1));
			basketArray[i] = str;
			i++;
		}
		console.log(basketArray);

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
		console.log(titleArray);

		var matchingArray = [];
		for (i = 0; i < basketArray.length; i++) {
		    for (var j = 0; j < titleArray.length; j++) {
		        if (basketArray[i] == titleArray[j]) {
		          matchingArray.push(j);
		        }
		    }
		}
		console.log(matchingArray);

		i = 0;
		while (i < matchingArray.length) {
			exp.vars.prodArray.splice(matchingArray[i], 1);
			i++
		}
		console.log(exp.vars.prodArray);

		//Add in recommended products
		i = 0;
		while (i < 4) {
			var product = '<div class="awa-PR"><div class="awa-img-container-' + i + '"></div><h3>' + exp.vars.prodArray[i].Title + '</h3><h1>£' + exp.vars.prodArray[i].ExVat + '<span class="awa-vat">ex VAT</span></h1><div class="awa-form-container"></div></div>';
			$('#awa-modal-content').append(product);
			$.ajax({
				url: 'http://www.paperstone.co.uk' + exp.vars.prodArray[i].Url, 
				type: 'GET',
				dataType: 'text',
				success : function(data) {
					var $prodImg = null;
					var $addToBasketForm = null;
					$prodImg = $(data).find('#product-box .prod-img .img-wrap img');
					$prodImg.removeClass();
					$prodImg.addClass('awa-img');
					$('.awa-img-container-' + i).html($prodImg);
					$addToBasketForm = $(data).find('#add-to-basket-box .addToBasketForm');
					$('.awa-form-container').html($addToBasketForm);
					},
				async: false
			});
			i++;
		}

		if (document.cookie.indexOf('inc-vat=True') > -1) {
			console.log('vat included');
		}
		else {
			console.log('vat not included');
		}
	};

	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;

	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);