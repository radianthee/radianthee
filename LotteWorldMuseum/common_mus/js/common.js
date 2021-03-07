$(function () {
    var topBt = $('.topBtn');
    /* gnb */
    $('.gnb>li , #header .gnbBg').on('mouseenter', function () {
        $('.twoD').stop().fadeIn();
        $('.gnbBg').stop().slideDown();
    });

    $('.gnb>li , #header .gnbBg').on('mouseleave', function () {
        $('.twoD').stop().fadeOut();
        $('.gnbBg').stop().slideUp();
    });

    /* top버튼 */

    $('.topBtn ').on(' click ', function () { // topBtn 누르면 문서 애니메이트 --> 상단이동.
        $('html,body').animate({
            'scrollTop': 0
        }, 600);
    });
    /* gnb 모바일 */
    var isMgnb = false;

    $('.menuBtn').on('click', function () {
        if (isMgnb == false) {
            $('.mMenuArea').animate({
                'left': '0'
            }, 300, 'swing');
            isMgnb = true;
        }
    });

    $('.closeBt').on('click', function () {
        if (isMgnb == true) {
            $('.mMenuArea').animate({
                'left': '-100%'
            }, 300, 'swing');
            isMgnb = false;
        }
    })

    /* 모바일 서브메뉴 */
    var oneBt = $('.mMenuArea .gnbArea > ul > li > .oneBt'),
        twoDep = $('.mMenuArea .gnbArea > ul > li > .twoD'),
        thrBt = $('.mMenuArea .gnbArea .twoD > ul > li > .thrBt'),
        thrD = $('.mMenuArea .gnbArea .twoD .thrD');

    oneBt.on('click', function () {
        $(this).parent().addClass('on');
        $(this).parent().siblings().removeClass('on');

        twoDep.slideUp();

        /* $(this).siblings('.twoD').is(':hidden');
        console.log('클릭한 a.oneD의 형제는 안 보이는가?');
        console.log($(this).siblings('.twoD').is(':hidden'));

        console.log('클릭한 a.oneD의 형제는 보이는가?');
        console.log($(this).siblings('.twoD').is(':visible'));

        console.log('클릭한 a.oneD의 형제는 보이지 않지!!??');
        console.log(!$(this).siblings('.twoD').is(':visible'));

        console.log('클릭한 a.oneD의 형제인 twoD의 css의 display의 속성 값이 none이니?');
        console.log($(this).siblings('.twoD').css('display') == 'none')

        console.log('클릭한 a.oneD의 부모요소는 on클래스를 가지고있니?');
        console.log($(this).parent().hasClass('on'))

        console.log('클릭한 a.oneD의 부모요소는 on클래스를 안 가지고있니?');
        console.log(!$(this).parent().hasClass('on'))  */
        if (!$(this).siblings('.twoD').is(':visible')) {
            $(this).siblings().slideDown();
        }
    });

    thrBt.on('click', function () {
        $(this).toggleClass('on');
        $(this).next().slideToggle();
    });



    // 윈도우가 스크롤되면, 윈도우가 100이상 스크롤 되면 / 그렇지 않으면
    // topBtn을 클릭하면 문서 애니메이트
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

});