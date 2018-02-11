function getProducts(){
  $.ajax({
      url: "https://api.wegmans.io/product/products/search?criteria=banana",
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Product-Subscription-Key","c3122eb0bf3b43249ad1e45829c8eab4");
      },
      type: "GET",
      // Request body
      data: "{body}",
    })
    .done(function(data) {
      // product = getFirstResult(data);
      console.log(data);
      // getAisle(511053, 64);
      // getPriceBySKUandStore(product['sku']);
    })
    .fail(function() {
        alert("error");
    });
}

function getFirstResult(data){
  return data.results[0];
}


