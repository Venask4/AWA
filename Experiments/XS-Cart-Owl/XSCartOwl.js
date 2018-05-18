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
	exp.log('AWA Xero Shoes Home Page Testimonials v1');
	
    // Variables
	// Object containing variables, generally these would be strings or jQuery objects
	exp.vars = {
		//links for testimonials section (boostrap, owl)
        testimonialsLinks: '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.3/assets/owl.carousel.min.css" /><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.3/assets/owl.theme.default.min.css" />',
        
        //testmonials section
        testimonialsSection: '<div class=testimonials><h4 class="why-title awa-title">REAL REVIEWS FROM REAL CUSTOMERS</h4><div class="bottom owl-carousel owl-theme"><div class=item><p class=description>"…the only shoes I wore on a 2-week road trip through Utah, Wyoming and Montana"<div class=awa-rating><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><h3 class=testimonial-title>Andrew T.</h3></div><div class=item><p class=description>"The perfect "go to" sandal for everyday adventures in the city or on the trail"<div class=awa-rating><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><h3 class=testimonial-title>Drew R.</h3></div><div class=item><p class=description style=margin-bottom:3em>"I’ve never been so comfortable in shoes before."<div class=awa-rating><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><h3 class=testimonial-title>Brittanie W.</h3></div><div class=item><p class=description>"I am in love with the out of box comfort and no b.s. quality of the shoe"<div class=awa-rating><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><h3 class=testimonial-title>Chase B.</h3></div><div class=item><p class=description style=margin-bottom:3em>"The shoes are so good, it&#39;s easy to forget you have them on."<div class=awa-rating><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><h3 class=testimonial-title>Yavor P.</h3></div><div class=item><p class=description style=margin-bottom:3em>"Tremendous comfort & absolutely good for my posture correction."<div class=awa-rating><span>★</span><span>★</span><span>★</span><span>★</span><span>★</span></div><h3 class=testimonial-title>Ananda K.</h3></div></div><div class=xero-quiz-cta><a class=cta-button href=https://xeroshoes.com/barefoot-shoe-reviews/ >Read more reviews</a></div></div>'
        	};
	
    // Styles
	// String containing the CSS for the experiment
	exp.css = '\
		.awa-title{\
			letter-spacing: 1.1px !important;\
			font-weight: 400 !important;\
			font-size: 19px !important;\
			color: #878787 !important;\
			text-align: center;\
		}\
		.awa-rating {\
			color: #29abe2;\
		}\
		';
	// Init function
	// Called to run the actual experiment, DOM manipulation, event listeners, etc
	exp.init = function() {
		//add testimonials links
		$('head').append(exp.vars.testimonialsLinks);
		
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Hide Reviews
		//$('#stamped-reviews-widget').hide();
		
      	// Add testimonials section
		$('#stamped-reviews-widget').before(exp.vars.testimonialsSection);

		//carousel change function
		$('.testimonials .owl-carousel').owlCarousel({
			loop:true,
			margin:10,
			//nav:true,
          autoplay:true,
    	autoplayTimeout:7000,
    	autoplayHoverPause:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				700:{
					items:3
				}
			}
		});
	};
	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;
	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);
