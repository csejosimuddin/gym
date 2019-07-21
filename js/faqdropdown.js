jQuery('document').ready(function($){
  $('.faq-header').click(function(){
    if ($(this).parent(".faq-dropdown").hasClass("open2")) {
      $(this).parent(".faq-dropdown").removeClass("open2");
      $(this).siblings(".faq-content").slideUp(500);
    } else {
      $(".faq-dropdown").removeClass("open2");
      $(".faq-dropdown .faq-content").slideUp(500);
      $(this).parent(".faq-dropdown").addClass("open2");
      $(this).siblings(".faq-content").slideDown(500);
    }
  })
});