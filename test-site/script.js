$("#typography-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#typography").offset().top - (($(window).height() / 100) * 7)
    }, 500);
});

$("#grid-link").click(function() {
    $('html, body').animate({
        scrollTop: $("#grid").offset().top - (($(window).height() / 100) * 7)
    }, 500);
});
