$(document).ready(function() {
    $("#burgar-menu-button").addClass("d-block");
    $("#burgar-menu-button").click(function() {
        $("ul.nav").toggleClass("d-block");
    });
});

$(document).ready(function() {
    $(".nav li").click(function() {
        $("ul.nav").removeClass("d-block");
    });
});