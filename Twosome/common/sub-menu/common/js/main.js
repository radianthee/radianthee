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
        $('.top-bt').click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 400);
            return false;
        });

        var swiper = new Swiper('.swiper-container', {
            centeredSlides: true,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                hide: true,
            },
        });
    });
});