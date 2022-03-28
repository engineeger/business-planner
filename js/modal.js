$(document).ready(function($) {
    $('.popup-open').click(function() {
        document.body.style.overflow = "hidden";
        $('.popup-fade').fadeIn();
        return false;

    });

    $('.popup-close').click(function() {
        document.body.style.overflow = "";
        $(this).parents('.popup-fade').fadeOut();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            document.body.style.overflow = "";
            e.stopPropagation();
            $('.popup-fade').fadeOut();
        }
    });

    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            document.body.style.overflow = "";
            $(this).fadeOut();
        }
    });


    $('.popup-open3').click(function() {
        document.body.style.overflow = "hidden";
        $('.popup-fade3').fadeIn();
        return false;

    });

    $('.popup-close3').click(function() {
        document.body.style.overflow = "";
        $(this).parents('.popup-fade3').fadeOut();
        return false;
    });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            document.body.style.overflow = "";
            e.stopPropagation();
            $('.popup-fade3').fadeOut();
        }
    });

    $('.popup-fade3').click(function(e) {
        if ($(e.target).closest('.popup3').length == 0) {
            document.body.style.overflow = "";
            $(this).fadeOut();
        }
    });
});