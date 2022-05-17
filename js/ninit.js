(function ($) {
  $(function () {
    $(".parallax").parallax();
    $(".sidenav").sidenav();
    $(".materialboxed").materialbox();
    $(".collapsible").collapsible();
    $(".tabs").tabs({ swipeable: true });
    $(".carousel").carousel();
    $(".modal").modal();
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
