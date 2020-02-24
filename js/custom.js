$(function(){ 

    
$('.back-top').click(function(){
$('html, body').animate({scrollTop:0},2000);
});
    
  $(window).scroll(function(){
      var scrolling = $(this).scrollTop();
      if(scrolling > 200){
          $('.back-top').fadeIn(500);
        }
      else {
        $('.back-top').fadeOut(500);
      }
      if(scrolling > 150){
        $('.menu-bg').addClass('bg');
      }
      else {
        $('.menu-bg').removeClass('bg');
      }
     }); 
    
 $(window).on('load',function(){
     $('.per-loader').delay(1000).fadeOut(1000);
 })   
   
    
   //animation scroll js
var html_body = $('html, body');
$('.menun a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 99
            }, 1500);
            return false;
        }
    }
}); 
    
    
});