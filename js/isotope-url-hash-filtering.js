function getHashFilter() {
  var hash = location.hash;
  // get filter=filterName
  var matches = location.hash.match( /filter=([^&]+)/i );
  var hashFilter = matches && matches[1];
  return hashFilter && decodeURIComponent( hashFilter );
}

jQuery( function() {

  var $container = jQuery('.isotope');

  // bind filter button click

  var isIsotopeInit = false;

  function onHashchange() {
    var hashFilter = getHashFilter();
    if ( !hashFilter && isIsotopeInit ) {
      return;
    }
    isIsotopeInit = true;

    $container.isotope('destroy');

    // filter isotope
    jQuery('.view-display-id-page #isotope-container').isotope({ // also throwing an error
      itemSelector: '.isotope-element',
      filter: hashFilter
    });
    // set selected class on button
    if ( hashFilter ) {
      console.log(hashFilter);
      jQuery('.filterbutton').removeClass('selected');
      jQuery('.filterbutton[data-option-value="' + hashFilter + '"]').addClass('selected');
    }
  }

  jQuery(window).on( 'hashchange', onHashchange );
  // trigger event handler to init Isotope
  onHashchange();
});