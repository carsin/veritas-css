/* TODO: License and name
 * ----------[ Table of Contents ]----------
 *  > 1. Navbar
* ----------------------------------------- */

/* -----------[ 1. Navbar ]---------- */

$(document).ready(function() {
    $(".mobile-toggle").click(function() {
        $(".mobile-toggle").toggleClass("toggled");
        $("body").toggleClass("no-scroll");
        $(".nav-items").toggleClass("nav-appear");
        $(".nav").toggleClass("toggled");
    });
  
    $(".nav.toggled .nav-items a").click(function() {
        $(".mobile-toggle").toggleClass("toggled");
        $("body").toggleClass("no-scroll");
        $(".nav-items").toggleClass("nav-appear");
        $(".nav").toggleClass("toggled");
    });
});
