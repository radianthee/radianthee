$(function () {
    var $header = $('.header'),
        $nav = $header.find('.nav'),
        $mn = $nav.children('ul').children('li'),
        $btnOpen = $('.header .open'),
        $btnClose = $('.header .drawer .close');

    $mn.mouseenter(function () {
        $(this).children('ul').addClass('active')
        if ($(this).hasClass('parent')) {
            $(this).addClass('on');
        }
    }); /* // $mn.mouseenter */

    $mn.mouseleave(function () {
        $(this).children('ul').removeClass('active');
        console.log($(this)); // li.parent.on
        console.log($(this).children('ul'));
        console.log($(this).hasClass('parent'));

        if ($(this).hasClass('parent')) {
            $(this).removeClass('on');
        }
    }); /* // @mn.mouseleave */

    /* 모바일 메뉴 */
    $btnOpen.click(function () {
        $('.drawer').addClass('active');
    });
    $btnClose.click(function () {
        $('.drawer').removeClass('active');
    });

    /* 메인비주얼 bxslide */
    $('.main-slide').bxSlider({
        mode: 'fade',
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
    }); /* // 메인비주얼 bxslide */
});