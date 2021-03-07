$(function () {
    $("#gnb>li").mouseenter(function () {
        $(this).addClass("on");
        $(this).parents("#header").addClass("on");
        $(this).children(".openDiv")
            .css({
                "display": "block",
                "visibility": "visible",
                "overflow": "visible"
            }, openDivShow());

        function openDivShow() {
            $(".openDiv").animate({
                "opacity": "1",
                "height": "200px"
            }, 300);
        }
    });
    $("#gnb>li").mouseleave(function () {
        $(this).removeClass("on");
        $(this).parents("#header").removeClass("on");
        $(this).children(".openDiv").animate({
            "opacity": "0",
            "height": "0"
        }, 300, function () {
            $(this).css({
                "display": "none",
                "visibility": "hidden",
                "overflow": "hidden"
            });
        });
    });
    /* swiper slide */
    var swiper = new Swiper('#main-slide .swiper-container', {
        centeredSlides: true,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '#main-slide .swiper-button-next',
            prevEl: '#main-slide .swiper-button-prev',
        },
        pagination: {
            el: '#main-slide .swiper-pagination',
        },
    });
});