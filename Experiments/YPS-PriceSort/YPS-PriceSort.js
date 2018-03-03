function checkReady() {
	setTimeout(function() {if (document.readyState === 'complete') {
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
			exp.log('AWA - YPS Price Sort v2');
			// Variables
			// Object containing variables, generally these would be strings or jQuery objects
			exp.vars = {
				radioBtns: '<div id="awa-sort-cont"> <form> <span>Price: </span> <label>Low-high&nbsp<input type="radio" name="awa-low-high" id="LH" value="low-high"></label>&nbsp&nbsp<label>High-low&nbsp<input type="radio" name="awa-low-high" id="HL" value="high-low"></label>  </form> </div>',
				authorizedChange: false
			};
			// Styles
			// String containing the CSS for the experiment
			exp.css = '\
			#awa-sort-cont {\
				float: left;\
				margin: 4px 10px 0px 11px;\
				border-left: 1px solid hsla(0,0%,59%,.28);\
				padding: 0px 0px 0px 11px;\
			}\
			#awa-sort-cont input {\
				vertical-align: top;\
			}\
			';
			// Init function
			// Called to run the actual experiment, DOM manipulation, event listeners, etc
			exp.init = function() {
		           	//Poll
		      		function poll(selector, cb) {
					setTimeout(function(){if($(selector).length > 0) {
		              cb();
					}
					else {
						poll(selector, cb);
					}}, 50)
				}
		      function test() {
				// Add styles
				$('head').append('<style>' + exp.css + '</style>');
		      
				// Add radio buttons
				$('#search-results-header-title .location-name').after(exp.vars.radioBtns);
		      
				function sortLowHigh() {
					var $spaces = [];
					$('#search-results-content').children('ul').children('li').each(function(){
						$spaces.push($(this));
					});
					$spaces.sort(function(a,b) {
						return parseFloat(a.find('.price').text().replace('£','')) - parseFloat(b.find('.price').text().replace('£',''));
					});
					exp.vars.authorizedChange = true;
					$('#search-results-content').children('ul').html($spaces);
				}
				function sortHighLow() {
					var $spaces = [];
					$('#search-results-content').children('ul').children('li').each(function(){
						$spaces.push($(this));
					});
					$spaces.sort(function(a,b) {
						return parseFloat(b.find('.price').text().replace('£','')) - parseFloat(a.find('.price').text().replace('£',''));
					});
					exp.vars.authorizedChange = true;
					$('#search-results-content').children('ul').html($spaces);
				}
				function radioClk() {
					if ($('#LH').prop('checked') === true) {
						sortLowHigh()
					}
					else if ($('#HL').prop('checked') === true) {
						sortHighLow();
					}
				}
				$('#awa-sort-cont label').on('click', radioClk);

				// Change observer
				$('#search-results-content').children('ul').on('DOMSubtreeModified', function() {
					if (exp.vars.authorizedChange === false) {
						$('#LH').prop('checked', false);
				    	$('#HL').prop('checked', false);
					}
					else {
						setTimeout(function() {exp.vars.authorizedChange = false}, 50);
					}
				})
		      }
		      poll('#search-results-header-title .location-name', test);

			};
				exp.init();
			// Return the experiment object so we can access it later if required
			return exp;
			// Close the IIFE, passing in jQuery and any other global variables as required
			// if jQuery is not already used on the site use optimizely.$ instead
		})(window.jQuery);
	}
	else {
		checkReady()
	}}, 50);
}
checkReady();