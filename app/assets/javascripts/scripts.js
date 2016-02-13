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

var teamIn ="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><div id='leadershipTeamPic' onclick='leaders();return false;'></div><div id='eventTeamPic'></div><div id='creativeTeamPic'></div><div id='prTeamPic'></div><div id='soarTeamPic'></div><div id='itTeamPic'></div><div id='advisoryTeamPic'></div><div id='contributorsPic'></div></div>"
var teamOut ="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><div id='leadershipTeamPic'></div><div id='eventTeamPic'></div><div id='creativeTeamPic'></div><div id='prTeamPic'></div><div id='soarTeamPic'></div><div id='itTeamPic'></div><div id='advisoryTeamPic'></div><div id='contributorsPic'></div></div>"
var leaderIn="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberOnePic' onclick='showProfileYeong();return false;'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'></div></div></div>"
var leaderIn1="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberFourPic'></div></div></div>"
var leaderIn2="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberOnePic'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'></div></div></div>"

var leaderOut="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberOnePic'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'></div></div></div>"
var leaderOut1="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberOnePic'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'></div></div></div>"
var leaderOut2="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberFourPic'></div></div></div>"

var leaderOutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberOnePic'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'></div></div></div>"
var leaderInFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberOnePic' onclick='showProfileYeong();return false;'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'></div></div></div>"



var YeongIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeong();return false;'><img id='profilePic' src = '/assets/yeongLimBig.png'><h3 id='profileHead'>YEONG LIM   |   임영광</h3><h5 id='profileStat'>Title in MOI’M: Co-CEO & Co-Founder<br>Industry: MEDIA<br>Email: yeong@moimnewyork.com<br><br>MOTTO: When life give you mangos…<br>모토: 삶이 우리에게 망고를 준다면</h5><h4 id='bioButton' onclick='showBioYeong();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAYeong();return false;'>Q & A</h4></div>"
var YeongOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeong();return false;'><img id='profilePic' src = '/assets/yeongLimBig.png'><h3 id='profileHead'>YEONG LIM   |   임영광</h3><h5 id='profileStat'>Title in MOI’M: Co-CEO & Co-Founder<br>Industry: MEDIA<br>Email: yeong@moimnewyork.com<br><br>MOTTO: When life give you mangos…<br>모토: 삶이 우리에게 망고를 준다면</h5><h4 id='bioButton' onclick='showBioYeong();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAYeong();return false;'>Q & A</h4></div>"
var YeongFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeong();return false;'><img id='profilePic' src = '/assets/yeongLimBig.png'><h3 id='profileHead'>YEONG LIM   |   임영광</h3><h5 id='profileStat'>Title in MOI’M: Co-CEO & Co-Founder<br>Industry: MEDIA<br>Email: yeong@moimnewyork.com<br><br>MOTTO: When life give you mangos…<br>모토: 삶이 우리에게 망고를 준다면</h5><h4 id='bioButton' onclick='showBioYeong();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAYeong();return false;'>Q & A</h4></div>"

var YeongBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeongBio();return false;'><h3 id='profileHeadBio'>YEONG LIM   |   임영광</h3><p id='profileBio'>Yeong Lim graduated from Columbia University Graduate School of Journalism in 2012 and currently works as Entertainment Video Producer at CBS Local Media and<br> previously at NY1 News as News Assistant/Field Producer. Yeong served as the president of Columbia University Korean Graduate Students Association during the 2011-<br>2012 academic year and executive secretary in 2010-2011. Yeong received his B.A. in Communications and East Asian Studies from Calvin College in Grand Rapids,<br> Michigan and also attended Waseda University in Tokyo. Though, Yeong’s background is in journalism and news, he loves to watch comedy and is passionate about<br> producing live shows, events, parties and film. Yeong is also balding and he’s very stressed about it.<br><br>2012년 콜럼비아 대학교 저널리즘 대학원을 졸업. 현재 미국 CBS 방송국, 디지털 부서 \“CBS Local Media\” 에서 엔터테인먼트 프로듀서로 근무중. 이전 NY1 News에서 촬영기자/현장프로듀서로 약 3년간 근무.<br> 콜럼비아 대학원 시절 한인학생회 45대 학생회장과 44대 총무로 활동. 학부는 미시간주에 위치한 캘빈대학교에서 수사학 (커뮤니케이션)과 동양학 (일본어학과)을 복수 전공. 일본 와세다 대학에서 1년간 유학 경험.<br> 학부시절 학교 내외의 다양한 이벤트 총괄 디렉터 및 프로듀서로 역임. 탈모고민증.</p><h4 id='bioButton' onclick='showYeong();return false;'>YEONG LIM</h4><h4 id='qaButton' onclick='showQAYeong();return false;'>Q & A</h4></div>"
var YeongBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeong();return false;'><h3 id='profileHeadBio'>YEONG LIM   |   임영광</h3><p id='profileBio'>Yeong Lim graduated from Columbia University Graduate School of Journalism in 2012 and currently works as Entertainment Video Producer at CBS Local Media and<br> previously at NY1 News as News Assistant/Field Producer. Yeong served as the president of Columbia University Korean Graduate Students Association during the 2011-<br>2012 academic year and executive secretary in 2010-2011. Yeong received his B.A. in Communications and East Asian Studies from Calvin College in Grand Rapids,<br> Michigan and also attended Waseda University in Tokyo. Though, Yeong’s background is in journalism and news, he loves to watch comedy and is passionate about<br> producing live shows, events, parties and film. Yeong is also balding and he’s very stressed about it.<br><br>2012년 콜럼비아 대학교 저널리즘 대학원을 졸업. 현재 미국 CBS 방송국, 디지털 부서 \“CBS Local Media\” 에서 엔터테인먼트 프로듀서로 근무중. 이전 NY1 News에서 촬영기자/현장프로듀서로 약 3년간 근무.<br> 콜럼비아 대학원 시절 한인학생회 45대 학생회장과 44대 총무로 활동. 학부는 미시간주에 위치한 캘빈대학교에서 수사학 (커뮤니케이션)과 동양학 (일본어학과)을 복수 전공. 일본 와세다 대학에서 1년간 유학 경험.<br> 학부시절 학교 내외의 다양한 이벤트 총괄 디렉터 및 프로듀서로 역임. 탈모고민증.</p><h4 id='bioButton' onclick='showYeong();return false;'>YEONG LIM</h4><h4 id='qaButton' onclick='showQAYeong();return false;'>Q & A</h4></div>"


var YeongQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeongQA();return false;'><h3 id='profileHeadBio'>YEONG LIM   |   임영광</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Every \“good\” $1 pizza shop – There are a ton of $1 pizza shops in NYC, but<br> some places serve slices that taste like paper and they are not fresh at all!<br> Surprisingly, some of these NYC $1 or $.99 pizzas are really really good – even<br> better than those that they sell at \“famous\” yet overpriced pizzerias! As a starter<br> – I highly recommend \“2 Bros Pizza!\” It’s everywhere!<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Play Clash of Clans. One of the best mobile games ever invented. I’ve been<br> playing since 2012. My clan recently ranked 33rd in the world! My favorite troops<br> are \“hogs\” and \“witches.\”<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: I cry a lot. I cry when I listen to sentimental music or when I watch cheesy yet<br> touching films (and commercials). Also, when people make me sad or upset.<br><br><span id='question'>Q: Inspiration?</span><br>A: Steve Jobs, Napoleon, Kitano Takeshi, Changho Lim.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: Won Bin, Kimura Takuya, or Brad Pitt sometimes.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: 맛난 1달러 피자를 파는 모든 가게! 뉴욕에는 수많은 1달러 피자가게가 있지만, 어떤 곳은 정말 종이를<br> 씹는 것 처럼 맛없는 피자를 팔기도 한다. 그렇지만 어떤 곳은 뉴욕의 비싸고 유명한 피자가게보다 훨씬<br> 맛있는 피자를 1달러 (어떤 곳은 99센트!)에 팔기도 한다. 아직 이 멋진 피자를 경험하지 못했다면, 뉴욕<br> 어디에서나 찾을 수 있는 “2 Bros Pizza” 를 가보길 권한다. 강추!<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 클래시 오브 클랜! 최고의 모바일 게임이다. 2012년부터 해왔는데, 현재 내 클랜은 세계랭킹 33등이<br>다. 내가 가장 좋아하는 병력은 호그라이더와 마녀이다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 사실 난 많이 운다. 슬픈 음악을 듣거나 좀 뻔하더라도 감동적인 영화를 보면 눈물이 난다 (심지어 광<br>고까지도). 사람들이 날 슬프게 하거나 화나게 해도 운다.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 스티브 잡스, 나폴레옹, 기타노 다케시, 임창호<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 원빈, 기무라타쿠야, 가끔씩 브래드피트</p><h4 id='bioButton' onclick='showYeong();return false;'>YEONG LIM</h4><h4 id='qaButton' onclick='showBioYeong();return false;'>BIOGRAPHY</h4></div>"
var YeongQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeong();return false;'><h3 id='profileHeadBio'>YEONG LIM   |   임영광</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Every \“good\” $1 pizza shop – There are a ton of $1 pizza shops in NYC, but<br> some places serve slices that taste like paper and they are not fresh at all!<br> Surprisingly, some of these NYC $1 or $.99 pizzas are really really good – even<br> better than those that they sell at \“famous\” yet overpriced pizzerias! As a starter<br> – I highly recommend \“2 Bros Pizza!\” It’s everywhere!<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Play Clash of Clans. One of the best mobile games ever invented. I’ve been<br> playing since 2012. My clan recently ranked 33rd in the world! My favorite troops<br> are \“hogs\” and \“witches.\”<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: I cry a lot. I cry when I listen to sentimental music or when I watch cheesy yet<br> touching films (and commercials). Also, when people make me sad or upset.<br><br><span id='question'>Q: Inspiration?</span><br>A: Steve Jobs, Napoleon, Kitano Takeshi, Changho Lim.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: Won Bin, Kimura Takuya, or Brad Pitt sometimes.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: 맛난 1달러 피자를 파는 모든 가게! 뉴욕에는 수많은 1달러 피자가게가 있지만, 어떤 곳은 정말 종이를<br> 씹는 것 처럼 맛없는 피자를 팔기도 한다. 그렇지만 어떤 곳은 뉴욕의 비싸고 유명한 피자가게보다 훨씬<br> 맛있는 피자를 1달러 (어떤 곳은 99센트!)에 팔기도 한다. 아직 이 멋진 피자를 경험하지 못했다면, 뉴욕<br> 어디에서나 찾을 수 있는 “2 Bros Pizza” 를 가보길 권한다. 강추!<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 클래시 오브 클랜! 최고의 모바일 게임이다. 2012년부터 해왔는데, 현재 내 클랜은 세계랭킹 33등이<br>다. 내가 가장 좋아하는 병력은 호그라이더와 마녀이다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 사실 난 많이 운다. 슬픈 음악을 듣거나 좀 뻔하더라도 감동적인 영화를 보면 눈물이 난다 (심지어 광<br>고까지도). 사람들이 날 슬프게 하거나 화나게 해도 운다.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 스티브 잡스, 나폴레옹, 기타노 다케시, 임창호<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 원빈, 기무라타쿠야, 가끔씩 브래드피트</p><h4 id='bioButton' onclick='showYeong();return false;'>YEONG LIM</h4><h4 id='qaButton' onclick='showBioYeong();return false;'>BIOGRAPHY</h4></div>"


var sensor = false;


// ***see team member profile

function showProfileYeong(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(leaderOutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(YeongIn);	
    }, 0);
}

function profileOutYeong(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(YeongOut);
}, 0);
	setTimeout(function() {
	$('body').append(leaderInFromProfile);	
    }, 0);
}

function profileOutYeongBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(YeongBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(leaderInFromProfile);	
    }, 0);
}

function profileOutYeongQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(YeongQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(leaderInFromProfile);	
    }, 0);
}

function showBioYeong(){
	$('#teamContent').remove();
	$('body').append(YeongBio);	
}

function showQAYeong(){
	$('#teamContent').remove();
	$('body').append(YeongQA);	
}

function showYeong(){
	$('#teamContent').remove();
	$('body').append(YeongFadeIn);
}

// ******

// ***skim through team members
function leaders(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(teamOut);
}, 10);
	setTimeout(function() {
	$('body').append(leaderIn);	
    }, 0);
}

function leaders1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(leaderOut1);
}, 10);
	setTimeout(function() {
	$('body').append(leaderIn1);	
    }, 0);
}

function leadershipOut(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(leaderOut);
}, 10);
	setTimeout(function() {
	$('body').append(teamIn);	
    }, 0);
}

function leadershipOut1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(leaderOut2);
}, 10);
	setTimeout(function() {
	$('body').append(leaderIn2);	
    }, 0);
}

function logInScreen(){
	$('#logIn').remove();
	console.log('boom')
	$('body').append(logIn);
	logInSensor=true;	
	console.log(logInSensor);
} 

// *****

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

