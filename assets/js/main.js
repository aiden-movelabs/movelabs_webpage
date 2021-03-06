/* ============= Navbar White =========*/
$(document).ready(function () {
	'use strict';

	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		if (scroll > '20') {
			$('.navbar-light').addClass('nav-white');
		} else if (scroll < '20') {
			$('.navbar-light').removeClass('nav-white');
		}
	});


});


/*========== page load animation===========*/
$('.animated').each(function () {
  $(this).appear(function () {

    var element = $(this);

    var animation = element.attr('data-animation');
    if (!element.hasClass('visible')) {
      var animationDelay = element.attr('data-animation-delay');
      setTimeout(function () {
        element.addClass(animation + ' visible');
      }, animationDelay
      );
    }
  });

});

/* ============= Page ScrollSpy =========*/
$(document).ready(function () {
	'use strict';
	
	$('.page-scroll').on('click', function (event) {
		var $anchor = $(this);
		if ($(window).width() > 768) {
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top - 65
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		} else {

			if ($(window).width() < 768) {
				$(".navbar-toggler").on('click');
				$('html, body').stop().animate({
					scrollTop: $($anchor.attr('href')).offset().top - 50
				}, 1500, 'easeInOutExpo');

				event.preventDefault();
			}
		}

	});

});
