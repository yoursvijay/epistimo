//$(document).ready(function () {
//	$(".content-box").hide();
//	$(".contorol").click(function () {
//		$(this).next(".content-box").slideToggle().siblings(".content-box").slideUp();
// 	});
//});
//    $("#menu").hide();
//    $("#students").click(function(){
//        $("#menu").slideToggle("2000");
//        $("#students").toggleClass("toggle");
//    });
    var stickyOffset = $('#header').offset().top;
    $(window).scroll(function(){
      var sticky = $('#header'),
          scroll = $(window).scrollTop();
      if (scroll >= stickyOffset) sticky.addClass('fixed-top shadow');
      else sticky.removeClass('fixed-top shadow');
    });
    var bannerOffset = $('#header').offset().top;
    $(window).scroll(function(){
      var banner = $('#banner'),
          scroll = $(window).scrollTop();
      if (scroll >= bannerOffset) banner.addClass('mt-71');
      else banner.removeClass('mt-71');
    });
    var carouselOffset = $('#header').offset().top;
    $(window).scroll(function(){
      var carousel = $('#carouselExampleIndicators'),
          scroll = $(window).scrollTop();
      if (scroll >= carouselOffset) carousel.addClass('mt-71');
      else carousel.removeClass('mt-71');
    });
    $("#header_menu").hide();
    $("#header_students").click(function(){
        $("#header_menu").slideToggle("2000");
    }); 