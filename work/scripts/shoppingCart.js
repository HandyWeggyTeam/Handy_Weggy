str = "<table><thead><tr><th>Item Name</th>Item Price</th><></tr></thead></tbody><tbody>";
 items.forEach(function(item){
   console.log(item);
   str += "<tr><td>"+item+"</td><td>$0.87</td></tr>";
 });
 str += "</tbody></table>"
 $( "#modal_list" ).html(str);