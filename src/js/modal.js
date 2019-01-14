function popUp(elem) {
    let contentParent;
    contentParent = $(elem).parent();
    let popUp = $('.popup');
    let popupItem = $('<div class="popup-item"><div class="popup-close"><span>+</span></div></div>');
    $(popUp).append(popupItem);
    $(popupItem).append(elem);
    $('.my-modal').css('display', 'block');
    $(popUp).fadeIn(300);
    $(popUp).css({
        'display': '-webkit-flex',
        'display': '-moz-flex',
        'display': '-ms-flex',
        'display': '-o-flex',
        'display': 'flex'
    });

    $('body').on('click', '.popup-close', function () {
        $(popUp).fadeOut(200);
        $('.my-modal').css('display', 'none');
        $(contentParent).append(elem);
        $(popupItem).remove();
    });
    $(document).mouseup(function (e) {
        if (!$(elem).is(e.target) && $(elem).has(e.target).length === 0) {
            $(popUp).fadeOut(200);
            $('.my-modal').css('display', 'none');
            $(contentParent).append(elem);
            $(popupItem).remove();
        }
    });
}