$('.xero-hp-section.full.hero-video-section').hide();
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
	exp.log('AWA - Hero Instagram v1');
	
  // Variables
	exp.vars = {
		pics: [ 
				  { 
				    imgSrc: '//useruploads.visualwebsiteoptimizer.com/useruploads/241718/images/70955f0ce6924c97907f4a3b41d56e6f_xscollage_1-min.png',
				    linkHref: 'http://www.google.com' 
				  },
				  { 
				    imgSrc: '//useruploads.visualwebsiteoptimizer.com/useruploads/241718/images/59f082ed13a03c3e0628d77e583e6bea_xscollage_2-min.png',
				    linkHref: 'http://www.google.com' 
				  },
				  { 
				    imgSrc: '//useruploads.visualwebsiteoptimizer.com/useruploads/241718/images/9ca7d704588230bfc9b652e99e17bef5_xscollage_3-min.jpg',
				    linkHref: 'http://www.google.com' 
				  },
				  { 
				    imgSrc: '//useruploads.visualwebsiteoptimizer.com/useruploads/241718/images/b11e52786b02be97b76acd9533c45de6_xscollage_4-min.jpg',
				    linkHref: 'http://www.google.com' 
				  },
				  { 
				    imgSrc: '//useruploads.visualwebsiteoptimizer.com/useruploads/241718/images/034ecf5e8ab33f4e2a97730c13ee51e8_xscollage_5-min.jpg',
				    linkHref: 'http://www.google.com' 
				  },
				  { 
				    imgSrc: '//useruploads.visualwebsiteoptimizer.com/useruploads/241718/images/012708937fa122cfec5d774b4d2fa2d1_xscollage_6-min.jpg',
				    linkHref: 'http://www.google.com' 
				  },
				  { 
				    imgSrc: '//useruploads.visualwebsiteoptimizer.com/useruploads/241718/images/38e740dde6a965d0b04596b64e291158_xscollage_7-min.jpg',
				    linkHref: 'http://www.google.com' 
				  },
				  { 
				    imgSrc: '//useruploads.visualwebsiteoptimizer.com/useruploads/241718/images/0ba8f4a81f4d306ddbf53730a6bc3d93_xscollage_8-min.png',
				    linkHref: 'http://www.google.com' 
				  },
				  { 
				    imgSrc: '//useruploads.visualwebsiteoptimizer.com/useruploads/241718/images/35a6cf11fa4f4fe4e11450ec194088bd_xscollage_9-min.png',
				    linkHref: 'http://www.google.com' 
				  },
				  { 
				    imgSrc: '//useruploads.visualwebsiteoptimizer.com/useruploads/241718/images/0b4287bf4213d4e5e3dd9a6ce8023afd_xscollage_10-min.png',
				    linkHref: 'http://www.google.com' 
				  },
				  { 
				    imgSrc: '//useruploads.visualwebsiteoptimizer.com/useruploads/241718/images/66567f1a8546eb24c2afca88056d65f5_xscollage_11-min.jpg',
				    linkHref: 'http://www.google.com' 
				  }
				],
		main: '<div class="awa-main"></div>',
		CTA: '<div class="awa-cta"><div class="awa-cta-img"></div><h1>Super. Natural. Comfort.</h1><a href="https://xeroshoes.com/shop/product-category/gender/womens/"><button class="awa-women">SHOP WOMEN</button></a><a href="https://xeroshoes.com/shop/product-category/gender/mens/"><button class="awa-men">SHOP MEN</button></a></div>'
  };
	
  // Styles
	exp.css = '\
	.xero-hp-section.full.hero-video-section {\
		display: none;\
	}\
	.awa-main {\
		margin: 0 .2%;\
		width: 100%;\
	}\
	.awa-pic-box {\
		width: 19.8%;\
		display: inline-block;\
		overflow: hidden;\
		margin-right: 0.15%;\
		margin-bottom: -5px;\
		padding-top: 19.8%;\
	}\
	.awa-img {\
		background-size: cover !important;\
		width: 100%;\
		height: 100%;\
		padding-top: 100%;\
		margin-top: -100%;\
	}\
	.awa-cta {\
		width: 79.6%;\
		display: inline-block;\
		vertical-align: top;\
	}\
	.awa-cta-img {\
		background: url(//useruploads.visualwebsiteoptimizer.com/useruploads/241718/images/202f0c84f7a0c57f800c2c37b35a1188_xscollage_12-min.jpg);\
		display: inline-block;\
		background-repeat: no-repeat;\
		width: 79.6%;\
		background-position-y: 75%;\
		background-size: 100%;\
		opacity: 0.8;\
		position: absolute;\
		z-index: -1;\
		padding-top: 19.8%;\
	}\
	.awa-cta h1 {\
		text-align: center;\
		font-size: 55px;\
		font-weight: 500;\
		color: white;\
		text-transform: none;\
		margin-bottom: 0;\
	}\
	.awa-women {\
		margin-left: 31%;\
		width: 200px;\
		height: 35px;\
		background-color: #2dc369;\
	}\
	.awa-women:hover {\
		background-color: #2f8850;\
	}\
	.awa-men {\
		margin-left: 10%;\
		width: 200px;\
		height: 35px;\
	}\
	.awa-men a {\
		color: white;\
	}\
	.awa-women a {\
		color: white;\
	}\
	.awa-ig-ico {\
		content: "\\f16d"\
	}\
	.awa-pic-hover {\
		background: rgba(0, 0, 0, 0);\
		visibility: hidden;\
		transition: background 0.15s;\
		position: absolute;\
		width: 19.8%;\
		z-index: 1;\
		color: white;\
		font-size: 18px;\
		font-weight: bold;\
		line-height: 30px;\
		padding-top: 19.8%;\
		margin-top: -19.8%;\
	}\
	.awa-hover-contents {\
		position: absolute;\
		margin-top: -50%;\
		text-align: center;\
		width: 100%;\
	}\
	@media (max-width: 1012px) {\
		.awa-cuttoff {\
			display: none;\
		}\
		.awa-main {\
			width: 1010px;\
		}\
		.awa-pic-box {\
			width: 24.8%;\
			padding-top: 24.8%;\
		}\
		.awa-pic-hover {\
			width: 247px;\
			height: 247px;\
			margin-top: -247px;\
		}\
		.awa-hover-contents {\
			margin-top: -60px;\
		}\
		.awa-cta {\
			width: 1012px;\
			height: 250px;\
			padding-top: 0;\
			margin-top: 0;\
		}\
		.awa-cta-img {\
			width: 1012px;\
			height: 250px;\
		}\
	}\
	';

	// Init function
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Add HTML
		$('#main').prepend(exp.vars.main);

		// Add imgs
		for (var x in exp.vars.pics) {
			$('.awa-main').append('<div class="awa-pic-box"><a href="' + exp.vars.pics[x].linkHref + '"><div class="awa-pic-hover awa-black-bkgnd"><span class="awa-hover-contents"><i class="fab fa-instagram"></i><br>See the shoe</span></div><div class="awa-img" style="background: url(' + exp.vars.pics[x].imgSrc + ')"></div></a></div>');
		}

		// Add cut-off style to first column of images
		for (var i = 0; i < $('.awa-pic-box').length; i = i + 5) {
			$('.awa-pic-box').eq(i).addClass('awa-cuttoff');
		}

		// Hover Opacity
		$('.awa-pic-box').hover(function(){$(this).find('.awa-pic-hover').css({'visibility':'visible', 'background': 'rgba(0, 0, 0, 0.5)'})}, function(){$(this).find('.awa-pic-hover').css({'visibility':'hidden', 'background':'rgba(0, 0, 0, 0)'})});

		// Hover Scale
		$('.awa-pic-box').hover(function(){$(this).find('.awa-img').css({'transform':'scale(1.1)', 'transition': 'transform 1s'})}, function(){$(this).find('.awa-img').css({'transform':'scale(1)', 'transition':'transform 1s'})});

		// Add CTA
		$('.awa-pic-box').last().after(exp.vars.CTA);

	};
	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;
	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);