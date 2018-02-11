// function getIP(callback){
//   $.ajax({
//     url: "https://api.ipify.org",
//     type: "GET",
//     data: "{body}",
//   })
//   .done(function(data) {
//     console.log(data)
//     callback(data);
//   })
//   .fail(function() {
//       alert("error");
//   });
// }
var data_location;
var resultList = [];
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
      .fail(function() {
          alert("error");
      });
    }
  var a2 = function(user_location) {
    // console.log("Loc : ");
    // console.log(user_location);
    var userLoc = user_location;
    var params = {
    "locationType": "All",
    };
    $.ajax({
    url: "https://api.wegmans.io/location/location/stores?" + $.param(params),
    beforeSend: function(xhrObj){
        // Request headers
        xhrObj.setRequestHeader("Location-Subscription-Key","2977643af4764b139ae1deff78310f30");
    },  
    type: "GET",
    // Request body
    data: "{body}",
  })
    .done(function(data) {
      // product = getFirstResult(data);
      // console.log(data);
      // getAisle(511053, 64);
      // getPriceBySKUandStore(product['sku']);
      // console.log(data);
      wegmanLocation = data;
      var value = getCordinates(userLoc, wegmanLocation);

    });
  }
  var getCordinates = function(user_location, wegmanLocation) {
      var userLat = user_location.latitude;
      var userLong = user_location.longitude;
      console.log(userLat+"  "+userLong);
      $.each(wegmanLocation, function(key,value){
          // console.log(value);
            currentWegLat = value.Location.Latitude;
            currentWegLong = value.Location.Longitude;
            getDistance(userLat,userLong, value);

      })
      resultList.sort(function(a, b) {
      return a.d - b.d;
      });
      // console.log(resultList);
      var stores = resultList.slice(1, 6);
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