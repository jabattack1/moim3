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

var logo ="<div id='aboutLogo' class='animated slideInLeft'><img id='logoSlide' src='/assets/moimLogo.png' id='logo_back'></div>";
var logoOut ="<div id='aboutLogo' class='animated slideOutLeft'><img id='logoSlide' src='/assets/moimLogo.png' id='logo_back'></div>";
var sensor = false;



function aLogo(){
	$('#aboutLogo').empty();
	setTimeout(function() {
		$('body').append(logo);	
    }, 2000); 
	setTimeout(function() {
		sensor=true;	
    }, 2500);
} 

function removeLogo(){	
	if (sensor){
		console.log('true');
	$('#aboutLogo').empty();
	$('body').append(logoOut);
	sensor = false;
    }    
} 
