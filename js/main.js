$(document).ready(function(){
    //fullpage
    $('#fullpage').fullpage({
		anchors:['intro','profile','web','edit','contact'],
        sectionsColor:['#F7F6F2','#fff9f4','#F7F6F2','#C8C6C6','#F7F6F2'],
        menu:"#myMenu",
        // 현재 섹션이 나타난 후 (활성화 된 후, 열린 후)
        //anchorLink는 fullpage에서 사용하는 앵커 연결하라는 매개변수
        afterLoad:function(anchorLink,index){
            $('.intro .intro_txt h1').removeClass('active');
            // 만약 활성화된 ssection이 두번째 section이면
            if(index==1){
                $('.intro .intro_txt h1').addClass('active');
            }else if (index==2) {
                //자식객체 애니메이션
                $('.profile h1').addClass('active');
                $('.profile .box > div').addClass('active');
            }else if (index==3) {
                // 자식객체
                $('.web h1').addClass('active');
                $('.web .swiper').addClass('active');
            }else if (index==4) {
                $('.edit h1').addClass('active');
                $('.edit .gallery').addClass('active');
            }else{
                 // 자식객체
                 $('.contact h1').addClass('active');
                 $('.contact .contact_wrap').addClass('active');
            }
        }
	});
    // skill bar
    jQuery('.skillbar').each(function(){
        jQuery(this).find('.skillbar-bar').animate({
            width:jQuery(this).attr('data-percent')
        },3000);
    });
    // swiper slide
    var swiper = new Swiper('.swiper', {
        loop : true,
        // Navigation arrows
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
  }
    });
    //editorial gallery 
    // $('.big_img ul li').hide();
    // $('.big_img ul li').eq(0).show();
    // $('.thum_img ul li').click(function(){
    //     var idx=$(this).index();
    //     $('.big_img ul li').hide();
    //     $('.big_img ul li').eq(idx).fadeIn();


    $('.thum_img ul li a').click(function(){
        // 클릭한 a태그의 href 속성값을 imgref 변수에 저장
        var imgHref=$(this).attr('href');
        //popup_img 영역의 콘텐츠 지우기
        $('.popup_img').empty(); 
        //popup_img 영역에 자식객체로 img 태그를 추가시킴
        $('.popup_img').append('<img src="'+imgHref+'">')  ;
        // popup영역 슬라이드 다운
        $('.popup').slideDown();
        return false;  
    });
    $('.popup_close').click(function(){
        // popup영역 슬라이드 업
        $('.popup').slideUp();
    });
});