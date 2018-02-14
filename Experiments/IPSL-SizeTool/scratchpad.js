
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
	form_key: minicartOptions.formKey,
	update_cart_action: 'empty_cart'
};

i = 0;
while (i < basketItems.length) {
	cartData['cart[' + basketItems[i] + '][qty]'] = parseInt(qtyArr[i]);
	i++;
}
console.log(cartData);

// POST data - remove items
jQuery.ajax({
	type: 'POST',
	url: 'https://www.ipsluk.co.uk/checkout/cart/updatePost/',
	datatype: 'json',
	data: cartData,
	success: function() {
		console.log('Items Removed');
	}
});

// ADD items
var formData = jQuery('#product_addtocart_form').serialize();
jQuery.ajax({
	type: 'POST',
	url: 'https://www.ipsluk.co.uk/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuaXBzbHVrLmNvLnVrL2FxdWFib3JkLXB2Yy10b25ndWUtZ3Jvb3ZlLWJsYWNrLWNhc2NhZGUuaHRtbA,,/product/1205/form_key/0JUwCy6aHfNPKcgY/',
	data: formData,
	success: function() {
		console.log('Items added');
	}
});