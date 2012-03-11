$(function(){

	// Make the link add to cart on product pages
	$(".product-page .product-price-add a").click(function(){
		$("form.add-to-cart").submit();
		return false;
	});
	
	// Handler for updating the cart
	$(".cart tr.total td.quantity a").click(function(){
		$("form").append('<input type="hidden" name="update" value="Update" />');
		$("form").submit();
		return false;
	});

	// Handler for checking out the cart
	$("a.checkout-button").click(function(){
		$("form").append('<input type="hidden" name="checkout" value="Checkout" />');
		$("form").submit();
		return false;
	});

});