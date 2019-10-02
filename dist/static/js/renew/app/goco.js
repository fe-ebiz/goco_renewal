// faq gnb슬라이드 탭
$(function(){
  var tab_2 = new Swiper('.slide_tab', {
      slidesPerView: 'auto',
      freeMode: true
  });
})

// faq 아코디언
$(document).on("click",".accordion .trigger",function(){
  var my_trigger = $(this);
  var my_panel = $(this).siblings(".panel");
  var my_list_item = $(this).siblings(".list_item_title");

  var accordion_group = $(this).parents('.accordion'); //해당 아코디언 그룹

  if( my_trigger.hasClass('active') ){  //열려있을 때
    //해당 슬리아드 비활성화
    my_panel.stop().slideUp();
    my_trigger.removeClass('active');
  } else {  //닫혀있을 때
    accordion_group.find('.panel').stop().slideUp();
    accordion_group.find('.trigger').removeClass('active');


    //해당 슬라이드 활성화
    my_panel.stop().slideDown();
    my_trigger.addClass('active');
    my_list_item.addClass('active')
  }
});
