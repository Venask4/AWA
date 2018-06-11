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
				    imgSrc: 'https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_17947536550019210_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=280avcAMSQqDHdKJL%2Bnb%2BQAayA0%3D',
				    linkHref: '' 
				  },
				  { 
				    imgSrc: 'https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_1785955283657056608_1582787257_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=JMTn%2Bdh4SUITlNrpFYRhVqpLZtk%3D',
				    linkHref: '' 
				  },
				  { 
				    imgSrc: 'https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_1785869224297012015_6092074489_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=qcuE7YN5lRqzqkEwWO4btP2B7aY%3D',
				    linkHref: '' 
				  },
				  { 
				    imgSrc: 'https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_1785800187497418106_37337587_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=Vq9dpT1DC01PCgj3%2B7l07wBRqDE%3D',
				    linkHref: '' 
				  },
				  { 
				    imgSrc: 'https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_1785787096738203759_5967345044_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=G26pxtTRORAAjhcnxqk0fXARFa8%3D',
				    linkHref: '' 
				  },
				  { 
				    imgSrc: 'https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_1785767717853709839_6699026721_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=gCBmokuXbDk5dJAXyPGao9cwqdA%3D',
				    linkHref: '' 
				  },
				  { 
				    imgSrc: 'https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_1785702554810988722_654787467_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=GZOsQO77trX1nAQJx3lN%2BV5I7OU%3D',
				    linkHref: '' 
				  },
				  { 
				    imgSrc: 'https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_1785670278550997051_221949808_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=2Ge7Stg79psgzkgWRP0rSzdPwN8%3D',
				    linkHref: '' 
				  },
				  { 
				    imgSrc: 'https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_1785631140720650142_7372425661_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=L5O0n%2Fd5leTZJVvVyIbsaI3AoiU%3D',
				    linkHref: '' 
				  },
				  { 
				    imgSrc: 'https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_1785292911863005970_5884355670_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=V4GjlTLwfJQGekXPsos33pnNKo0%3D',
				    linkHref: '' 
				  },
				  { 
				    imgSrc: 'https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_1785039909633390413_4290723436_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=c9HTG%2Fy7d1eHvhMkPGCC0Rlad8s%3D',
				    linkHref: '' 
				  },
				  {
				  	imgSrc: 'https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_1784439294745951565_193192830_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=EJn9rMMxn%2BleFTsiFXfSLn9XZoA%3D',
				    linkHref: '' 
				  },
				  {
				  	imgSrc: 'https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_1783710526205758655_3903941523_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=Smnvpi%2FpN61p1x8mOXghEdWwsO8%3D',
				    linkHref: '' 
				  }
				],
		main: '<div class="awa-main"></div>',
		CTA: '<div class="awa-cta"><div class="awa-cta-img"></div><h1>Super. Natural. Comfort.</h1><button class="awa-women"><a href="https://xeroshoes.com/shop/product-category/gender/womens/">SHOP WOMEN</a></button><button class="awa-men"><a href="https://xeroshoes.com/shop/product-category/gender/mens/">SHOP MEN</a></button></div>'
  };
	
  // Styles
	exp.css = '\
	.xero-hp-section.full.hero-video-section {\
		display: none;\
	}\
	.awa-main {\
		margin: 0 2% 0 2%;\
	}\
	.awa-pic-box {\
		width: 15%;\
		display: inline-block;\
		height: 200px;\
		overflow: hidden;\
		background-size: cover !important;\
	}\
	.awa-cta {\
		height: 200px;\
		width: 75%;\
		display: inline-block;\
		vertical-align: top;\
	}\
	.awa-cta-img {\
		background: url(https://s3-us-west-2.amazonaws.com/stamped.io/uploads/instagram/15168_1785670278550997051_221949808_high.jpg?AWSAccessKeyId=AKIAJZP6NJTFV3IFIHLQ&Expires=2147472000&Signature=2Ge7Stg79psgzkgWRP0rSzdPwN8%3D);\
		display: inline-block;\
		height: 200px;\
		background-repeat: no-repeat;\
		width: 72%;\
		background-position-y: 75%;\
		background-size: 100%;\
		opacity: 0.8;\
		position: absolute;\
		z-index: -1;\
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
		margin-left: 23%;\
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
	.awa-ig-ico {\
		content: "\\f16d"\
	}\
	.awa-pic-hover {\
		opacity: 0;\
		background: black;\
		visibility: hidden;\
		transition: opacity 0.3s;\
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
			$('.awa-main').append('<div class="awa-pic-box" style="background: url(' + exp.vars.pics[x].imgSrc + ')"><div class=""><div class="awa-pic-hover"><i class="fab fa-instagram"></i>See the shoe</div></div></div>');
		}

		// Hover
		$('.awa-pic-hover').hover(function(){$(this).css({'visibility':'visible', 'opacity': '1'})}, function(){$('this').css({'visibility':'hidden', 'opacity':'0'})});

		// Add CTA
		$('.awa-pic-box').last().after(exp.vars.CTA);

	};
	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;
	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);
