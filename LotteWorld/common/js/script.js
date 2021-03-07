$(function () {
    var gnbMenu = $('#gnb>li'),
        lang = $('#util .lang > a'),
        srchBtn = $('#header .btnHeadSrch'),
        closeBtn = $('#header .closeBtn'),
        topBt = $('.topBtn');

    gnbMenu.mouseenter(function () {
        $(this).children('.openDiv').stop().slideDown();
    });

    gnbMenu.mouseleave(function () {
        $(this).children('.openDiv').stop().slideUp();
    });

    lang.click(function () {

        if ($(this).hasClass('on')) {
            $(this).removeClass('on');
            $(this).next().fadeOut();
        } else {
            $(this).addClass('on');
            $(this).next().fadeIn();
        }

    });
    /* 검색 */
    srchBtn.click(function () {
        $('.srchArea').fadeIn();
    });

    closeBtn.click(function () {
        $('.srchArea').fadeOut();
    });

    topBt.on(' click ', function () { // topBtn 누르면 문서 애니메이트 --> 상단이동.
        $('html,body').stop().animate({
            'scrollTop': 0
        }, 600, 'swing');
    });

    $(window).scroll(function () {
        var winScrollT = $(window).scrollTop();
        // scrollTop() 얼만큼 스크롤 되었는지 알아오는 메서드
        // console.log(winScrollT);
        if (winScrollT >= 100) { // 윈도우가 100이상 스크롤되면 .topBtn이 나타나게
            $('.topBtn ').fadeIn();
        } else { // 그렇지 않으면 .topBtn이 사라지게
            $('.topBtn ').fadeOut();
        }
    }); /* 윈도우 스크롤 */



    /* swiper */

    var swiper = new Swiper('.mainVisArea .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },

    }); /* swiper */

    /* 재생.일시정지 버른 */
    $('.imgRollArea .swiper-pagination').append('<a href="#" class="playBtn"></a>');
    $('.imgRollArea .playBtn').click(function (e) {
        e.preventDefault();

        console.log($(this).hasClass('on'));
        // on을 가지고 있는가? --> 처음에 else문으로 실행함 --> else에 정지 / addClass를 넣고
        console.log(!$(this).hasClass('on'));
        // on을 가지고있지 않은가? --> 처음에 if문으로 실행 --> if에 정지 / addClass를 넣는다.

        if ($('.imgRollArea .playBtn').hasClass('on') == true) {
            swiper.autoplay.start();
            $(this).removeClass('on');

        } else {
            swiper.autoplay.stop();
            $(this).addClass('on');

        }
    });

    /* 어트랙션 tab */

    var tabMenu = $('.mainCon3Tab ul li'),
        tabCon = $('.tabConWrap .mainCon3List');

    tabMenu.click(function (e) {
        e.preventDefault();
        var tc = $(this).children('a').attr('data-tc');
        console.log(tc);

        tabCon.hide();
        $('#' + tc).show();

        tabMenu.children('a').removeClass('on');
        $(this).children('a').addClass('on');
    });

    /* 퍼레이드 */
    var swiper = new Swiper('.mainCon2Roll .swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 22,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });


}); /* jquery */