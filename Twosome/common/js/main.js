$(function () {
    var dep1 = $('#header .wrapper #gnb > li'),
        dep2 = $('#header .wrapper #gnb > li > .dep2'),
        gnbNum = -1;
    dep1.each(function (i) {
        dep1.mouseenter(function () {
            gnbNum = i;
            $(this).stop().eq(gnbNum).children('.dep2').fadeIn(300, function () {
                $(this).stop().siblings('a').addClass('active');
            });
        });
        dep1.mouseleave(function () {
            gnbNum = i;
            $(this).stop().eq(gnbNum).children('.dep2').fadeOut(300, function () {
                $(this).stop().siblings('a').removeClass('active');
            });
        });



    });
    var swiper = new Swiper('.mainVisual .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        loopAdditionalSlides: 1,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.mainVisual .swiper-pagination',
            clickable: true,
        },
    });
    $('.top-bt').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 400);
        return false;
    });
    var swiper = new Swiper('.menu1', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.nxt1',
            prevEl: '.prv1',
        },
    });
    var swiper = new Swiper('.menu2', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 20,
        navigation: {
            nextEl: '.nxt2',
            prevEl: '.prv2',
        },
    });
});