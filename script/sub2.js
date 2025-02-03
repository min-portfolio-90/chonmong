AOS.init({
    duration: 1200 //aos 나타나는 속도
});

// 프로그램 스와이프
var swiper = new Swiper('.gallery-center_inner ', {
    slidesPerView: 3,//보여지는 갤러리 수
    spaceBetween: 150,//갤러리 사이 간격
    centeredSlides: true,//센터모드
    speed: 1000,//버튼을 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 2000,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
    
    pagination: {//블릿 버튼
        el: ".swiper-pagination",
        type: "progressbar",
    },
});


// 내용2
var swiper = new Swiper('.slide ', {
    effect: "fade",
    speed: 2000,//버튼 눌렀을 때 슬라이드가 넘어가는 시간
    autoplay: {
        delay: 1000,//자동으로 넘어가기 전 머무르는 시간
        disableOnInteraction: false,
    },
    loop: true,//슬라이드 무한반복
  
    pagination: {//블릿 버튼
        el: '.slide1 .swiper-pagination',
        clickable: true,
    },
});




// 탭
$(function () {
    $('.tabcontent > div').hide();
    $('.tabnav a').click(function () {
        $('.tabcontent > div').hide().filter(this.hash).fadeIn();
        $('.tabnav a').removeClass('active');
        $(this).addClass('active');
        return false;
    }).filter(':eq(0)').click();
});

//Q&A
$(function () {
    $(".q_a li").click(function () {
        $(this).children("div").slideToggle()
        $(this).siblings().children("div").slideUp();
        $(this).toggleClass("on").siblings().removeClass("on")
    });
});