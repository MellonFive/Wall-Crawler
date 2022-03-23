$(document).ready(function () {
    $(".nav-link").on("click", function (){
        $(".nav-link").removeClass("active");
        $(this).addClass("active");
    });

    $(".hamburger").on("click", function (){
        $(this).toggleClass("active");
        $(".navbar ul").toggleClass("active");
    })
});