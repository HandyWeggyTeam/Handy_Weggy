function getMeals(meal){
  var params = {
    // Request parameters
  };
  $.ajax({
      url: "https://api.wegmans.io/meals/recipes",
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Meals-Subscription-Key","3c42e0a1f50740bb9a3ee9bb2a8b0be7");
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
         return listOfmeals;  

    })
    .fail(function() {
        alert("error");
    });
}