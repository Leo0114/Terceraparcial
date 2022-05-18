(function ($) {
  $(function () {
    $(".parallax").parallax();
    $(".sidenav").sidenav();
    $(".materialboxed").materialbox();
    $(".collapsible").collapsible();
    $(".tabs").tabs({ swipeable: true });
    $(".carousel").carousel();
    $(".modal").modal();
    $('.gallery-expand').galleryExpand('close');

  });
})(jQuery);

$(document).ready(function () {
  $(".slider").slider({
    indicators: true,
  });
  $(document).ready(function () {
    $(".fixed-action-btn").floatingActionButton({ hoverEnabled: false });
  });
});

$(document).ready(function () {
  $(".scrollspy").scrollSpy();
});


var $masonry = $('.gallery');
$masonry.masonry({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.gallery-item',
  // use element for option
  columnWidth: '.gallery-item',
  // no transitions
  transitionDuration: 0
});

// layout Masonry after each image loads
$masonry.imagesLoaded(function() {
  $masonry.masonry('layout');
});