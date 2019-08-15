$(document).ready(function () {
    $('.boton-menu').mouseover(function () {
        $('#menu-dropdown').addClass('show');
        if ($('#menu-dropdown').hasClass('show')) {
            $('#menu1').mouseover(function () {
                $('#submenu1').addClass('show');
            })
        }
    });
});
