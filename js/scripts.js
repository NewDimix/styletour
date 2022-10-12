$(function () {
    $('.carousel').carousel({
        interval: 3000
    })

    $(".search").on("click", function () {
        $(".menu-carousel .menuMain .navbar-inverse .main-menu-bg .navbar-form").slideToggle();
    })

    $('#elastislide').elastislide();
});
