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
       timeLineHeight('.auto-height');
    });
    function timeLineHeight(objHeight) {
        windowWidth = $(window).width();
        let timeLine = $(objHeight);
        let timeLineWidth = $(timeLine).width();
        $(timeLine).css('height', timeLineWidth + 'px');
    }
    timeLineHeight('.auto-height');
    /*END y-timeline */

});
