function getProduct(product){
  var params = {
    // Request parameters
  };
  $.ajax({
      url: "https://api.wegmans.io/product/products/search?criteria=" + product,
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Product-Subscription-Key","3c42e0a1f50740bb9a3ee9bb2a8b0be7");
      },
      type: "GET",
      // Request body
      data: "{body}",
    })
    .done(function(data) {
        console.log(data);
    })
    .fail(function() {
        alert("error");
    });
}