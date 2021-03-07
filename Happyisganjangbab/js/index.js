$(function () {
    var oneBt = $('#header #gnb > li'),
        dep2 = $('#header #gnb > li > .dep2'),
        dep2Bg = $('#header .dep2Bg'),
        gnbNum = -1;
    oneBt.each(function (i) {
        oneBt.mouseenter(function () {
            gnbNum = i;
            dep2Bg.fadeIn(300);
            $(this).stop().eq(gnbNum).children('.dep2').fadeIn(300, function () {
                $(this).stop().siblings('a').addClass('active');
            });
        });
        oneBt.mouseleave(function () {
            gnbNum = i;
            dep2Bg.fadeOut(300);
            $(this).stop().eq(gnbNum).children('.dep2').fadeOut(300, function () {
                $(this).stop().siblings('a').removeClass('active');
            });
        });
        var swiper0 = new Swiper('.main-visual .swiper-container', {
            slidesPerView: 1,
            loop: true,
            centeredSlides: true,
            pagination: {
                el: '.main-visual .swiper-pagination',
            },
            navigation: {
                nextEl: '.main-visual .swiper-button-next',
                prevEl: '.main-visual .swiper-button-prev',
            },
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
        });
        var swiper2 = new Swiper('.con_2 .swiper-container', {
            slidesPerView: 4,
            spaceBetween: 30,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            scrollbar: {
                el: '.con_2 .swiper-scrollbar',
                hide: true,
            },
        });
        var swiper2 = new Swiper('.con_3 .swiper-container', {
            slidesPerView: 1,
            loop: true,
            centeredSlides: true,
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
        });
    }); /* each */
}); /* ready */