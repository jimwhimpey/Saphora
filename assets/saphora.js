$(function(){

	// Make the link add to cart on product pages
	$(".product-page .product-price-add a").click(function(){
		$("form.add-to-cart").submit();
		return false;
	});

});