$(function () {
    /* 로그인영역 */
    $('#loginForm').submit(function () {
        if ($('#userId').val() == '') {
            $('.emailMsg').css('opacity', '1').html('<em>이메일 형태로 입력 해주세요.</em>');
        } else {
            $('.emailMsg').css('opacity', '0').text('');
        }
        if ($('#userPw').val() == '') {
            $('.pwMsg').css('opacity', '1').html('<em>비밀번호를 입력 해주세요.</em>');
        } else if ($('#userPw').val().length < 8) {
            $('.pwMsg').css('opacity', '1').html('<em>비밀번호를 8자 이상 입력 해주세요.</em>');
        } else {
            $('.pwMsg').css('opacity', '0').text('');
        }
        return false;
    }); /* // loginForm */
    /* join_agree */
    $('#agreeAll').click(function () {
        chkAll();
    });

    function chkAll() {
        var checked = $('#agreeAll').is(':checked');
        if (checked) {
            $('input[type=checkbox]').prop('checked', true);
        } else {
            $('input[type=checkbox]').prop('checked', false);
        }
    } /* // join_agree */
    /* join */
    $('.bow input').click(function () {
        $(this).parent().prev().hide();
    });
    $('#joinForm').submit(function () {
        if ($('#useId').val() == '') {
            $('.idMsg').css({
                'opacity': '1'
            }).html('<em>아이디를 입력하세요</em>');
        } else {
            $('.idMsg').css({
                'opacity': '0'
            }).text('');
        }
        if ($('#usePw').val() == '') {
            $('.pwMsg').css({
                'opacity': '1'
            }).html('<em>비밀번호를 입력하세요</em>');
        } else if ($('#usePw').val().length < 8) {
            $('.pwMsg').css({
                'opacity': '1'
            }).html('<em>비밀번호를 8자 이상 입력하세요.</em>');
        } else {
            $('.pwMsg').css({
                'opacity': '0'
            }).text('');
        }
        if ($('#usePw').val() != $('#usePw2').val()) {
            $('.pwMsg2').css({
                'opacity': '1'
            }).html('<em>비밀번호가 일치하지 않습니다.</em>');
        } else {
            $('.pwMsg2').css({
                'opacity': '0'
            }).text('');
        }
        if (('.maillAgree input[type=radio]:checked')) {
            $('.emailMsg').css({
                'opacity': '1'
            }).html('<em>수신여부를 체크 해주세요.</em>');
        } else {
            $('.emailMsg').css({
                'opacity': '0'
            }).text('');
        }
        return false;
    }); /* // join */
});