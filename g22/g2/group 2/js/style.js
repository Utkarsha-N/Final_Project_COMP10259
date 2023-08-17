$(document).ready(function() {
  var header = $('.header');

  $(window).scroll(function() {
  var scrolled = $(window).scrollTop();
  if (scrolled > 0) {
    header.addClass('fixed');
  } else {
    header.removeClass('fixed');
  }
  });
});
    $('.gallery-images').slick({
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
    });
    $('.lightbox .close-button').click(function() {
        $('.lightbox').hide();
      });
    
      // Close the lightbox when clicking anywhere outside it
      $(document).mouseup(function(e) {
        var lightbox = $('.lightbox');
        if (!lightbox.is(e.target) && lightbox.has(e.target).length === 0) {
          lightbox.hide();
        }
      });
  