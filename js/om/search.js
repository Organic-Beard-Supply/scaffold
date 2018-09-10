/*! search.js | OM  */

/* ==========================================================================
Search implementation
========================================================================== */

const parseQueryString = function() {
  let str = window.location.search,
      objURL = {};

  str.replace(
      new RegExp( "([^?=&]+)(=([^&]*))?", "g" ),
      function( $0, $1, $2, $3 ){
          objURL[ $1 ] = $3;
      }
  );
  return objURL;
};

const $searchInput = $('#search-input');

const setSearchVal = function(value) {
  let params = parseQueryString(),
      val = value || params && decodeURIComponent(params.q);
  
  if (val && typeof val != 'undefined' && val !='undefined') {
    $searchInput.val(val);
    $searchInput.focus();
  }
}

$(document).ready(function($){
    
  "use strict";

  const $searchModal = $('#search-modal'),
        location = window.location,
        isSearchPage = !!location.pathname.includes('search');

  if (isSearchPage) { setSearchVal(); }

  if ($searchModal) {
    const $searchModuleInput = $searchModal.find('input');
    
    $searchModuleInput.on('keyup', function (e) {
      if (e.keyCode == 13) {
        if (this.value.length > 0) {
          // if (isSearchPage) {
          //   setSearchVal(this.value);
          // } else {
            //- add some kind of encode for search param
            window.location.href = '/search.html?q=' + encodeURIComponent(this.value);
          // }
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

  if ($searchInput) {
    const $searchResults = $('#featured-blog-articles'),
          $pagination = $('#article-pagination');
    $searchInput.on('keyup', _.debounce(function (e) {
      if (this.value.length > 2) {
        $pagination.hide();
        $searchResults.fadeOut(400, () => {
          setTimeout(()=> {
            $searchResults.fadeIn();
            $pagination.show();
          }, 300);
        });
      }
    }, 500))
  }
  
})