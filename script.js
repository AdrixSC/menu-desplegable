$(document).ready(function () {
    $('.boton-menu').hover(function () {
        $('#menu-dropdown').slideDown();
        $('ul li:has(ul)').hover(function (e) {
            $(this).find('ul').css({ display: "block" });
        },
            function (e) {
                $(this).find('ul').css({ display: "none" });
            });
    });
    $("*:not(.boton-menu, #menu-dropdown)").on("click", function () {
        if ($("#menu-dropdown").is(":visible")) {
            $("#menu-dropdown").slideUp();
        }
    });
});
