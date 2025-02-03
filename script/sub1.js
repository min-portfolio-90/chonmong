AOS.init({
    duration: 1200 //aos 나타나는 속도
});

$(function(){
    $('.warp3 input[type="button"]').click(function(){
        $(this).toggleClass('on').siblings('input').removeClass('on');
    });
});