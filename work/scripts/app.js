
//search box
function goTo()
{
    location.href = document.getElementById('link_id').value;
}

// image gallery
// init the state from the input
$(".image-checkbox").each(function () {
  if ($(this).find('input[type="checkbox"]').first().attr("checked")) {
    $(this).addClass('image-checkbox-checked');
  }
  else {
    $(this).removeClass('image-checkbox-checked');
  }
});

// sync the state to the input
$(".image-checkbox").on("click", function (e) {
  $(this).toggleClass('image-checkbox-checked');
  var $checkbox = $(this).find('input[type="checkbox"]');
  $checkbox.prop("checked",!$checkbox.prop("checked"))

  e.preventDefault();
});
// Copyright 2016 Google Inc.
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//      http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


(function() {
  'use strict';

  var app = {
    isLoading: true,
    visibleCards: {},
    selectedCities: [],
    spinner: document.querySelector('.loader'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.main'),
    addDialog: document.querySelector('.dialog-container'),
  };


  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/

// <<<<<<< HEAD
  // document.getElementById('butRefresh').addEventListener('click', function() {
  //   // Refresh all of the forecasts
  //   app.updateForecasts();
  // });

  // document.getElementById('butAdd').addEventListener('click', function() {
  //   // Open/show the add new city dialog
  //   app.toggleAddDialog(true);
  // });

  // document.getElementById('butAddCity').addEventListener('click', function() {
  //   // Add the newly selected city
  //   var select = document.getElementById('selectCityToAdd');
  //   var selected = select.options[select.selectedIndex];
  //   var key = selected.value;
  //   var label = selected.textContent;
  //   if (!app.selectedCities) {
  //     app.selectedCities = [];
  //   }
  //   app.getForecast(key, label);
  //   app.selectedCities.push({key: key, label: label});
  //   app.saveSelectedCities();
  //   app.toggleAddDialog(false);
  // });

  // document.getElementById('butAddCancel').addEventListener('click', function() {
  //   // Close the add new city dialog
  //   app.toggleAddDialog(false);
  // });
// <<<<<<< HEAD
  // document.getElementById('test').addEventListener('click', getProduct);
  document.getElementById('test2').addEventListener('click', getMeals);
  document.getElementById('test3').addEventListener('click', getRecipe);
  // document.getElementById('test4').addEventListener('click', getWegmanStores);
// =======
  document.getElementById('test').addEventListener('click', getProducts);

// >>>>>>> ee11c623dc7844891439a6e65f3d7aeac7f444b9
// =======
//   // document.getElementById('butAddCancel').addEventListener('click', function() {
//   //   // Close the add new city dialog
//   //   app.toggleAddDialog(false);
//   // });
//   document.getElementById('test2').addEventListener('click', getMeals);
//   document.getElementById('test3').addEventListener('click', getRecipe);
//   document.getElementById('test').addEventListener('click', getProducts);

// >>>>>>> 076430b0007cbf593970c6e76744438e2f083bcb

  /*****************************************************************************
   *
   * Methods to update/refresh the UI
   *
   ****************************************************************************/

  // Toggles the visibility of the add new city dialog.
  app.toggleAddDialog = function(visible) {
    if (visible) {
      app.addDialog.classList.add('dialog-container--visible');
    } else {
      app.addDialog.classList.remove('dialog-container--visible');
    }
  };

})();