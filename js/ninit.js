(function($){
  $(function(){
    $('.parallax').parallax();
    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();
    $('.collapsible').collapsible();
    $('.tabs').tabs({swipeable:true});
    $('.carousel').carousel();
    $('.modal').modal();





  });
})(jQuery); 

 

$(document).ready(function () {
    $('.slider').slider({
      indicators: false,
      swipeable:true
    });
  });

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });