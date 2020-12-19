$(function(){
  $('.nav-button').click(function(){
    $(this).toggleClass('on');

    if($(this).hasClass('on')){
      $('.nav-sp-show').addClass('open');
      $('.nav-sp-show').removeClass('close');
      } else {
      $('.nav-sp-show').removeClass('open');
      $('.nav-sp-show').addClass('close');
      }
    });


  
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200){
        $('.nav').addClass('background-color');
      } 
      else {
          $('.nav').removeClass('background-color');
        }

        return false;
      });
    });