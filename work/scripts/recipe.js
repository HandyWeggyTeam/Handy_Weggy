function getRecipe(id){
  var params = {
    // Request parameters
  };
  $.ajax({
      url: "https://api.wegmans.io/meals/recipes/14224",
      beforeSend: function(xhrObj){
          // Request headers
          xhrObj.setRequestHeader("Meals-Subscription-Key","c3122eb0bf3b43249ad1e45829c8eab4");
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
            console.log(value);
            listOfItems.push({"desc":value.Description,"quantity":value.Quantity});
          });
          updateModelItems(listOfItems);
          console.log(listOfItems);
          // console.log(value);

         // incredient=value.Description;
         // console.log(incredient);
         // outputInfo +="<a href = '#' id = 'restInfo'>"+restInfo.name+"<br/>"+restInfo.location.address+"</a>";
  });
 
   // $(".restoDict").append(outputInfo);
}

function updateModelItems(items){
  str = "<table class =\"striped\"><thead><tr><th>Item Name</th><th>Quantity</th></tr></thead></tbody><tbody>";
  items.forEach(function(item){
    console.log(item);
    quantity = item.quantity || "some";
    str += "<tr><td>"+item.desc+"</td><td>"+quantity+"</td></tr>";
  });
  str += "</tbody></table>"
  $( "#modal_list" ).html(str);
}