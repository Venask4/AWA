function getQuote() {
	// Get data from forms
	var dataObj = {
		__RequestVerificationToken: null,
		Name: null,
		Contactno: null,
		Email: 'test@test.com',
		Countcars: 1,
		Countbuild: 0,
		Counthc: 0,
		Countpp: 0,
		terms: 'on'
	};
	dataObj.__RequestVerificationToken = $('input[name="__RequestVerificationToken"]').eq(1).val();
	dataObj.Name = $('input[name="Name"]').val();
	dataObj.Contactno = $('input[name="Contactno"]').val();

	$.ajax({
		type: 'POST',
		url: 'https://www.kingprice.co.za/car-insurance/online-quote',
		datatype: 'json',
		data: dataObj,
		success: function() {
			console.log('success!');
			window.location.href = 'https://www.kingprice.co.za/ThankYou/';
		}
	})
}