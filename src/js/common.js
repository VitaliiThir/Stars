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
       $('.auto-height').autoHeight();
    });
    $('.auto-height').autoHeight();
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
    $('[data-fancybox="actor"]').fancybox({
        loop: true,                    /*Бесконечная прокрутка галереи*/
        protect: false,                 /*Разрешить/Запретить скачивать кликом по фото*/
        opacity: true,                  /*Скорость появления/угасания прозрачности элементов*/
        margin: [44, 0],                /*Отступы вокруг картинок (Игнорируется, если ширина окна менее 800px)*/
        gutter: 30,                     /*Горизонтальный отступ между слайдами*/
        modal: false,                   /*Ярлык, чтобы сделать контент «модальным» - отключить навигацию с клавиатуры, скрыть кнопки и т.д.*/
        animationEffect: "zoom-in-out",        /*Открыть/закрыть - тип анимации*/
        animationDuration: 400,         /*Продолжительность в мс для анимации открытия/закрытия*/
        defaultType: "image",           /*Тип содержимого по умолчанию, если не может быть обнаружен автоматически*/
        zoomOpacity: "auto",            /*Изменить прозрачность при масштабировании*/
        slideShow: {
            autoStart: false,
            speed: 2000
        },
        fullScreen : true,
        transitionEffect: "circular",   /*Эффект перехода между слайдами*/
        transitionDuration: 800,        /*Продолжительность в мс для анимации перехода*/
        buttons : [                     /*Какие кнопки должны появиться в правом верхнем углу.*/
            "zoom",                     /*Кнопка увеличения*/
            "slideShow",                /*Авто-слайдер*/
            "fullScreen",               /*Во весь экран*/
            "download",                 /*Скачать*/
            "close",                     /*Закрыть*/
            "share",                    /*Поделиться*/
            "thumbs"                    /*Миниатюры фото справа*/
        ],
        idleTime: 3,                    /*Определить время простоя в секундах*/
        hideScrollbar: true,            /*Скрыть скролл прокрутки браузера*/
        wheel: "auto",                  /*Используйте колесо мыши для навигации по галерее*/
        closeBtn: true,
        toolbar: 'auto',                /*Панель инструментов (кнопки вверху)*/
        smallBtn: 'auto',               /*Маленькая кнопочка "закрыть" в верхнем правом углу каждого фото*/
        image: {                        /*Подождите, пока изображения загрузятся перед отображением*/
            preload: false
        },
    });
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

    $('.main-page .contacts').elemHeight();
});