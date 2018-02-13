function getProducts(){
  $.ajax({
      url: "https://api.wegmans.io/product/products/search?criteria=strawberry",
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Product-Subscription-Key","c3122eb0bf3b43249ad1e45829c8eab4");
      },
      type: "GET",
      // Request body
      data: "{body}",
    })
    .done(function(data) {
    })
    .fail(function() {
        alert("error");
    });
}

function getFirstResult(data){
  return data.results[0];
}


