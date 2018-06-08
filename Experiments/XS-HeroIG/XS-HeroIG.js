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
		angularHref: '<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>',
		main: '<div class="awa-main" ng-controller="awa-controller"><div class="awa-pic-box" ng-repeat="pic in pics"><img ng-src="{{ pic.imgSrc }}"></div></div>'
  };
	
  // Styles
	exp.css = '\
	.xero-hp-section.full.hero-video-section {\
		display: none;\
	}\
	';

	// Init function
	exp.init = function() {
		// Add styles
		$('head').append('<style>' + exp.css + '</style>');

		// Load Angular1.0
		$.ajax({
		  url: '//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js',
		  dataType: "script",
		  success: success
		});

    // Set up Angular
    function success() {

    	// Define Scope
			$('body').attr('ng-app','awa-app');
			var app = angular.module('awa-app', []);
			app.config(['$controllerProvider',function($controllerProvider) {
			  $controllerProvider.allowGlobals();
			}]);
			$('#main').prepend(exp.vars.main);

			// Controller
			app.controller('awa-controller', ['$scope', function($scope){
        $scope.pics = [ 
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
				]
			}]);
		}

	};
	exp.init();
	// Return the experiment object so we can access it later if required
	return exp;
	// Close the IIFE, passing in jQuery and any other global variables as required
	// if jQuery is not already used on the site use optimizely.$ instead
})(window.jQuery);
