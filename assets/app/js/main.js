/**
 * Title:
 *    Main Javascript
 * Description:
 *    The main Javascript file where you will write the bulk
 *    of your scripts. Make sure to include this just before
 *    the closing </body> tag.
 * Sections:
 *    $. Your Scripts
 *    $. Grunticon Loader
 */



/* $. Your Scripts - To go within the SIAF (Self invoking annonymous function)
\*----------------------------------------------------------------*/

(function($) {

    /**
     * Setup 'CustomSelect' plugin on all Select elements
     */
    // if(!$('html').hasClass('ie')) {
    //     $("select").each(function() {
    //         new CustomSelect($(this));
    //     });
    // }

    /**
     * Set variable to pool DOM only once.
     */
    var html = $('html');
    var body = $('body');
    var toggleNav = $('.toggle__icon--nav');


    /**
     * Toggle the navigation
     */
    $('.js-toggle-nav').on('click', function() {
        // 1. Toggle the Nav
        body.toggleClass('is-active-nav');

        // 2. Toggle Icons to show whether Nav is active or not
        toggleNav.toggleClass('icon--menu-open').toggleClass('icon--menu-close');
    });


    /**
     * Toggle the filter area
     */
    $('.js-toggle-form').on('click', function() {
        // 1. Toggle the filter area on and off
        body.toggleClass('is-active-form');
    });


    /**
     * Slick stuff
     */
    $('.slider-for').slick({
        autoplay: false,
        arrows: false,
        mobileFirst: true,
        draggable: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.slider-nav',
        variableWidth: true
    });

    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        centerMode: true,
        focusOnSelect: true
    });

})(jQuery);



/* $. Grunticon Load
\*----------------------------------------------------------------*/

grunticon([ "/assets/dist/grunticon/icons.data.svg.css", "/assets/dist/grunticon/icons.data.png.css", "/assets/dist/grunticon/icons.fallback.css" ]);
