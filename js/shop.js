
productSelector();

function productSelector() {
	


	var products = document.getElementsByClassName("product");
			alert(products.length);
	
	for (var i = 0; i < products.length; i++) {

			products[i].addEventListener('click', function(){ alert('blah');}, false);


	  }  
}