var myRe = /^https:\/\/xeroshoes.com\/shop\/((?!product-category).).+$/;
console.log(myRe.test(window.location.href));
