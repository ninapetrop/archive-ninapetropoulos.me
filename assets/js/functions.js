$(document).ready(function(){

  // Mobile Navigation
  $('.mobile-nav-toggle').click(function(){

    $('.slideNav-container').toggleClass('reveal');
    $('.wrap').toggleClass('reveal');

  });

  // when user hovers over col-3 highlight
  $('.project').mouseenter(function(){
    $(this).addClass('highlight');
  });
  $('.project').mouseleave(function(){
    $(this).removeClass('highlight');
  });
});
