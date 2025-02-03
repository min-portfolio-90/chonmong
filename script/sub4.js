AOS.init({
    duration: 1200 //aos 나타나는 속도
});

// 흘러가는 배너
$(function () {
    // 기본
    $("#scroller").simplyScroll({
        speed: 2,
    });

    // 기본 반대
    $("#scroller2").simplyScroll({
        speed: 2,
        direction:'backwards',
    });

});

// 
$(function () {
    $('.box2 li').hover(function () {
        $(this).siblings().toggleClass('box2on');
    });
});