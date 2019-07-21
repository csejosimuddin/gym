
// Custom js INDEX Table

// 01.Closes responsive menu when a scroll link is clicked
// 02.preloader js
// 03.slider-banner js
// 04.venobox js
// 05.team slider
// 06.counter up js
// 07.featured class-slide 
// 08.Test for placeholder support
// 09.Hide labels by default if placeholders are supported
// 10.Code for adding/removing classes here
// 11.Cache our selectors
// 12.sticky nav
// 13.back to top section
// 14.animation scroll js click a smoth scroll button a click a
// 15.header top click effect


(function ($) {

    'use strict';
    var windo = $(window);

    // Closes responsive menu when a scroll link is clicked
    $('.nav-link').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });

    //preloader js
    $(window).on('load', function () {
        $("#preloader").delay(1000).fadeOut(1000);
    });


 //slider-banner js
    $('.slider-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        dots: true,
        arrows: true,
        prevArrow: '.angle-left',
        nextArrow: '.angle-right',
        autoplaySpeed: 2000,
    });

    //venobox js
    $('.venobox').venobox();






    //team slider    
    $('.trainer-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        infinite: false,
        dots: true,
        arrows: true,
        prevArrow: '.trainers-left',
        nextArrow: '.trainers-right',
        speed: 1000,
        autoplaySpeed: 500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
    },
            {
                breakpoint: 575.99,
                settings: {
                    slidesToShow: 1,
                }
    }
  ]
    });

    // counter up js
    $('.counter').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });



    //featured class-slide    
    $('.featured ').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        infinite: false,
        dots: true,
        arrows: true,
        prevArrow: '.feature-left',
        nextArrow: '.feature-right',
        speed: 1000,
        autoplaySpeed: 500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
                     },
                         {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 1,
                    }
                    },
                      {
                breakpoint: 575.99,
                settings: {
                    slidesToShow: 1,
                     }
                    }
                    ]
                 });








    // Test for placeholder support
    $.support.placeholder = (function () {
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if ($.support.placeholder) {
        $('.form-label').each(function () {
            $(this).addClass('js-hide-label');
        });

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function (e) {

            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            switch (e.type) {
                case 'keyup':
                    {
                        $parent.toggleClass('js-hide-label', $this.val() == '');
                    }
                    break;
                case 'blur':
                    {
                        if ($this.val() == '') {
                            $parent.addClass('js-hide-label');
                        } else {
                            $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                        }
                    }
                    break;
                case 'focus':
                    {
                        if ($this.val() !== '') {
                            $parent.removeClass('js-unhighlight-label');
                        }
                    }
                    break;
                default:
                    break;
            }

        });
    }

    // sticky nav
    /*----------------------------
       START - Menubar scroll animation
       ------------------------------ */
    jQuery(window).on('scroll', function () {
        if ($(this).scrollTop() > 500) {
            $('.header-bottom').addClass("sticky");
        } else {
            $('.header-bottom').removeClass("sticky");
        }

    });




    //    back to top section

    var html_body = $('html, body');
    var back2top = $(".back-to-top");
    back2top.click(function () {
        html_body.animate({
            scrollTop: 0
        }, 1000);
    });



    //animation scroll js click a smoth scroll button a click a
    var html_body = $('html, body');
    $('.navbar a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 100
                }, 1500);
                return false;
            }
        }
    });




    // header top click effect


    $(document).ready(function () {
        $(".toggle-icon").click(function () {
            $(".header-top-toggle").toggle(400);
        });
    });







})(jQuery);