(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.materialboxed').materialbox();

  });
})(jQuery); 

$(document).ready(function(){
  $('.fixed-action-btn').floatingActionButton();
});

$(document).ready(function () {
    $('.slider').slider({
      indicators: true
    });
  });

  $(document).ready(function(){
    $('.scrollspy').scrollSpy();
    $('.parallax').parallax();
  });