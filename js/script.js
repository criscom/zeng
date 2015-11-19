/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($) {

/* START: SMARTMENUS */

    // initialise smartmenus for main menu
    // $('#main-menu').smartmenus();

/* END: SMARTMENUS */

/* START: ISOTOPE */

    // add btn class to isotope filter lists for all views
    $(document).ready(function() {
        // if(jQuery('body').hasClass('.page-projekte')) {
            $('ul.isotope-filters li>a').addClass('isotope-button'); // add a class to the button links
    
            /* START: Isotope settings for the "Busreisen" view let's set the filter to "Busreisen" and assign the class "selected" to the "Busreisen" button */
            // Pre-select second option "Busreisen" in option sets.
    
    
            $('.view-display-id-default .isotope-options .option-set li:first-child a').removeClass('selected');
            $('.view-display-id-default .isotope-options .option-set li:nth-child(2) a').addClass('selected');
            // for the Busreisen view set the initial filter to "Busreisen"
            $('.view-display-id-page #isotope-container').isotope({
            // options...
            filter: '.umfassende-sanierungen'
            }); 
            $('.view-display-id-default .isotope-options .option-set li:first-child').hide(); // Hides "Alle" filter
        // }


/* END: Isotope settings for the "Busreisen" view */

/* END: ISOTOPE */
    });
})(jQuery);


