var shoppingCartList = [];
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
            listOfItems.push({"desc":value.Description,"quantity":value.Quantity, "Id":value.Id});
            shoppingCartList.push({"desc":value.Description,"quantity":value.Quantity});
          });
          updateModelItems(listOfItems);
          // updateShoppingCart(shoppingCartList);
          console.log(listOfItems);
  });
}

function updateModelItems(items){
  str = "<table class =\"striped\"><thead><tr><th>Item Name</th><th>Quantity</th></tr></thead></tbody><tbody>";
  items.forEach(function(item){
    quantity = item.quantity || "some";
    str += "<tr><td>"+item.desc+"</td><td>"+quantity+"</td></tr>";
  });
  str += "</tbody></table>";
  $( "#modal_list" ).html(str);
}

function updateShoppingCart(){
  table1 = "<table class =black-text \"responsive-table\"><thead><tr><th>Item Name</th><th>Quantity</th></tr></thead></tbody><tbody>";
  shoppingCartList.forEach(function(item){
    quantity = item.quantity;
    name = item.desc; 
    table1 += "<tr><td>"+name+"</td><td>"+quantity+"</td></tr>";
  });
  table1 += "</tbody></table>";
  document.getElementById("cart_table").innerHTML = table1;
  // $("#Shopping_Cart").html(table1);
}
