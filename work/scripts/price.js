function getPriceBySKU(sku){
  $.ajax({
      url: "https://api.wegmans.io/price/pricing/current_prices/" + sku,
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Price-Subscription-Key","c3122eb0bf3b43249ad1e45829c8eab4");
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
  store = store || 62;
  $.ajax({
      url: "https://api.wegmans.io/price/pricing/current_prices/" + sku + "/" + store,
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Price-Subscription-Key","c3122eb0bf3b43249ad1e45829c8eab4");
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