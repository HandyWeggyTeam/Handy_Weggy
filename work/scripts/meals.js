

function getMeals(){
  var params = {
    // Request parameters
  };
  $.ajax({
      url: "https://api.wegmans.io/meals/recipes",
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Meals-Subscription-Key","c3122eb0bf3b43249ad1e45829c8eab4");
      },
      type: "GET",
      // Request body
      data: "{body}",
    })
    .done(function(data) {
        var listOfmeals = [];
        $.each(data, function(key,value){
          recipes = value;
          $.each(recipes, function(key,value){

            var eachMeal = [];
            eachMeal.push(value.id);
            eachMeal.push(value.name);
            eachMeal.push(value.imageUrl);
            listOfmeals.push(eachMeal);
          });

        });
         console.log(listOfmeals);   

    })
    .fail(function() {
        alert("error");
    });
}
var meals = [];

function getQueriedMeal(){
  meal = $("#search_meal").val().toLowerCase();
  console.log(meal)
  var params = {
    // Request parameters
  };
  $.ajax({
      url: "https://api.wegmans.io/meals/recipes",
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Meals-Subscription-Key","c3122eb0bf3b43249ad1e45829c8eab4");
      },
      type: "GET",
      // Request body
      data: "{body}",
    })
    .done(function(data) {
      console.log(data.results)
      meals = data.results;
      filtered_meals = data.results.filter(function(value){
        console.log(value.name)
        let item = (value.name).toLowerCase();
        return item.indexOf(meal) !== -1;
      })
      console.log(filtered_meals);
      updateMeals(filtered_meals);
    })
    .fail(function() {
        alert("error");
    });
}
function updateMeals(filtered_meals){
  str = '<div class="row">';
  filtered_meals.forEach(function(e,i){
    id = "img~" + e.id + "~"+e.name+"~"+e.imageUrl;
    id_extra = "#img_" + i;
    str +=  '<div class="col s5 m3"><div class="card"><div class="card-image"><img  id="'+id+' "onClick=openModal(this) src="'+e.imageUrl+'"></div><div class="card-content black-text"><p>'+e.name+'</p></div></div></div>';
  });
  str += '</div>';
  $( "#meals" ).html(str);
}

function openModal(event){
  console.log(event.id);
  arr = event.id.split('~');
  console.log(arr)
  id = arr[1];
  name = arr[2];
  pic = arr[3];
  console.log(event);
  $('.modal').modal();
  $('#modal1').modal('open');
  $( "h4" ).html( name );
  $( ".modal_img" ).attr("src",pic );
}