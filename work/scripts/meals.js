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

function getQueriedMeal(){
  meal = $("#search_meal").val();
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
      filtered_meals = data.results.filter(function(value){
        console.log(value.name)
        let item = (value.name).toLowerCase();
        return item.indexOf(meal) !== -1;
      })
      updateMeals();
    })
    .fail(function() {
        alert("error");
    });
}

function updateMeals(){
  
}