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

function emailInfo(){
window.location.href = "mailto:info@moimnewyork.com";
}


// ****slides***

function leaders(){
  $('#teamMainSlide').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(leaderIn);
  $('#megaTeam').hide();
  }, 501);
  setTimeout(function() {
  $('#megaTeam').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function leadershipOut(){
  $('#megaTeam').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeam').remove();
  $('#teamMainSlide').show( "slide", { direction: "left" }, 500 );
}, 502);
}

function leaderSlideFunction1(){
  $('#leaderSlide1').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#megaTeam').append(leaderIn1);
  $('#leaderSlide2').hide();
  }, 501);
  setTimeout(function() {
  $('#leaderSlide2').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function leaderSlideFunction2(){
  $('#leaderSlide2').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#leaderSlide1').show( "slide", { direction: "left" }, 500 );
}, 502);
}


// ******event***

function events(){
  $('#teamMainSlide').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(eventsIn);
  $('#megaTeam').hide();
  }, 501);
  setTimeout(function() {
  $('#megaTeam').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function eventsOut(){
  $('#megaTeam').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeam').remove();
  $('#teamMainSlide').show( "slide", { direction: "left" }, 500 );
}, 502);
}

function eventsSlideFunction1(){
  $('#eventsSlide1').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#megaTeam').append(eventsIn1);
  $('#eventsSlide2').hide();
  }, 501);
  setTimeout(function() {
  $('#eventsSlide2').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function eventsSlideFunction2(){
  $('#eventsSlide2').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#eventsSlide1').show( "slide", { direction: "left" }, 500 );
}, 502);
}


// ******creative***

function creative(){
  $('#teamMainSlide').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(creativeIn);
  $('#megaTeam').hide();
  }, 501);
  setTimeout(function() {
  $('#megaTeam').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function creativeOut(){
  $('#megaTeam').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {

  $('#megaTeam').remove();
  $('#teamMainSlide').show( "slide", { direction: "left" }, 500 );
}, 502);
}

function creativeOut2(){
  $('#creativeSlide3').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#megaTeam').append(creativeIn4);
  $('#creativeSlide2').hide();
  }, 501);
  setTimeout(function() {
  $('#creativeSlide2').show( "slide", { direction: "left" }, 500 );
}, 502);
}


function creativeSlideFunction1(){
  $('#creativeSlide1').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#megaTeam').append(creativeIn1);
  $('#creativeSlide2').hide();
  }, 501);
  setTimeout(function() {
  $('#creativeSlide2').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function creativeSlideFunction3(){
  $('#creativeSlide2').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#megaTeam').append(creativeIn3);
  $('#creativeSlide3').hide();
  }, 501);
  setTimeout(function() {
  $('#creativeSlide3').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function creativeSlideFunction2(){
  $('#creativeSlide2').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#creativeSlide1').show( "slide", { direction: "left" }, 500 );
}, 502);
}
// *****

// ******pr***

function pr(){
  $('#teamMainSlide').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(prIn);
  $('#megaTeam').hide();
  }, 501);
  setTimeout(function() {
  $('#megaTeam').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function prOut(){
  $('#megaTeam').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeam').remove();
  $('#teamMainSlide').show( "slide", { direction: "left" }, 500 );
}, 502);
}

function prSlideFunction1(){
  $('#prSlide1').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#megaTeam').append(prIn1);
  $('#prSlide2').hide();
  }, 501);
  setTimeout(function() {
  $('#prSlide2').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function prSlideFunction2(){
  $('#prSlide2').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#prSlide1').show( "slide", { direction: "left" }, 500 );
}, 502);
}
// *****

// ******soar***

function soar(){
  $('#teamMainSlide').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(soarIn);
  $('#megaTeam').hide();
  }, 501);
  setTimeout(function() {
  $('#megaTeam').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function soarOut(){
  $('#megaTeam').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeam').remove();
  $('#teamMainSlide').show( "slide", { direction: "left" }, 500 );
}, 502);
}

function soarSlideFunction1(){
  $('#soarSlide1').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#megaTeam').append(soarIn1);
  $('#soarSlide2').hide();
  }, 501);
  setTimeout(function() {
  $('#soarSlide2').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function soarSlideFunction2(){
  $('#soarSlide2').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#soarSlide1').show( "slide", { direction: "left" }, 500 );
}, 502);
}
// *****

// ******it***

function it(){
  $('#teamMainSlide').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(itIn);
  $('#megaTeam').hide();
  }, 501);
  setTimeout(function() {
  $('#megaTeam').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function itOut(){
  $('#megaTeam').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeam').remove();
  $('#teamMainSlide').show( "slide", { direction: "left" }, 500 );
}, 502);
}

function itSlideFunction1(){
  $('#itSlide1').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#megaTeam').append(itIn1);
  $('#itSlide2').hide();
  }, 501);
  setTimeout(function() {
  $('#itSlide2').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function itSlideFunction2(){
  $('#itSlide2').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#itSlide1').show( "slide", { direction: "left" }, 500 );
}, 502);
}
// *****

// ******advisory***

function advisory(){
  $('#teamMainSlide').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(advisoryIn);
  $('#megaTeam').hide();
  }, 501);
  setTimeout(function() {
  $('#megaTeam').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function advisoryOut(){
  $('#megaTeam').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeam').remove();
  $('#teamMainSlide').show( "slide", { direction: "left" }, 500 );
}, 502);
}

function advisorySlideFunction1(){
  $('#advisorySlide1').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#megaTeam').append(advisoryIn1);
  $('#advisorySlide2').hide();
  }, 501);
  setTimeout(function() {
  $('#advisorySlide2').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function advisorySlideFunction2(){
  $('#advisorySlide2').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#advisorySlide1').show( "slide", { direction: "left" }, 500 );
}, 502);
}
// *****

// ******contributors***

function contributors(){
  $('#teamMainSlide').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(contributorsIn);
  $('#megaTeam').hide();
  }, 501);
  setTimeout(function() {
  $('#megaTeam').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function contributorsOut(){
  $('#megaTeam').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {

  $('#megaTeam').remove();
  $('#teamMainSlide').show( "slide", { direction: "left" }, 500 );
}, 502);
}

function contributorsOut2(){
  $('#contributorsSlide3').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#megaTeam').append(contributorsIn4);
  $('#contributorsSlide2').hide();
  }, 501);
  setTimeout(function() {
  $('#contributorsSlide2').show( "slide", { direction: "left" }, 500 );
}, 502);
}


