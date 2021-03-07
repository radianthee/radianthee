$(function () {
    var srchico = $('.store-srch>div .srch-ico');
    srchico.click(function () {
        if ($('.store-srch>div .srch-ico').parent('div').siblings('ul').hasClass('active') == true) {
            $(this).parent('div').siblings('ul').removeClass('active').fadeOut();
            $(this).stop();
        } else {
            $(this).parent('div').siblings('ul').addClass('active').fadeIn();
            $(this).stop()
        }
    });
    $('.store-map .kakao-map .store-srch .stre-wrap li').mouseenter(function () {
        $(this).addClass('here');
    });
    $('.store-map .kakao-map .store-srch .stre-wrap li').mouseleave(function () {
        $(this).removeClass('here');
    });

});