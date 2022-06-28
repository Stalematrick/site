var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });


$(".toFooter").click(function() {
    var toFooter = $(".footer").offset().top;    
    $('html, body').animate({
      scrollTop: toFooter},600);
});

$(".toInf").click(function() {
    var toFooter = $(".content-wrapper").offset().top;    
    $('html, body').animate({
      scrollTop: toFooter},600);
});

$(".toMain").click(function() {
    var toFooter = $(".wrapp-img").offset().top;    
    $('html, body').animate({
      scrollTop: toFooter},600);
});


var items = $(".appear-item").length;
var n = 1;
var disTop = 400;
$(window).scroll(function() {
  if ($(window).scrollTop()>=disTop) {
    $(".appear-"+n).css({"-webkit-transform":"translateY(0)"});
    $(".appear-"+n).fadeTo(100,1);
    disTop += 50;
    n++;
  }
});


$(function() {
   $(".button-order").click(function() {
    $('.order-wrapp').css({
      display: 'block'
    });
     $('body').css({
      overflow: 'hidden'
      });
  });
});

$(function() {
$(".btn-close").click(function() {
    $('.order-wrapp').css({
      display: 'none'
    });
    $('body').css({
    overflow: 'auto'
  });
});
});

