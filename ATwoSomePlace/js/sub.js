$(function () {
    var srchico = $('.store-srch>div .srch-ico');
    srchico.click(function () {
        if ($('.store-srch>div .srch-ico').parent('div').siblings('ul').hasClass('onclick') == true) {
            $(this).parent('div').siblings('ul').removeClass('onclick').fadeOut();
            $(this).stop();
        } else {
            $(this).parent('div').siblings('ul').addClass('onclick').fadeIn();
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