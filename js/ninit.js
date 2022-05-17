(function($){
  $(function(){
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.collapsible').collapsible();
    $('.tabs').tabs({swipeable:true});



  });
})(jQuery); 

 

$(document).ready(function () {
    $('.slider').slider({
      indicators: false
    });
  });

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });