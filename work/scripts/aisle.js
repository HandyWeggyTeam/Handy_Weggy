function getAisle(sku, store){
  store = store || 62;
  var params = {
    // Request parameters
  };
  $.ajax({
      url: "https://api.wegmans.io/product/productlocations/"+sku + "/" + store,
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Product-Subscription-Key","c3122eb0bf3b43249ad1e45829c8eab4");
      },
      type: "GET",
      // Request body
      data: "{body}",
    })
    .done(function(data) {
      if (data.length > 0){
        console.log(data[0].AisleSide)
      }
    })
    .fail(function() {
        alert("error");
    });
}

