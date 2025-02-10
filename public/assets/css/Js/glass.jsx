$(document).ready(function () {
    $("#bar").click(function () {
        $(".menu-wrapper").toggle();
    });
    $("#crrency").click(function () {
        $("#menu").slideToggle();
    });
    $("#language").click(function () {
        $("#menu-1").slideToggle();
    });
    $("#search").click(function () {
        $("#search-toggle").slideToggle();
    });
    $("#dropdown").click(function () {
        $("#dropdown-toggle").slideToggle();
    });
    if ($(".scrollTop").length > 0) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.scrollTop').fadeIn();
            } else {
                $('.scrollTop').fadeOut();
            }
        });
        $('.scrollTop').click(function () {
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
    }
    $("documnet").ready(function () {
        $(".icon").click(function () {
            var id = $(this).attr('data-id');
            $(id).slideToggle(function(){
            });
        });
    });
});
// $(document).ready(function () {
   
// });