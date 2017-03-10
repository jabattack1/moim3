var termsOf ="<div id='termsOfUse' class='animated zoomIn'><p id='termsWords'>Terms of Use<span id='close-img' class='img-span pull-right'><img id='close' class='animated zoomIn' onclick='closeTerms();return false;' src = '/assets/closeIcon.png'></span></p></div>";
var privacyPol ="<div id='privacyPolicy'><span id='close-img' class='img-span pull-right'><img id='close' onclick='closePrivacy();return false;' src = '/assets/closeIcon.png'></span><p id='privacyWords'>Privacy Policy</p></div>";
var termsOfWelcome ="<div id='termsOfUseWelcome'><p id='termsWords'>Terms of Use<span id='close-img' class='img-span pull-right'><img id='close' onclick='closeTermsWelcome();return false;' src = '/assets/closeIcon.png'></span></p></div>";
var privacyPolWelcome ="<div id='privacyPolicyWelcome'><p id='privacyWords'>Privacy Policy<span id='close-img' class='img-span pull-right'><img id='close' onclick='closePrivacyWelcome();return false;' src = '/assets/closeIcon.png'></span></p></div>";
var contactUsWelcome ="<div id='contactWelcome'><p id='privacyWords'>Contact Us<span id='close-img' class='img-span pull-right'><img id='close' onclick='closeContactWelcome();return false;' src = '/assets/closeIcon.png'></span></p></div>";


$(window).load(function() {

$('body').append(termsOfWelcome); 
$('#termsOfUseWelcome').hide();
$('body').append(privacyPolWelcome); 
$('#privacyPolicyWelcome').hide();

});


function termsWelcome(){	
  $('#termsOfUseWelcome').fadeIn( 500 );    
} 

function privacyWelcome(){		
 	$('#privacyPolicyWelcome').fadeIn( 500 );
} 


function closePrivacyWelcome(){	
	$('#privacyPolicyWelcome').hide(); 
}


function closeTermsWelcome(){	
	$('#termsOfUseWelcome').hide(); 
}

