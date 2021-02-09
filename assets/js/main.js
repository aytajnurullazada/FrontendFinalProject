$(document).ready(function () {
    $(window).scroll(function (e) {
        if ($(this).scrollTop() > 84) {
            $("header nav").addClass('header-fixed');
            $("#back2Top").fadeIn();
        } else {
            $("header nav").removeClass('header-fixed');
            $("#back2Top").fadeOut();
        }
    });

    
    $('.category-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    })
    
    $('.testimonial-carousel').owlCarousel({
        loop:true,
        margin: 10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })
    $('.blog-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    new WOW().init();
    
    $("#back2Top").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 'slow');
    });
});

