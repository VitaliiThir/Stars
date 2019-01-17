function autoHeight(h) {
    let windowWidth = $(window).width();
    h = '.auto-height';
    let elemWidth = $(h).width();
    $(h).css('height', elemWidth + 'px');
}