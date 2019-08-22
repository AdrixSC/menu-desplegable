/*$(document).ready(function () {
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
});*/

$(document).ready(main);

var contador = 1;

function main() {
    $('.boton-menu').click(function () {
        if (contador == 1) {
            $('#menu-dropdown').slideDown();
            contador = 0;
        } else {
            contador = 1;
            $('#menu-dropdown').slideUp();
        }
    });

    $('.deptos').click(function () {
        $(this).children('.subdeptos').slideToggle();
    })
}
