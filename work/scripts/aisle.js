function getAisle(sku, store){
  var params = {
    // Request parameters
  };
  $.ajax({
      url: "https://api.wegmans.io/product/productlocations/"+sku + "/" + store,
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Product-Subscription-Key","3c42e0a1f50740bb9a3ee9bb2a8b0be7");
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