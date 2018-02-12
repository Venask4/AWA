
$.ajax({
	type: 'GET',
	url: 'https://www.ipsluk.co.uk/checkout/cart/',
	contenttype: 'text/html; charset=UTF-8',
	success: function(data) {
		console.log(data);
	}
});


// Get basket codes
var basketItems = []
var i = 0;
while (i < jQuery('#checkout-review-table').find('a').length) {
	basketItems.push(parseInt(jQuery('#checkout-review-table').find('a').eq(i).attr('href').slice(25)));
	i++;
	i++;
	i++;
}
console.log(basketItems);

// Get qty's
qtyArr = [];
i = 0;
while (i < basketItems.length) {
	qtyArr.push(jQuery('#qty-' + basketItems[i]).text());
	i++;
}
console.log(qtyArr);

// Create data object
var cartData = {
	form_key: 'kkPRx0SqGcAcmnVz',
	update_cart_action: 'empty_cart'
};

i = 0;
while (i < basketItems.length) {
	cartData['cart[' + basketItems[i] + '][qty]'] = parseInt(qtyArr[i]);
	i++;
}
console.log(cartData);

// POST data
jQuery.ajax({
	type: 'POST',
	url: 'https://www.ipsluk.co.uk/checkout/cart/updatePost/',
	datatype: 'json',
	data: cartData,
	success: function() {
		console.log('success');
	}
});