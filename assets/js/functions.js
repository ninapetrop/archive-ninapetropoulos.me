$(document).ready(function(){

  // when user hovers over col-3 highlight
  $('.project').mouseenter(function(){
    $(this).addClass('highlight');
  });
  $('.project').mouseleave(function(){
    $(this).removeClass('highlight');
  });
});
