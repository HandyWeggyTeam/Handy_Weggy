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

function getLatLong(){
  $.ajax({
      url: "http://freegeoip.net/json/",
      type: "GET",
      data: "{body}",
    })
    .done(function(data) {
    })
    .then(wegmans)
    .fail(function() {
        alert("error");
    });
}

var rad = function(x) {
  return x * Math.PI / 180;
}
var getDistance = function(p1, p2) {
  var R = 6378137; // Earth’s mean radius in meter
  var dLat = rad(p2.lat() - p1.lat());
  var dLong = rad(p2.lng() - p1.lng());
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(rad(p1.lat())) * Math.cos(rad(p2.lat())) *
    Math.sin(dLong / 2) * Math.sin(dLong / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d; // returns the distance in meter
};



function getWegmanStores(){
  var params = {
    "locationType": "FoodMarket",
  }
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
    console.log(data);
  })
  .fail(function() {
      alert("error");
  });
}

// function getNearestStore(){
//   getLatLong().then(getWegmanStores.then(printer));
//   // getLatLong([getWegmanStores, printer]);
//     // location = getLatLong(ip);
//   // console.log(location);
//   storesInZip = getWegmanStores().filter((store) =>{
//     return parseInt(location.zip_code) === parseInt(store.Location.Zip)
//   });
//   // return storesInZip;
// }
// function printer(stuff){
//   console.log(stuff)
// }
// function getStores(my_loc){
//   getWegmanStores();
//   // storesInZip = (getWegmanStores()).filter((store) =>{
//   //   return parseInt(my_loc.zip_code) === parseInt(store.Location.Zip)
//   // });
//   // console.log(storesInZip);
// }





function my_location(){
  return $.ajax({
      url: "http://freegeoip.net/json/",
      type: "GET",
      data: "{body}",
    }); 
}

// function getWegmanStores(){
//   return $.ajax({
//     url: "https://api.wegmans.io/location/location/stores/",
//     beforeSend: function(xhrObj){
//         // Request headers
//         xhrObj.setRequestHeader("Location-Subscription-Key","3c42e0a1f50740bb9a3ee9bb2a8b0be7");
//     },  
//     type: "GET",
//     // Request body
//     data: "{body}",
//   });
// }

// var a1 = $.ajax({url: "http://freegeoip.net/json/",
//       type: "GET",
//       data: "{body}",
//      });

// var a2 = function() {
//   var params = {
//     "locationType": "FoodMarket",
//   };
//   return $.ajax({
//     url: "https://api.wegmans.io/location/location/stores?" + $.param(params),
//     beforeSend: function(xhrObj){
//         // Request headers
//         xhrObj.setRequestHeader("Location-Subscription-Key","c3122eb0bf3b43249ad1e45829c8eab4");
//     },  
//     type: "GET",
//     // Request body
//     data: "{body}",
//   });
// }
// // // getWegmanStores();


