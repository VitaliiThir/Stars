/* Preloader */
$(window).on('load', function () {
    let preloader = $('.preloader');
    let preloaderItem = preloader.find('.preloader-item');
    preloaderItem.fadeOut();
    preloader.delay(350).fadeOut('slow');
});
/*END Preloader */

document.addEventListener("DOMContentLoaded", function (event) {

    $('.nav').on('click', function () {
       $(this).toggleClass('active');
    });

    $('.top-slider').on(`init reInit`, function(event, slick) {
        $('.counter').text(1 + ' / ' + slick.slideCount);
    })
    $('.top-slider').on(`afterChange`, function(event, slick, currentSlide, nextSlide) {
        $('.counter').text(currentSlide + 1 + ' / ' + slick.slideCount);
    })

    $('.top-slider').slick({
        infinite: true,
        slidesToShow: 1,
        asNavFor: '.top-slider',
        dots: false
    });

});
