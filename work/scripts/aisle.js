function getAisle(sku, store, item){
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
        updateAisleForItem(data[0].AisleSide, item);
        return(data[0].AisleSide);
      }
    })
    .fail(function() {
        alert("error");
    });
}

function updateAisleForItem(aisle, item){
  shoppingCartList.forEach(function (element){
    if (item.Id == element.Id){
      aisle = aisle || "unknown";
      element.aisle = aisle;
    }
  });
  updateShoppingCart();
}
