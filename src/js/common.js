/* Preloader */
$(window).on('load', function () {
    let preloader = $('.preloader');
    let preloaderItem = preloader.find('.preloader-item');
    preloaderItem.fadeOut();
    preloader.delay(350).fadeOut('slow');
});
/*END Preloader */

document.addEventListener("DOMContentLoaded", function (event) {

    let windowWidth;
    /* Menu */
    $('.nav').on('click', function () {
        $(this).toggleClass('active');
    });
    /*END Menu */

    /* Top slider */
    $('.top-slider').on(`init reInit`, function (event, slick) {
        $('.counter').text(1 + ' / ' + slick.slideCount);
    });
    $('.top-slider').on(`afterChange`, function (event, slick, currentSlide, nextSlide) {
        $('.counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
    });

    $('.top-slider').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        asNavFor: '.top-slider',
        dots: false,
        prevArrow: $('.insert-prev'),
        nextArrow: $('.insert-next'),
        lazyLoad: true
    });
    /*END Top slider */

    /* News slider */
    $('.news-slider').slick({
        vertical: true,
        infinite: true,
        arrows: false,
        dots: false,
        draggable: false,
        slidesToShow: 3,
        speed: 1500,
        autoplay: true,
        autoplaySpeed: 3500
    });
    /*END News slider */

    /* y-timeline */
    $(window).resize(function () {
       autoHeight();
    });
    autoHeight();
    /*END y-timeline */

    /* Scroll button */
    $(window).on('scroll', function(){
        scrollBtn();
    });

    let btnScrollTop = $('.scroll-button');

    function scrollBtn(){
        let bodyScroll = $('html, body').scrollTop();
        if(bodyScroll > 300) {
            $(btnScrollTop).addClass('active');
        } else {
            $(btnScrollTop).removeClass('active');
        }
    }
    $(btnScrollTop).on('click', function(){
        $('html, body').animate({
            scrollTop: 0
        }, 600);
    });
    scrollBtn();
    /*END Scroll button */

    /* Portfolio fansybox */
    $('.fancybox').fancybox();
    /*END Portfolio fansybox */

    /* Contacts validation */
    /*let ajaxFormSubmit = function (form, event) {
        let string = $(form).serialize();
        $.ajax({
            type: "POST",
            data: string,
            success: function (html) {
                $(".contacts form").html(html).css({
                    'color':'#a8bfa8',
                    'text-align': 'center'
                });
            },
            error: function () {
                $(".contacts form").html('Ошибка !');
            }
        });
        return false;
    };*/

    $('.contacts form').validate({
        rules: {
            user_name: {
                required: true,
                minlength: 2,
                maxlength: 12
            },
            user_email: {
                required: true,
                email: true
            },
        },
        messages: {
            user_name: {
                required: 'Enter your name',
                minlength: 'Name cannot be less than two characters.',
                maxlength: 'Name length not more than twelve characters'
            },
            user_email: {
                required: 'Enter email',
                email: 'Enter the correct email'
            },
        },
        focusCleanup: false,
        focusInvalid: true,
        // submitHandler: ajaxFormSubmit
    });

    /*END Contacts validation */

    $('.contacts').elemHeight();
});