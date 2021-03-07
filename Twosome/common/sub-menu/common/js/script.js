$(function(){
    var $list = $("#con_wrap .container .list_product"),
        $listbt = $list.children("li"),
        $detail = $listbt.children(".detail"),
        gnbNum = -1;

    $listbt.each(function(i){      
        $listbt.on('click',function(e){
            gnbNum = i;
            e.preventDefault();
            $(this).eq(gnbNum).children(".detail").toggle();
        });
    });
});