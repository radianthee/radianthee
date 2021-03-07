$(function () {
    $(window).scroll(function () {
        var wScrollT = $(window).scrollTop(),
            windowH = $(window).height(),
            windowH2 = windowH / 2,
            mainScroll = wScrollT + windowH,
            mainScrollT = wScrollT + windowH2,
            mCon1 = $('.mainCon1').offset().top,
            mCon2 = $('.mainCon2').offset().top,
            mCon3 = $('.mainCon3').offset().top,
            mCon4 = $('.mainCon4').offset().top,
            ft = $('#footer').offset().top;
        ftH = $("#footer").outerHeight();

        if (mainScrollT >= mCon1 && mainScrollT <= mCon2) {
            $('.mainCon1 .mainTit').animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon1 .mainTxt').delay(200).animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon1 .boxArea').delay(400).animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon1 .btnArea').delay(600).animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');

        } else if (mainScrollT >= mCon2 && mainScrollT <= mCon3) {
            $('.mainCon2 .mainTit').animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon2 .mainTxt').delay(200).animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon2 .mainCon2Roll').delay(400).animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon2 .btnArea').delay(600).animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');

        } else if (mainScrollT >= mCon3 && mainScrollT <= mCon4) {
            $('.mainCon3 .mainTit').animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon3 .mainTxt').delay(200).animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon3 .mainCon3Tab').delay(400).animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon3 .mainCon3List').delay(600).animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');

        } else if (mainScrollT >= mCon4 && mainScrollT <= ft) {
            $('.mainCon4 .mainTit').animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon4 .mainTxt').delay(200).animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon4 .mainNews').delay(400).animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
            $('.mainCon4 .mainNews .bottom').delay(600).animate({
                'top': '0',
                'opacity': '1'
            }, 600, 'swing');
        }
    });
});