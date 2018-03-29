var css = '\
		#awa-price-cont {\
			display: inline-block;\
		}\
		#awa-big-img img {\
			width: 93%;\
			padding: 0 8px 0 7%;\
		}\
		.awa-img-cont {\
			width: 47%;\
			display: inline-block;\
			position: relative;\
		}\
		#awa-big-img {\
			border-top: solid 1px #c1c1c1;\
			border-left: solid 1px #c1c1c1;\
			border-right: solid 1px #c1c1c1;\
		}\
		#awa-enl-cont {\
			height: 25px;\
			border-right: solid 1px #c1c1c1;\
			border-left: solid 1px #c1c1c1;\
			border-bottom: solid 1px #c1c1c1;\
		}\
		.awa-second-half {\
			width: 53%;\
			display: inline-block;\
			vertical-align: top;\
			position: relative;\
		}\
		.awa-title {\
			border-top: solid 1px #c1c1c1;\
			border-bottom: solid 1px #c1c1c1;\
			padding-left: 24px;\
		}\
		.awa-title h1 {\
			width: 78%;\
			margin-bottom: 0;\
			padding-top: 6px;\
			}\
		.awa-ticks {\
			border-bottom: solid 1px #c1c1c1;\
			padding: 18px 0px 18px 24px;\
		}\
		.awa-ticks p {\
			margin-bottom: 8px;\
		}\
		.awa-ticks .fi-check {\
			color: #3BBA00;\
			font-size: 18px;\
			font-weight: 800;\
		}\
		.awa-prod-code {\
			float: right;\
			margin-top: 10px;\
			margin-right: 8px;\
		}\
		.awa-specs {\
			float: right;\
			text-decoration: underline;\
			cursor: pointer;\
			margin-top: 12px;\
		}\
		.AddToCartButton {\
			width: 70% !important;\
		    float: right;\
		    color: #222222;\
		    background: #ffa800;\
		    text-transform: none;\
		    text-shadow: none;\
		    font-size: 24px;\
		    padding: 8px;\
		    border-radius: 8px;\
		}\
		.AddToCartButton:hover {\
			width: 70% !important;\
		    float: right;\
		    color: #222222;\
		    background: #e29502;\
		    text-transform: none;\
		    text-shadow: none;\
		    font-size: 24px;\
		    padding: 8px;\
		    border-radius: 8px;\
		}\
		.awa-fix-green {\
			background-color: #7c7c7c !important;\
			border-radius: 4px !important;\
			text-align: left;\
			margin: 12px 0px 12px 12px;\
		}\
		#awa-align p {\
			font-size: .78rem;\
		}\
		.button.light-grey.expanded.awa-quote-btn {\
			width: 30%;\
			float: right;\
			color: black;\
			margin-bottom: 0;\
		}\
		.awa-add-to-cart {\
			border-radius: 4px !important;\
			margin: 12px 0px 12px 12px;\
		}\
		.awa-flt-rt {\
			clear: both;\
			float: right;\
		}\
		.awa-enl-img {\
			float: right;\
			color: #1c75cf;\
			margin: 0 8px 4px 0;\
		}\
		.awa-enl-img:hover {\
			color: #c1c1c1;\
		}\
		.awa-icons {\
			border-top: none !important;\
		}\
		.awa-icons div div {\
			float: right !important;\
			border-right: none !important;\
		}\
		#awa-box {\
			margin-bottom: 20px;\
		}\
		#divAccordionFinance {\
			display: none;\
			float:right;\
			width: 613px;\
		}\
		.awa-stock-wrng {\
			margin: 12px 0 12px 24px;\
		    font-weight: bold;\
		    font-size: 20px;\
		}\
		.awa-red-star {\
			color: #ff9f3b;\
			font-size: 24px;\
		}\
		.awa-blue-star {\
			color: #1c75cf;\
			font-size: 24px;\
		}\
		.callout.green.awa-fix-green h3{\
			font-size: 24px;\
			margin: 12px 0px 30px 12px;\
		}\
		.callout.green.awa-fix-green p{\
			margin: 12px 0px 15px 12px;\
		}\
		#reviews-div {\
			float: right;\
			width: 325px;\
		}\
		#reviews-div div.columns.large-4.text-left.large-text-right {\
			width: 100%;\
			padding-right: 0;\
		}\
		.product-layout-cis-only {\
		    margin: 12px 0 12px 24px;\
		}\
		@media screen and (max-width: 766px) {\
			.awa-img-cont {\
				width: 100%;\
				display: block;\
			}\
			.awa-second-half {\
				width: 100%;\
				display: block;\
			}\
			#divAccordionFinance {\
				width: 93%;\
			}\
			.awa-fix-green p {\
				clear: right;\
			}\
		}\
	';

$('head').append('<style>' + css + '</style>');