function contributorsSlideFunction1(){
  $('#contributorsSlide1').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#megaTeam').append(contributorsIn1);
  $('#contributorsSlide2').hide();
  }, 501);
  setTimeout(function() {
  $('#contributorsSlide2').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function contributorsSlideFunction3(){
  $('#contributorsSlide2').hide( "slide", { direction: "left"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#megaTeam').append(contributorsIn3);
  $('#contributorsSlide3').hide();
  }, 501);
  setTimeout(function() {
  $('#contributorsSlide3').show( "slide", { direction: "right" }, 500 );
}, 502);
}

function contributorsSlideFunction2(){
  $('#contributorsSlide2').hide( "slide", { direction: "right"  }, 500 );
  setTimeout(function() {
  $('#megaTeamA').remove();
  $('#contributorsSlide1').show( "slide", { direction: "left" }, 500 );
}, 502);
}
// *****

// ***yeong***

function showProfileYeong(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(YeongIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showYeong(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(YeongIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioYeong(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(YeongBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAYeong(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(YeongQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutYeong(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***DK***

function showProfileDK(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(DKIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showDK(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(DKIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioDK(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(DKBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQADK(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(DKQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutDK(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Annie***

function showProfileAnnie(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(AnnieIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showAnnie(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AnnieIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioAnnie(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AnnieBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAAnnie(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AnnieQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutAnnie(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Eun***

function showProfileEun(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(EunIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showEun(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(EunIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioEun(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(EunBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAEun(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(EunQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutEun(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Sarah***

function showProfileSarah(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(SarahIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showSarah(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SarahIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioSarah(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SarahBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQASarah(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SarahQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutSarah(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Ryan***

function showProfileRyan(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(RyanIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showRyan(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(RyanIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioRyan(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(RyanBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQARyan(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(RyanQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutRyan(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Brent***

function showProfileBrent(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(BrentIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showBrent(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(BrentIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioBrent(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(BrentBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQABrent(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(BrentQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutBrent(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Amy***

function showProfileAmy(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(AmyIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showAmy(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AmyIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioAmy(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AmyBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAAmy(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AmyQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutAmy(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****


// ***Sungjun***

function showProfileSungjun(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(SungjunIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showSungjun(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SungjunIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioSungjun(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SungjunBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQASungjun(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SungjunQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutSungjun(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Dodo***

function showProfiledodo(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(dodoIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showdodo(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(dodoIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBiododo(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(dodoBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAdodo(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(dodoQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutdodo(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Charlotte***

function showProfileCharlotte(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(CharlotteIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showCharlotte(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(CharlotteIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioCharlotte(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(CharlotteBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQACharlotte(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(CharlotteQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutCharlotte(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Henry***

function showProfileHenry(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(HenryIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showHenry(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(HenryIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioHenry(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(HenryBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAHenry(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(HenryQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutHenry(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Hanna***

function showProfileHanna(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(HannaIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showHanna(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(HannaIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioHanna(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(HannaBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAHanna(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(HannaQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutHanna(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Minji***

function showProfileMinji(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(MinjiIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showMinji(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(MinjiIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioMinji(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(MinjiBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAMinji(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(MinjiQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutMinji(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Esther***

function showProfileEsther(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(EstherIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showEsther(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(EstherIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioEsther(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(EstherBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAEsther(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(EstherQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutEsther(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Alison***

function showProfileAlison(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(AlisonIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showAlison(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AlisonIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioAlison(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AlisonBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAAlison(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AlisonQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutAlison(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***YooSun***

function showProfileYooSun(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(YooSunIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showYooSun(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(YooSunIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioYooSun(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(YooSunBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAYooSun(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(YooSunQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutYooSun(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Katie***

function showProfileKatie(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(KatieIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showKatie(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(KatieIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioKatie(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(KatieBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAKatie(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(KatieQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutKatie(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Nah***

function showProfileNah(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(NahIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showNah(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(NahIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioNah(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(NahBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQANah(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(NahQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutNah(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Larry***

function showProfileLarry(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(LarryIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showLarry(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(LarryIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioLarry(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(LarryBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQALarry(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(LarryQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutLarry(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Peter***

function showProfilePeter(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(PeterIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showPeter(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(PeterIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioPeter(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(PeterBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAPeter(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(PeterQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutPeter(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Junho***

function showProfileJunho(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(JunhoIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showJunho(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JunhoIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioJunho(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JunhoBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAJunho(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JunhoQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutJunho(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Sung***

function showProfileSung(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(SungIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showSung(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SungIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioSung(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SungBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQASung(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SungQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutSung(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***JeongSeok***

function showProfileJeongSeok(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(JeongSeokIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showJeongSeok(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JeongSeokIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioJeongSeok(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JeongSeokBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAJeongSeok(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JeongSeokQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutJeongSeok(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Richard***

function showProfileRichard(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(RichardIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showRichard(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(RichardIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioRichard(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(RichardBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQARichard(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(RichardQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutRichard(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Angie***

function showProfileAngie(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(AngieIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showAngie(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AngieIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioAngie(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AngieBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAAngie(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AngieQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutAngie(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***HyoBee***

function showProfileHyoBee(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(HyoBeeIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showHyoBee(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(HyoBeeIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioHyoBee(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(HyoBeeBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAHyoBee(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(HyoBeeQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutHyoBee(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Sam***

function showProfileSam(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(SamIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showSam(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SamIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioSam(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SamBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQASam(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SamQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutSam(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Bella***

function showProfileBella(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(BellaIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showBella(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(BellaIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioBella(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(BellaBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQABella(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(BellaQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutBella(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

//****EunSung***

function showProfileEunSung(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(EunSungIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showEunSung(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(EunSungIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioEunSung(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(EunSungBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAEunSung(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(EunSungQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutEunSung(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Seung***

function showProfileSeung(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(SeungIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showSeung(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SeungIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioSeung(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SeungBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQASeung(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(SeungQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutSeung(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Whitney***

function showProfileWhitney(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(WhitneyIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showWhitney(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(WhitneyIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioWhitney(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(WhitneyBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAWhitney(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(WhitneyQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutWhitney(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****
// ***Joslyn***

function showProfileJoslyn(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(JoslynIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showJoslyn(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JoslynIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioJoslyn(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JoslynBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAJoslyn(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JoslynQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutJoslyn(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Andrew***

function showProfileAndrew(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(AndrewIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showAndrew(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AndrewIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioAndrew(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AndrewBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAAndrew(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(AndrewQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutAndrew(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Fei***

function showProfileFei(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(FeiIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showFei(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(FeiIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioFei(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(FeiBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAFei(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(FeiQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutFei(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Yoon***

function showProfileYoon(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(YoonIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showYoon(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(YoonIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioYoon(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(YoonBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAYoon(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(YoonQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutYoon(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Ji***

function showProfileJi(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(JiIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showJi(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JiIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioJi(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JiBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAJi(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JiQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutJi(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Jieun***

function showProfileJieun(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(JieunIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showJieun(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JieunIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioJieun(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JieunBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAJieun(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JieunQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutJieun(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Grace***

function showProfileGrace(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(GraceIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showGrace(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(GraceIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioGrace(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(GraceBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAGrace(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(GraceQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutGrace(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Jong***

function showProfileJong(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(JongIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showJong(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JongIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioJong(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JongBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAJong(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JongQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutJong(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****

// ***Jai***

function showProfileJai(){
 $('#megaTeam').hide( "slide", { direction: "down"  }, 500 );
  setTimeout(function() {
  $('#teamContent').append(JaiIn);
  $('#megaPerson').hide();
  }, 501);
  setTimeout(function() {
  $('#megaPerson').show( "slide", { direction: "up" }, 500 );
}, 502);
}

function showJai(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JaiIn);
  $('#megaPersona1').fadeIn();
  }, 502);
}

function showBioJai(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JaiBio);
  $('#megaPersona2').fadeIn();
  }, 502);
}

function showQAJai(){
  $('#megaPersona1').fadeOut();
  $('#megaPersona2').fadeOut();
  $('#megaPersona3').fadeOut();
  setTimeout(function() {
  $('#megaPersona1').remove();
  $('#megaPersona2').remove();
  $('#megaPersona3').remove();
  $('#megaPerson').append(JaiQA);
  $('#megaPersona3').fadeIn();
  }, 502);
}



function profileOutJai(){
  $('#megaPerson').hide( "slide", { direction: "up"  }, 500 );
  setTimeout(function() {
  $('#megaPerson').remove();
  $('#megaTeam').show( "slide", { direction: "down" }, 500 );
}, 502);
}
// *****
// *****


var logInSensor = false;

var logIn ="<div id='logIn' class='animated slideInDown'><form><img id='closeFlap' onclick='closeLogin();return false;' src = '/assets/upup_arrow.png'><p id='usernameField'>USERNAME</p><input type='text' id='username'><br><p id='passwordField'>PASSWORD</P><input type='text' id='password'><button id='logInButton' type='button'>LOG IN</button></form><p id='forgotPW'>FORGOT PASSWORD<span><a href=''> CLICK HERE</a></span></p><p id='forgotUsername'>FORGOT USERNAME<span><a href=''> CLICK HERE</a></span></p></div>"; 
var logInClose ="<div id='logIn' class='animated slideOutUp'><form><img id='closeFlap' onclick='closeLogin();return false;' src = '/assets/upup_arrow.png'><p id='usernameField'>USERNAME</p><input type='text' id='username'><br><p id='passwordField'>PASSWORD</P><input type='text' id='password'><button id='logInButton' type='button'>LOG IN</button></form><p id='forgotPW'>FORGOT PASSWORD<span><a href=''> CLICK HERE</a></span></p><p id='forgotUsername'>FORGOT USERNAME<span><a href=''> CLICK HERE</a></span></p></div>"; 


var logo ="<div id='aboutLogo' class='animated slideInLeft'><img id='logoSlide' src='/assets/moimLogo.png' id='logo_back'></div>";
var logoOut ="<div id='aboutLogo' class='animated slideOutLeft'><img id='logoSlide' src='/assets/moimLogo.png' id='logo_back'></div>";
var logoChronicle ="<div id='chronicleLogo' class='animated slideInLeft'><img id='logoSlide' src='/assets/moimLogo.png' id='logo_back'></div>";
var logoOutChronicle ="<div id='chronicleLogo' class='animated slideOutLeft'><img id='logoSlide' src='/assets/moimLogo.png' id='logo_back'></div>";

var termsOf ="<div id='termsOfUse' class='animated zoomIn'><p id='termsWords'>Terms of Use<span id='close-img' class='img-span pull-right'><img id='close' class='animated zoomIn' onclick='closeTerms();return false;' src = '/assets/closeIcon.png'></span></p></div>";
var privacyPol ="<div id='privacyPolicy' class='animated zoomIn'><p id='privacyWords'>Privacy Policy<span id='close-img' class='img-span pull-right'><img id='close' class='animated zoomIn' onclick='closePrivacy();return false;' src = '/assets/closeIcon.png'></span></p></div>";
var termsOfWelcome ="<div id='termsOfUseWelcome' class='animated zoomIn'><p id='termsWords'>Terms of Use<span id='close-img' class='img-span pull-right'><img id='close' class='animated zoomIn' onclick='closeTermsWelcome();return false;' src = '/assets/closeIcon.png'></span></p></div>";
var privacyPolWelcome ="<div id='privacyPolicyWelcome' class='animated zoomIn'><p id='privacyWords'>Privacy Policy<span id='close-img' class='img-span pull-right'><img id='close' class='animated zoomIn' onclick='closePrivacyWelcome();return false;' src = '/assets/closeIcon.png'></span></p></div>";

// var teamIn ="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><div id='leadershipTeamPic' onclick='leaders();return false;'></div><div id='eventTeamPic' onclick='events();return false;'></div><div id='creativeTeamPic' onclick='creative();return false;'></div><div id='prTeamPic' onclick='pr();return false;'></div><div id='soarTeamPic' onclick='soar();return false;'></div><div id='itTeamPic' onclick='it();return false;'></div><div id='advisoryTeamPic' onclick='advisory();return false;'></div><div id='contributorsPic' onclick='contributors();return false;'></div></div>";
// var teamOut ="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><div id='leadershipTeamPic'></div><div id='eventTeamPic'></div><div id='creativeTeamPic'></div><div id='prTeamPic'></div><div id='soarTeamPic'></div><div id='itTeamPic'></div><div id='advisoryTeamPic'></div><div id='contributorsPic'></div></div>";

// ***leaders**
var leaderIn="<div id='megaTeam'><p class='marquee'>“If your actions inspire others to dream more, learn more, do more and become more, you are a leader.” John Quincy Adams</p><span id='core'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Leadership communicates with every team to ensure everything runs smoothly and everyone is on the same page.<br>As the main liaison to sponsors, vendors, and other external constituents, the Chief Officers also align MOI’M’s enterprises and activities with our mission.</h5><div id='leaderSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='leaderSlideFunction1();return false;'><div class='memeberOne'><div id='leaderMemberOnePic' onclick='showProfileYeong();return false;'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic' onclick='showProfileDK();return false;'></div></div><div class='memeberThree'><div id='leaderMemberThreePic' onclick='showProfileAnnie();return false;'></div></div></div></div>";
var leaderIn1="<div id='megaTeamA'><div id='leaderSlide2'><div id='rewindArrow' src = '/assets/rewind.png' onclick='leadershipRewind();return false;'>TEAM MENU</div><img id='backArrow' src = '/assets/arrowBack.png' onclick='leaderSlideFunction2();return false;'><div class='memeberOne'><div id='leaderMemberFourPic' onclick='showProfileEun();return false;'></div></div></div></div>";
var leaderIn2="<div id='leaderSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='leaderSlideFunction1();return false;'><div class='memeberOne'><div id='leaderMemberOnePic' onclick='showProfileYeong();return false;'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic' onclick='showProfileDK();return false;'></div></div><div class='memeberThree'><div id='leaderMemberThreePic' onclick='showProfileAnnie();return false;'></div></div></div>";

// ***


// ***Yeong
var YeongIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeong();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/yeongLimBig.png'><h3 id='profileHead'>YEONG LIM   |   임영광</h3><h5 id='profileStat'>Title in MOI’M: Co-CEO & Co-Founder<br>Industry: MEDIA<br>Email: yeong@moimnewyork.com<br><br>MOTTO: When life give you mangos…<br>모토: 삶이 우리에게 망고를 준다면</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioYeong();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAYeong();return false;'>FUN FACTS</h4></div></div></div>";
var YeongBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>YEONG LIM   |   임영광</h3><p id='profileBio'>Yeong Lim graduated from Columbia University Graduate School of Journalism in 2012 and currently works as Entertainment Video Producer at CBS Local Media and<br> previously at NY1 News as News Assistant/Field Producer. Yeong served as the president of Columbia University Korean Graduate Students Association during the 2011-<br>2012 academic year and executive secretary in 2010-2011. Yeong received his B.A. in Communications and East Asian Studies from Calvin College in Grand Rapids,<br> Michigan and also attended Waseda University in Tokyo. Though, Yeong’s background is in journalism and news, he loves to watch comedy and is passionate about<br> producing live shows, events, parties and film. Yeong is also balding and he’s very stressed about it.<br><br>2012년 콜럼비아 대학교 저널리즘 대학원을 졸업. 현재 미국 CBS 방송국, 디지털 부서 \“CBS Local Media\” 에서 엔터테인먼트 프로듀서로 근무중. 이전 NY1 News에서 촬영기자/현장프로듀서로 약 3년간<br> 근무. 콜럼비아 대학원 시절 한인학생회 45대 학생회장과 44대 총무로 활동. 학부는 미시간주에 위치한 캘빈대학교에서 수사학 (커뮤니케이션)과 동양학 (일본어학과)을 복수 전공. 일본 와세다 대학에서 1년간<br> 유학 경험. 학부시절 학교 내외의 다양한 이벤트 총괄 디렉터 및 프로듀서로 역임. 탈모고민증.</p><h4 id='mainButton' onclick='showYeong();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAYeong();return false;'>FUN FACTS</h4></div>";
var YeongQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>YEONG LIM   |   임영광</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Every \“good\” $1 pizza shop – There are a ton of $1 pizza shops in NYC, but<br> some places serve slices that taste like paper and they are not fresh at all!<br> Surprisingly, some of these NYC $1 or $.99 pizzas are really really good – even<br> better than those that they sell at \“famous\” yet overpriced pizzerias! As a starter<br> – I highly recommend \“2 Bros Pizza!\” It’s everywhere!<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Play Clash of Clans. One of the best mobile games ever invented. I’ve been<br> playing since 2012. My clan recently ranked 33rd in the world! My favorite troops<br> are \“hogs\” and \“witches.\”<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: I cry a lot. I cry when I listen to sentimental music or when I watch cheesy yet<br> touching films (and commercials). Also, when people make me sad or upset.<br><br><span id='question'>Q: Inspiration?</span><br>A: Steve Jobs, Napoleon, Kitano Takeshi, Changho Lim.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: Won Bin, Kimura Takuya, or Brad Pitt sometimes.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: 맛난 1달러 피자를 파는 모든 가게! 뉴욕에는 수많은 1달러 피자가게가 있지만, 어떤 곳은 정말 종이를<br> 씹는 것 처럼 맛없는 피자를 팔기도 한다. 그렇지만 어떤 곳은 뉴욕의 비싸고 유명한 피자가게보다 훨씬<br> 맛있는 피자를 1달러 (어떤 곳은 99센트!)에 팔기도 한다. 아직 이 멋진 피자를 경험하지 못했다면, 뉴욕<br> 어디에서나 찾을 수 있는 “2 Bros Pizza” 를 가보길 권한다. 강추!<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 클래시 오브 클랜! 최고의 모바일 게임이다. 2012년부터 해왔는데, 현재 내 클랜은 세계랭킹 33등이<br>다. 내가 가장 좋아하는 병력은 호그라이더와 마녀이다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 사실 난 많이 운다. 슬픈 음악을 듣거나 좀 뻔하더라도 감동적인 영화를 보면 눈물이 난다 (심지어 광<br>고까지도). 사람들이 날 슬프게 하거나 화나게 해도 운다.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 스티브 잡스, 나폴레옹, 기타노 다케시, 임창호<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 원빈, 기무라타쿠야, 가끔씩 브래드피트</p><h4 id='mainButton' onclick='showYeong();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioYeong();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ****DK
var DKIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutDK();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/doYoonKimBig.png'><h3 id='profileHead'>DOYOON KIM   |   김도윤</h3><h5 id='profileStat'>Title in MOI’M: Co-CEO & Co-Founder<br>Industry: DENTISTRY<br>Email: dk@moimnewyork.com<br><br>MOTTO: Opportunity comes to those who are prepared.<br>모토: 기회는 준비된 자에게 주어진다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioDK();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQADK();return false;'>FUN FACTS</h4></div></div></div>";
var DKBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>DOYOON KIM   |   김도윤</h3><p id='profileBio'>Dr. Doyoon Kim graduated from New York University College of Dentistry in 2012. He is currently a partner at private dental practices in New Jersey and Pennsylvania.<br> Doyoon served as the event coordinator/program director of the NYU Korean Graduate Students Association from 2010 to 2012 and organized numerous social events<br> and academic affairs in New York. Doyoon received his B.S. (with Honors) in Mathematics and Human Biology from the University of Toronto in Canada.<br><br>2012년 뉴욕대학교 치과 대학원 졸업. 현 New Jersey 와 Pennsylvania 주에서 파트너로 병원 경영.<br>뉴욕대학교 대학원 한인학생회 행사국장으로 활동하며 수많은 이벤트를 기획 및 진행 경력. 2008년 캐나다 토론토 대학교 인체생물학과 수학과를 복수 전공으로 학사 우수졸업.</p><h4 id='mainButton' onclick='showDK();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQADK();return false;'>FUN FACTS</h4></div>";
var DKQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>DOYOON KIM   |   김도윤</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Bangkok Express. It is a small Thai restaurant in front of the NYU Dental School<br> building and a place I frequented. They also deliver. I think the food is<br> comparable to other fancy Thai restaurants. Although I may be biased.<br><br><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: Although people may not believe me, it would be to spend it with the people I<br> love enjoying so-mack (소맥) while looking back at our lives.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: I turn off the alarm on my iphone and then go back to sleep knowing that my<br> second alarm will go off in 5 minutes.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: Open wide, please.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Bangkok Express – NYU 치대 앞에 있는 조그마한 타이 음식점인데 학교다닐때 즐겨 먹던곳. 딜<br>리버리로도 손색없다. 다른 fancy 한 타이 음식점에도 뒤지지 않는 맛. 입맛이 지극히 주관적일 수 있다<br>는 것이 함정.<br><br><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다?</span><br>A: 믿긴 싫겠지만 사랑하는 사람들과 조촐히 소맥을 하며 지나온 날들을 돌아볼 것이다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 아침에 눈 뜨자 마자 나의 장기와도 같은 iphone을 만지작 거리며 알람을 끈후 5분뒤의 알람에 의존<br>하며 다시 잠들기 바쁘다.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: 입 크게 벌리세요~</p><h4 id='mainButton' onclick='showDK();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioDK();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Annie
var AnnieIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAnnie();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/annieChoiBig.png'><h3 id='profileHead'>ANNIE CHOI   |   최수정</h3><h5 id='profileStat'>Title in MOI’M: COO & CFO<br>Industry: EDUCATION<br>Email: annie@moimnewyork.com<br><br>MOTTO: Insanity: Doing the same thing over and over again<br> and expecting different results. – Albert Einstein.<br>모토: 광기란 같은 일을 계속하면서 다른 결과를 기대하는 것이다 - 알버트 아인<br>슈타인</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAnnie();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAnnie();return false;'>FUN FACTS</h4></div></div></div>";
var AnnieBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>ANNIE CHOI   |   최수정</h3><p id='profileBio'>Annie Choi currently works at the College Board as an Associate Director on the International Team. She cultivates relationships with schools outside the U.S. interested<br> in an American-style education and provides support to international schools by organizing workshops for their secondary school teachers. Prior to joining the College<br> Board, Annie received her M.A. in International Educational Development from Columbia University, Teachers College and her B.A. in Chinese and French, with a minor in<br> Business, from Georgetown University in Washington, DC. During her undergraduate studies, Annie studied at Peking University in Beijing, China and at Paris-Sorbonne<br> University in Paris, France. Annie served as a board member of the Teachers College Korean Graduate Students Association in 2010-2011.<br><br>현재 미 대학입시위원회 (The College Board)에서 국제학교 지원관리, 중•고등학교 교사지원 해외 워크샵 개최 및 담당.<br>2011년 콜럼비아대학교 교육대학원 국제교육개발 석사 졸업. 2008년 조지타운 대학교 학사, 중국어, 불어 복수 전공, 경영 부전공. 학부 재학 당시 중국 북경대와 프랑스 파리 소르본느 대학에서 교환학생 경험.<br>콜럼비아대학교 교육대학원 한인학생회 임원으로 활동.</p><h4 id='mainButton' onclick='showAnnie();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAAnnie();return false;'>FUN FACTS</h4></div>";
var AnnieQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>ANNIE CHOI   |   최수정</h3><p id='profileQuestionsShort1'><span id='question'>Q: Dream Vacation?</span><br>A: Trip around the world<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Check my phone for text messages and emails.<br><br><span id='question'>Q: Perfect Day?</span><br>A: Enjoying amazing food with great company.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Taking time every day to stop and smell the roses.</p><p id='profileQuestionsShort2'><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 세계여행<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 스마트폰으로 온 문자나 이메일을 확인한다.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 멋진 사람들과 좋은 음식.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 하루에 한 번씩, 바쁜 일상 중 잠시 멈춰서 삶과 여유를 즐기는 시간을 갖는 것.</p><h4 id='mainButton' onclick='showAnnie();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioAnnie();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Eun - Leader
var EunIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEun();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/eunYoungKangBig.png'><h3 id='profileHead'>EUNYOUNG KANG   |   강은영</h3><h5 id='profileStat'>Title in MOI’M: COO<br>Industry: DESIGN<br>Email: eunyoung@moimnewyork.com<br><br>MOTTO: Mo or do. – Korean Saying.<br>모토: 모 아니면 도</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioEun();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAEun();return false;'>FUN FACTS</h4></div></div></div>";
var EunBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>EUNYOUNG KANG   |   강은영</h3><p id='profileBio'>Eunyoung Kang currently works at Ashcan Studio of Art as Creative Director. Eunyoung received her M.P.S. in Interactive Telecommunications (ITP) from New York<br> University, Tisch School of the Arts in 2012. She served as the director of public relations for the NYU Korean Graduate Students Association in 2011-2012. During her<br> undergraduate studies, she majored in Interior Design and Visual Communications Design, which allowed her to gain a wide range of skills in the creative field from<br> visual layout to space design. Currently, Eunyoung designs and organizes various art exhibitions, and creates graphics, booklets, and postcards as a freelancer.<br><br>2012년 뉴욕대학교에서 인터렉티브 텔레커뮤니케이션 석사 학위 취득. 뉴욕대학원 한인학생회 홍보국장으로 활동. 현재 뉴욕 맨하탄에 위치한 애쉬캔 아트스튜디오에서 크리에이티브 드렉터로 근무중</p><h4 id='mainButton' onclick='showEun();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAEun();return false;'>FUN FACTS</h4></div>";
var EunQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>EUNYOUNG KANG   |   강은영</h3><p id='profileQuestionsShort1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Elephant & Castle<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: I find Zio, hold him and sleep for five more minutes.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: zi~o~~~ zio~~~ z • i • o!!!!!!!!!!!!<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Exercising every day</p><p id='profileQuestionsShort2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Elephant & Castle<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 지오찾아 안고 오분만 더자기.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: 지~오~~~ 지오~~~ ㅈㅣㅇㅗ!!!!<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 매일 운동하기.</p><h4 id='mainButton' onclick='showEun();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioEun();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ***events**
var eventsIn="<div id='megaTeam'><p class='marquee'>“It’s not about ideas. It’s about making ideas happen.” Scott Belsky</p><h2 id='leaderHeading'>EVENTS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Event Team defines who we are by producing events that have never been attempted before.<br>The team handles the logistics and planning of MOI’M events starting from pre-production to post-production.</h5><div id='eventsSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='eventsOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='eventsSlideFunction1();return false;'><div class='memeberOne'><div id='eventsMemberOnePic' onclick='showProfileSarah();return false;'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic' onclick='showProfileRyan();return false;'></div></div><div class='memeberThree'><div id='eventsMemberThreePic' onclick='showProfileBrent();return false;'></div></div></div></div>";
var eventsIn1="<div id='megaTeamA'><div id='eventsSlide2'><div id='rewindArrow' src = '/assets/rewind.png' onclick='eventsRewind();return false;'>TEAM MENU</div><img id='backArrow' src = '/assets/arrowBack.png' onclick='eventsSlideFunction2();return false;'><div class='memeberOne'><div id='eventsMemberFourPic' onclick='showProfileAmy();return false;'></div></div></div></div>";
var eventsIn2="<div id='eventsSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='eventsOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='eventsSlideFunction1();return false;'><div class='memeberOne'><div id='eventsMemberOnePic' onclick='showProfileSarah();return false;'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic' onclick='showProfileRyan();return false;'></div></div><div class='memeberThree'><div id='eventsMemberThreePic'onclick='showProfileBrent();return false;'></div></div></div>";

// ***


// ***Sarah
var SarahIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarah();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/SarahSinBig.png'><h3 id='profileHead'>SARAH SIN   |   신영은</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, EVENTS<br>Industry: FASHION PRINT DESIGN<br>Email: sarah@moimnewyork.com<br><br>MOTTO: Hold the vision, Trust the Process – Unknown<br>모토: 비전을 가지고, 방법을 신뢰하라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSarah();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASarah();return false;'>FUN FACTS</h4></div></div></div>";
var SarahBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>SARAH SIN   |   신영은</h3><p id='profileBio'>Sarah Sin calls Kenya her birthplace and Russia and New York her hometown. She studied Communication Design at Pratt Institute, and is currently working as a Print<br> Designer for swimwear at LF USA. Over the years she has volunteered for non-profit organizations (D2 fashion non-profit) and most recently traveled to Benin, Africa for<br> a series of teen fashion projects. Sarah is passionate about the arts, philanthropy and mission based work.<br>Side note: Sarah’s work philosophy is – get fed first and work hard.<br><br>케냐에서 태어나 러시아와 뉴욕에서 자랐으며 Pratt Institute 에서 광고 디자인 학과를 전공. 현재 스윔웨어 Print Designer 로서 활동 중. 여러 선교 및 비영리 단체활동에 꾸준히 종사해 왔으며,<br>최근 2년동안 벤닌, 아프리카 청소년 패션 프로젝트에 참여. 예술과 봉사, 자선 활동에 큰 열정을 가지고 있다.</p><h4 id='mainButton' onclick='showSarah();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQASarah();return false;'>FUN FACTS</h4></div>";
var SarahQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>SARAH SIN   |   신영은</h3><p id='profileQuestions1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would withdraw all of my cash and give food and allowance to the homeless,<br> enjoy the most delicious meal with my loved ones, and attend church service to<br> look back on my life before the \“end\”.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: No problem! & Thank you! (in speech) Fighting! (in messages)<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: Soundcloud for its dynamic gathering of musical talents and Instagram for<br> its beautiful images and interesting storytelling.<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: Regardless of the season, I always need to keep my toes covered and ears<br> warm when I sleep.<br><br><span id='question'>Q: Inspiration?</span><br>A: I am inspired by those who have overcome adversity: whether it be physical,<br> emotional, or financial.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Living life to the fullest. An ongoing challenge!</p><p id='profileQuestions2'><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 내 통장에 있는 모든 돈을 뽑아서 길 거리에 있는 노숙자들에게 배불이 먹을 양식과 그들 또한 마지막<br>을 즐길 용돈을 나눠주고 내가 제일 사랑하는 사람들과 세상에서 제일 맛있는 음식을 먹고, 교회에서 예<br>배를 드리면서 나의 인생을 돌아보고 마지막을 준비한다.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: No problem! & 고마워요! (말할때) / 파이팅! (문자)<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 다양한 사람들의 음악과 재능을 들을수 있는 Soundcloud와 아름다운 사진들이 전해주는 독특한<br> 이야기 공간인 인스타그램을 자주 사용한다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 계절과 상관없이 잘때는 발과 귀를 꼭 따뜻하게 해야된다.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 여러가지 어려움들을 (육체적, 심리적, 재정적 등등) 극복한 사람들의 삶을 통해 많은 영감과 희망을<br> 얻는다.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 세상을 알차게, 후회없이 사는 것 – 끊이지 않는 도전.</p><h4 id='mainButton' onclick='showSarah();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioSarah();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***Ryan
var RyanIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRyan();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/RyanJeongBig.png'><h3 id='profileHead'>RYAN JEONG   |   정진훈</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, PROGRAM DEVELOPMENT<br>Industry: DENTISTRY<br>Email: Ryan@moimnewyork.com<br><br>MOTTO: Relax<br>모토: 릴랙스~</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioRyan();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQARyan();return false;'>FUN FACTS</h4></div></div></div>";
var RyanBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>RYAN JEONG   |   정진훈</h3><p id='profileBio'>Born and raised in a beach-town of Los Angeles, Ryan Jeong first stepped on the concrete blocks of NYC in 2006 as an undergraduate student at NYU. He graduated<br> from NYU College of Dentistry in 2013, and currently works as a resident at Jersey City Medical Center in NJ. Throughout the long years of studying, Ryan depended<br> heavily on music to relieve stress and keep himself motivated. Having played in a jazz band all throughout his teenage years, Ryan absolutely loves jazz. A couple years<br> ago he found a new passion in drums which he practices every day. He currently lives with a 1 year old parakeet named 꼬몽 (Kkomong).<br><br>LA에 있는 한 바닷가 마을에서 태어나고 자랐으며, 2006년 NYU에 입학하면서 뉴욕으로 건너옴. 2013년에 NYU 치과대학을 졸업하고, 현재 뉴저지에 있는 저지시티 메디컬 센터에서 레지던트로 근무중.<br>10대 시절 재즈 밴드에서 활동하기도 하였으며, 치과대학 재학기간 동안 음악이 없이는 버틸 수 없었다고 할 정도로 재즈음악을 사랑함.<br>몇 년 전 처음 시작하여, 이제는 매일 연습하고 있는 드럼실력은 꽤나 수준급이다. 1살 된 잉꼬앵무새 ‘꼬몽’과 함께 살고 있다.</p><h4 id='mainButton' onclick='showRyan();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQARyan();return false;'>FUN FACTS</h4></div>";
var RyanQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>RYAN JEONG   |   정진훈</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: The deli on 14th St. and 3rd Ave. makes really good philly cheesesteak.<br><br><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would go to the New York Auto Show and steal a Ferrari.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: I want to go dog-sledding in Alaska.<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: 2048. I wont stop until I beat it.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Love.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: 14번가와 3번애비뉴 코너에 있는 델리가게. 거기서 파는 필리치즈스테이크는 진짜 맛있다.<br><br><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 뉴욕오토쇼에가서 페라리를 훔칠 것이다.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 알래스카에 가서 개썰매를 타고 싶다.<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 2048 (게임). 다 깰때 까지 계속 할 것이다.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 사랑..</p><h4 id='mainButton' onclick='showRyan();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioRyan();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***Brent
var BrentIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBrent();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/BrentKimBig.png'><h3 id='profileHead'>BRENT KIM   |   김하규</h3><h5 id='profileStat'>Title in MOI’M: EVENT PRODUCER<br>Industry: FINANCE<br><br>MOTTO: “It ain’t over ‘till it’s over.” – Yogi Berra<br>모토: 끝날 때까지 끝난 게 아니다. –요기 베라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioBrent();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQABrent();return false;'>FUN FACTS</h4></div></div></div>";
var BrentBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>BRENT KIM   |   김하규</h3><p id='profileBio'>Hakyu Kim graduated from Corona Del Mar High School in California in 2010 and currently pursues a B.A. in Economics from New York University. For his mandatory<br> military service, he served as an interpreter in the Republic of Korea Air Force Materiel Command and the Republic of Korea Joint Support Group in the Philippines.<br> Hakyu was discharged from service on January 2015. Since then he has worked at a consulting company and a start-up company and prepared to go back to school on<br> August 2015. After graduating from NYU, he wants to work in the finance industry.<br><br>2010년 미국 캘리포니아 Corona Del Mar High School을 졸업 후 뉴욕대학교에서 경제학 학사 과정을 수료 중임. 공군 물자사령부와 필리핀 합동 지원단에서 통역병으로 군 복무를 하였으며<br>2015년 1월 군 복무를 마침. 전역 이후 컨설팅 회사와 스타트업 업체에서 인턴 경험을 하면서 2015년 가을학기 복학 준비를 하고 있으며, 졸업 후 금융권에 종사하기를 희망.</p><h4 id='mainButton' onclick='showBrent();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQABrent();return false;'>FUN FACTS</h4></div>";
var BrentQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>BRENT KIM   |   김하규</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Shopsin’s. A small restaurant in Essex St Market with a unique name and a vast<br> menu with a variety of different dishes.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Eternal Sunshine of the Spotless Mind. A movie featuring a new side of Jim<br> Carrey and highlighting Michel Gondry’s amazing ability to portray memory and<br> time. Also, it is a great story that depicts the essence of love.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: Montauk in the winter (Eternal Sunshine has left a great impression…)<br><br><span id='question'>Q: Inspiration?</span><br>A: Henry Kissinger, Alain de Botton, Billy Beane, my dad</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: 독특한 이름인 Shopsin’s 라고 불리는 조그만 레스토랑. Essex St Market에 위치하고 있고 다양<br>한 메뉴가 매력적이다.<br><br><span id='question'>Q: 가장 감명깊게 본 영화? 이유?</span><br>A: 이터널 선샤인. 짐 캐리의 새로운 모습, 기억과 시간을 멋지게 엮은 미셀 공드리 감독, 그리고 사랑의<br> 본질에 관한 최고의 이야기.<br><br><span id='question'>Q: 가고 싶은 휴양지?</span><br>A: 겨울의 Montauk (Eternal Sunshine을 너무 감명 깊게 본 나머지…)<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 헨리 키신저, 알랭 드 보통, 빌리 빈, 우리 아빠</p><h4 id='mainButton' onclick='showBrent();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioBrent();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ****Amy - events
var AmyIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAmy();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/AmyYooBig.png'><h3 id='profileHead'>AMY YOO   |   유채영</h3><h5 id='profileStat'>Title in MOI’M: EVENT PRODUCER<br>Industry: ACCOUNTING<br><br>MOTTO: Communicate with others open-mindedly.<br>모토: 오픈마인드로 사람들과 소통하라.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAmy();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAmy();return false;'>FUN FACTS</h4></div>";
var AmyBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>AMY YOO   |   유채영</h3><p id='profileBio'>Amy Yoo is currently enrolled at Baruch College as an Accounting student. She works part-time at Take 31 INC as a staff accountant. She plans to minor in both Business<br> Communication and Computer Information Systems (CIS). Her goal is to become a professional accountant.<br><br>현재 버룩 대학교 회계학과 재학중. Take 31에서 파트타임 경리로 근무. 비지니스 커뮤니케이션과 컴퓨터 정보 시스템 복수 부전공 계획중. 공인회계사가 되길 희망.</p><h4 id='mainButton' onclick='showAmy();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAAmy();return false;'>FUN FACTS</h4></div></div></div>";
var AmyQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>AMY YOO   |   유채영</h3><p id='profileQuestions1'><span id='question'>Q: Inspirational Film?</span><br>A: 200 Pounds Beauty because I like its message that no matter how beautiful<br> you are on the outside, the inside is what counts.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: I really want to go to Venice, Italy<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: Nowadays an app called MOCI. I can interact with other people and my<br> network and can ask for advice or suggestions and share stories.<br><br><span id='question'>Q: Perfect Day?</span><br>A: A day when I don’t have to go to work and can just stay at home with a cup of<br> coffee and relax on my bed watching Korean dramas and show programs all<br> day.</p><p id='profileQuestions2'><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 미녀는 괴로워. 아무리 외면이 예뻐도 사람의 내면이 가장 중요하다는 메세지가 마음에 들어서.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 이탈리아 베니스에 꼭 가고 싶어요.<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 요즘엔 모씨라는 어플. 사람들과 익명으로 소통하고 조언도 구하고 스토리도 공유한다는게 마음에 들<br>어요.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 일 안하고 커피한잔의 여유를 가지며 침대에서 뒹굴거리면서 한국 드라마와 쇼프로 하루종일 보기.</p><h4 id='mainButton' onclick='showAmy();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioAmy();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***



// ***creative**
var creativeIn="<div id='megaTeam'><p class='marquee'>“The desire to create is one of the deepest yearnings of the human soul.” Dieter F. Uchtdorf</p><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div id='creativeSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creativeSlideFunction1();return false;'><div class='memeberOne'><div id='creativeMemberOnePic' onclick='showProfileRichard();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberTwoPic' onclick='showProfileAngie();return false;'></div></div><div class='memeberThree'><div id='creativeMemberThreePic' onclick='showProfileHyoBee();return false;'></div></div></div></div>";
var creativeIn1="<div id='megaTeamA'><div id='creativeSlide2'><div id='rewindArrow' src = '/assets/rewind.png' onclick='creativeRewind();return false;'>TEAM MENU</div><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeSlideFunction2();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creativeSlideFunction3()();return false;'><div class='memeberOne'><div id='creativeMemberFourPic' onclick='showProfileSam();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberFivePic' onclick='showProfileBella();return false;'></div></div><div class='memeberThree'><div id='creativeMemberSixPic' onclick='showProfileEunSung();return false;'></div></div></div></div>";
var creativeIn2="<div id='creativeSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creativeSlideFunction1();return false;'><div class='memeberOne'><div id='creativeMemberOnePic' onclick='showProfileRichard();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberTwoPic' onclick='showProfileAngie();return false;'></div></div><div class='memeberThree'><div id='creativeMemberThreePic' onclick='showProfileHyoBee();return false;'></div></div></div>";

var creativeIn3="<div id='megaTeamA'><div id='creativeSlide3'><div id='rewindArrow' src = '/assets/rewind.png' onclick='creativeRewind1();return false;'>TEAM MENU</div><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeOut2();return false;'><div class='memeberOne'><div id='creativeMemberSevenPic' onclick='showProfileSeung();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberEightPic' onclick='showProfileWhitney();return false;'></div></div></div>";
var creativeIn4="<div id='megaTeamA'><div id='creativeSlide2'><div id='rewindArrow' src = '/assets/rewind.png' onclick='creativeRewind();return false;'>TEAM MENU</div><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeSlideFunction2();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creativeSlideFunction3();return false;'><div class='memeberOne'><div id='creativeMemberFourPic' onclick='showProfileSam();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberFivePic' onclick='showProfileBella();return false;'></div></div><div class='memeberThree'><div id='creativeMemberSixPic' onclick='showProfileEunSung();return false;'></div></div></div></div></div>";
// *****

// ***Richard
var RichardIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRichard();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/RichardShimBig.png'><h3 id='profileHead'>RICHARD SHIM   |   심민중</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, CREATIVE<br>Industry: ARCHITECTURE<br>Email: minjoong@moimnewyork.com<br><br>MOTTO: Take the slower but more rewarding path.<br>모토: 조금 느리더라도 보람있는 길을 택하라.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioRichard();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQARichard();return false;'>FUN FACTS</h4></div></div></div>";
var RichardBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>RICHARD SHIM   |   심민중</h3><p id='profileBio'>Richard is currently an architectural designer at Ewingcole. He graduated from Trinity College majoring in Studio Art and Architectural Studies. He continued to create<br> art during his fellowship at Trinity, focusing on metal sculpting before studying architecture at the University of Pennsylvania. While in graduate school, Richard served<br> as president for the Penn Korean Graduate Student Association and Korean Architecture Student Association. Richard has also studied abroad in Copenhagen, Denmark<br> for architecture. Aside from designing buildings, Richard also enjoys traveling, singing, and DJ’ing.<br><br>현재 EwingCole 건축사무소에서 건축가로 근무중이다. 2010년 트리니티 대학에서 미술을 전공하면서 조각 연구장학생으로 1년간 트리니티에서 연구하기도 하였다.<br>2014년 펜실베니아대학교 펜디자인 대학원 건축석사학위를 취득하였고, 재학중에 대학원 한인 학생회, 펜디자인 한인학생회 회장으로 활동하였다. 대학시절 덴마크 코펜하겐에서 건축 공부를 한 경험도 있다.</p><h4 id='mainButton' onclick='showRichard();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQARichard();return false;'>FUN FACTS</h4></div>";
var RichardQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>RICHARD SHIM   |   심민중</h3><p id='profileQuestionsShort1a'><span id='question'>Q: Dream Vacation?</span><br>A: Rome, Italy<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Cedar Rapids because it is a calm, funny and down-to-earth American<br> comedy.<br><br><span id='question'>Q: Perfect Day?</span><br>A: Sipping on an espresso in front of the San Quattro Fontane in Rome.<br><br><span id='question'>Q: Inspiration?</span><br>A: Simple people who work hard every day</p><p id='profileQuestionsShort2'><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 로마<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 시더 래피즈. 조금 유치하지만 미국적이고 차분한 코메디 영화.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 로마의 산 카를로 알레 콰트로 폰타네 성당 앞에서 커피 한잔.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 매일 열심히 일하는 일반인들.</p><h4 id='mainButton' onclick='showRichard();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioRichard();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***Angie
var AngieIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAngie();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/AngieHongBig.png'><h3 id='profileHead'>ANGIE HONG   |   홍은지</h3><h5 id='profileStat'>Title in MOI’M: DESIGNER<br>Industry: ARCHITECTURE & GRAPHIC DESIGN<br><br>MOTTO: When life doesn’t go right, go left.<br>모토: 막힌 길은 돌아가라.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAngie();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAngie();return false;'>FUN FACTS</h4></div></div></div>";
var AngieBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>ANGIE HONG   |   홍은지</h3><p id='profileBio'>Angie Hong graduated from the University of Pennsylvania, PennDesign in 2015 and currently works as a Junior Architect in New York.<br>Angie received her B.S. in Management from SUNY Binghamton, with a minor in Fine Arts. She loves traveling and has many working experiences in different countries.<br>Although her background is architecture, she loves every design-related field, such as furniture design, interior design, product design, and fashion design.<br><br>2015년 펜실베니아 대학교 건축과 대학원을 졸업. 현재 뉴욕에서 Junior Architect로 근무중. 학부는 뉴욕주립대학교에서 비지니스 전공 & 미술 부전공.<br>여행을 좋아해서 학부와 대학원시절 다양한 나라에서 인턴 경험. 건축뿐만 아니라 가구 디자인, 인테리어 디자인, 제품 디자인, 패션 디자인 등 디자인에 관련된 다양한 분야에 관심이 많음.</p><h4 id='mainButton' onclick='showAngie();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAAngie();return false;'>FUN FACTS</h4></div>";
var AngieQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>ANGIE HONG   |   홍은지</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Rockin’ Raw. The best raw vegan restaurant with good service and a great<br> location.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: The first thing I do when I open my eyes in the morning is eat breakfast.<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: Google Maps because I have no sense of direction.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: I’ve heard that I look like Jung Ilwoo and Lee Ji Ah. I guess Jung Ilwoo + Lee Ji<br> Ah = what…? :(</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Rockin’ Raw. 좋은 위치에 있고 훌륭한 서비스를 자랑하는 곳. 생식 위주의 엄격한 채식주의 레스토<br>랑으로 웰빙을 지향하는 사람들에게 최고를 선사한다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: ‘눈뜨자마자’ 아침 먹어요.<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 구글맵 – 길치에게 필수앱.<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 예쁜남자 정일우랑 여배우 이지아 닮았다는 소리를 들어봤어요. 아마 둘을 합친것이 저와 비슷한가 봅<br>니다…</p><h4 id='mainButton' onclick='showAngie();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioAngie();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***HyoBee
var HyoBeeIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutHyoBee();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/HyobeeKimBig.png'><h3 id='profileHead'>HYOBEE KIM   |   김효비</h3><h5 id='profileStat'>Title in MOI’M: DESIGNER<br>Industry: ADVERTISING<br><br>MOTTO: Don’t limit yourself – Mary Kay Ash<br>모토: 스스로를 제한하지 말라 – 메리 케이 애시</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioHyoBee();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAHyoBee();return false;'>FUN FACTS</h4></div></div></div>";
var HyoBeeBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>HYOBEE KIM   |   김효비</h3><p id='profileBio'>Hyobee Kim is a Junior Art Director at Erwin Penland Advertising Agency in New York City. A graduate from the School of Visual Arts in 2013 for advertising,<br>Hyobee was the Director of Event Planning for the SVA Korean International Student Association. Personality wise,<br>Hyobee is an optimistic and experimental person who loves interactive advertising.<br><br>현재 Erwin Penland 라는 Advertising agency에서 Jr. Art Director로 활동하고있는 사회 새내기. 토론토에 있는 예술특목고 재학당시 더 크고 넓은 크리에이티브 세계를 꿈꾸며<br>2013년에 School of Visual Arts 광고과 졸업. 대학교 재학당시 SVA KISA (한인학생회) 1기로 시작하여 기획부장으로 활동함. SVAD (학교내 광고동아리), KANA (뉴욕한인예술연합) 를 거쳐<br>현재는 MOI’M에 합류하게 됨. 인터렉티브광고에 관심이 많고, 새로운것들을 시도하거나 보고 느끼는것을 좋아하며, 자연을 즐기고 요리가 취미인 초긍정주의자임.</p><h4 id='mainButton' onclick='showHyoBee();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAHyoBee();return false;'>FUN FACTS</h4></div>";
var HyoBeeQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>HYOBEE KIM   |   김효비</h3><p id='profileQuestions1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: (If 100% certain) After having a long phone call with loved ones, I would take<br> sleeping pills and go into a deep sleep. (If 90% certain) After having a long<br> phone call with loved ones, with 1% of hope I would go into an underground<br> shelter with food and necessities.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: After quickly calculating how much longer I can sleep, I go back to sleep.<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: It’s a secret.<br><br><span id='question'>Q: Inspiration?</span><br>A: Everything in the world.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Martha’s Bakery – Very Berry Napoleon은 정말 최고임. 뉴욕에 3곳밖에 없어서 그런지 사<br>람들이 잘 모른다. 구지 이걸 먹으러 N,Q 종점까지 가야한다는건 비밀. 그렇지만 한번 중독되면 이것만<br> 사먹게 된다는건 안비밀.<br><br><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: (지구가 꼭. 100% 종말한다는 전제하에) 내 소중한 사람들과 길고 긴 전화통화를 한뒤, 미리 수면제<br>를 잔뜩먹고 잠에들겠다. (지구가 99% 종말한다는 전제하에) 마찬가지로 내 소중한 사람들과 길고 긴<br> 전화통화를 한뒤, 1%의 희망을 가지고 지하벙커를 사고 식량을 가득 채워넣겠다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 얼마나 더 잘수있는지 빠른계산을 한뒤 다시잔다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 비밀.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 지구안에 모든것.</p><h4 id='mainButton' onclick='showHyoBee();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioHyoBee();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ****Sam - creative
var SamIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSam();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/SamRahmanBig.png'><h3 id='profileHead'>SAM RAHMAN</h3><h5 id='profileStat'>Title in MOI’M: DESIGNER<br>Industry: GRAPHIC DESIGN<br><br>MOTTO: “Anyone can love a thing because. That’s as easy as<br> putting a penny in your pocket. But to love something<br> despite. To know the flaws and love them too. That is rare<br> and pure and perfect.” – Patrick Rothfuss<br>모토: “누구나 무언가를 사랑할 수 있다. 왜나하면 그것은 동전을 주머니에 넣는<br> 것만큼 쉽기 때문이다. 하지만 흠을 알고 경멸하는 무언가를 사랑하는 것은 진귀<br>하고, 순수하고 완벽한 것이다.” – 패트릭 로드푸스</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSam();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASam();return false;'>FUN FACTS</h4></div></div></div>";
var SamBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>SAM RAHMAN</h3><p id='profileBio'>Sam Rahman is a graphic designer living and working in Philadelphia, specializing in branding, print, and interactive design. He is also a senior at Tyler School of Art in<br> Temple University, where he is earning a B.F.A. in graphic design. Sam loves to learn about different cultures and when he’s not designing, he likes to experience art in as<br> many ways as possible, be it through photography, creative writing, or traveling.<br><br>현재 Tyler School of Art in Temple University에서 그래픽 디자인 전공으로 4학년에 재학 중. 필라델피아에서 그래픽 디자이너로 일하고 있으며, 브랜딩, 프린트, 인터렉티브 디자인을 전문적으로 함.<br> 디자인하지 않을 때는 다른 문화를 배우는 것을 좋아함. 이외에도 예술을 사진, 창의적 글쓰기, 여행 등 다양한 방법을 통해 경험하는 것을 즐김.</p><h4 id='mainButton' onclick='showSam();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQASam();return false;'>FUN FACTS</h4></div>";
var SamQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>SAM RAHMAN</h3><p id='profileQuestions1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I’m not sure I’d do anything differently. I already try to live everyday like I have<br> nothing to lose<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)? Why?</span><br>A: iBooks. I try to find as much time as possible during the day to read.<br><br><span id='question'>Q: Inspiration?</span><br>A: I find inspiration in random little things, like listening to people’s stories,<br> finding old photographs, playing with my nieces, taking long walks in unfamiliar<br> places, the list goes on…<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Staying on the good side of crazy.</p><p id='profileQuestions2'><span id='question'>Q. 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 이미 잃을 것이 아무것도 없는 것처럼 매일 살고 있어서 평상시와 비슷한 생활을 할 것 같음.<br><br><span id='question'>Q. 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: iBooks. 매일 시간이 나는 대로 독서를 하려고 노력 중.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 연관이 없는 작은 것들로 부터 영감을 받음. 예를 들어 사람들의 이야기를 듣고서, 오래된 사진을 보고<br>서, 조카와 놀아주면서, 익숙하지 않은 곳을 걷다가 등등.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 좋은 미친 쪽에 머물기.</p><h4 id='mainButton' onclick='showSam();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioSam();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Bella - creative
var BellaIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBella();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/BellaParkBig.png'><h3 id='profileHead'>BELLA PARK   |   박정현</h3><h5 id='profileStat'>Title in MOI’M: JUNIOR MOTION GRAPHICS DESIGNER<br>Industry: COMPUTER ART/MOTION GRAPHICS<br><br>MOTTO: Do it Yourself<br>모토: 스스로 해라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioBella();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQABella();return false;'>FUN FACTS</h4></div></div></div>";
var BellaBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>BELLA PARK   |   박정현</h3><p id='profileBio'>Bella Park is currently a Motion Graphics student at the School of Visual Arts in New York. She received her B.A. in Film, TV & Multimedia at Korea National University of<br> Arts in Korea. To explore her visual languages as an artist, Bella enjoys observing her surroundings and the people around her. Based on her understandings of visual<br> effects that she have acquired through experiences at both broadcasting and corporate companies, she hopes to create high quality moving images to visualize<br> personal reflections on her interests and/or imagination.<br><br>현재 뉴욕 School of Visual Arts에서 모션 그래픽을 전공. 한국예술종합학교에서 방송영상학과 학사 취득. 예술인으로서의 시각적 소통법를 넓히고자 그녀는 항상 주변과 사람들을 관찰하는 것을 즐긴다.<br>방송국와 미디어 회사에서의 경험을 바탕으로 그녀는 자신의 관심사와 상상력을 시각적으로 잘 표현해주는 작품활동을 하고 싶다.</p><h4 id='mainButton' onclick='showBella();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQABella();return false;'>FUN FACTS</h4></div>";
var BellaQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>BELLA PARK   |   박정현</h3><p id='profileQuestions1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I’d have a picnic<br><br><span id='question'>Q: Perfect Day?</span><br>A: New Year’s Eve<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Kumdo competition<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: Google maps / New York is big.</p><p id='profileQuestions2'><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 피크닉을 가겠다.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 12월 31일<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 검도시합…<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 구글 맵 / 뉴욕은 참 넓다.</p><h4 id='mainButton' onclick='showBella();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioBella();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****EunSung - creative
var EunSungIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEunSung();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/EunsungJeonBig.png'><h3 id='profileHead'>EUNSUNG JEON   |   전은성</h3><h5 id='profileStat'>Title in MOI’M: PHOTOGRAPHER & EDITOR<br>Industry: PHOTOGRAPHY, PAINTING<br><br>MOTTO: What is bound to be accomplished will be<br> accomplished.<br>모토: 될 일은 된다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioEunSung();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAEunSung();return false;'>FUN FACTS</h4></div></div></div>";
var EunSungBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>EUNSUNG JEON   |   전은성</h3><p id='profileBio'>Eunsung Jeon graduated from the School of Visual Arts MPS Digital Photography in 2015, and currently works as a freelance photographer and a photo illustrator in New<br> York. Before coming to the States, Eunsung studied both western and Eastern art and thus has an understanding of a variety of styles. She studied the fine arts for most<br> of her art career and she currently incorporates this experience into her photography.<br><br>2015년 School of Visual Arts MPS Digital Photography 졸업하고 현재 프리랜서 사진가로 활동중. 서양 미술 뿐 아니라 학부에서 한국화와 중어중문학을 전공하며 동양 미술에 대한 이해를 키워왔다.<br> 오랜 기간 순수미술을 공부하였고 이를 바탕으로 현재 그림과 사진을 융합하는 작업을 이어오고 있다.</p><h4 id='mainButton' onclick='showEunSung();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAEunSung();return false;'>FUN FACTS</h4></div>";
var EunSungQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>EUNSUNG JEON   |   전은성</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Boqueria. A great place to have a glass of wine and enjoy tapas.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Samsara. A must see film for photographers or videographers. This silent film<br> shows a wide range of the visual language.<br><br><span id='question'>Q: Wildest Dream?</span><br>A: To go on a trip around the world with my camera and then afterwards<br> publishing a book about my experience.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: Cancun</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Boqueria. 가볍게 와인 한 잔과 타파스 먹기 좋은 곳.<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: Samsara. 사진가 혹은 비디오그래퍼라면 한번 쯤은 꼭 봤으면 하는 영화.<br> 무언(대사가 없)는 영화이지만 시각적인 언어가 굉장히 다채로운 영화<br><br><span id='question'>Q: 최고의 꿈?</span><br>A: 아무 걱정 없이 카메라 들고 세계여행, 그 후에 책 출간하기.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 칸쿤</p><h4 id='mainButton' onclick='showEunSung();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioEunSung();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Seung - creative
var SeungIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSeung();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/SeunghoParkBig.png'><h3 id='profileHead'>SEUNGHO BRIAN PARK   |   박승호</h3><h5 id='profileStat'>Title in MOI’M: JUNIOR PHOTOGRAPHER & EDITOR<br>Industry: ECONOMICS<br><br>MOTTO: Creativity is inventing, experimenting, growing,<br> taking risks, breaking rules, making mistakes, and having<br> fun – MARY LOU COOK<br>모토: 창의성은 발명하고, 실험하고, 성장하고, 모험하고, 규칙을 위반하고, 실수<br>하고, 즐기는 것이다 – 메리 루 쿡</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSeung();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASeung();return false;'>FUN FACTS</h4></div></div></div>";
var SeungBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>SEUNGHO BRIAN PARK   |   박승호</h3><p id='profileBio'>Seungho Brian Park spent most of his childhood in the New York metropolitan area and is currently attending Stony Brook University majoring in Economics.<br> Photography has become a recent passion of Seungho. He loves the way a simple still photo can tell thousands of different stories and this passion drives him to<br> continue to work on his craft. In addition to photography, during his free time, Seungho enjoys traveling and trying different types of cuisine from around the world.<br><br>현재 스토니브룩 대학교에서 경제학 전공 중. 사진에 입문을 하고 난 이후 단 한 번도 사진에 대한 열정을 잊은 적이 없음. 한 장의 사진이 수천 가지의 이야기를 담을 수 있다는 것에 매력을 느낌. 여행을 좋아하고<br> 전 세계 각 지역 특색이 담긴 음식을 먹어보는 것을 즐김.</p><h4 id='mainButton' onclick='showSeung();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQASeung();return false;'>FUN FACTS</h4></div>";
var SeungQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>SEUNGHO BRIAN PARK   |   박승호</h3><p id='profileQuestions1'><span id='question'>Q: Dream Vacation?</span><br>A: I have heard that in 100 years the Maldives will be completely under water. I<br> want to personally visit the Maldives to share with future generations the beauty<br> of the islands.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: My friend recommended that I watch Paris, Je T’Aime. When I first watched<br> the movie I found it both shocking and new and interesting at the same time. I<br> realized that such a movie can be considered artistic and it opened my eyes to<br> the freedom of art<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: I calculate how much longer I can sleep based on how long it will take me to<br> go to school and then I regret wasting 15 minutes.<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: I’m scared of cats. Actually, I just don’t like them. Sometimes when I look at<br> cats, I think they can read our minds.</p><p id='profileQuestions2'><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 100년안에 몰디브가 침몰한다고 들었다. 앞으론 몰디브에 가보지 못하는 나의 후손들에게 몰디브의<br> 아름다움을 전하기 위해 직접 느껴보고 싶다.<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 지인의 추천으로 “Paris, Je T’Aime” 라는 영화를 보았다. 충격적이면서도 신선하게 다가왔다. 처<br>음으로 이런 영화도 예술이 될 수가 있다고 느낀 후 예술의 자유로움을 배웠다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 학교까지 걸리는 시간을 고려하여 얼마나 더 잘 수 있는지를 계산한다. 그러고 15분을 날린 걸 후회한<br>다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 고양이를 무서워한다. 아니 너무 싫다. 고양이들은 인간이 무슨 생각을 하고 있는지 아는 것 같다.</p><h4 id='mainButton' onclick='showSeung();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioSeung();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Whitney - creative
var WhitneyIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutWhitney();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/WhitneyLovettBig.png'><h3 id='profileHead'>WHITNEY LOVETT</h3><h5 id='profileStat'>Title in MOI’M: VIDEO PRODUCER<br>Industry: FILM AND TV<br><br>MOTTO: At the end of hardship comes happiness.<br>모토: 고생 끝에 낙이 온다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioWhitney();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAWhitney();return false;'>FUN FACTS</h4></div></div></div>";
var WhitneyBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>WHITNEY LOVETT</h3><p id='profileBio'>Whitney Lovett was born in Texas but grew up in Florida, right across the street from Walt Disney World. In college, she studied Radio, TV & Film, with a minor in<br> Journalism and Japanese. During her time in school, she was a founding member and later president and historian for the University of North Texas’s Korean Culture<br> Exchange Club. She also spent a summer studying abroad in Japan, as well as a year in Seoul, South Korea at Yonsei University. Previously, Whitney has written for<br> major music magazines, and worked at a local TV station, an independent film studio in Austin, Texas, and a live event company showcasing corporate, award and<br> fashion shows. Whitney is new to the Big Apple, so when she isn’t busy applying for jobs, you can find her snuggled up with Kimchi (her cat, not the food).<br><br>텍사스에서 태어나 플로리다 디즈니월드 옆에서 자람. 대학에서 RTVF 전공, 저널리즘과 일본어를 부전공. UNT의 한국문화교류클럽의 창립멤버, 회장, 서기 역임. 일본에서 여름학기와 연세대학교에서<br> 1년 교환학생으로 공부. 과거에 주요 음악 잡지, TV방송국, 영화 스튜디오와 라이브 이벤트 회사에서 일한 경력이 있는 뉴욕 새내기. 고양이의 이름이 ‘김치’.</p><h4 id='mainButton' onclick='showWhitney();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAWhitney();return false;'>FUN FACTS</h4></div>";
var WhitneyQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>WHITNEY LOVETT</h3><p id='profileQuestions1'><span id='question'>Q: Inspirational Film?</span><br>A:  Singing in the Rain, it inspired my love for classic films, dance, and music.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: Backpacking across Europe.<br><br><span id='question'>Q: Perfect Day?</span><br>A: My perfect day would be reading a book by the window or watching dramas,<br> cuddled up with my cat.<br><br><span id='question'>Q: Idol?</span><br>A: Walt Disney, Gene Kelly & TOP</p><p id='profileQuestions2'><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A:  Singing in the Rain을 통해 고전 영화, 춤, 음악에 대한 큰 영감을 받았다.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 유럽​​ 전역에 걸친 배낭 여행.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 창가에서 책을 읽거나 고양이랑 드라마를 보는 것.<br><br><span id='question'>Q: 당신만의 우상?</span><br>A: 월트 디즈니, 진 켈리, TOP</p><h4 id='mainButton' onclick='showWhitney();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioWhitney();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ***pr**
var prIn="<div id='megaTeam'><p class='marquee'>“People do not buy goods and services. They buy relations, stories and magic.” Seth Godin</p><h2 id='leaderHeading'>PUBLIC RELATIONS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In our current society where image is everything, it is important to maintain positive relationships with others<br>while projecting our brand during successful event promotion.<br>The Public Relations Team is responsible for communication with external constituents and all online and offline promotion of our events.</h5><div id='prSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='prOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='prSlideFunction1();return false;'><div class='memeberOne'><div id='prMemberOnePic' onclick='showProfileSungjun();return false;'></div></div><div class='memeberTwo'><div id='prMemberTwoPic' onclick='showProfiledodo();return false;'></div></div><div class='memeberThree'><div id='prMemberThreePic' onclick='showProfileCharlotte();return false;'></div></div></div></div>";
var prIn1="<div id='megaTeamA'><div id='prSlide2'><div id='rewindArrow' src = '/assets/rewind.png' onclick='prRewind();return false;'>TEAM MENU</div><img id='backArrow' src = '/assets/arrowBack.png' onclick='prSlideFunction2();return false;'></h5><div class='memeberOne'><div id='prMemberFourPic' onclick='showProfileHenry();return false;'></div></div><div class='memeberTwo'><div id='prMemberFivePic' onclick='showProfileHanna();return false;'></div></div><div class='memeberThree'><div id='prMemberSixPic' onclick='showProfileMinji();return false;'></div></div></div></div>";
var prIn2="<div id='prSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='prOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='prSlideFunction1();return false;'><div class='memeberOne'><div id='prMemberOnePic' onclick='showProfileSungjun();return false;'></div></div><div class='memeberTwo'><div id='prMemberTwoPic' onclick='showProfiledodo();return false;'></div></div><div class='memeberThree'><div id='prMemberThreePic'onclick='showProfileCharlotte();return false;'></div></div></div>";
// ***

// ***Sungjun
var SungjunIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSungjun();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/SungjunYoonBig.png'><h3 id='profileHead'>SUNGJUN YOON   |   윤성준</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, PUBLIC RELATIONS<br>Industry: INDUSTRIAL DESIGN<br>Email: Sungjun@moimnewyork.com<br><br>MOTTO: Always turn a negative situation into a positive<br> situation – Michael Jordan<br>모토: 부정적인 상황이 오면 그것을 긍정적인 상황으로 바꾸어라 – 마이클 조던</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSungjun();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASungjun();return false;'>FUN FACTS</h4></div></div></div>";
var SungjunBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>SUNGJUN YOON   |   윤성준</h3><p id='profileBio'>Sungjun Yoon is currently studying Product Design at Parsons The New School of Design. Prior to coming to the U.S., Sungjun studied Mechanical Engineering at Dankook<br> University in South Korea and served in the Republic of Korea Air Force for two years. In high school, Sungjun was a member of the planning team of his high school<br> magazine editorial department.<br><br>파슨스 디자인 스쿨에 2학년 제품 디자인과 재학중. 미국에 오기전 단국대학교 기계공학과에 1년간 재학후 2년동안 공군에서 헌병으로 군복무를 마친후<br>파슨스 디자인스쿨에 재입학하였음. 고등학교때 교지편집 부 “씨알소리” 에서 3년동안 기획부 활동.</p><h4 id='mainButton' onclick='showSungjun();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQASungjun();return false;'>FUN FACTS</h4></div>";
var SungjunQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>SUNGJUN YOON   |   윤성준</h3><p id='profileQuestions1a'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Tea Drunk (Chinese tea bar, 123 E 7th St).<br><br><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would eat delicious food, aka Korean barbecue.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Oblivion because it has a good story and amazing scenes.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Turn off my alarm.<br><br><span id='question'>Q: Perfect Day?</span><br>A: Sitting on a couch, drinking beer and taking a nap.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Tea Drunk (Chinese tea bar, 123 E 7th St).<br><br><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 맛있는 음식을 먹겠다. 고기.<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 오블리비언. 멋진 장면들과 참신한 스토리를 보여준 오블리비언.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 알람끄기.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 소파에 앉아 맥주마시면서 낮잠 청하기.</p><h4 id='mainButton' onclick='showSungjun();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioSungjun();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***dodo
var dodoIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutdodo();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/DoYonKwonBig.png'><h3 id='profileHead'>DO YON KWON   |   권도연</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, PUBLIC RELATIONS<br>Industry: FINANCE<br>Email: doyon@moimnewyork.com<br><br>MOTTO: Boys, Be ambitious! – Williams S. Clark<br>모토: 소년이여, 야망을 가져라! – 윌리엄 S. 클라크</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBiododo();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAdodo();return false;'>FUN FACTS</h4></div></div></div>";
var dodoBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>DO YON KWON   |   권도연</h3><p id='profileBio'>Do Yon Kwon graduated from Columbia University School of Applied Sciences and Engineering in 2013, with both a Bachelor of Science in Financial Engineering<br>and a Master of Science in Operations Research. She is currently in finance, working as a Market Research Assistant in the Portfolio Management Team<br>of WBI Investments. During her time at Columbia, Do Yon participated in various student activities including the Korean Students Association,<br>Smart Woman Securities, and Multicultural Business Association. Do Yon is very excited to be out of school. She likes movies, speakeasy bars, teddy bears,<br>and sleeping in late. She is also a pretty good squash player.<br><br>2013년 컬럼비아 공과대학교에서 금융공학 학사와 산업공학 및 운용 과학 석사 졸업. 현재는 WBI Investments 자산운용사에서 Market Research Assistant로 일하고 있음.<br>학부시절 교내외의 다양한 학생활동에 참여. 영화감상, speakeasy 바, 테디 베어와 늦잠자는 것을 즐기고 스쿼시 실력이 뛰어남.</p><h4 id='mainButton' onclick='showdodo();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAdodo();return false;'>FUN FACTS</h4></div>";
var dodoQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>DO YON KWON   |   권도연</h3><p id='profileQuestions1'><span id='question'>Q: Something that your friends do not know about you?</span><br>A: I weigh more than I look.<br><br><span id='question'>Q: Wildest Dream?</span><br>A: I eloped with one of the hottest Korean movie stars and he actually courted me<br> first.<br><br><span id='question'>Q: Perfect Day?</span><br>A: A day with a full schedule from dawn to midnight.<br><br><span id='question'>Q: Inspiration?</span><br>A: Still seeking for a life-lasting inspiration<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: An application told me I am a 90% match to Seo Taiji with my hair up and my<br> glasses on</p><p id='profileQuestions2'><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 보기보다 무거움.<br><br><span id='question'>Q: 최고의 꿈?</span><br>A: 한국 톱 남자배우와 사랑의 도피를 했는데 믿거나 말거나 그분이 먼저 대쉬했음.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 아침부터 저녁까지 스케쥴이 꽉찬 날.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 계속 영감을 받기 위해 사방팔방으로 노력 중.<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 아이폰 푸딩카메라 앱으로 머리묶고 안경쓰고 사진 찍으니 90% 서태지 닮았다고 나옴. 매우 영광이<br>었음.</p><h4 id='mainButton' onclick='showdodo();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBiododo();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***Charlotte
var CharlotteIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutCharlotte();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/CharlotteKwonBig.png'><h3 id='profileHead'>CHARLOTTE KWON   |   권예은</h3><h5 id='profileStat'>Title in MOI’M: PR TEAM ANALYST<br>Industry: BUSINESS<br><br>MOTTO: Live as if you were to die tomorrow. Learn as if you<br> were to live forever. – MAHATMA GANDHI<br>모토: 내일 죽을 것처럼 살고 영원히 살 것처럼 배우라 – 마하트마 간디</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioCharlotte();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQACharlotte();return false;'>FUN FACTS</h4></div></div></div>";
var CharlotteBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>CHARLOTTE KWON   |   권예은</h3><p id='profileBio'>Charlotte Kwon is currently a student at New York University pursuing a bachelor’s degree in Economics while double minoring in Child and Adolescent Mental Health<br> Studies (CAMS) and Chemistry. She is an editor for the CAMS newsletter, a Global Ambassador for NYU London and holds a position in the Publicity Committee for the<br> NYU Student Senators Council. She is also currently working at Scholastic Corporation as an Operations Analyst and is preparing to start her career post graduation.<br><br>뉴욕대학교경제학과 전공이며, 여러 학교활동에 참여를 하면서 Scholastic Corporation에서 Operations Analyst으로 일을하고있다.<br>지난 1년동안 유럽에 있으면서 세계 여행을 꿈꾸게되고, 긴 산책과 요리를 즐겨한다.</p><h4 id='mainButton' onclick='showCharlotte();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQACharlotte();return false;'>FUN FACTS</h4></div>";
var CharlotteQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>CHARLOTTE KWON   |   권예은</h3><p id='profileQuestions1'><span id='question'>Q: Dream Vacation?</span><br>A: Turkey. As the center of the Eastern and Western world, it has always been a<br> destination of mine.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: One of my favorite movies is L’intouchable. It is a perfectly funny and touching<br> story of two men.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: Since we are always walking in New York, I feel like I say “Excuse Me” the most.<br><br><span id='question'>Q: Perfect Day?</span><br>A: Wouldn’t a perfect day just be about relaxing and spending time with loved<br> ones?</p><p id='profileQuestions2'><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 터키. 세계의 중심으로서, 터키 문화와 사람들을 더 알고싶은 마음에 정말 가고싶은 곳중에 하나다.<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 내가 최근에 감명깊게 본 영화는 프랑스의 언터처블이다. 너무나 코믹하면서 뜻 깊은 두 사람에 대한<br> 얘기통해서 인종차별, 믿음 과 아픔을 극복하는 것까지 다 느낀 영화다.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: 뉴욕에서는 걸어다니는게 끊임 없는것 같아서 “Excuse Me” 를 가장 많이 말하지 않을까…<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 완벽한 하루는 아마 사랑하는 가족과 친구들과 함께 시간을 보내면서 먹고 쉬는게 아닐까…</p><h4 id='mainButton' onclick='showCharlotte();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioCharlotte();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ****Henry - pr
var HenryIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutHenry();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/HenryKwonBig.png'><h3 id='profileHead'>HENRY KWON   |   권흥선</h3><h5 id='profileStat'>Title in MOI’M: PR TEAM ANALYST<br>Industry: FINANCE<br><br>MOTTO: “Hey look, did you try doing it?” – Ju-yung Chung,<br> the founder of Hyundai Group.<br>모토: “이봐, 해봤어?” -현대그룹 창업주 고 아산 정주영 명예회장</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioHenry();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAHenry();return false;'>FUN FACTS</h4></div></div></div>";
var HenryBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>HENRY KWON   |   권흥선</h3><p id='profileBio'>Heung Sun (Henry) Kwon grew up in four different cities (Seoul, Auckland, Dallas, and New York) before coming to New York University Leonard N. Stern School of<br> Business in 2010 to major in Finance and Statistics. He served as an interpretation sergeant in the Ministry of National Defense, Republic of Korea Army from 2013 to 2015<br>. Since his military service, he has been through a couple of boutique investment banking internships. Upon graduation (which he anticipates in May 2016), Henry plans to<br> work in the financial industry.<br><br>서울, 오클랜드, 댈러스, 뉴욕 등에서 자랐으며 2010년 뉴욕대학교에 금융과 통계학 전공으로 입학. 2013년부터 2015년까지 국방부 육군 통역병으로 군 복무를 하였으며, 복학 후 여러 투자은행에서<br> 인턴사원으로 재직. 2016년 5월에 학부 졸업 예정이며 추후 금융권에 종사하길 희망.</p><h4 id='mainButton' onclick='showHenry();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAHenry();return false;'>FUN FACTS</h4></div>";
var HenryQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>HENRY KWON   |   권흥선</h3><p id='profileQuestions1'><span id='question'>Q: Dream Vacation?</span><br>A: Hawaii. Waikiki gives you peace of mind.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: The Pursuit of Happyness. The greatness of hope, diligence and faithfulness in<br> the midst of extreme adversity. A 117-minute-long vitamin when life gives you<br> lemons.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Being positive.<br><br><span id='question'>Q: Inspiration?</span><br>A: The founder of the Hyundai Group Ju-yung Chung, my father, The Quiett.</p><p id='profileQuestions2'><span id='question'>Q. 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 하와이. 와이키키 해변가는 지상 낙원.<br><br><span id='question'>Q. 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 행복을 찾아서. 극한의 역경 속에서 희망과 근면 및 성실의 위대함을 잘 보여주는 영화. 지치고 힘들때<br> 나에게 117분짜리 비타민이 되는 영화.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 긍정적인 마음 가짐 유지.<br><br><span id='question'>Q: 당신만의 우상?</span><br>A: 고 아산 정주영, 내 아버지, The Quiett</p><h4 id='mainButton' onclick='showHenry();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioHenry();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Hanna - pr
var HannaIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutHanna();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/HannaLeeBig.png'><h3 id='profileHead'>HANNA LEE   |   이한나</h3><h5 id='profileStat'>Title in MOI’M: PR TEAM ANALYST<br>Industry: MARKETING<br><br>MOTTO: “Success occurs when opportunity meets<br> preparation.” – Zig Ziglar<br>모토: “성공은 기회는 준비된 자에게만 주어진다.” – 지그 지글러</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioHanna();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAHanna();return false;'>FUN FACTS</h4></div></div></div>";
var HannaBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>HANNA LEE   |   이한나</h3><p id='profileBio'>Hanna Lee is currently a senior at Baruch College majoring in Marketing and Psychology. She is interested in advertising, planning, customer analysis and branding.<br> Recently she worked as a Production Intern and as an online marketing intern.<br><br>버룩대학교 마케팅 전공과 심리학 부전공으로 4학년에 재학 중임. 광고와 기획, 소비자 행동 분석과 브랜딩에 관심이 있으며. 최근에는 Production Intern과 온라인 마케팅 인턴으로 일함.</p><h4 id='mainButton' onclick='showHanna();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAHanna();return false;'>FUN FACTS</h4></div>";
var HannaQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>HANNA LEE   |   이한나</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: The Bronte Burger at Ruby’s is much better than Shake Shack’s burger! Since<br> everything on the menu tastes delicious, it is highly recommended to go with a<br> large group and share multiple dishes.<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)? Why?</span><br>A: I use Yelp the most because I like to look for good restaurants with my friends.<br> Since I can find a good restaurant no matter where I am with the Yelp app, I use<br> it often.<br><br><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would use all of the money in my savings.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Although I say that I’m going to start exercising every month, it is extremely<br> difficult to put it into action.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야 하는 레스토랑은?</span><br>A: Ruby’s 의 Bronte 햄버거는 Shake Shack 햄버거보다 훨씬 더 맛있음.<br> 이 곳 메뉴는 다 맛있으니 여러 명이 가서 나눠 먹는 것을 추천.<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: Yelp. 친구들과 맛집 찾아다니길 좋아해 Yelp 앱을 자주 사용함. 어디에 있든 Yelp 앱만 있으면 그<br> 근처 맛집을 찾을 수 있어서 애용함.<br><br><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 내일 지구가 종말 한다면 난 오늘 통장에 있는 돈을 모두 쓰겠다.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 매번 운동하기로 항상 마음은 먹지만 행동으로 실천하는 것이 너무 어려움.</p><h4 id='mainButton' onclick='showHanna();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioHanna();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Minji - pr
var MinjiIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutMinji();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/MinjiSongBig.png'><h3 id='profileHead'>MINJI SONG | 송민지</h3><h5 id='profileStat'>Title in MOI’M: PR TEAM ANALYST<br>Industry: FASHION<br><br>MOTTO: Rowing with just one oar, I lost that oar. For the first<br> time I looked round at the wide stretch of water – Ko Un<br> (Flowers of a Moment)<br>모토: 노를 젓다가 노를 놓쳐버렸다. 비로소 넒은 물을 돌아다보았다 – 고은 (순<br>간의꽃)</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioMinji();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAMinji();return false;'>FUN FACTS</h4></div></div></div>";
var MinjiBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>MINJI SONG | 송민지</h3><p id='profileBio'>Minji Song received her B.A. in Biological Sciences from the University of Connecticut (UConn) in 2013. During her time at UConn, Minji was an exchange student at<br> Yonsei University in Korea. She was a member of the 7 Wonders of Jeju Global Student Representative Group and also the Event Coordinator and Publicist of the UConn Korea<br> Student Association. After graduating from UConn, Minji worked as a Marketing Assistant at Prudential Douglas Elliman in New York and is currently a student in<br> Fashion Business at the Fashion Institute of Technology (FIT). She also writes articles about fashion and culture for the ONE STEP AHEAD webpage<br> (http://studynsurvive.tistory.com).<br><br>코네티컷대학교에서 생물과학(Biological Sciences)을 전공하고 2013년 졸업. 학부 재학당시 한국 연세대학교에서 교환학생으로도 공부하였고 제주-세계7대자연경관 글로벌유학생홍보대사단 활동경험도 있다.<br> UConn 한인회에서 Event Coordinator/Publicist로 활동. 졸업 후 뉴욕 Prudential Douglas Elliman Real Estate회사에서 Marketing Assistant로 일하다가 2014년 부터 Fashion Institute of<br> Technology 패션비지니스 전공으로 재학중이다. 현재 ONE STEP 앞서가는 남자S 페이지에서 (http://studynsurvive.tistory.com) 패션/컬처 관련 글을 쓰고있다.</p><h4 id='mainButton' onclick='showMinji();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAMinji();return false;'>FUN FACTS</h4></div>";
var MinjiQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>MINJI SONG | 송민지</h3><p id='profileQuestions1'><span id='question'>Q: Inspirational Film?</span><br>A: 500 Days of Summer. 1. It makes you to think about fate and destiny in your<br> daily life; 2. It is a typical movie that is atypical. It is a really good movie. 3. It<br> features my favorite actor, Zooey Deschanel.<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps) and<br> why?</span><br>A: Instagram. 1. It has the charm to make something out of nothing. It encourages<br> you to think creatively and brings inspiration from everyday items. 2. It is more<br> private than other apps.<br><br><span id='question'>Q: Inspiration?</span><br>A: Biking. Taking pictures of food. Eating. Late nights before I go to sleep.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Not dropping my phone. Exercising on an empty stomach.</p><p id='profileQuestions2'><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 500일의 썸머. 1. 살아가면서 생각해보게 되는 우연과 운명의 관계들에 대한 여운2. 평범한데 평범하<br>지않은 / 그냥 정말 괜찮은 영화3. 제일좋아하는 주이디샤넬 주연영화<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 인스타그램 / 1.무에서 유를 창조해주는 매력. 그냥 길거리를 걸어도 항상 창의적으로 생각하게끔 자극<br>해주는, 평범함에서 영감을 주는 매력?! 2. 다른 앱들보다 더 개인적인 (private) 매력!<br><br><span id='question'>Q: 영감을 주는 것들?</span><br>A: 자전거타기. 음식사진찍기. 먹을 때. 자기전 늦은 밤시간.<br><br><span id='question'>Q: 가장 어려운 것들?</span><br>A: 핸드폰 안 떨어뜨리기. 공복에 운동하기.</p><h4 id='mainButton' onclick='showMinji();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioMinji();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ***soar**
var soarIn="<div id='megaTeam'><p class='marquee'>“We make a living by what we get, but we make a life by what we give.” Winston Churchill</p><h2 id='leaderHeading'>SOCIAL OUTREACH AND RESPONSIBILITY (SOAR) TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Social Outreach & Responsibility Team (SOAR) understands the power of connecting MOI’M’s activities with organizations with the pursuit of shared<br> value. It works to partner with organizations to implement meaningful ways to transform the quality of life in local and international communities<br>and inspire action in MOI’M’s network.</h5><div id='soarSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='soarOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='soarSlideFunction1();return false;'><div class='memeberOne'><div id='soarMemberOnePic' onclick='showProfileEsther();return false;'></div></div><div class='memeberTwo'><div id='soarMemberTwoPic' onclick='showProfileAlison();return false;'></div></div><div class='memeberThree'><div id='soarMemberThreePic' onclick='showProfileYooSun();return false;'></div></div></div></div>";
var soarIn1="<div id='megaTeamA'><div id='soarSlide2'><div id='rewindArrow' src = '/assets/rewind.png' onclick='soarRewind();return false;'>TEAM MENU</div><img id='backArrow' src = '/assets/arrowBack.png' onclick='soarSlideFunction2();return false;'><div class='memeberOne'><div id='soarMemberFourPic' onclick='showProfileKatie();return false;'></div></div></div></div>";
var soarIn2="<div id='soarSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='soarOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='soarSlideFunction1();return false;'><div class='memeberOne'><div id='soarMemberOnePic' onclick='showProfileEsther();return false;'></div></div><div class='memeberTwo'><div id='soarMemberTwoPic' onclick='showProfileAlison();return false;'></div></div><div class='memeberThree'><div id='soarMemberThreePic'onclick='showProfileYooSun();return false;'></div></div></div>";
// ***

// ***Esther
var EstherIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEsther();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/EstherSinBig.png'><h3 id='profileHead'>ESTHER SIN   |   신지은</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, SOCIAL OUTREACH AND<br> RESPONSIBILITY<br>Industry: DEVELOPMENTAL PSYCHOLOGY<br>Email: esther@moimnewyork.com<br><br>MOTTO: Becoming is better than being – Carol Dweck<br>모토: 어떤 사람이 되어가는 과정이(becoming), ‘나는 어떤 사람인가’ 라는 존<br>재 자체(being)보다 중요하다 – Carol Dweck (스탠포드 대학 심리학 교수)</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioEsther();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAEsther();return false;'>FUN FACTS</h4></div></div></div>";
var EstherBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>ESTHER SIN   |   신지은</h3><p id='profileBio'>Esther worked in brand consulting for five years before she made a complete career shift into psychology. In May 2014, she graduated from Teachers College at<br> Columbia University with a M.A. in Clinical Psychology. Esther served as the Director of Alumni Relations and VP of Events at the Columbia University Korean Graduate<br> Student Association. Esther was raised in Kenya, Moscow, Seoul, Chicago, and New York. Her personal and research interests are in philanthropy, children’s<br> character development, and parenthood. She received her B.S. in Business Administration at Boston University School of Management. Esther currently interns at the New York<br> State Psychiatric Institute. Esther loves ramen, and she hopes to make another career shift in her 60’s.<br><br>심리학으로 전과하기 전 브랜드 컨설팅에 5년간 종사했다. 2014년 5월, 콜럼비아대학교 교육대학원에서 임상심리학 석사 과정을 마쳤으며, 대학원 시절 한인학생회에서 동문관계 & 행사국장으로 활동했다.<br>케냐, 모스크바, 서울, 시카고, 그리고 뉴욕에서 자랐다. 그녀의 개인적 그리고 연구적 측면에서의 관심 분야는 박애, 아동의 성격 발달, 그리고 부모이다. 보스톤 대학교에서 경영학으로 학사를 취득했다.<br>현재 뉴욕 주 정신의학 연구소에서 인턴으로 근무 중이다. 라면을 무척 좋아한다. 그녀는 60대에 또 한번의 진로 변경을 희망한다.</p><h4 id='mainButton' onclick='showEsther();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAEsther();return false;'>FUN FACTS</h4></div>";
var EstherQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>ESTHER SIN   |   신지은</h3><p id='profileQuestions1'><span id='question'>Q: The first thing you do when you wake up?</span><br>A: (1) Throw my hands and legs up in the air (2) stretch my arms and legs while<br> hoping I’ll grow a few centimeters in the process (3) Say hello to God<br><br><span id='question'>Q: Wildest dream?</span><br>A: In all seriousness, marrying GD.<br><br><span id='question'>Q: Inspiration?</span><br>A: Children: their unfiltered opinions, their imagination, their smiles, their<br> curiosity, and their capacity to love and believe.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Living life to the fullest with the mindset that there might be no tomorrow so I<br> should live today trying to become a better person, sharing, loving, laughing and<br> forgiving.</p><p id='profileQuestions2'><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: (1) 팔과 다리를 공중에 띄운다 (2) 몇 센치미터라도 자라길 바라며 팔과 다리를 스트레치 한다 (3)<br> 하나님께 인사한다<br><br><span id='question'>Q: 최고의 꿈?</span><br>A: 지드래곤이랑 결혼한다. 무조건<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 아이들. 아이들의 순수한 생각, 상상력, 웃음, 호기심 그리고 서로 사랑하고 신뢰하는 큰 능력.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 오늘이 마지막이 될수도 있다는, 그래서 오늘도 최선을 다해 성장하고, 나누고, 사랑하고, 웃고, 용서하<br>는것.</p><h4 id='mainButton' onclick='showEsther();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioEsther();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***Alison
var AlisonIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAlison();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/AlisonChangBig.png'><h3 id='profileHead'>ALISON CHANG   |   장현주</h3><h5 id='profileStat'>Title in MOI’M: ANALYST<br>Industry: SOCIOLOGY, HISTORY<br><br>MOTTO: This too shall pass.<br>모토: 이것 또한 지나갈 것이다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAlison();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAlison();return false;'>FUN FACTS</h4></div></div></div>";
var AlisonBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>ALISON CHANG   |   장현주</h3><p id='profileBio'>Alison Chang was born in Seoul, Korea and with the exception of a year when she was one, she has lived in Korea her entire life. Alison attended the same international school<br> for thirteen years with the same small group of students. Currently, she attends Columbia University, studying Sociology and History.<br><br>서울 태생. 기억도 나지 않는 갓난아기 시절, 한살 때 1년을 제외하곤 평생을 한국에서 살은 토박이다. 같은 국제학교를 13년동안 다녔고 이 시간을 소그룹의 학우들과 죽 함께 보냈다. 현재 콜럼비아 대학에서<br> 사회학과 역사학을 전공.</p><h4 id='mainButton' onclick='showAlison();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAAlison();return false;'>FUN FACTS</h4></div>";
var AlisonQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>ALISON CHANG   |   장현주</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Tacqueria Diana near St. Mark’s place<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Good Will Hunting. Robin Williams was pure genius in that movie and Matt<br> Damon isn’t bad to look at either.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: Someday, I really want to visit Ireland.<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: I absolutely hate taking photos.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Tacqueria Diana. 위치는 St. Mark’s place 주변에 있다.<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 굿윌헌팅. Robin Williams는 완전 천재였고, Matt Damon도 마음에 들었다.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 아일랜드에 언젠가 꼭 가보고 싶다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 사진찍는 걸 정!말! 싫어한다.</p><h4 id='mainButton' onclick='showAlison();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioAlison();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***YooSun
var YooSunIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYooSun();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/YooSunHongBig.png'><h3 id='profileHead'>YOO SUN HONG   |   홍유선</h3><h5 id='profileStat'>Title in MOI’M: ANALYST<br>Industry: INVESTMENT, ADVOCACY<br><br>MOTTO: “Elizabeth Said. Life does not work as the way you<br> think. But, it is nice to think life does not work the way you<br> expect it to be. Because it means magical things can<br> happen!” – from Anne of Green Gables<br>모토: “엘리자가 말했어요. 세상은 생각대로 되지 않는다고. 하지만 생각대로 되<br>지 않는다는 건 정말 멋진 것 같아요. 생각지도 못했던 일이 일어난다는 것이니까<br>요!” – 빨간 머리 앤 중에서</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioYooSun();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAYooSun();return false;'>FUN FACTS</h4></div></div></div>";
var YooSunBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>YOO SUN HONG   |   홍유선</h3><p id='profileBio'>Yoo Sun Hong currently works as an Investment Consultant at KOTRA (Korea Trade-Investment Promotion Agency). She received her B.A. in International Relations and<br> Social Psychology from Smith College. She studied abroad in Geneva, Switzerland her junior year. She is one of the founding members of the community service group,<br> Global Apple Seeds; and was a board member of Smith College Asian Student Association. From her past experience at several international NGO/NPOs and<br> governmental organizations, Yoo Sun developed interest in advocacy, public relations, and marketing. She loves meeting new people and learning and trying out new<br> things. She also loves skiing and skating.<br><br>2014년 12월 Smith College 국제관계와 사회심리를 복수전공으로 졸업. 현재 코트라 뉴욕 무역관에서 투자유치 컨설턴트로 일하고 있음. 대학교 3학년 때 스위스 제네바에서 교환학생 체험. 교환학생 당시<br> 국제 비정부기구에서 인턴십 경험 및 유엔 미팅 참석. 유학생 봉사단체인 글로벌 애플시즈의 창립회원이며, 대학교 때 Asian Student Association의 회원으로 활동함. 여러 인턴활동, 봉사활동을 하며, 홍보,<br> 마케팅, 대외관계 분야에 관심이 생겼고, 새로운 사람을 만나고, 새로운 것들을 배우고, 도전하는 것을 매우 즐김. 5살 때부터 스키와 스케이트를 즐김.</p><h4 id='mainButton' onclick='showYooSun();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAYooSun();return false;'>FUN FACTS</h4></div>";
var YooSunQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>YOO SUN HONG   |   홍유선</h3><p id='profileQuestions1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would spend time with my mom, dad, and little sister eating my dad’s<br> delicious Mentaiko Pasta, Yakisoba, and butter Chapagetti; and then, we would<br> go for a bicycle ride at Han-river under the stars shining in the night sky. It would<br> be the most memorable and happiest last day on earth.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: I am hungry. Let’s go eat something sweet!<br><br><span id='question'>Q: Inspiration?</span><br>A: People who always smile, have a positive attitude, and stay<br> devoted/passionate.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: Soo-Ae, Jung Ryeo-won, and Sunmi from the Wondergirls?</p><p id='profileQuestions2'><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 엄마, 아빠, 동생과 함께 세상에서 제일 맛있는 아빠표 명란 파스타, 야키소바, 버터 짜파게티를 함께<br> 맛있게 먹으며 수다를 떨다가, 밤늦게 한강에서 별을 바라보며 자전거를 탈 것이다. 정말 행복하고 기억에 남을<br> 지구에서의 마지막 날일 것 같다.<br><br><span id='question'>Q: 하루 중 가장 많이 하는 말은?</span><br>A: “배고파. 단 거 먹으러 가자!”<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 언제든지 환하게 웃고 긍정적인 사람들, 어떤 한 일에 열정적으로 몰두하고 미친 사람들<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 수애, 려원, 원더걸스 선미 (“분위기!” 가 닮았다는 소리를 많이 들음… 여러분 “얼굴”이 아니랍니<br>다…^-^)</p><h4 id='mainButton' onclick='showYooSun();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioYooSun();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ****Katie 
var KatieIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutKatie();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/KatieSuhBig.png'><h3 id='profileHead'>SEUNGYEON KATIE SUH   |   서승연</h3><h5 id='profileStat'>Title in MOI’M: ANALYST<br>Industry: EDUCATION<br><br>MOTTO: Be yourself; everyone else is already taken. – Oscar<br> Wilde<br>모토: 너 자신이 되라. 다른사람은 이미 있으니까. – 오스카 와일드.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioKatie();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAKatie();return false;'>FUN FACTS</h4></div></div></div>";
var KatieBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>SEUNGYEON KATIE SUH   |   서승연</h3><p id='profileBio'>SeungYeon Katie Suh is currently an undergraduate student at New York University studying Childhood Education and Childhood Special Education in the Steinhardt<br> School. She enjoys working with children and took a gap semester to volunteer at an elementary school in Costa Rica. In the past SeungYeon has worked with children<br> with autism spectrum disorder at the Alpine Learning Center. She hopes to further her education in the field of childhood education. She enjoys swimming, skating,<br> skiing, running, and rock climbing during her free time and hopes to one day master golfing as well.<br><br>현재 NYU에서 아동교육과 아동특수교육을 공부 중. 아이들을 좋아하고 한학기동안 코스타 리카의 초등학교에서 봉사활동을 하였음. 알파인 러닝 센터에서 자폐증 스펙트럼 장애아이들을 돌본 경험이 소중함.<br> 계속 아동교육에 전념할 계획. 여가시간에는 수영, 스케이트, 스키, 달리기, 암벽 등반을 즐기며, 골프 또한 잘 하고 싶은 욕심쟁이.</p><h4 id='mainButton' onclick='showKatie();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAKatie();return false;'>FUN FACTS</h4></div>";
var KatieQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>SEUNGYEON KATIE SUH   |   서승연</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A:  La Maison du Croque Monsieur. It’s a cozy little cafe-style French restaurant<br> nestled in Greenwich Village with an array of grilled sandwiches to choose from.<br> I highly recommend the Mr Edmund!<br><br><span id='question'>Q: Dream Vacation?</span><br>A: Switzerland. Skiing down the Swiss Alps in the morning and relaxing in the hot<br> springs at night.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Think of what to eat for breakfast.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: Somebody once told me that I look like a girl version of Korean comedian Shin<br> Dong Yup.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A:  La Maison du Croque Monsieur. 이곳은 Greenwich Village에 있는 프랑스풍의 작고 아<br>늑한 분위기를 가진 카페스타일의 음식점으로 다양한 샌드위치를 맛볼 수 있는 곳이다. 추천 메뉴는 Mr<br> Edmund이다.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 스위스. 낮에는 알프스 산맥에서 스키를 즐기고 밤에는 온천을 즐길 수 있는 멋진 곳이다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 오늘은 어떤 음식으로 나를 깨워볼까?<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 한번은 여자 신동엽같다는 말을 들었다.</p><h4 id='mainButton' onclick='showKatie();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioKatie();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ***it**
var itIn="<div id='megaTeam'><p class='marquee'>“The number one benefit of information technology is that it empowers people to do what they want to do.” Steve Ballmer</p><h2 id='leaderHeading'>IT TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In a generation where social and virtual networking is a core part of our lives, the IT Team understands the power that the internet can hold.<br>As the strategic masterminds of our website and online platforms, our IT Team ensures that MOI’M’s mission is translated into the virtual space through our website.</h5><div id='itSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='itSlideFunction1();return false;'><div class='memeberOne'><div id='itMemberOnePic' onclick='showProfileNah();return false;'></div></div><div class='memeberTwo'><div id='itMemberTwoPic' onclick='showProfileLarry();return false;'></div></div><div class='memeberThree'><div id='itMemberThreePic' onclick='showProfilePeter();return false;'></div></div></div></div>";
var itIn1="<div id='megaTeamA'><div id='itSlide2'><div id='rewindArrow' src = '/assets/rewind.png' onclick='itRewind();return false;'>TEAM MENU</div><img id='backArrow' src = '/assets/arrowBack.png' onclick='itSlideFunction2();return false;'><div class='memeberOne'><div id='itMemberFourPic' onclick='showProfileJunho();return false;'></div></div></div></div>";
var itIn2="<div id='itSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='itSlideFunction1();return false;'><div class='memeberOne'><div id='itMemberOnePic' onclick='showProfileNah();return false;'></div></div><div class='memeberTwo'><div id='itMemberTwoPic' onclick='showProfileLarry();return false;'></div></div><div class='memeberThree'><div id='itMemberThreePic'onclick='showProfilePeter();return false;'></div></div></div>";
// ***

// ***Nah
var NahIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutNah();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/NahLeeBig.png'><h3 id='profileHead'>NAH LEE   |   이나윤</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, BUSINESS STRATEGY &<br> DEVELOPMENT<br>Industry: BUSINESS<br>Email: nah@moimnewyork.com<br><br>MOTTO: Excellence over Success. If you achieve excellence,<br> success will automatically follow. – From my favorite college<br> professor, a lesson that I still live by<br>모토: 쫓아야 할 것은 물질적 성공이 아니라 그냥 잘 해내는 것이다. 탁월하게 잘<br> 해낸다면 성공은 저절로 뒤따를 것. – 대학교 졸업반때 유난히 진솔했던 한 교수<br>님이 가르쳐주신 진리, 아직도 사실이라 난 믿는다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioNah();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQANah();return false;'>FUN FACTS</h4></div></div></div>";
var NahBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>NAH LEE   |   이나윤</h3><p id='profileBio'>Nah Lee graduated from Columbia University’s School of Engineering in 2011 and studied Business at Georgia Tech until 2014. She has taught a core undergraduate<br> business course at Georgia Tech and currently teaches engineering research writing to graduate students and researchers in Korea while preparing her own startup.<br> Nah served as the president (2013-2014) and treasurer (2011-2013) of Georgia Tech Korean Student Association and director of IT management (2010-2011) of Columbia<br> University Korean Graduate Students Association. Nah seems to love to collect degrees; she holds three M.S. degrees, two in engineering and one in business. Nah<br> received her B.S. in Biomedical Engineering with a minor in Mathematics from University of Virginia in the good ‘ole Charlottesville.<br><br>2011년 컬럼비아 대학교 공대 대학원 졸업. 그 이후 조지아텍에서 경영학 공부. 현재 한국에서 이공계 대학원생 특강과 박사연구원님들 워크샵 강의. 프리랜서 강사로서 자유를 만끽하면서 스타트업 준비중.<br> 대학원시절 조지아텍서 22대 학생회장과 20-21대 재정국장, 컬럼비아서 44대 임원으로 활동. 의도치 않게 석사가 세개 생겼음. 전공이 다 달라서 다양한 방면에 잡지식이 많음. 학부는 또 생뚱맞게 생명의료공학을<br> 전공, 다행히 수학 부전공. 샬롯츠빌이라는 작은 시골도시의 버지니아 대학에서 수료.</p><h4 id='mainButton' onclick='showNah();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQANah();return false;'>FUN FACTS</h4></div>";
var NahQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>NAH LEE   |   이나윤</h3><p id='profileQuestions1'><span id='question'>Q: Inspirational Film?</span><br>A: The Korean movie Man in Love 2014. Actor Hwang Jung-Min will make you cry.<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: I check the Korean news through naver app every morning with coffee. I also<br> click through the IT news updates. When I am bored and hungry, I often use<br> Vingle and Pikicast to browse through ‘puppy’ and ‘food’ categories. I am sick of<br> scrolling through facebook and other blog/news apps, so I am fond of these<br> apps’ horizontal layout. At least for now, at least for awhile.<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: Because I spent the latest 14 years of my life studying in the U.S., a lot of<br> people assume that I am more American inside. While I understand both cultures,<br> I am actually very fond of the emerging Korean culture and its strengths. Not<br> many people would expect the amount of pride I have in holding a Korean<br> passport.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: Park Si-Yeon, Hyo-Yeon from Girls’ generation (a little bit), Gwak Jeong-Eun<br> (the feel she has), and I want to insist that I once looked like S.E.S Eugene.</p><p id='profileQuestions2'><span id='question'>Q. 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 최근에 본것으론 ‘남자가 사랑할 때’. 영화에서 황정민이 너무 못생겼는데 너무 멋져서. 못생기고 찌질<br>한 남자가 이리 멋있을 수가 있나. 난 잘생긴 남자가 이상형이었는데, 다시 써야겠다.<br><br><span id='question'>Q. 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 매 일아침 커피마시며 네이버앱을 통해 정치/사회/연예부 뉴스 확인, 그리고 IT업계소식 확인. 배고플<br>땐 Vingle 켜서 음식사진을 보고 심심할땐 pikicast 켜서 강아지사진을 보고 우쭈쭈한다. 빙글의 카드<br>방식과 피키의 넘김방식이 새롭고 좋다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 겉은 노란데 내속이 하얀지 노란지 심각하게 고민중. 청소년기부터 14년을 미국서 공부하며 살아서 다<br>들 내가 속이 하얗다고 생각하지만 꼭 그렇진 않다. 9-10년쯤 있었을때 가장 하얘졌다가 다시금 노래진<br> 느낌. 한국에서만 자란 친구들은 한국 특유의 장점들을 잘 모르는 듯하다. 대한민국 여권을 가진 의미는<br> 사실 내게 크다.<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 박시연, 효연약간, 곽정은 이미지만 닮음, 진짜 닮은건 권민중/정솔희. 어렸을때 S.E.S 유진과 똑닮았<br>던 적이 있었는데, 안타깝게도 내 얼굴이 매년 바뀐다.</p><h4 id='mainButton' onclick='showNah();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioNah();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***Larry
var LarryIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutLarry();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/LarryKimBig.png'><h3 id='profileHead'>LARRY KIM   |   김성재</h3><h5 id='profileStat'>Title in MOI’M: SEO ANALYST<br>Industry: DIGITAL MARKETING<br><br>MOTTO: Life is one room – Korean Saying<br>모토: 인생은 한방.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioLarry();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQALarry();return false;'>FUN FACTS</h4></div></div></div>";
var LarryBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>LARRY KIM   |   김성재</h3><p id='profileBio'>Larry Kim graduated from Duke University with a Master’s in Engineering Management. He is currently working at a digital marketing agency as a Search Specialist. He<br> is responsible for the tactical execution of all paid social and paid search campaigns by monitoring industry changes, data analysis, and translating those into actionable<br> recommendations to clients. Prior to graduate school, Larry worked at a medical software company for two years. He also received a B.S. in Biomedical Engineering with<br> a minor in Electrical Engineering and Mathematics at Syracuse University. He developed his interest in digital marketing during his time at graduate school and hopes to<br> grow within that field in the future. Larry also dedicates his free time to Milal Mission (New Jersey branch), a non-profit organization for people with special needs.<br><br>듀크대학교에서 공학경영학 석사학위 취득. 석사 진학 전 2년간 의료 소프트웨어 회사에서 근무. 시라큐스 대학교에서 생물의학공학 전공, 전기공학과 수학 부전공으로 학사 졸업.<br>석사 시절 콘텐츠마케팅에 관심을 느끼고 앞으로도 이 분야에 종사할 예정. 뉴져지 Milal Mission 이라는 비영리 단체를 통해 봉사 활동에도 전념.</p><h4 id='mainButton' onclick='showLarry();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQALarry();return false;'>FUN FACTS</h4></div>";
var LarryQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>LARRY KIM   |   김성재</h3><p id='profileQuestions1b'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: Cook and eat ramyun for the one last time.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Check my phone.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: Sick<br><br><span id='question'>Q: Perfect Day?</span><br>A: Wings, beer, and good company</p><p id='profileQuestions2'><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다</span><br>A: 한 그릇의 마지막 라면을 먹겠다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 전화기 확인.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: 죽이네~<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 좋은 사람들과 치맥.</p><h4 id='mainButton' onclick='showLarry();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioLarry();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***Peter
var PeterIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutPeter();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/PeterHahnBig.png'><h3 id='profileHead'>PETER HAHN   |   한태건</h3><h5 id='profileStat'>Title in MOI’M: WEB DEVELOPER (FULL STACK, UX/UI)<br>Industry: COMPUTER SCIENCE<br><br>MOTTO: God and family above all.<br>모토: 신과 가족을 최우선으로.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioPeter();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAPeter();return false;'>FUN FACTS</h4></div></div></div>";
var PeterBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>PETER HAHN   |   한태건</h3><p id='profileBio'>Peter Hahn is a Freelance Web Developer. As a graduate of General Assembly, he has created some interesting work currently on the web (www.peterhahn.me). He is<br> also a songwriter/producer currently working with a Korean Entertainment company looking to debut as an Indie<br>Rock artist. He is known to be pretty zany – so watch out.<br><br>General Assembly 졸업생으로 프리랜서 웹 개발자로 활동. 이 외에도 작곡가와 프로듀서 활동중이며 한국 연예 기획사를 통해 인디락 가수로 데뷔 준비중이다. 현재 그<br>의 웹사이트 www.peterhahn.me 통해 그의 흥미로운 작업을 접할수 있다.</p><h4 id='mainButton' onclick='showPeter();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAPeter();return false;'>FUN FACTS</h4></div>";
var PeterQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>PETER HAHN   |   한태건</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Not sure if this place is much of a secret but I like The Mandoo Bar.<br><br><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would pray for my loved ones.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Sing a melody with these birds flying around in my room.<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)? Why?</span><br>A: Voice Recorder. I enjoy writing songs – it’s very useful.</p><p id='profileQuestions2'><span id='question'>Q. 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: The Mandoo Bar. 나만 아는곳은 아니지만 뉴욕에서 내가 가장 좋아하는 음식점.<br><br><span id='question'>Q. 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 사랑하는 사람들을 위해서 기도하겠다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 방에 날아다니는 새들과 멜로디 노래하기.<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: Voice Recorder. 작곡하는 것을 좋아하기 때문에 매우 유용함.</p><h4 id='mainButton' onclick='showPeter();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioPeter();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ****Junho 
var JunhoIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutJunho();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/JunhoRheeBig.png'><h3 id='profileHead'>JUNHO RHEE   |   이준호</h3><h5 id='profileStat'>Title in MOI’M: WEB DEVELOPER<br>Industry: COMPUTER SCIENCE<br><br>MOTTO: It ain’t over till it’s over. – Yogi Berra<br>모토: 끝날 때까지 끝난 게 아니다. – 요기 베라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioJunho();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAJunho();return false;'>FUN FACTS</h4></div></div></div>";
var JunhoBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>JUNHO RHEE   |   이준호</h3><p id='profileBio'>Junho was born in North Carolina, USA, but grew up in South Korea. He moved back to the United States for undergraduate study in 2008 since he wanted to get<br> education in the United States. Junho graduated from SUNY Stony Brook majoring in business management and economics. After working for three years as data<br> analyst at Samsung Electronics, he recently decided to change career to web programming and attended General Assembly NYC.<br><br>노쓰캐롤라이나에서 태어났지만 한국에서 자랐다. 학부공부를 미국에서 하고 싶어서 2008년에 미국으로 돌아왔다. 뉴욕 주립대 – 스토니 브룩에서 경영학과 경제학을 전공하였다. 삼성전자에서<br> data analyst로서 3년간 근무 후, 웹프로그래밍으로 커리어를 전환하기 위해 최근 General Assembly NYC를 수료하였다.</p><h4 id='mainButton' onclick='showJunho();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAJunho();return false;'>FUN FACTS</h4></div>";
var JunhoQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>JUNHO RHEE   |   이준호</h3><p id='profileQuestions1a'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Cafe Havana. The mexican corn is really good.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Gladiator. I love watching action movies.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: The cayman Islands. I went there last year and it was amazing.<br><br><span id='question'>Q: Idol?</span><br>A: Jisung Park (soccer player)</p><p id='profileQuestions2'><span id='question'>Q. 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Cafe Havana. 맛있는 멕시칸 스타일 옥수수.<br><br><span id='question'>. 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: Gladiator. 액션 영화 보는 것을 좋아해서.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: The cayman Islands. 작년에 다녀왔는데 최고의 휴양지였음<br><br><span id='question'>Q: 당신만의 우상?</span><br>A: 축구선수 박지성</p><h4 id='mainButton' onclick='showJunho();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioJunho();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ***it**
var itIn="<div id='megaTeam'><p class='marquee'>“The number one benefit of information technology is that it empowers people to do what they want to do.” Steve Ballmer</p><h2 id='leaderHeading'>IT TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In a generation where social and virtual networking is a core part of our lives, the IT Team understands the power that the internet can hold.<br>As the strategic masterminds of our website and online platforms, our IT Team ensures that MOI’M’s mission is translated into the virtual space through our website.</h5><div id='itSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='itSlideFunction1();return false;'><div class='memeberOne'><div id='itMemberOnePic' onclick='showProfileNah();return false;'></div></div><div class='memeberTwo'><div id='itMemberTwoPic' onclick='showProfileLarry();return false;'></div></div><div class='memeberThree'><div id='itMemberThreePic' onclick='showProfilePeter();return false;'></div></div></div></div>";
var itIn1="<div id='megaTeamA'><div id='itSlide2'><div id='rewindArrow' src = '/assets/rewind.png' onclick='itRewind();return false;'>TEAM MENU</div><img id='backArrow' src = '/assets/arrowBack.png' onclick='itSlideFunction2();return false;'><div class='memeberOne'><div id='itMemberFourPic' onclick='showProfileJunho();return false;'></div></div></div></div>";
var itIn2="<div id='itSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='itSlideFunction1();return false;'><div class='memeberOne'><div id='itMemberOnePic' onclick='showProfileNah();return false;'></div></div><div class='memeberTwo'><div id='itMemberTwoPic' onclick='showProfileLarry();return false;'></div></div><div class='memeberThree'><div id='itMemberThreePic'onclick='showProfilePeter();return false;'></div></div></div>";
// ***

// ***advisory**
var advisoryIn="<div id='megaTeam'><p class='marquee'>“The people with the best advice are usually the ones who who have been through the most.” Unknown</p><h2 id='leaderHeading'>ADVISORY COUNCIL</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Comprised of attorneys and seasoned professionals, the Advisory Council provides advice and suggestions on issues related to policy,<br>strategy, and the law to help dictate the action behind the scenes.</h5><div id='advisorySlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='advisoryOut();return false;'><div class='memeberOne'><div id='advisoryMemberOnePic' onclick='showProfileSung();return false;'></div></div><div class='memeberTwo'><div id='advisoryMemberTwoPic' onclick='showProfileJeongSeok();return false;'></div></div></div></div>";
var advisoryIn2="<div id='megaTeamA'><div id='advisorySlide2'><img id='backArrow' src = '/assets/arrowBack.png' onclick='advisorySlideFunction2();return false;'><div class='memeberOne'><div id='advisoryMemberOnePic' onclick='showProfileSung();return false;'></div></div><div class='memeberTwo'><div id='advisoryMemberTwoPic' onclick='showProfileJeongSeok();return false;'></div></div></div></div>";

// ***

// ***Sung
var SungIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSung();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/SungChoiBig.png'><h3 id='profileHead'>SUNG CHOI   |   최성혁</h3><h5 id='profileStat'>Title in MOI’M: ADVISOR<br>Industry: LAW<br><br>MOTTO: Life, Liberty, and the pursuit of happiness – United<br> States Declaration of Independence<br>모토: 삶, 자유, 그리고 행복의 추구 – 미국 독립 선언문 중에서.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSung();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASung();return false;'>FUN FACTS</h4></div></div></div>";
var SungBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>SUNG CHOI   |   최성혁</h3><p id='profileBio'>Sung Choi graduated from Tulane University School of Law in 2005 and currently works as a corporate counsel at H Mart, a leading Korean-American supermarket<br> company based in New York. While in law school, Sung served as a treasurer of Asian Pacific American Law Student Association and was an active member of Public<br> Interest Law Foundation. He received his B.A. in Spanish from Hankuk University of Foreign Studies in Seoul and also attended University of Amsterdam Law School in<br> Holland to study European Union Law. Aside from work, he is an avid fan and supporter of the indie music industry.<br><br>2005년에 Tulane University 로스쿨 졸업. 현재 미국내 대형 유통업체인 H-Mart 의 법무팀에서<br> 사내 변호사로 근무중. 로스쿨 재학시 교내 Asian Pacific American Law Student Association 에서 Treasurer 로 활동 하였고, Public Interest Law Foundation 에 참여. 한국 외국어 대학교<br> 스페인어과를 졸업하였고, 네덜란드에 있는 University of Amsterdam 에서European Union Law 과정 수료. 인디 음악 및 공연 기획에 깊은 관심을 가지고 있다.</p><h4 id='mainButton' onclick='showSung();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQASung();return false;'>FUN FACTS</h4></div>";
var SungQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>SUNG CHOI   |   최성혁</h3><p id='profileQuestions1a'><span id='question'>Q: Inspirational Film?</span><br>A: Cinema Paradiso. Best kiss scenes ever. Best OST ever.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Fall asleep again.<br><br><span id='question'>Q: Perfect Day?</span><br>A: http://youtu.be/1e9npuzxPQQ<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Living with myself.</p><p id='profileQuestions2'><span id='question'>Q: 가장 감명깊게 본 영화는?</span><br>A: 시네마 천국. 최고의 키스신. 최고의 영화음악.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 다시 잔다.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: http://youtu.be/1e9npuzxPQQ<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 나 데리고 살기.</p><h4 id='mainButton' onclick='showSung();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioSung();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***JeongSeok
var JeongSeokIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutJeongSeok();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/JayYuBig.png'><h3 id='profileHead'>JEONGSEOK JAY YU   |   유정석</h3><h5 id='profileStat'>Title in MOI’M: ADVISOR<br>Industry: LAW<br><br>MOTTO: Never let your skill exceed your virtue – Korean<br> Saying<br>모토: 수단이 목적을 정당화 할 수 없다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioJeongSeok();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAJeongSeok();return false;'>FUN FACTS</h4></div></div></div>";
var JeongSeokBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>JEONGSEOK JAY YU   |   유정석</h3><p id='profileBio'>Jeongseok Jay Yu graduated from Harvard Law School in 2012 and currently works as a corporate associate at Simpson Thacher & Bartlett LLP. Jeongseok received his<br> B.A. in Psychology and Economics from Yale University, where he served as the president of the Korean International Student Organization (Hanppuri). In the past, he<br> worked for the Republic of Korea Army; the Ministry of Foreign Affairs, Republic of Korea; Seoul National University Law School; Hanhwa Investment and Securities;<br> Fujitsu (Japan); Nagashima Ohno & Tsunematsu (Japan); and Allen & Overy (Japan). In his free time, he enjoys photography, cinema, trekking, and quoting from comics.<br><br>2012 년 하버드 로스쿨 졸업. 현재 미국 대형로펌, Simpson Thacher & Bartlett LLP 에서 사내 변호사로 근무중. 예일대에서 경제학과 심리학을 복수전공 하였으며, 예일대 한인유학생회 학생회장으로 활동.<br>변호사로서 활동전 대한민국 육군, 외교부 국제협약과, 서울대로스쿨, 한화증권, 후지츠(日), 나가시마 오노(日), 알렌 앤드 오버리(日) 등에서 근무하였으며,<br>자유시간에는 사진, 영화, 트레킹을 즐기고 만화를 자주 인용함.</p><h4 id='mainButton' onclick='showJeongSeok();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAJeongSeok();return false;'>FUN FACTS</h4></div>";
var JeongSeokQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>JEONGSEOK JAY YU   |   유정석</h3><p id='profileQuestions1a'><span id='question'>Q: Dream Vacation?</span><br>A: Ladakh, India<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: Fighting!<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: I was honorably discharged upon completing my military service.<br><br><span id='question'>Q: Inspiration?</span><br>A: The Himalayas.</p><p id='profileQuestions2'><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 인도 라다크 지방<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: 화이팅!<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 병장말기전역.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 히말라야 산맥.</p><h4 id='mainButton' onclick='showJeongSeok();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioJeongSeok();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***contributors**
var contributorsIn="<div id='megaTeam'><p class='marquee'>“If you have a talent, use it in every which way possible. Don’t hoard it.” Brenda Francis</p><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div id='contributorsSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributorsSlideFunction1();return false;'><div class='memeberOne'><div id='contributorsMemberOnePic' onclick='showProfileJoslyn();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberTwoPic' onclick='showProfileAndrew();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberThreePic' onclick='showProfileFei();return false;'></div></div></div></div>";
var contributorsIn1="<div id='megaTeamA'><div id='contributorsSlide2'><div id='rewindArrow' src = '/assets/rewind.png' onclick='contributorsRewind();return false;'>TEAM MENU</div><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsSlideFunction2();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributorsSlideFunction3();return false;'><div class='memeberOne'><div id='contributorsMemberFourPic' onclick='showProfileYoon();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberFivePic' onclick='showProfileJi();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberSixPic' onclick='showProfileJieun();return false;'></div></div></div></div>";
var contributorsIn2="<div id='contributorsSlide1'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributorsSlideFunction1();return false;'><div class='memeberOne'><div id='contributorsMemberOnePic' onclick='showProfileJoslyn();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberTwoPic' onclick='showProfileAndrew();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberThreePic' onclick='showProfileFei();return false;'></div></div></div>";

var contributorsIn3="<div id='megaTeamA'><div id='contributorsSlide3'><div id='rewindArrow' src = '/assets/rewind.png' onclick='contributorsRewind1();return false;'>TEAM MENU</div><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsOut2();return false;'><div class='memeberOne'><div id='contributorsMemberSevenPic' onclick='showProfileGrace();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberEightPic' onclick='showProfileJong();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberNinePic' onclick='showProfileJai();return false;'></div></div></div>";
var contributorsIn4="<div id='megaTeamA'><div id='contributorsSlide2'><div id='rewindArrow' src = '/assets/rewind.png' onclick='contributorsRewind();return false;'>TEAM MENU</div><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsSlideFunction2();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributorsSlideFunction3();return false;'><div class='memeberOne'><div id='contributorsMemberFourPic' onclick='showProfileYoon();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberFivePic' onclick='showProfileJi();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberSixPic' onclick='showProfileJieun();return false;'></div></div></div>";

// ***Joslyn
var JoslynIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutJoslyn();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/JoslynKimBig.png'><h3 id='profileHead'>JOSLYN KIM | 김진영</h3><h5 id='profileStat'>Title in MOI’M: CONTRIBUTOR, FASHION<br>Industry: FASHION DESIGNER & ACTRESS<br><br>MOTTO: Absence diminishes small loves and increases great<br> ones, as the wind blows out the candle and fans the bonfire –<br> FRANCOIS LA ROCHEFOUCAULD<br>모토: 상대가 눈앞에 없어지면 보통사랑은 멀어지고 큰사랑은 더욱 커진다. 바람<br>이 불면 촛불은 꺼지고 큰불은 더 불길이 세지는 것처럼 – 라 로슈푸코</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioJoslyn();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAJoslyn();return false;'>FUN FACTS</h4></div></div></div>";
var JoslynBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>JOSLYN KIM | 김진영</h3><p id='profileBio'>Joslyn Kim is currently a student at Fashion Institute of Technology (FIT) studying Fashion Design. Every since she was young, Joslyn looked at objects with a different<br> point of view and this viewpoint led to her passion in the arts and fashion. She has worked as an assistant at various fashion shows and was a finalist from FIT for the<br> Council of Fashion Design Teen Vogue Scholarship. Since coming to New York, Joslyn has participated in short films and music videos as an actor and was actively<br> involved in the Korean Association of New York Art Schools (KANA).<br><br>현재 Fashion Institute of Technology Fashion Design 학부에 재학중이며 어렸을 때부터 사물을 보는 남들과는 다른 시각을 가지고 있던 성향이 예술 분야로 전공을 선택하도록 기여.<br>여러 fashion show assist 경력이 있으며, 2014에는 CFDA TEEN VOGUE에 FIT finalist로 출전. 뉴욕에 와서는 short film이나 뮤직비디오 등에 배우로 출연도 하며,<br>또한 예술 단체인 KANA안에서 활동을 했으며 painting 등 다양한 예술적 경험을 쌓았다.</p><h4 id='mainButton' onclick='showJoslyn();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAJoslyn();return false;'>FUN FACTS</h4></div>";
var JoslynQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>JOSLYN KIM | 김진영</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Taverna Kyclades, located in Astoria at the end of the N,Q lines.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Eight Below. This movie, which is based on a true story about a team of sled<br> dogs that encounter hardships while waiting 175 days for their owner to return, is<br> an inspirational film that shows us that human will is greater than we can<br> imagine.<br><br><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would spend the best day with my family and the people I love.<br><br><span id='question'>Q: Inspiration?</span><br>A: Nature and Earth.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Taverna Kyclades, Astoria 종점역에 위치<br><br><span id='question'>Q: 가장 감명깊게 본 영화는?</span><br>A: Eight Below,175일간 남극에서 대장이 돌아오기만을 기다리며 혹독한 환경에서 스스로 살아남은<br> 썰매개들의 실화를 바탕으로 만들어진 이 영화는 인간의 의지나 본성도 자신이 알고있는 것 보다 강하리<br>라는 생각과 희망을 주는 이야기이다.<br><br><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 사랑하는 사람들 가족들과 모두 함께 모여 가장 즐겁고 아름다운 날을 보내겠다.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 자연, 지구</p><h4 id='mainButton' onclick='showJoslyn();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioJoslyn();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***Andrew
var AndrewIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAndrew();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/AndrewLeeBig.png'><h3 id='profileHead'>ANDREW LEE | 이상규</h3><h5 id='profileStat'>Title in MOI’M: CONTRIBUTOR, FILM<br>Industry: FILM AND MEDIA STUDIES<br><br>MOTTO: Stay Focused.<br>모토: 초심을 잃지 말자.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAndrew();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAndrew();return false;'>FUN FACTS</h4></div></div></div>";
var AndrewBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>ANDREW LEE | 이상규</h3><p id='profileBio'>Andrew Sanggyu Lee, an M.A. student in the Film Studies Program at Columbia University School of the Arts, also holds an M.A. in Journalism and Mass Communication<br> from Korea University and a B.A. in Communication with a minor in History from Trinity University. He is keenly interested in cultural and critical media theories,<br> particularly as related to race and representation in journalism, television, and film. Raised in both Korea and the U.S., Andrew was exposed to different cultures at a<br> young age, which influenced his interest in the cross-cultural aspects of life. He also engages in various media production practices, including documentary filmmaking,<br> digital artworks via photoshop and other Adobe products, and blog posting. He currently serves as the president as well as the founder of the New York Media Insight<br> Council (a.k.a. NY MIC), a student organization that not only helps students acquire further knowledge in art, sociology, and philosophy, but also nurtures relationships<br> among Korean students from various background—art, philosophy, and humanities—who value visual art and public forums.<br><br>이상규는 미국 트리니티대학교 커뮤니케이션학과와 고려대학교 일반대학원 언론학과를 거치면서 현재 컬럼비아대학교 예술대학원에서 영화학을 공부하고 있다.<br>영화와 드라마 애호가로 미디어와 대중문화현상 전반에 대해 관심이 많다. 전공 탓인지 한국인의 미디어 사용법 행위, 영화와 드라마의 역사와 이론, 그 가운데서도 사회문화사에 큰 관심을 가지고 있다.<br>한국에서 방송국, 영화제작사, 홍보대행사 등에서 일하면서 여러 미디어계의 다양한 활동과 영역에 대해서 안목을 높일 수 있는 기회를 가졌다. 미디어에 관한 관심과 애정을 바탕으로 앞으로도 한국인의 삶,<br>한국문화와 밀접한 관련을 맺고 있는 다양한 주제에 관한 학문적 연구를 시도할 예정이다. 드라마 제작자의 인터뷰를 바탕으로 서술한 논문인 외에 영화평론, 인터뷰, 논문 등을 썼고, 쓰고 있다.</p><h4 id='mainButton' onclick='showAndrew();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAAndrew();return false;'>FUN FACTS</h4></div>";
var AndrewQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>ANDREW LEE | 이상규</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: As a graduate student with tons of class assignments every day, I usually don’t<br> have time to explore New York, which is really a shame. So I visit restaurants<br> that are near my school. I like to go to this diner called Deluxe, and there I order<br> Sautéed Salmon all the time. It looks good and tastes good, and the interior with<br> a refined atmosphere heightens the experience of food tasting. I really think it’s<br> a good place for students and lovers alike.<br><br><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would probably say “I like you” to the girl I have a crush on.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: Yaaaaaaaaaaaaaaaaaaaaawn!<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps) and<br> why?</span><br>A: I use Showtimes to see what’s playing in selected theaters. It’s a must have<br> app for film goers.<br><br><span id='question'>Q: Wildest Dream?</span><br>A: I want to meet a famous celebrity and have a good time with her</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 식당은?</span><br>A: 부끄러운 얘기지만 요즘 하도 학교 때문에 바빠서 뉴욕을 제대로 구경하지 못했고, 캠퍼스 근처 식당<br>밖에 모른다. 뛰어난 맛집은 아니지만 딜럭스(Deluxe)라는 다이너를 자주 찾아가서 Sauteed<br> Salmon(연어구이 리조또)를 자주 시킨다. 담백하고 고소한 맛이 내 입맛에 딱 맞아서, 항상 이 메뉴를<br> 시켜서 먹는다. 학교근처 식당이라 내부는 좁고 구석을 지나가기엔 불편함도 없지 않지만, 의외로 소소하<br>고 따스한 분위기가 전체적으로 느껴져서 연인들(특히 학생신분인 CC커플!)이 가기엔 딱 안성맞춤인 것<br> 같다.<br><br><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 최근에 짝사랑하고 있는 여자가 있는데 좋아한다고 고백을 할 것이다. “나 사실 너한테 관심 있는<br>데…”라고 첫마디를 건넬 듯…<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: 아아아와아아와아와아아아와아와아아아와아아앙아아아아앙~~~ (하품소리)<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: Showtimes이라는 영화앱이 있는데 현재 미국에서 상영하는 영화의 자세한 정보를 제공해 주고, 해<br>당 영화의 상영시간도 알려준다. 영화 애호가들에겐 필수 앱이다.<br><br><span id='question'>Q: 최고의 꿈?</span><br>A: 좋아하는 여자연예인과 달달한 시간을 보내고 싶다.</p><h4 id='mainButton' onclick='showAndrew();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioAndrew();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***Fei
var FeiIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutFei();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/FeiWangBig'><h3 id='profileHead'>FEI WANG</h3><h5 id='profileStat'>Title in MOI’M: CONTRIBUTOR, COMMUNICATIONS, CHINA<br>Industry: LUXURY FASHION MARKETING & MANAGEMENT<br><br>MOTTO: Treat others the way you want to be treated.<br>모토: 대접받고 싶은대로 남을 대접하라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioFei();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAFei();return false;'>FUN FACTS</h4></div></div></div>";
var FeiBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>FEI WANG</h3><p id='profileBio'>Fei Wang is a current second year MBA student at University of Missouri – Columbia majoring in Management. She participated in a study abroad exchange program in<br> Italy in 2014. Fei received her B.A. in International Administrative Management and Marketing at Missouri State University and Liaoning Normal University in China. She<br> and her friends own a fashion buyers’ shop in mainland China and provide personal shopping customer service. Fei also works with Leessang Company’s stylist team as<br> a stylist consultant and personal buyer for artists from Leessang Company.<br><br>페이는 현재 미주리 대학교 MBA과정에 재학중이다. 국제행정 및 마케팅전공으로 미주리 주립대학과 중국 랴오닝 대학에서 학사학위를 받았으며, 2014년에는 이탈리아에서 교환학생으로 공부하기도 했다.<br>친구와 함께 중국 본토에서 패션바이어를 위한 매장도 운영중이다. 또한 리쌍컴퍼니에서 스타일 컨설턴트 및 소속 아티스트의 개인 바이어로도 일하고 있다.</p><h4 id='mainButton' onclick='showFei();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAFei();return false;'>FUN FACTS</h4></div>";
var FeiQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>FEI WANG</h3><p id='profileQuestions1'><span id='question'>Q: Inspirational Film?</span><br>A: Hachi because it shows that love is unconditional.<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: Weibo because I like all of its functions and I have more than 42,000 followers<br> on it.<br><br><span id='question'>Q: Wildest Dream?</span><br>A: Opening the biggest buyers’ shop in China.<br><br><span id='question'>Q: Inspiration?</span><br>A: I like working and studying with people from different cultures and<br> backgrounds with passion and action.<br><br><span id='question'>Q: Idol?</span><br>A: Gary</p><p id='profileQuestions2'><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 하치 이야기. 사랑이란 무조건적임을 보여준 영화다.<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 웨이보. 기능도 마음에 들고 현재 4만2천명이 넘는 팔로워를 보유하고 있다<br><br><span id='question'>Q: 최고의 꿈?</span><br>A: 중국에서 가장 큰 패션바이어 매장을 여는 것<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 열정적이고 활동적인, 다른 문화와 배경을 가진 사람들과 함께 일하는 것.<br><br><span id='question'>Q: 최고의 아이돌?</span><br>A: 개리!</p><h4 id='mainButton' onclick='showFei();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioFei();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ****Yoon 
var YoonIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYoon();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/YoonKyungChoBig'><h3 id='profileHead'>YOON KYUNG CHO | 조윤경</h3><h5 id='profileStat'>Title in MOI’M: CONTRIBUTOR, EVENT SPECIALIST<br>Industry: FASHION DESIGN<br><br>MOTTO: Everything passes – Osamu Dazai’s No Longer<br> Human<br>모토: 그저 모든것은 지나갈 뿐 입니다 – 다자이 오사무 “인간실격”</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioYoon();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAYoon();return false;'>FUN FACTS</h4></div></div></div>";
var YoonBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>YOON KYUNG CHO | 조윤경</h3><p id='profileBio'>Yoon Kyung Cho is currently a student at Pratt Institute majoring in Fashion Design. In 2013 she was the Secretary of the Pratt Korean Student Association (PKSA) and in<br> 2014 she was the President of PKSA. She is currently a member of the Public Relation Team of the Korean Association of New York Artists (KANA).<br><br>현재 Pratt Institute, Fashion Design 학과에 재학중이며 학부 한인 학생회 PKSA (Pratt Korean Student Association) 에서 2013년 총무, 2014년 회장으로 활동하였다.<br> 2015년 현재, KANA (Korean Association of New York Artists)에서 홍보팀원으로 활동 중.</p><h4 id='mainButton' onclick='showYoon();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAYoon();return false;'>FUN FACTS</h4></div>";
var YoonQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>YOON KYUNG CHO | 조윤경</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Zenkichi located in Williamsburg. Not only is the food very nicely presented,<br> but it has a private atmosphere. I enjoy sharing this best-kept-secret with friends<br> and loved ones.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Eternal Sunshine of the Spotless Mind. Every time I watch the movie, I cry at a<br> different point in the film.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: Helsinki. It is a very clean city where each street, each building is inspired by<br> an interesting design. The city is also small enough that you can walk around the<br> city and naturally find inspiration wherever you go.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: I like to sleep and so I usually turn off my alarm and go back to sleep (that is<br> why I have 10 alarms set at 1 minute intervals)</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 레스토랑은?</span><br>A: Williamsburg 에 위치한 Zenkichi. 정갈한 음식은 물론 private한 공간과 분위기가 너무 좋아<br>서 소중한 사람들과의 친밀한 시간을 위한 곳<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: Eternal Sunshine 볼 때마다 다른 포인트에서 울게되는 영화<br><br><span id='question'>Q: 당 신이 가고 싶은/ 가봤었던 최고의 휴양지는?</span><br>A: Helsinki. 휴양지는 아니지만, 도시도 너무 깨끗하고 건물 하나, 골목마다 디자인이 스며들어있는 도<br>시이다. 도시도 작아서 여유롭게 돌아다니면서 inspiration을 찾기 너무 최적화된 도시.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 잠이 많은 편이라서 주로 알람을 끄고 다시 잔다 (그래서 알람을 1분마다, 10개정도 맞춰놓는 건 안비<br>밀)</p><h4 id='mainButton' onclick='showYoon();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioYoon();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Ji 
var JiIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutJi();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/JiInYooBig'><h3 id='profileHead'>JI IN YOO | 유지인</h3><h5 id='profileStat'>Title in MOI’M: CONTRIBUTOR, EVENT SPECIALIST<br>Industry: FASHION & COSMETICS BUSINESS<br><br>MOTTO: Don’t fear the future and don’t regret the past.<br> Human<br>모토: 미래를 두려워하지 말고 과거를 후회하지 말라.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioJi();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAJi();return false;'>FUN FACTS</h4></div></div></div>";
var JiBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>JI IN YOO | 유지인</h3><p id='profileBio'>The second out of four siblings (1 son, 3 daughters), Ji In Yoo has been ambitious and curious from a young age. If she wanted to do something,<br> she had to do it; if she wanted something, she had to have it; and if she had a question, she needed to know the answer. Ji In graduated from an arts high school<br> and she received her B.F.A. in Fashion Design from the Fashion Institute of Technology (FIT). After graduating, she worked as a fashion designer before moving to her current<br> job related to the cosmetics industry.<br><br>1남 3녀, 사형제 중에서 둘째로 태어나, 어렸을 때부터 욕심이 많고, 호기심이 많았다. 하고 싶은 것이 있으면 꼭 해야했고, 갖고 싶은 것이 있으면 가져야 했고, 궁금한 것이 있으면 알아야 했다.<br> 예술고등학교를 졸업했고, 뉴욕F.I.T에서 패션디자인을 전공한 후 패션디자이너로 일을 하다가, 지금은 화장품관련 일을 하고있다. “일하는 게 좋고, 사람만나는 걸 좋아하는 내가 앞으로 10년20년, 어떤 모습으로<br> 살고있을 지 정말 기대된다”</p><h4 id='mainButton' onclick='showJi();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAJi();return false;'>FUN FACTS</h4></div>";
var JiQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>JI IN YOO | 유지인</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Tomi Jazz. A small Japanese jazz bar/restaurant located on 53rd Street on the<br> Eastside. If you ring the doorbell next to the door, a Japanese waiter will open<br> the door for you. There is a happy hour every day until 7:30 pm and so you can<br> enjoy food and drinks at a reasonable price while enjoying jazz music. My<br> favorite dishes are their mentai pasta, omurice, and shumai. Due to its great<br> atmosphere and good food, Tomi Jazz is the perfect place for a date or to enjoy<br> with friends.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Although it is an old movie, my inspirational film is The Cure (Good Bye My<br> Friend). I remember watching it has a kid and bawling my eyes out.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: Greece. I really want to go to Greece. I want to go to the place where Son<br> Yejin rode her bicycle in an old Pocari Sweat commercial.<br><br><span id='question'>Q: Perfect Day?</span><br>A: Sweetness after bitterness. Hehehe A glass of cold beer with friends after<br> exercising or getting off of work.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Marriage</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: TOMI JAZZ. 53가 이스트에 위치한 조그마한 일본 재즈바 겸 레스토랑. 문 옆에 있는 초인종을 누<br>르면 점잖은 일본인 웨이터가 문을 열어준다. 매일 오후7:30까지는 해피아워로 음식도, 음료도 저렴한<br> 가격에 즐길 수 있고, 재즈음악도 즐길수 있다. 명란젓파스타와, 오므라이스, 슈마이는 내가 제일 좋아하<br>는 음식이다. 분위기도 좋고 음식맛도 좋아 데이트장소, 혹은 친구들끼리 방문하기 딱 좋은 장소이다.<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 아주 오랜된 영화인데 ,GOOD BYE MY FRIEND라는 영화. 어렸을 때, 정말 눈물 콧물 다 짜내면서<br> 봤던 영화다.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 그리스. 정말 가보고싶다. 예전에 손예진이 포카리 스웨트 광고에서 자전거 타고 내려오던… 바로 그<br> 곳!<br><br><span id='question'>Q: 완벽한 하루?</span><br>A: 고진감래! 운동 후 혹은 퇴근 후 친구와 맥주한잔??ㅋㅋㅋ<br><br><span id='question'>Q: 나에게 가장 큰 도전?</span><br>A: 결혼.</p><h4 id='mainButton' onclick='showJi();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioJi();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Jieun 
var JieunIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutJieun();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/JieunLimBig'><h3 id='profileHead'>JIEUN LIM | 임지은</h3><h5 id='profileStat'>Title in MOI’M: CONTRIBUTOR, SOCIAL OUTREACH AND<br> RESPONSIBILITY ANALYST<br>Industry: LAW<br><br>MOTTO: Live fearlessly, compassionately, and honestly<br>모토: 대담하게, 정답게 그리고 정직하게 살아라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioJieun();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAJieun();return false;'>FUN FACTS</h4></div></div></div>";
var JieunBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>JIEUN LIM | 임지은</h3><p id='profileBio'>Jieun Lim is currently a JD candidate at Harvard Law School. He graduated from Columbia University in 2014 with a Bachelor’s degree in Political Science and a<br> Concentration in East Asian Languages and Cultures. Prior to law school, Jieun was active in Columbia’s Korean Students Association (KSA), and continues to be involved<br> in the Korean Association of Harvard Law School (KAHLS). He enjoys hip-hop/urban dance, jazz piano, and teaching.<br><br>현재 하버드 로스쿨에 JD(Juris Doctor)과정으로 재학중이다. 콜럼비아 대학에서 정치학을 전공하고 동아시아 언어 및 문화학을 공부했으며 2014년 학사학위를 취득하였다.<br>콜럼비아 재학당시 학부학생회에서 활동하였고, 현재도 하버드 로스쿨 한인학생회에서 활동중이다. 힙합/얼반댄스, 재즈피아노 그리고 가르치는 일을 좋아한다.</p><h4 id='mainButton' onclick='showJieun();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAJieun();return false;'>FUN FACTS</h4></div>";
var JieunQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>JIEUN LIM | 임지은</h3><p id='profileQuestions1c'><span id='question'>Q: Something that my friends don’t know about me?</span><br>A: I like country music.<br><br><span id='question'>Q: What I do when I wake up?</span><br>A: Waste time. Then make my bed and take a shower..<br><br><span id='question'>Q: Inspiration?</span><br>A: Challenges.<br><br><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would call my family and friends to tell them I love them, but otherwise<br> continue to live life normally.</p><p id='profileQuestions2'><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 나는 컨트리음악을 좋아한다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 시간 낭비. 그 다음에 침대를 정리하고 샤워를 한다.<br><br><span id='question'>Q: 나에게 영감을 주는 것?</span><br>A: 도전<br><br><span id='question'>Q: 내일 지구의 종말이 온다면?</span><br>A: 식구들과 친구에게 전화를 걸어 사랑한다 말할 것이다. 그리고 똑같이 일상을 살아가겠다.</p><h4 id='mainButton' onclick='showJieun();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioJieun();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Grace - contributors
var GraceIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutGrace();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/GraceBatistaBig.png'><h3 id='profileHead'>GRACE BATISTA</h3><h5 id='profileStat'>Title in MOI’M: CONTRIBUTOR, JUNIOR DESIGNER<br>Industry: ART<br><br>MOTTO: “A coward dies a thousand times before his death,<br> but the valiant taste of death but once.” – William<br> Shakespeare, Julius Caesar<br>모토: “겁쟁이는 수십번 죽는듯 하지만, 용기있는 자는 죽음을 단한번 맛본다.” –<br> 셰익스피어의 줄리어스 시저에서</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioGrace();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAGrace();return false;'>FUN FACTS</h4></div></div></div>";
var GraceBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>GRACE BATISTA</h3><p id='profileBio'>GRACE BATISTA was born in Texas but grew up in Florida, right across the street from Walt Disney World. In college, she studied Radio, TV & Film, with a minor in<br> Journalism and Japanese. During her time in school, she was a founding member and later president and historian for the University of North Texas’s Korean Culture<br> Exchange Club. She also spent a summer studying abroad in Japan, as well as a year in Seoul, South Korea at Yonsei University. Previously, Grace has written for<br> major music magazines, and worked at a local TV station, an independent film studio in Austin, Texas, and a live event company showcasing corporate, award and<br> fashion shows. Grace is new to the Big Apple, so when she isn’t busy applying for jobs, you can find her snuggled up with Kimchi (her cat, not the food).<br><br>텍사스에서 태어나 플로리다 디즈니월드 옆에서 자람. 대학에서 RTVF 전공, 저널리즘과 일본어를 부전공. UNT의 한국문화교류클럽의 창립멤버, 회장, 서기 역임. 일본에서 여름학기와<br> 연세대학교에서 1년 교환학생으로 공부. 과거에 주요 음악 잡지, TV방송국, 영화 스튜디오와 라이브 이벤트 회사에서 일한 경력이 있는 뉴욕 새내기. 고양이의 이름이 ‘김치’.</p><h4 id='mainButton' onclick='showGrace();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAGrace();return false;'>FUN FACTS</h4></div>";
var GraceQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>GRACE BATISTA</h3><p id='profileQuestions1'><span id='question'>Q: Dream Vacation?</span><br>A: Busan, South Korea! I keep pictures of Busan on my desktop as inspiration.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: I use the word “Fancy” a lot. “Thats fancy”, “MIghty Fancy”, “Woah.. Fancy”. Its<br> my go to thing to say and I mean it, I really do think a lot of things are fancy.<br><br><span id='question'>Q: App that you use the most?</span><br>A: I use KakaoTalk Messenger A LOT. I had all my friends and boyfriend download<br> it. I just find it so much easier than regular texting. I also need those emojis to<br> express my feels without using words, and I’ve invested a good amount of<br> money buying those emojis.<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: My middle name is Victoria. I don’t introduce myself as Victoria, I go by Grace.<br> If my mother introduces me to someone then she’ll introduce me as Victoria.<br> Everyone in my family calls me Victoria and all my friends know me as Grace.</p><p id='profileQuestions2'><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 부산. 부산의 사진을 컴퓨터 배경화면으로 저장해둘 정도로 가보길 기대하고 있음.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: Fancy. 자주 쓰는 말이지만 정말 많은 것들이 “Fancy” 하다고 생각함.<br><br><span id='question'>Q: 가장 자주 사용하는 앱은? 이유는?</span><br>A: 카카오톡 메신저. 일반 문자 메시지보다 사용하기 편리하고 카카오톡 이모티콘을 통해서 말로 표현하<br>기 힘든 감정들을 표현할 수 있어서.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 내 Middle Name이 Victoria라는 것. 모든 가족은 나를 Victoria라고 부르지만 나는 나 자신을<br> 친구들에게 Grace라고 소개하기 때문에.</p><h4 id='mainButton' onclick='showGrace();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioGrace();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Jong - contributors
var JongIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutJong();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/JongSunParkBig'><h3 id='profileHead'>JONG SUN PARK   |   박종선</h3><h5 id='profileStat'>Title in MOI’M: CONTRIBUTOR, PHOTOGRAPHY<br>Industry: PHOTOGRAPHY</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioJong();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAJong();return false;'>FUN FACTS</h4></div></div></div>";
var JongBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>JONG SUN PARK   |   박종선</h3><p id='profileBio'>Jongsun Park is Vancouver based photographer. He was born in Seoul Korea and moved to Canada at age of 10. He enjoys traveling., has passion for food and is a big<br> time soccer lover. If he is not taking photos, he is either playing soccer or will be out on adventure to find a new location to shoot.<br><br>축구선수에겐 공 하나면, 요리사에게는 칼 하나면 하루를 즐겁게 보낼수 있듯이 나에겐 사진기 하나만 있으면 하루종일 심심할 시간이 없다. 하루를 관찰하고, 사람들의 행동을 훔처보고 방에 살포시 들어오는<br> 빛한줄기가 아침부터 저녁까지 벽을타고 움직이는 모습만 보고있어도 하루가 즐겁다.</p><h4 id='mainButton' onclick='showJong();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAJong();return false;'>FUN FACTS</h4></div>";
var JongQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>JONG SUN PARK   |   박종선</h3><p id='profileQuestions1a'><span id='question'>Q: Wildest Dream?</span><br>A: Flying over the Amazon during sunset while having a beer.<br><br><span id='question'>Q: Perfect Day?</span><br>A: When I take a perfect photo that I can use in my portfolio.<br><br><span id='question'>Q: Idol?</span><br>A: Vivian Maier.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: Messi</p><p id='profileQuestions2'><span id='question'>Q: 최고의 꿈?</span><br>A: 맥주 한 병을 마시며, 석양이 지는 아마존 상공을 비행하는 것.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 내 포트폴리오에 담을 수 있는 완벽한 사진을 찍었을 때.<br><br><span id='question'>Q: 당신만의 우상?</span><br>A: 비비안 마이어<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 메시</p><h4 id='mainButton' onclick='showJong();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioJong();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Jai - contributors
var JaiIn ="<div id='megaPerson'><div id='megaPerson1'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutJai();return false;'><div id='megaPersona1'><img id='profilePic' src = '/assets/JaiYoonLeeBig'><h3 id='profileHead'>JAI YOON LEE   |   이재윤</h3><h5 id='profileStat'>Title in MOI’M: CONTRIBUTOR, PHOTOGRAPHY<br>Industry: PHOTOGRAPHY<br>Website: http://www.jaiyoonlee.com<br><br>MOTTO: Dream as if you will live forever; Live as if you will<br> die today. – James Dean<br>모토: 내일 죽을 것처럼 오늘을 살고, 영원히 살 것처럼 꿈을 꿔라. – 제임스 딘이</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioJai();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAJai();return false;'>FUN FACTS</h4></div></div></div>";
var JaiBio ="<div id='megaPersona2'><h3 id='profileHeadBio'>JAI YOON LEE   |   이재윤</h3><p id='profileBio'>Jai Yoon received her BF.A. in Photography and Imaging with a minor in Business Studies from Tisch School of the Arts at New York University. She served as the director<br> of public affairs of NYU Korean International Student Organization from 2010 to 2013. Mostly raised in Korea, Jai Yoon lived in Japan for four years, and spent one school<br> year in Spokane, Washington. She also studied in Havana, Cuba for one semester her junior year. Jai Yoon currently works as a photographer at Moss Creation and Cly<br> By Chung. She likes to watch movies, make books, and cook.<br><br>뉴욕대학교 티쉬 예술학부 사진 전공, 경영 부전공. 학부 재학 중 한인학생회 임원으로 3년간 활동. 고등학교 졸업까지 한국에서 했지만 어렸을 때 일본에서 4년, 미국에서 1년 거주. 학부 3학년 때 한 학기동안<br> 쿠바에서 교환학생 생활. 현재 Moss Creation 과 Cly By Chung 에서 포토그래퍼로 활동 중. 영화 감상, 책 만들기, 요리를 좋아한다.</p><h4 id='mainButton' onclick='showJai();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAJai();return false;'>FUN FACTS</h4></div>";
var JaiQA ="<div id='megaPersona3'><h3 id='profileHeadBio'>JAI YOON LEE   |   이재윤</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: A Spanish restaurant called Sevilla in Greenwich Village. I accidentally found<br> this restaurant and fell in love with everything about it ― the food, atmosphere,<br> interior design, and of course sangria. It is also a memorable spot because I’ve<br> been there with the most special people in my life.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Eternal Sunshine of Spotless Mind. I first watched this movie when I was 15, but<br> I couldn’t understand anything. Then, I watched it again 10 years later. This<br> movie made me think and question a lot about relationships and memories.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Brew coffee and pack my lunch.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: Min-a Shin, Maki Goto, Chae-young Han from 50 yards away. Believe it or not.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Greenwich Village에 있는 Sevilla 라는 스페인 레스토랑. 원래 다른 식당 가려다가 우연히 이<br> 곳에 왔는데 반했다. 음식은 물론 따뜻한 분위기도 좋고, 상그리아까지 한잔 하면 금상첨화다. 소중한 사<br>람들과 같이 간 곳이라 더욱 더 특별하다.<br><br><span id='question'>Q: 가장 감명깊게 본 영화는?</span><br>A: Eternal Sunshine of Spotless Mind. 15살 때 보고 전혀 이해하지 못했지만 작년에 다시 보고<br> 비로소 제대로 본 영화라 특별하다. 사람들 사이의 관계, 그리고 그 기억에 대해 많은 생각을 하게 만든<br> 영화다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 커피 끓이고 점심으로 먹을 도시락 싸기.<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 신민아, 고토 마키, 50미터 한채영. 믿거나 말거나.</p><h4 id='mainButton' onclick='showJai();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioJai();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****

// ***

var sensor = false;


// rewind

function leadershipRewind(){
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(leaderOut2);
  }, 10);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(leaderIn2); 
  }, 0);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(leaderOut); 
  }, 700);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(teamIn); 
    }, 690);
}

function eventsRewind(){
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(eventsOut2);
  }, 10);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(eventsIn2); 
  }, 0);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(eventsOut); 
  }, 700);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(teamIn); 
    }, 690);
}

function creativeRewind(){
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(creativeOut2);
  }, 10);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(creativeIn2); 
  }, 0);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(creativeOut); 
  }, 700);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(teamIn); 
    }, 690);
}

function creativeRewind1(){
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(creativeOut4);
  }, 10);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(creativeIn3); 
  }, 0);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(creativeOut2);
  }, 700);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(creativeIn2); 
  }, 690);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(creativeOut); 
  }, 1400);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(teamIn); 
    }, 1380);
}

function prRewind(){
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(prOut2);
  }, 10);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(prIn2); 
  }, 0);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(prOut); 
  }, 700);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(teamIn); 
    }, 690);
}

function soarRewind(){
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(soarOut2);
  }, 10);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(soarIn2); 
  }, 0);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(soarOut); 
  }, 700);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(teamIn); 
    }, 690);
}


function itRewind(){
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(itOut2);
  }, 10);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(itIn2); 
  }, 0);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(itOut); 
  }, 700);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(teamIn); 
    }, 690);
}


function advisoryRewind(){
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(advisoryOut2);
  }, 10);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(advisoryIn2); 
  }, 0);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(advisoryOut); 
  }, 700);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(teamIn); 
    }, 690);
}


function contributorsRewind(){
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(contributorsOut2);
  }, 10);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(contributorsIn2); 
  }, 0);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(contributorsOut); 
  }, 700);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(teamIn); 
    }, 690);
}

function contributorsRewind1(){
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(contributorsOut4);
  }, 10);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(contributorsIn3); 
  }, 0);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(contributorsOut2);
  }, 700);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(contributorsIn2); 
  }, 690);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(contributorsOut); 
  }, 1400);
  setTimeout(function() {
  $('#teamContent').remove();
  $('body').append(teamIn); 
    }, 1380);
}
// ***


// *****

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

