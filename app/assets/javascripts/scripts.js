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






var logInSensor = false;

var logIn ="<div id='logIn' class='animated slideInDown'><form><img id='closeFlap' onclick='closeLogin();return false;' src = '/assets/upup_arrow.png'><p id='usernameField'>USERNAME</p><input type='text' id='username'><br><p id='passwordField'>PASSWORD</P><input type='text' id='password'><button id='logInButton' type='button'>LOG IN</button></form><p id='forgotPW'>FORGOT PASSWORD<span><a href=''> CLICK HERE</a></span></p><p id='forgotUsername'>FORGOT USERNAME<span><a href=''> CLICK HERE</a></span></p></div>" 
var logInClose ="<div id='logIn' class='animated slideOutUp'><form><img id='closeFlap' onclick='closeLogin();return false;' src = '/assets/upup_arrow.png'><p id='usernameField'>USERNAME</p><input type='text' id='username'><br><p id='passwordField'>PASSWORD</P><input type='text' id='password'><button id='logInButton' type='button'>LOG IN</button></form><p id='forgotPW'>FORGOT PASSWORD<span><a href=''> CLICK HERE</a></span></p><p id='forgotUsername'>FORGOT USERNAME<span><a href=''> CLICK HERE</a></span></p></div>" 


var logo ="<div id='aboutLogo' class='animated slideInLeft'><img id='logoSlide' src='/assets/moimLogo.png' id='logo_back'></div>";
var logoOut ="<div id='aboutLogo' class='animated slideOutLeft'><img id='logoSlide' src='/assets/moimLogo.png' id='logo_back'></div>";
var logoChronicle ="<div id='chronicleLogo' class='animated slideInLeft'><img id='logoSlide' src='/assets/moimLogo.png' id='logo_back'></div>";
var logoOutChronicle ="<div id='chronicleLogo' class='animated slideOutLeft'><img id='logoSlide' src='/assets/moimLogo.png' id='logo_back'></div>";

var termsOf ="<div id='termsOfUse' class='animated zoomIn'><p id='termsWords'>Terms of Use<span id='close-img' class='img-span pull-right'><img id='close' class='animated zoomIn' onclick='closeTerms();return false;' src = '/assets/closeIcon.png'></span></p></div>";
var privacyPol ="<div id='privacyPolicy' class='animated zoomIn'><p id='privacyWords'>Privacy Policy<span id='close-img' class='img-span pull-right'><img id='close' class='animated zoomIn' onclick='closePrivacy();return false;' src = '/assets/closeIcon.png'></span></p></div>";
var termsOfWelcome ="<div id='termsOfUseWelcome' class='animated zoomIn'><p id='termsWords'>Terms of Use<span id='close-img' class='img-span pull-right'><img id='close' class='animated zoomIn' onclick='closeTermsWelcome();return false;' src = '/assets/closeIcon.png'></span></p></div>";
var privacyPolWelcome ="<div id='privacyPolicyWelcome' class='animated zoomIn'><p id='privacyWords'>Privacy Policy<span id='close-img' class='img-span pull-right'><img id='close' class='animated zoomIn' onclick='closePrivacyWelcome();return false;' src = '/assets/closeIcon.png'></span></p></div>";

var sensor = false;



function logInScreen(){
	$('#logIn').remove();
	console.log('boom')
	$('body').append(logIn);
	logInSensor=true;	
	console.log(logInSensor);
} 

function closeLogin(){
	if (logInSensor===false){	
		$('#logIn').remove();
		logInSensor = false;
		console.log(logInSensor);
	}
	else {
		$('#logIn').remove(); 
		$('body').append(logInClose);
		logInSensor = false;
		console.log(logInSensor);
	}
}

function aLogo(){
	$('#aboutLogo').remove();
	setTimeout(function() {
	$('body').append(logo);	
    }, 2000); 
	setTimeout(function() {
	sensor=true;	
    }, 2500);
} 

function removeLogo(){	
	if (sensor){
	$('#aboutLogo').remove();
	$('body').append(logoOut);
	sensor = false;
    }    
} 

function terms(){
	console.log('hit');	
	$('#termsOfUse').remove();
	$('#privacyPolicy').remove();
	$('body').append(termsOf);    
} 

function closeTerms(){
	console.log('hit');	
	$('#termsOfUse').remove(); 
}

function privacy(){	
	console.log('hit');	
	$('#termsOfUse').remove();
	$('#privacyPolicy').remove();
	$('body').append(privacyPol); 
} 

function closePrivacy(){
	console.log('hit');	
	$('#privacyPolicy').remove(); 
}

function termsWelcome(){
	console.log('hit');	
	$('#termsOfUseWelcome').remove();
	$('#privacyPolicyWelcome').remove();
	$('body').append(termsOfWelcome);    
} 

function closeTermsWelcome(){
	console.log('hit');	
	$('#termsOfUseWelcome').remove(); 
}

function privacyWelcome(){	
	console.log('hit');	
	$('#termsOfUseWelcome').remove();
	$('#privacyPolicyWelcome').remove();
	$('body').append(privacyPolWelcome); 
} 

function closePrivacyWelcome(){
	console.log('hit');	
	$('#privacyPolicyWelcome').remove(); 
}


