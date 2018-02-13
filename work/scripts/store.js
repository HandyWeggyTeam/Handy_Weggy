var data_location;
var resultList = [];
var stores = [];
$(document).ready(function(){

  var langLong = function(){
    $.ajax({
        url: "http://freegeoip.net/json/",
        type: "GET",
        data: "{body}",
      })
      .done(function(data) {
          user_location = data;
          // console.log(user_location);

           a2(user_location);
      })
    }
  var a2 = function(user_location) {
    var userLoc = user_location;
    var params = {
    "locationType": "FoodMarket",
    };
    $.ajax({
    url: "https://api.wegmans.io/location/location/stores?" + $.param(params),
    beforeSend: function(xhrObj){
        // Request headers
        xhrObj.setRequestHeader("Location-Subscription-Key","c3122eb0bf3b43249ad1e45829c8eab4");
    },  
    type: "GET",
    // Request body
    data: "{body}",
  })
    .done(function(data) {
      wegmanLocation = data;
      var value = getCordinates(userLoc, wegmanLocation);

    });
  }
  var getCordinates = function(user_location, wegmanLocation) {
      console.log("here")
      var userLat = user_location.latitude;
      var userLong = user_location.longitude;
      $.each(wegmanLocation, function(key,value){
            currentWegLat = value.Location.Latitude;
            currentWegLong = value.Location.Longitude;
            getDistance(userLat,userLong, value);

      })
      resultList.sort(function(a, b) {
      return a.d - b.d;
      });
      console.log(resultList);
      stores = resultList.slice(1, 6);
      FindStoreNearMe();
      console.log(stores);
  };
  var getDistance = function(userLat, userLong, value){
    var R = 6378137; // Earth’s mean radius in meter
    var dLat = rad(value.Location.Latitude - userLat);
    var dLong = rad(value.Location.Longitude - userLong);
    var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(value.Location.Latitude)) * Math.cos(rad(userLat)) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c;
    var eachStore = [];
    eachStore.push(d);
    eachStore.push(value.Name);
    eachStore.push(value.StoreNumber);
    eachStore.push(value.Location.StreetAddress);
    resultList.push(eachStore);
  }
  var rad = function(x) {
      return x * Math.PI / 180;
  };

  langLong();


});

  function FindStoreNearMe(){
    console.log("called store");
    console.log(stores)
    console.log(stores.length)
    var table1 = "<table class =black-text \"responsive-table\"><thead><tr><th>StoreName</th><th>StreetAddress</th></tr></thead></tbody><tbody>";
    stores.forEach(function(item){
      console.log(item)
     name = item[1];
     street = item[3];
     table1 += "<tr><td>"+name+"</td><td>"+street+"</td></tr>";
    });
    table1 += "</tbody></table>";
    console.log(table1);
    document.getElementById("store_table").innerHTML = table1;
  };