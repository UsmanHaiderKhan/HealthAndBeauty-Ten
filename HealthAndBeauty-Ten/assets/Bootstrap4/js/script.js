
/*================== Read More Text ==================*/
$(function () {
    var showChar = 550;
    var moretext = "Read More";
    var lesstext = "Read Less";
    $('.comments-space').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span>' +
                hide_content +
                '</span>' +

                '<a href="" class="morelink btn-me btn-read-more mt-30 mb-3 link-style " style="display:block;">' +
                moretext +
                '</a>' + '</span>';;

            $(this).html(html);
        }
    });

    $(".morelink").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
$(function () {
    var showChar = 180;
    var moretext = "Read More +";
    var lesstext = "Read Less -";
    $('.comments-spaces').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span>' +
                hide_content +
                '</span>' +

                '<a href="" class="morelinks read-text mt-15 mb-3 link-style" style="display:block;">' +
                moretext +
                '</a>' + '</span>';;

            $(this).html(html);
        }
    });

    $(".morelinks").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
$(function () {
    var showChar = 160;
    var moretext = "Read More +";
    var lesstext = "Read Less -";
    $('.comments-spacess').each(function () {
        var content = $(this).html();
        if (content.length > showChar) {
            var show_content = content.substr(0, showChar);
            var hide_content = content.substr(showChar, content.length - showChar);
            var html = show_content +
                '<span class="remaining-contents"><span>' +
                hide_content +
                '</span>' +

                '<a href="" class="morelinkss read-text mt-15 link-style " style="display:block;">' +
                moretext +
                '</a>' + '</span>';;

            $(this).html(html);
        }
    });

    $(".morelinkss").click(function () {

        if ($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;
    });
});
/*===================== Smooth Scrolling ======================*/
$(function () {
    $('a').smoothScroll();
});
/*======================= Nav Active Class =======================*/
$(function () {
    $('.nav-item').on('click',
        function () {
            $('.nav-item').removeClass('active');
            $(this).addClass('active');
        });
});
$(function () {
    $('#work .btn-filter').on('click',
        function () {
            $('.btn-filter').removeClass('active-bg');
            $(this).addClass('active-bg');
        });
});
/*===================== Load More Images ======================*/
$(document).ready(function () {

    $('.loadMore').loadMoreResults({
        displayedItems: 8,
        showItems: 4
    });


});
/*===================== Owl Carousel Slider ======================*/
//Init the carousel
$(function () {
    var loru = $('#owl-one');
    loru.owlCarousel({
        loop: false,
        margin: 20,
        dots: false,
        nav: false,
        slideBy: 4,
        item: 4,
        navText: ["<img src='assets/Images/icon.png'  class='img-margin-prev'> ", "<img src='assets/Images/icon.png'  class='img-margin-next'> "],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: false,
                nav: false,
            },
            400: {
                items: 1,
                dots: false,
                nav: false,
            },
            600: {
                items: 2,
                dots: false,
                nav: false,
            },
            768: {
                items: 3,
                dots: false,
                nav: false,
            },
            830: {
                items: 4,
                dots: false,
                nav: false,
            },
            1000: {
                items: 4,
                dots: false,
                nav: false,
            }
        }
    });

    $('.customNextBtn').click(function () {
        loru.trigger('next.owl.carousel');
    });

    $('.customPrevBtn').click(function () {

        loru.trigger('prev.owl.carousel', [300]);
    });
});
$(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        dots: true,
        nav: false,
        slideBy: 1,
        item: 1,

        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                dots: true,
                nav: false,
            },
            400: {
                items: 1,
                dots: true,
                nav: false,
            },
            600: {
                items: 1,
                dots: true,
                nav: false
            },
            768: {
                items: 1,
                dots: true,
                nav: false,
            },
            830: {
                items: 1,
                dots: true,
                nav: false,
            },
            1000: {
                items: 1,
                dots: true,
                nav: false,
            }
        }
    });
});
/*===================== Scroll Top Function Script ======================*/
$(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= 100) {
            $("nav").addClass("");

        } else {
            $("nav").removeClass("");


        }


    });
});
/*===================== Another Load More Script ======================*/
$(function () {
    $(".no-display").slice(0, 8).show();
    $("#load-more").on('click', function (e) {
        e.preventDefault();
        $(".no-display:hidden").slice(0, 4).slideDown();
        if ($(".no-display:hidden").length == 0) {
            $("#load-more").fadeOut('slow');
            $(".service-load-border").fadeOut('slow');


        }
        $('html,body').animate({
            scrollTop: $(this).offset().center
        }, 1500);
    });
});

$(function () {
    $(".display-hidden").slice(0, 8).show();
    $("#load-me").on('click', function (e) {
        e.preventDefault();
        $(".display-hidden:hidden").slice(0, 4).slideDown();
        if ($(".display-hidden:hidden").length == 0) {
            $("#load-me").fadeOut('slow');
            $(".team-load-border").fadeOut('slow');

        }
        $('html,body').animate({
            scrollTop: $(this).offset().center
        }, 1500);
    });
});
//kjshfkjshsahkjdsahdjks

$(function () {

});
