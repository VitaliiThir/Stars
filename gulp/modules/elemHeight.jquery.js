(function ($) {

    /* Выравнивание длины элементов*/
    $.fn.elemHeight = function () {
        let currentHeight;
        let talLestElem = 0;

        this.css('height', '');
        this.each(function () {
            currentHeight = $(this).height();
            if (currentHeight > talLestElem) {
                talLestElem = currentHeight;
            }
        });
        this.height(talLestElem);
    };

})(jQuery);