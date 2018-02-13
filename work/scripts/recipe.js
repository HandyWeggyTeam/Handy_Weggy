var shoppingCartList = [];
function getRecipe(id){
  var params = {
    // Request parameters
  };
  $.ajax({
      url: "https://api.wegmans.io/meals/recipes/" + id,
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
            console.log(value)
            price = getPriceBySKUandStore(value.Id, 62, value);
            aisle = getAisle(value.Id, 62, value);
            quantity = value.Quantity || "unknown";
            price = price || "unknown";
            aisle = aisle || "unknown";
            listOfItems.push({"desc":value.Description,"quantity": quantity, "Id":value.Id, "price": price});
            shoppingCartList.push({"desc":value.Description,"aisle":aisle, "quantity":quantity, "Id":value.Id, "price": price});
          });
          updateModelItems(listOfItems);
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
  FindStoreNearMe();
  table1 = "<table class =\"black-text striped \"responsive-table\"><thead><tr><th>Item Name</th><th>Aisle</th><th>Quantity</th><th>Price</th></tr></thead></tbody><tbody>";
  shoppingCartList.forEach(function(item){
    quantity = item.quantity;
    name = item.desc; 
    price = item.price;
    aisle = item.aisle;
    console.log(item)
    table1 += "<tr><td>"+name+"</td><td>"+aisle+"</td><td>"+quantity+"</td><td>"+price+"</td></tr>";
  });
  table1 += "</tbody></table>";
  document.getElementById("cart_table").innerHTML = table1;
}

function viewCart(){
  $("#modal1").css("display", "none");
  $(".filter_images").css("display", "none");
  $("#meals").css("display", "none");
  $("#cart_table").css("display", "block");
  $("#store_table").css("display", "none");
}
