console.log("connected")

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 2100);
        return false;
      }
    }
  });
});

var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});

$('a.back-to-top').click(function() {
	$('html, body').animate({
		scrollTop: 0
	}, 700);
	return false;
});

var logo ="<div id='aboutLogo' class='animated slideInLeft'><img id='logoSlide' src='http://i1301.photobucket.com/albums/ag119/jabattack1/Screen%20Shot%202016-01-28%20at%204.47.11%20PM_zpsam2ytnos.png' id='logo_back'></div>";

function aLogo(){
	$('#aboutLogo').empty();
	setTimeout(function() {
		$('body').append(logo);
    }, 2000); 
} 