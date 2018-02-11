function getRecipe(id){
  var params = {
    // Request parameters
  };
  $.ajax({
      url: "https://api.wegmans.io/meals/recipes/14224",
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Meals-Subscription-Key","3c42e0a1f50740bb9a3ee9bb2a8b0be7");
      },
      type: "GET",
      // Request body
      data: "{body}",
    })
    .done(function(data) {
        getItems(data);
    })
    .fail(function() {
        alert("error");
    });
}
function getItems(data){
  var outputInfo="";
  var listOfItems = [];              
  incredients = data.RecipeIngredient;
  //Gets each restaurant and displays it on the interface
  $.each(incredients, function(key, value){
          eachIncredient = value 
          $.each(eachIncredient, function(key, value){
            // console.log(value.Description);
            listOfItems.push(value.Description);
          });
          return listOfItems;
          // console.log(value);

         // incredient=value.Description;
         // console.log(incredient);
         // outputInfo +="<a href = '#' id = 'restInfo'>"+restInfo.name+"<br/>"+restInfo.location.address+"</a>";
  });
 
   // $(".restoDict").append(outputInfo);
}