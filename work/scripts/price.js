function getPriceBySKU(sku){
  $.ajax({
      url: "https://api.wegmans.io/price/pricing/current_prices/" + sku,
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Price-Subscription-Key","3c42e0a1f50740bb9a3ee9bb2a8b0be7");
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

function getPriceBySKUandStore(sku, store){
  store = store || 1;
  $.ajax({
      url: "https://api.wegmans.io/price/pricing/current_prices/" + sku + "/" + store,
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Price-Subscription-Key","3c42e0a1f50740bb9a3ee9bb2a8b0be7");
      },
      type: "GET",
      // Request body
      data: "{body}",
    })
    .done(function(data) {
        return data[0].Price;
    })
    .fail(function() {
        alert("error");
    });
}