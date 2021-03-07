$(function () {
    var swiper = new Swiper('.swiper-container', {
        speed: 800,
        loop: true,

        autoplay: {
            delay: 4000,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
        },
    }); /*  swiper slide 끝 */

    $('.swiper-container .swiper-pagination').append('<a href="#" class="playBt"></a>');

    $('.swiper-container .swiper-pagination .playBt').click(function (e) {
        e.preventDefault();

        if (!$(this).hasClass('on')) {
            $(this).addClass('on');
            swiper.autoplay.stop();
        } else {
            $(this).removeClass('on');
            swiper.autoplay.start();
        }
    });

    $('.mainCon1List li').each(function (idx) {
        $(this).hover(function () { // mouseenter 와 같다.
            $('.mainCon1Bg div').eq(idx).fadeIn(600);
        }, function () { // mouseleave
            $('.mainCon1Bg div').eq(idx).fadeOut(600);
        });

        // $(this).mouseenter(function () {});
        // $(this).mouseleave(function () {});

        // $(this).on('mouseenter', function () { console.log('마우스엔터');});
        // $(this).on('mouseleave', function () {console.log('마우스리브');});

    }); /* mainCin1List li each의 끝부분 */

    //윈도우가 스크롤되면 윈도우가 얼마만큼 스코롤 됐는지 변수에 담기 ===> A -- winST
    // 윈도우 높이 구한 후 변수에 담기
    // 윈도우 높이에 일정 수를 곱하거나, 나누기를 한 값을 변수에 담기 ===> B -- wHeight2
    // winST + wHeight2 변수에 담기
    // mainCon1 ~ mainCon3의 top 위치 값 변수에 담기

    // 푸터의 위치 변수에 담기

    $(window).scroll(function () {
        var winST = $(window).scrollTop(),
            wHeight = $(window).height(),
            wHeight2 = wHeight / 2,
            mainScrollT = winST + wHeight2,
            mCon1 = $('.mainCon1').offset().top,
            mCon2 = $('.mainCon2').offset().top,
            mCon3 = $('.mainCon3').offset().top,
            ft = $('#footer').offset().top;

        console.log(winST, wHeight, wHeight2, mainScrollT);

        console.log('mainCon1 top위치,mainCon2 top위치,mainCon3 top위치');
        console.log(mCon1, mCon2, mCon3);

        // 스크롤한 값 - mainScrollT
        // mCon1의 위치값보다 크거나 같고  mainScrollT > = mCon1
        // 그리고 && 
        // mCon2의 위치값보다 작거나 같다면 mainScrollT < = mCon2


        // mCon2의 위치값보다 크거나 같고 mainScrollT > = mCon2
        // 그리고 &&
        // mCon3의 위치값보다 작거나 같다면 mainScrollT < = mCon3

        // mCon3의 위치값보다 크거나 같고 mainScrollT > = mCon3
        // 그리고 &&
        // ft의 위치값보다 작거나 같다면  mainScrollT < = ft

        $('.mainTodayArea').animate({
            'top': '0',
            'opacity': '1'
        }, 600, 'swing');

        if (mainScrollT >= mCon1 && mainScrollT <= mCon2) {
            $('.mainCon1 .mainTit').animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon1 .mainTxt').animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon1 .mainCon1List').animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');

        } else if (mainScrollT >= mCon2 && mainScrollT <= mCon3) {
            $('.mainCon2 .mainTit').animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon2 .mainTxt').animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon2 .mainCon2List').animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');

        } else if (mainScrollT >= mCon3 && mainScrollT <= ft) {
            $('.mainCon3 .mainTit').animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon3 .mainTxt').animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon3 .mainNews').animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');

        }
    });

});