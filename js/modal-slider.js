$(document).ready(function () {
    function modal_update() {
        // $('.js-card-2').slick('resize');
        // $('.js-card-1').slick('resize');
        modalSlider1.slick('resize');
        modalSlider2.slick('resize');

    }
    var modalSlider1 = $('.js-card-1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        // arrows: false,
        // fade: true,
        // dots: true,
        asNavFor: '.js-card-2'
    });
    var modalSlider2 = $('.js-card-2').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.js-card-1',
        // centerMode: true,
        // focusOnSelect: true
    });
    // $('.js-card-2').slick('resize');
    // $('.js-card-1').slick('resize');
    $(".red-btn.redbtn.nav__phone-btn.orange-btn").on("click", function(){
        modal_update()
    });
});