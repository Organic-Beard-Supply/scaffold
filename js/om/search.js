/*! components-modals.js | OM  */

/* ==========================================================================
Bulma modals implementation
========================================================================== */

$(document).ready(function($){
    
  "use strict";

  const $searchModal = $('#search-modal');

  if ($searchModal) {
    const $searchInput = $searchModal.find('input');
    
    $searchInput.on('keyup', function (e) {
      if (e.keyCode == 13) {
        if (this.value.length > 0) {
          //- add some kind of encode for search param
          window.location.href = '/search.html?' + this.value;
        }
      } else {
        if (this.value.length > 2) {
         //- mimic a search by showing a loader
         //- fade in UP so that the search input doesn't jump to top of results
         //- set height of '.search-results' + search input (or, '.modal-content') based on screen height
         $('.search-results').fadeIn();
        } else {
         $('.search-results').fadeOut();   
        }
      }
    });
  }

})