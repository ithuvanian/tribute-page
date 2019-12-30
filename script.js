$(document).ready(function () {

  $(window).on('scroll', function() {
    var scrolled = $(window).scrollTop();

    $('.quote').css('top', 0 - (scrolled * 2) + 'px');
    $('.title').css('top', 0 + (scrolled * 1.5) + 'px');
    $('.lamppost').css('top', 0 + (scrolled * 0.35) + 'px');
  });

  $('.downArrow').on('click', function() {
    $('html, body').animate({
      scrollTop: ( $('.frameB').position().top ) - 20
    }, 700);
  });


});
