AOS.init({
    duration: 1200 //aos 나타나는 속도
});

// 위에 탭메뉴
$(function () {
    $('.tabcontent1 > div').hide();
    $('.tabnav1 a').click(function () {
        $('.tabcontent1 > div').hide().filter(this.hash).fadeIn();
        $('.tabnav1 a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});


// 탭메뉴
$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});


// 스와이프
var swiper = new Swiper('.slide ', {
    effect: "fade",
    speed: 3000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복

    pagination: {//블릿 버튼
        el: '.slide .swiper-pagination',
        clickable: true,
    },
});


// 상품 스와이프
var swiper = new Swiper('.gallery .gallery_inner ', {
    slidesPerView: 3,//보여지는 갤러리 수
    spaceBetween: 60,//갤러리 사이 간격
    speed: 1500,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 2500,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
 
    pagination: {//블릿 버튼
        el: ".swiper-pagination",
        type: "progressbar",
    },
});