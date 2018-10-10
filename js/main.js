(function ($) {
    'use strict';

//PRELOADER JS
    setTimeout(function () {
        $('body').addClass('loaded');
        $('h1').css('color', '#222222');
    }, 3000);


//MEAN MENU JS

    $('#mobile-menu-active').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: '.mobile-menu-here'

    });

    //   Owl-CAROUSEL-SLIDER JS

    $('.slider-content').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        nav: false,
        dots: false,
        items: 1

    });

//    Owl-CAROUSEL-PARTNERSHIP JS

    $('.partnership-active').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        smartSpeed: 1000,
        dots: false,
        // breakpoint from 480 up
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 2,
            },
            600: {
                items: 2,
            },
            900: {
                items: 3,
            },
            1000: {
                items: 4,
            },
            1400: {
                items: 4,
            },
        }
    });


//MIXIT UP JS

    var containerEl = document.querySelector('.containers');

    var mixer = mixitup(containerEl);
    $('.controls-button').on('click', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });




//    SHRINK NAV JS

    var shrinkHeader = 1;
    $(window).scroll(function () {
        var scroll = getCurrentScroll();
        if (scroll >= shrinkHeader) {
            $('.header-area').addClass('shrink');
        } else {
            $('.header-area').removeClass('shrink');
        }
    });
    function getCurrentScroll() {
        return window.pageYOffset;
    }

//COUNTER JS

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

//    SMOTH SCROLL JS

    $(".smooth a").bind('click', function (event) {
        $(this).parent().addClass('active').siblings().removeClass('active');
        var $anchor = $(this);
        var headerH = '0';

        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
        }, 1000, 'easeOutExpo');
        event.preventDefault();

    });


// scroll-up-jquiry-plugin-start

    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        scrollDistance: 0, // Distance from top/bottom before showing element (px)
        scrollFrom: 'top', // 'top' or 'bottom'
        scrollSpeed: 2000, // Speed back to top (ms)
        easingType: 'linear', // Scroll to top easing (see http://easings.net/)
        animation: 'fade', // Fade, slide, none
        animationSpeed: 200, // Animation speed (ms)
        scrollTrigger: false, // Set a custom triggering element. Can be an HTML string or jQuery object
        scrollTarget: false, // Set a custom target element for scrolling to. Can be element or number
        scrollText: '<i class="ti-arrow-up"></i>', // Text for element, can contain HTML
        scrollTitle: false, // Set a custom <a> title if required.
        scrollImg: false, // Set true to use image
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
        zIndex: 2147483647 // Z-Index for the overlay
    });
    
//SCROLL-SPY JS
    $('#dreamer').scrollspy();


})(jQuery);