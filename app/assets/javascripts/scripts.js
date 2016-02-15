console.log("connected")


// $(document).ready(function(){
//     var eTop = $("#teamPage").offset().top;
//     $(document).scrollTop(eTop);
//     var eHeight = $("#teamPage").height();
//     var eBottom = eTop + eHeight - $(window).height();
//     $(document).on("scroll", function(e){
//         var windowScrollTop = $(window).scrollTop();
//         if(windowScrollTop < eTop){
//             console.log("not allowed");
//             $(document).scrollTop(eTop);
//         }
//         else if(windowScrollTop > eBottom){
//             $(document).scrollTop(eBottom);
//         }
//         else{
//             console.log("allowed");
//         }
//     });
// });

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

var teamIn ="<div<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><div id='leadershipTeamPic' onclick='leaders();return false;'></div><div id='eventTeamPic' onclick='events();return false;'></div><div id='creativeTeamPic' onclick='creative();return false;'></div><div id='prTeamPic' onclick='pr();return false;'></div><div id='soarTeamPic' onclick='soar();return false;'></div><div id='itTeamPic' onclick='it();return false;'></div><div id='advisoryTeamPic' onclick='advisory();return false;'></div><div id='contributorsPic' onclick='contributors();return false;'></div></div>";
var teamOut ="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><div id='leadershipTeamPic'></div><div id='eventTeamPic'></div><div id='creativeTeamPic'></div><div id='prTeamPic'></div><div id='soarTeamPic'></div><div id='itTeamPic'></div><div id='advisoryTeamPic'></div><div id='contributorsPic'></div></div>";

// ***leaders**
var leaderIn="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberOnePic' onclick='showProfileYeong();return false;'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic' onclick='showProfileDK();return false;'></div></div><div class='memeberThree'><div id='leaderMemberThreePic' onclick='showProfileAnnie();return false;'></div></div></div>";
var leaderIn1="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberFourPic' onclick='showProfileEun();return false;'></div></div></div>";
var leaderIn2="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberOnePic' onclick='showProfileYeong();return false;'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic' onclick='showProfileDK();return false;'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'onclick='showProfileAnnie();return false;'></div></div></div>";
var leaderOut="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberOnePic'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'></div></div></div>";
var leaderOut1="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberOnePic'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'></div></div></div>";
var leaderOut2="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberFourPic'></div></div></div>";

var leaderOutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberOnePic'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'></div></div></div>";
var leaderInFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberOnePic' onclick='showProfileYeong();return false;'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic' onclick='showProfileDK();return false;'></div></div><div class='memeberThree'><div id='leaderMemberThreePic' onclick='showProfileAnnie();return false;'></div></div></div>";
var leader1OutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberFourPic' onclick='showProfileEun();return false;'></div></div></div>";
var leader1InFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='leadershipOut1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><div class='memeberOne'><div id='leaderMemberFourPic' onclick='showProfileEun();return false;'></div></div></div>";
// ***

// ***Yeong
var YeongIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeong();return false;'><img id='profilePic' src = '/assets/yeongLimBig.png'><h3 id='profileHead'>YEONG LIM   |   임영광</h3><h5 id='profileStat'>Title in MOI’M: Co-CEO & Co-Founder<br>Industry: MEDIA<br>Email: yeong@moimnewyork.com<br><br>MOTTO: When life give you mangos…<br>모토: 삶이 우리에게 망고를 준다면</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioYeong();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAYeong();return false;'>FUN FACTS</h4></div>";
var YeongOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeong();return false;'><img id='profilePic' src = '/assets/yeongLimBig.png'><h3 id='profileHead'>YEONG LIM   |   임영광</h3><h5 id='profileStat'>Title in MOI’M: Co-CEO & Co-Founder<br>Industry: MEDIA<br>Email: yeong@moimnewyork.com<br><br>MOTTO: When life give you mangos…<br>모토: 삶이 우리에게 망고를 준다면</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioYeong();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAYeong();return false;'>FUN FACTS</h4></div>";
var YeongFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeong();return false;'><img id='profilePic' src = '/assets/yeongLimBig.png'><h3 id='profileHead'>YEONG LIM   |   임영광</h3><h5 id='profileStat'>Title in MOI’M: Co-CEO & Co-Founder<br>Industry: MEDIA<br>Email: yeong@moimnewyork.com<br><br>MOTTO: When life give you mangos…<br>모토: 삶이 우리에게 망고를 준다면</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioYeong();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAYeong();return false;'>FUN FACTS</h4></div>";

var YeongBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeongBio();return false;'><h3 id='profileHeadBio'>YEONG LIM   |   임영광</h3><p id='profileBio'>Yeong Lim graduated from Columbia University Graduate School of Journalism in 2012 and currently works as Entertainment Video Producer at CBS Local Media and<br> previously at NY1 News as News Assistant/Field Producer. Yeong served as the president of Columbia University Korean Graduate Students Association during the 2011-<br>2012 academic year and executive secretary in 2010-2011. Yeong received his B.A. in Communications and East Asian Studies from Calvin College in Grand Rapids,<br> Michigan and also attended Waseda University in Tokyo. Though, Yeong’s background is in journalism and news, he loves to watch comedy and is passionate about<br> producing live shows, events, parties and film. Yeong is also balding and he’s very stressed about it.<br><br>2012년 콜럼비아 대학교 저널리즘 대학원을 졸업. 현재 미국 CBS 방송국, 디지털 부서 \“CBS Local Media\” 에서 엔터테인먼트 프로듀서로 근무중. 이전 NY1 News에서 촬영기자/현장프로듀서로 약 3년간 근무.<br> 콜럼비아 대학원 시절 한인학생회 45대 학생회장과 44대 총무로 활동. 학부는 미시간주에 위치한 캘빈대학교에서 수사학 (커뮤니케이션)과 동양학 (일본어학과)을 복수 전공. 일본 와세다 대학에서 1년간 유학 경험.<br> 학부시절 학교 내외의 다양한 이벤트 총괄 디렉터 및 프로듀서로 역임. 탈모고민증.</p><h4 id='mainButton' onclick='showYeong();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAYeong();return false;'>FUN FACTS</h4></div>";
var YeongBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeong();return false;'><h3 id='profileHeadBio'>YEONG LIM   |   임영광</h3><p id='profileBio'>Yeong Lim graduated from Columbia University Graduate School of Journalism in 2012 and currently works as Entertainment Video Producer at CBS Local Media and<br> previously at NY1 News as News Assistant/Field Producer. Yeong served as the president of Columbia University Korean Graduate Students Association during the 2011-<br>2012 academic year and executive secretary in 2010-2011. Yeong received his B.A. in Communications and East Asian Studies from Calvin College in Grand Rapids,<br> Michigan and also attended Waseda University in Tokyo. Though, Yeong’s background is in journalism and news, he loves to watch comedy and is passionate about<br> producing live shows, events, parties and film. Yeong is also balding and he’s very stressed about it.<br><br>2012년 콜럼비아 대학교 저널리즘 대학원을 졸업. 현재 미국 CBS 방송국, 디지털 부서 \“CBS Local Media\” 에서 엔터테인먼트 프로듀서로 근무중. 이전 NY1 News에서 촬영기자/현장프로듀서로 약 3년간 근무.<br> 콜럼비아 대학원 시절 한인학생회 45대 학생회장과 44대 총무로 활동. 학부는 미시간주에 위치한 캘빈대학교에서 수사학 (커뮤니케이션)과 동양학 (일본어학과)을 복수 전공. 일본 와세다 대학에서 1년간 유학 경험.<br> 학부시절 학교 내외의 다양한 이벤트 총괄 디렉터 및 프로듀서로 역임. 탈모고민증.</p><h4 id='mainButton' onclick='showYeong();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAYeong();return false;'>FUN FACTS</h4></div>";

var YeongQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeongQA();return false;'><h3 id='profileHeadBio'>YEONG LIM   |   임영광</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Every \“good\” $1 pizza shop – There are a ton of $1 pizza shops in NYC, but<br> some places serve slices that taste like paper and they are not fresh at all!<br> Surprisingly, some of these NYC $1 or $.99 pizzas are really really good – even<br> better than those that they sell at \“famous\” yet overpriced pizzerias! As a starter<br> – I highly recommend \“2 Bros Pizza!\” It’s everywhere!<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Play Clash of Clans. One of the best mobile games ever invented. I’ve been<br> playing since 2012. My clan recently ranked 33rd in the world! My favorite troops<br> are \“hogs\” and \“witches.\”<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: I cry a lot. I cry when I listen to sentimental music or when I watch cheesy yet<br> touching films (and commercials). Also, when people make me sad or upset.<br><br><span id='question'>Q: Inspiration?</span><br>A: Steve Jobs, Napoleon, Kitano Takeshi, Changho Lim.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: Won Bin, Kimura Takuya, or Brad Pitt sometimes.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: 맛난 1달러 피자를 파는 모든 가게! 뉴욕에는 수많은 1달러 피자가게가 있지만, 어떤 곳은 정말 종이를<br> 씹는 것 처럼 맛없는 피자를 팔기도 한다. 그렇지만 어떤 곳은 뉴욕의 비싸고 유명한 피자가게보다 훨씬<br> 맛있는 피자를 1달러 (어떤 곳은 99센트!)에 팔기도 한다. 아직 이 멋진 피자를 경험하지 못했다면, 뉴욕<br> 어디에서나 찾을 수 있는 “2 Bros Pizza” 를 가보길 권한다. 강추!<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 클래시 오브 클랜! 최고의 모바일 게임이다. 2012년부터 해왔는데, 현재 내 클랜은 세계랭킹 33등이<br>다. 내가 가장 좋아하는 병력은 호그라이더와 마녀이다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 사실 난 많이 운다. 슬픈 음악을 듣거나 좀 뻔하더라도 감동적인 영화를 보면 눈물이 난다 (심지어 광<br>고까지도). 사람들이 날 슬프게 하거나 화나게 해도 운다.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 스티브 잡스, 나폴레옹, 기타노 다케시, 임창호<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 원빈, 기무라타쿠야, 가끔씩 브래드피트</p><h4 id='mainButton' onclick='showYeong();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioYeong();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var YeongQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutYeong();return false;'><h3 id='profileHeadBio'>YEONG LIM   |   임영광</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Every \“good\” $1 pizza shop – There are a ton of $1 pizza shops in NYC, but<br> some places serve slices that taste like paper and they are not fresh at all!<br> Surprisingly, some of these NYC $1 or $.99 pizzas are really really good – even<br> better than those that they sell at \“famous\” yet overpriced pizzerias! As a starter<br> – I highly recommend \“2 Bros Pizza!\” It’s everywhere!<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Play Clash of Clans. One of the best mobile games ever invented. I’ve been<br> playing since 2012. My clan recently ranked 33rd in the world! My favorite troops<br> are \“hogs\” and \“witches.\”<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: I cry a lot. I cry when I listen to sentimental music or when I watch cheesy yet<br> touching films (and commercials). Also, when people make me sad or upset.<br><br><span id='question'>Q: Inspiration?</span><br>A: Steve Jobs, Napoleon, Kitano Takeshi, Changho Lim.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: Won Bin, Kimura Takuya, or Brad Pitt sometimes.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: 맛난 1달러 피자를 파는 모든 가게! 뉴욕에는 수많은 1달러 피자가게가 있지만, 어떤 곳은 정말 종이를<br> 씹는 것 처럼 맛없는 피자를 팔기도 한다. 그렇지만 어떤 곳은 뉴욕의 비싸고 유명한 피자가게보다 훨씬<br> 맛있는 피자를 1달러 (어떤 곳은 99센트!)에 팔기도 한다. 아직 이 멋진 피자를 경험하지 못했다면, 뉴욕<br> 어디에서나 찾을 수 있는 “2 Bros Pizza” 를 가보길 권한다. 강추!<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 클래시 오브 클랜! 최고의 모바일 게임이다. 2012년부터 해왔는데, 현재 내 클랜은 세계랭킹 33등이<br>다. 내가 가장 좋아하는 병력은 호그라이더와 마녀이다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 사실 난 많이 운다. 슬픈 음악을 듣거나 좀 뻔하더라도 감동적인 영화를 보면 눈물이 난다 (심지어 광<br>고까지도). 사람들이 날 슬프게 하거나 화나게 해도 운다.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 스티브 잡스, 나폴레옹, 기타노 다케시, 임창호<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 원빈, 기무라타쿠야, 가끔씩 브래드피트</p><h4 id='mainButton' onclick='showYeong();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioYeong();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ****DK
var DKIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutDK();return false;'><img id='profilePic' src = '/assets/doYoonKimBig.png'><h3 id='profileHead'>DOYOON KIM   |   김도윤</h3><h5 id='profileStat'>Title in MOI’M: Co-CEO & Co-Founder<br>Industry: DENTISTRY<br>Email: dk@moimnewyork.com<br><br>MOTTO: Opportunity comes to those who are prepared.<br>모토: 기회는 준비된 자에게 주어진다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioDK();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQADK();return false;'>FUN FACTS</h4></div>";
var DKOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutDK();return false;'><img id='profilePic' src = '/assets/doYoonKimBig.png'><h3 id='profileHead'>DOYOON KIM   |   김도윤</h3><h5 id='profileStat'>Title in MOI’M: Co-CEO & Co-Founder<br>Industry: DENTISTRY<br>Email: dk@moimnewyork.com<br><br>MOTTO: Opportunity comes to those who are prepared.<br>모토: 기회는 준비된 자에게 주어진다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioDK();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQADK();return false;'>FUN FACTS</h4></div>";
var DKFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutDK();return false;'><img id='profilePic' src = '/assets/doYoonKimBig.png'><h3 id='profileHead'>DOYOON KIM   |   김도윤</h3><h5 id='profileStat'>Title in MOI’M: Co-CEO & Co-Founder<br>Industry: DENTISTRY<br>Email: dk@moimnewyork.com<br><br>MOTTO: Opportunity comes to those who are prepared.<br>모토: 기회는 준비된 자에게 주어진다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioDK();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQADK();return false;'>FUN FACTS</h4></div>";

var DKBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutDKBio();return false;'><h3 id='profileHeadBio'>DOYOON KIM   |   김도윤</h3><p id='profileBio'>Dr. Doyoon Kim graduated from New York University College of Dentistry in 2012. He is currently a partner at private dental practices in New Jersey and Pennsylvania.<br> Doyoon served as the event coordinator/program director of the NYU Korean Graduate Students Association from 2010 to 2012 and organized numerous social events<br> and academic affairs in New York. Doyoon received his B.S. (with Honors) in Mathematics and Human Biology from the University of Toronto in Canada.<br><br>2012년 뉴욕대학교 치과 대학원 졸업. 현 New Jersey 와 Pennsylvania 주에서 파트너로 병원 경영.<br>뉴욕대학교 대학원 한인학생회 행사국장으로 활동하며 수많은 이벤트를 기획 및 진행 경력. 2008년 캐나다 토론토 대학교 인체생물학과 수학과를 복수 전공으로 학사 우수졸업.</p><h4 id='mainButton' onclick='showDK();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQADK();return false;'>FUN FACTS</h4></div>";
var DKBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutDK();return false;'><h3 id='profileHeadBio'>DOYOON KIM   |   김도윤</h3><p id='profileBio'>Dr. Doyoon Kim graduated from New York University College of Dentistry in 2012. He is currently a partner at private dental practices in New Jersey and Pennsylvania.<br> Doyoon served as the event coordinator/program director of the NYU Korean Graduate Students Association from 2010 to 2012 and organized numerous social events<br> and academic affairs in New York. Doyoon received his B.S. (with Honors) in Mathematics and Human Biology from the University of Toronto in Canada.<br><br>2012년 뉴욕대학교 치과 대학원 졸업. 현 New Jersey 와 Pennsylvania 주에서 파트너로 병원 경영.<br>뉴욕대학교 대학원 한인학생회 행사국장으로 활동하며 수많은 이벤트를 기획 및 진행 경력. 2008년 캐나다 토론토 대학교 인체생물학과 수학과를 복수 전공으로 학사 우수졸업.</p><h4 id='mainButton' onclick='showDK();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQADK();return false;'>FUN FACTS</h4></div>";

var DKQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutDKQA();return false;'><h3 id='profileHeadBio'>DOYOON KIM   |   김도윤</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Bangkok Express. It is a small Thai restaurant in front of the NYU Dental School<br> building and a place I frequented. They also deliver. I think the food is<br> comparable to other fancy Thai restaurants. Although I may be biased.<br><br><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: Although people may not believe me, it would be to spend it with the people I<br> love enjoying so-mack (소맥) while looking back at our lives.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: I turn off the alarm on my iphone and then go back to sleep knowing that my<br> second alarm will go off in 5 minutes.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: Open wide, please.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Bangkok Express – NYU 치대 앞에 있는 조그마한 타이 음식점인데 학교다닐때 즐겨 먹던곳. 딜<br>리버리로도 손색없다. 다른 fancy 한 타이 음식점에도 뒤지지 않는 맛. 입맛이 지극히 주관적일 수 있다<br>는 것이 함정.<br><br><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다?</span><br>A: 믿긴 싫겠지만 사랑하는 사람들과 조촐히 소맥을 하며 지나온 날들을 돌아볼 것이다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 아침에 눈 뜨자 마자 나의 장기와도 같은 iphone을 만지작 거리며 알람을 끈후 5분뒤의 알람에 의존<br>하며 다시 잠들기 바쁘다.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: 입 크게 벌리세요~</p><h4 id='mainButton' onclick='showDK();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioDK();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var DKQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutDK();return false;'><h3 id='profileHeadBio'>DOYOON KIM   |   김도윤</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Bangkok Express. It is a small Thai restaurant in front of the NYU Dental School<br> building and a place I frequented. They also deliver. I think the food is<br> comparable to other fancy Thai restaurants. Although I may be biased.<br><br><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: Although people may not believe me, it would be to spend it with the people I<br> love enjoying so-mack (소맥) while looking back at our lives.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: I turn off the alarm on my iphone and then go back to sleep knowing that my<br> second alarm will go off in 5 minutes.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: Open wide, please.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Bangkok Express – NYU 치대 앞에 있는 조그마한 타이 음식점인데 학교다닐때 즐겨 먹던곳. 딜<br>리버리로도 손색없다. 다른 fancy 한 타이 음식점에도 뒤지지 않는 맛. 입맛이 지극히 주관적일 수 있다<br>는 것이 함정.<br><br><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다?</span><br>A: 믿긴 싫겠지만 사랑하는 사람들과 조촐히 소맥을 하며 지나온 날들을 돌아볼 것이다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 아침에 눈 뜨자 마자 나의 장기와도 같은 iphone을 만지작 거리며 알람을 끈후 5분뒤의 알람에 의존<br>하며 다시 잠들기 바쁘다.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: 입 크게 벌리세요~</p><h4 id='mainButton' onclick='showDK();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioDK();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Annie
var AnnieIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAnnie();return false;'><img id='profilePic' src = '/assets/annieChoiBig.png'><h3 id='profileHead'>ANNIE CHOI   |   최수정</h3><h5 id='profileStat'>Title in MOI’M: COO & CFO<br>Industry: EDUCATION<br>Email: annie@moimnewyork.com<br><br>MOTTO: Insanity: Doing the same thing over and over again<br> and expecting different results. – Albert Einstein.<br>모토: 광기란 같은 일을 계속하면서 다른 결과를 기대하는 것이다 - 알버트 아인<br>슈타인</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAnnie();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAnnie();return false;'>FUN FACTS</h4></div>";
var AnnieOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAnnie();return false;'><img id='profilePic' src = '/assets/annieChoiBig.png'><h3 id='profileHead'>ANNIE CHOI   |   최수정</h3><h5 id='profileStat'>Title in MOI’M: COO & CFO<br>Industry: EDUCATION<br>Email: annie@moimnewyork.com<br><br>MOTTO: Insanity: Doing the same thing over and over again<br> and expecting different results. – Albert Einstein.<br>모토: 광기란 같은 일을 계속하면서 다른 결과를 기대하는 것이다 - 알버트 아인<br>슈타인</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAnnie();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAnnie();return false;'>FUN FACTS</h4></div>";
var AnnieFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAnnie();return false;'><img id='profilePic' src = '/assets/annieChoiBig.png'><h3 id='profileHead'>ANNIE CHOI   |   최수정</h3><h5 id='profileStat'>Title in MOI’M: COO & CFO<br>Industry: EDUCATION<br>Email: annie@moimnewyork.com<br><br>MOTTO: Insanity: Doing the same thing over and over again<br> and expecting different results. – Albert Einstein.<br>모토: 광기란 같은 일을 계속하면서 다른 결과를 기대하는 것이다 - 알버트 아인<br>슈타인</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAnnie();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAnnie();return false;'>FUN FACTS</h4></div>";

var AnnieBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAnnieBio();return false;'><h3 id='profileHeadBio'>ANNIE CHOI   |   최수정</h3><p id='profileBio'>Annie Choi currently works at the College Board as an Associate Director on the International Team. She cultivates relationships with schools outside the U.S. interested<br> in an American-style education and provides support to international schools by organizing workshops for their secondary school teachers. Prior to joining the College<br> Board, Annie received her M.A. in International Educational Development from Columbia University, Teachers College and her B.A. in Chinese and French, with a minor in<br> Business, from Georgetown University in Washington, DC. During her undergraduate studies, Annie studied at Peking University in Beijing, China and at Paris-Sorbonne<br> University in Paris, France. Annie served as a board member of the Teachers College Korean Graduate Students Association in 2010-2011.<br><br>현재 미 대학입시위원회 (The College Board)에서 국제학교 지원관리, 중•고등학교 교사지원 해외 워크샵 개최 및 담당.<br>2011년 콜럼비아대학교 교육대학원 국제교육개발 석사 졸업. 2008년 조지타운 대학교 학사, 중국어, 불어 복수 전공, 경영 부전공. 학부 재학 당시 중국 북경대와 프랑스 파리 소르본느 대학에서 교환학생 경험.<br>콜럼비아대학교 교육대학원 한인학생회 임원으로 활동.</p><h4 id='mainButton' onclick='showAnnie();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAAnnie();return false;'>FUN FACTS</h4></div>";
var AnnieBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAnnie();return false;'><h3 id='profileHeadBio'>ANNIE CHOI   |   최수정</h3><p id='profileBio'>Annie Choi currently works at the College Board as an Associate Director on the International Team. She cultivates relationships with schools outside the U.S. interested<br> in an American-style education and provides support to international schools by organizing workshops for their secondary school teachers. Prior to joining the College<br> Board, Annie received her M.A. in International Educational Development from Columbia University, Teachers College and her B.A. in Chinese and French, with a minor in<br> Business, from Georgetown University in Washington, DC. During her undergraduate studies, Annie studied at Peking University in Beijing, China and at Paris-Sorbonne<br> University in Paris, France. Annie served as a board member of the Teachers College Korean Graduate Students Association in 2010-2011.<br><br>현재 미 대학입시위원회 (The College Board)에서 국제학교 지원관리, 중•고등학교 교사지원 해외 워크샵 개최 및 담당.<br>2011년 콜럼비아대학교 교육대학원 국제교육개발 석사 졸업. 2008년 조지타운 대학교 학사, 중국어, 불어 복수 전공, 경영 부전공. 학부 재학 당시 중국 북경대와 프랑스 파리 소르본느 대학에서 교환학생 경험.<br>콜럼비아대학교 교육대학원 한인학생회 임원으로 활동.</p><h4 id='mainButton' onclick='showAnnie();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAAnnie();return false;'>FUN FACTS</h4></div>";

var AnnieQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAnnieQA();return false;'><h3 id='profileHeadBio'>ANNIE CHOI   |   최수정</h3><p id='profileQuestionsShort1'><span id='question'>Q: Dream Vacation?</span><br>A: Trip around the world<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Check my phone for text messages and emails.<br><br><span id='question'>Q: Perfect Day?</span><br>A: Enjoying amazing food with great company.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Taking time every day to stop and smell the roses.</p><p id='profileQuestionsShort2'><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 세계여행<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 스마트폰으로 온 문자나 이메일을 확인한다.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 멋진 사람들과 좋은 음식.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 하루에 한 번씩, 바쁜 일상 중 잠시 멈춰서 삶과 여유를 즐기는 시간을 갖는 것.</p><h4 id='mainButton' onclick='showAnnie();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioAnnie();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var AnnieQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAnnie();return false;'><h3 id='profileHeadBio'>ANNIE CHOI   |   최수정</h3><p id='profileQuestionsShort1'><span id='question'>Q: Dream Vacation?</span><br>A: Trip around the world<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: Check my phone for text messages and emails.<br><br><span id='question'>Q: Perfect Day?</span><br>A: Enjoying amazing food with great company.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Taking time every day to stop and smell the roses.</p><p id='profileQuestionsShort2'><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 세계여행<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 스마트폰으로 온 문자나 이메일을 확인한다.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 멋진 사람들과 좋은 음식.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 하루에 한 번씩, 바쁜 일상 중 잠시 멈춰서 삶과 여유를 즐기는 시간을 갖는 것.</p><h4 id='mainButton' onclick='showAnnie();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioAnnie();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Eun - Leader
var EunIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEun();return false;'><img id='profilePic' src = '/assets/eunYoungKangBig.png'><h3 id='profileHead'>EUNYOUNG KANG   |   강은영</h3><h5 id='profileStat'>Title in MOI’M: COO<br>Industry: DESIGN<br>Email: eunyoung@moimnewyork.com<br><br>MOTTO: Mo or do. – Korean Saying.<br>모토: 모 아니면 도</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioEun();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAEun();return false;'>FUN FACTS</h4></div>";
var EunOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEun();return false;'><img id='profilePic' src = '/assets/eunYoungKangBig.png'><h3 id='profileHead'>EUNYOUNG KANG   |   강은영</h3><h5 id='profileStat'>Title in MOI’M: COO<br>Industry: DESIGN<br>Email: eunyoung@moimnewyork.com<br><br>MOTTO: Mo or do. – Korean Saying.<br>모토: 모 아니면 도</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioEun();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAEun();return false;'>FUN FACTS</h4></div>";
var EunFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEun();return false;'><img id='profilePic' src = '/assets/eunYoungKangBig.png'><h3 id='profileHead'>EUNYOUNG KANG   |   강은영</h3><h5 id='profileStat'>Title in MOI’M: COO<br>Industry: DESIGN<br>Email: eunyoung@moimnewyork.com<br><br>MOTTO: Mo or do. – Korean Saying.<br>모토: 모 아니면 도</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioEun();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAEun();return false;'>FUN FACTS</h4></div>";

var EunBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEunBio();return false;'><h3 id='profileHeadBio'>EUNYOUNG KANG   |   강은영</h3><p id='profileBio'>Eunyoung Kang currently works at Ashcan Studio of Art as Creative Director. Eunyoung received her M.P.S. in Interactive Telecommunications (ITP) from New York<br> University, Tisch School of the Arts in 2012. She served as the director of public relations for the NYU Korean Graduate Students Association in 2011-2012. During her<br> undergraduate studies, she majored in Interior Design and Visual Communications Design, which allowed her to gain a wide range of skills in the creative field from<br> visual layout to space design. Currently, Eunyoung designs and organizes various art exhibitions, and creates graphics, booklets, and postcards as a freelancer.<br><br>2012년 뉴욕대학교에서 인터렉티브 텔레커뮤니케이션 석사 학위 취득. 뉴욕대학원 한인학생회 홍보국장으로 활동. 현재 뉴욕 맨하탄에 위치한 애쉬캔 아트스튜디오에서 크리에이티브 드렉터로 근무중</p><h4 id='mainButton' onclick='showEun();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAEun();return false;'>FUN FACTS</h4></div>";
var EunBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEun();return false;'><h3 id='profileHeadBio'>EUNYOUNG KANG   |   강은영</h3><p id='profileBio'>Eunyoung Kang currently works at Ashcan Studio of Art as Creative Director. Eunyoung received her M.P.S. in Interactive Telecommunications (ITP) from New York<br> University, Tisch School of the Arts in 2012. She served as the director of public relations for the NYU Korean Graduate Students Association in 2011-2012. During her<br> undergraduate studies, she majored in Interior Design and Visual Communications Design, which allowed her to gain a wide range of skills in the creative field from<br> visual layout to space design. Currently, Eunyoung designs and organizes various art exhibitions, and creates graphics, booklets, and postcards as a freelancer.<br><br>2012년 뉴욕대학교에서 인터렉티브 텔레커뮤니케이션 석사 학위 취득. 뉴욕대학원 한인학생회 홍보국장으로 활동. 현재 뉴욕 맨하탄에 위치한 애쉬캔 아트스튜디오에서 크리에이티브 드렉터로 근무중</p><h4 id='mainButton' onclick='showEun();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAEun();return false;'>FUN FACTS</h4></div>";

var EunQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEunQA();return false;'><h3 id='profileHeadBio'>EUNYOUNG KANG   |   강은영</h3><p id='profileQuestionsShort1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Elephant & Castle<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: I find Zio, hold him and sleep for five more minutes.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: zi~o~~~ zio~~~ z • i • o!!!!!!!!!!!!<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Exercising every day</p><p id='profileQuestionsShort2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Elephant & Castle<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 지오찾아 안고 오분만 더자기.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: 지~오~~~ 지오~~~ ㅈㅣㅇㅗ!!!!<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 매일 운동하기.</p><h4 id='mainButton' onclick='showEun();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioEun();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var EunQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEun();return false;'><h3 id='profileHeadBio'>EUNYOUNG KANG   |   강은영</h3><p id='profileQuestionsShort1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Elephant & Castle<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: I find Zio, hold him and sleep for five more minutes.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: zi~o~~~ zio~~~ z • i • o!!!!!!!!!!!!<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Exercising every day</p><p id='profileQuestionsShort2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Elephant & Castle<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 지오찾아 안고 오분만 더자기.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: 지~오~~~ 지오~~~ ㅈㅣㅇㅗ!!!!<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 매일 운동하기.</p><h4 id='mainButton' onclick='showEun();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioEun();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ***events**
var eventsIn="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='eventTeamOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='events1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><div class='memeberOne'><div id='eventsMemberOnePic' onclick='showProfileSarah();return false;'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic' onclick='showProfileRyan();return false;'></div></div><div class='memeberThree'><div id='eventsMemberThreePic' onclick='showProfileBrent();return false;'></div></div></div>";
var eventsIn1="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='eventTeamOut1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><div class='memeberOne'><div id='eventsMemberFourPic' onclick='showProfileAmy();return false;'></div></div></div>";
var eventsIn2="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='eventTeamOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='events1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><div class='memeberOne'><div id='eventsMemberOnePic' onclick='showProfileSarah();return false;'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic' onclick='showProfileRyan();return false;'></div></div><div class='memeberThree'><div id='eventsMemberThreePic'onclick='showProfileBrent();return false;'></div></div></div>";
var eventsOut="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='eventTeamOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='events1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><div class='memeberOne'><div id='eventsMemberOnePic'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic'></div></div><div class='memeberThree'><div id='eventsMemberThreePic'></div></div></div>";
var eventsOut1="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='eventTeamOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='events1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><div class='memeberOne'><div id='eventsMemberOnePic'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic'></div></div><div class='memeberThree'><div id='eventsMemberThreePic'></div></div></div>";
var eventsOut2="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='eventTeamOut1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><div class='memeberOne'><div id='eventsMemberFourPic'></div></div></div>";

var eventsOutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='eventTeamOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='events1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><div class='memeberOne'><div id='eventsMemberOnePic'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic'></div></div><div class='memeberThree'><div id='eventsMemberThreePic'></div></div></div>";
var eventsInFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='eventTeamOut();return false;'><img id='forwardArrow' src = '/assets/forwardArrow.png' onclick='events1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><div class='memeberOne'><div id='eventsMemberOnePic' onclick='showProfileSarah();return false;'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic' onclick='showProfileRyan();return false;'></div></div><div class='memeberThree'><div id='eventsMemberThreePic' onclick='showProfileBrent();return false;'></div></div></div>";
var events1OutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='eventTeamOut1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><div class='memeberOne'><div id='eventsMemberFourPic' onclick='showProfileAmy();return false;'></div></div></div>";
var events1InFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/backArrow.png' onclick='eventTeamOut1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><div class='memeberOne'><div id='eventsMemberFourPic' onclick='showProfileAmy();return false;'></div></div></div>";
// ***

// ***Yeong
var SarahIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarah();return false;'><img id='profilePic' src = '/assets/SarahSinBig.png'><h3 id='profileHead'>SARAH SIN   |   신영은</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, EVENTS<br>Industry: FASHION PRINT DESIGN<br>Email: sarah@moimnewyork.com<br><br>MOTTO: Hold the vision, Trust the Process – Unknown<br>모토: 비전을 가지고, 방법을 신뢰하라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSarah();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASarah();return false;'>FUN FACTS</h4></div>";
var SarahOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarah();return false;'><img id='profilePic' src = '/assets/SarahSinBig.png'><h3 id='profileHead'>SARAH SIN   |   신영은</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, EVENTS<br>Industry: FASHION PRINT DESIGN<br>Email: sarah@moimnewyork.com<br><br>MOTTO: Hold the vision, Trust the Process – Unknown<br>모토: 비전을 가지고, 방법을 신뢰하라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSarah();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASarah();return false;'>FUN FACTS</h4></div>";
var SarahFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarh();return false;'><img id='profilePic' src = '/assets/SarahSinBig.png'><h3 id='profileHead'>SARAH SIN   |   신영은</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, EVENTS<br>Industry: FASHION PRINT DESIGN<br>Email: sarah@moimnewyork.com<br><br>MOTTO: Hold the vision, Trust the Process – Unknown<br>모토: 비전을 가지고, 방법을 신뢰하라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSarah();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASarah();return false;'>FUN FACTS</h4></div>";

var SarahBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarahBio();return false;'><h3 id='profileHeadBio'>SARAH SIN   |   신영은</h3><p id='profileBio'>Sarah Sin calls Kenya her birthplace and Russia and New York her hometown. She studied Communication Design at Pratt Institute, and is currently working as a Print<br> Designer for swimwear at LF USA. Over the years she has volunteered for non-profit organizations (D2 fashion non-profit) and most recently traveled to Benin, Africa for<br> a series of teen fashion projects. Sarah is passionate about the arts, philanthropy and mission based work.<br>Side note: Sarah’s work philosophy is – get fed first and work hard.<br><br>케냐에서 태어나 러시아와 뉴욕에서 자랐으며 Pratt Institute 에서 광고 디자인 학과를 전공. 현재 스윔웨어 Print Designer 로서 활동 중. 여러 선교 및 비영리 단체활동에 꾸준히 종사해 왔으며,<br>최근 2년동안 벤닌, 아프리카 청소년 패션 프로젝트에 참여. 예술과 봉사, 자선 활동에 큰 열정을 가지고 있다.</p><h4 id='mainButton' onclick='showSarah();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQASarah();return false;'>FUN FACTS</h4></div>";
var SarahBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarah();return false;'><h3 id='profileHeadBio'>SARAH SIN   |   신영은</h3><p id='profileBio'>Sarah Sin calls Kenya her birthplace and Russia and New York her hometown. She studied Communication Design at Pratt Institute, and is currently working as a Print<br> Designer for swimwear at LF USA. Over the years she has volunteered for non-profit organizations (D2 fashion non-profit) and most recently traveled to Benin, Africa for<br> a series of teen fashion projects. Sarah is passionate about the arts, philanthropy and mission based work.<br>Side note: Sarah’s work philosophy is – get fed first and work hard.<br><br>케냐에서 태어나 러시아와 뉴욕에서 자랐으며 Pratt Institute 에서 광고 디자인 학과를 전공. 현재 스윔웨어 Print Designer 로서 활동 중. 여러 선교 및 비영리 단체활동에 꾸준히 종사해 왔으며,<br>최근 2년동안 벤닌, 아프리카 청소년 패션 프로젝트에 참여. 예술과 봉사, 자선 활동에 큰 열정을 가지고 있다.</p><h4 id='mainButton' onclick='showSarah();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQASarah();return false;'>FUN FACTS</h4></div>";

var SarahQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarahQA();return false;'><h3 id='profileHeadBio'>SARAH SIN   |   신영은</h3><p id='profileQuestions1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would withdraw all of my cash and give food and allowance to the homeless,<br> enjoy the most delicious meal with my loved ones, and attend church service to<br> look back on my life before the \“end\”.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: No problem! & Thank you! (in speech) Fighting! (in messages)<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: A: Soundcloud for its dynamic gathering of musical talents and Instagram for<br> its beautiful images and interesting storytelling.<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: Regardless of the season, I always need to keep my toes covered and ears<br> warm when I sleep.<br><br><span id='question'>Q: Inspiration?</span><br>A: I am inspired by those who have overcome adversity: whether it be physical,<br> emotional, or financial.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Living life to the fullest. An ongoing challenge!</p><p id='profileQuestions2'><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 내 통장에 있는 모든 돈을 뽑아서 길 거리에 있는 노숙자들에게 배불이 먹을 양식과 그들 또한 마지막<br>을 즐길 용돈을 나눠주고 내가 제일 사랑하는 사람들과 세상에서 제일 맛있는 음식을 먹고, 교회에서 예<br>배를 드리면서 나의 인생을 돌아보고 마지막을 준비한다.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: No problem! & 고마워요! (말할때) / 파이팅! (문자)<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 다양한 사람들의 음악과 재능을 들을수 있는 Soundcloud와 아름다운 사진들이 전해주는 독특한<br> 이야기 공간인 인스타그램을 자주 사용한다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 계절과 상관없이 잘때는 발과 귀를 꼭 따뜻하게 해야된다.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 여러가지 어려움들을 (육체적, 심리적, 재정적 등등) 극복한 사람들의 삶을 통해 많은 영감과 희망을<br> 얻는다.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 세상을 알차게, 후회없이 사는 것 – 끊이지 않는 도전.</p><h4 id='mainButton' onclick='showSarah();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioSarah();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var SarahQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarah();return false;'><h3 id='profileHeadBio'>SARAH SIN   |   신영은</h3><p id='profileQuestions1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would withdraw all of my cash and give food and allowance to the homeless,<br> enjoy the most delicious meal with my loved ones, and attend church service to<br> look back on my life before the \“end\”.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: No problem! & Thank you! (in speech) Fighting! (in messages)<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: A: Soundcloud for its dynamic gathering of musical talents and Instagram for<br> its beautiful images and interesting storytelling.<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: Regardless of the season, I always need to keep my toes covered and ears<br> warm when I sleep.<br><br><span id='question'>Q: Inspiration?</span><br>A: I am inspired by those who have overcome adversity: whether it be physical,<br> emotional, or financial.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Living life to the fullest. An ongoing challenge!</p><p id='profileQuestions2'><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 내 통장에 있는 모든 돈을 뽑아서 길 거리에 있는 노숙자들에게 배불이 먹을 양식과 그들 또한 마지막<br>을 즐길 용돈을 나눠주고 내가 제일 사랑하는 사람들과 세상에서 제일 맛있는 음식을 먹고, 교회에서 예<br>배를 드리면서 나의 인생을 돌아보고 마지막을 준비한다.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: No problem! & 고마워요! (말할때) / 파이팅! (문자)<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 다양한 사람들의 음악과 재능을 들을수 있는 Soundcloud와 아름다운 사진들이 전해주는 독특한<br> 이야기 공간인 인스타그램을 자주 사용한다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 계절과 상관없이 잘때는 발과 귀를 꼭 따뜻하게 해야된다.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 여러가지 어려움들을 (육체적, 심리적, 재정적 등등) 극복한 사람들의 삶을 통해 많은 영감과 희망을<br> 얻는다.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 세상을 알차게, 후회없이 사는 것 – 끊이지 않는 도전.</p><h4 id='mainButton' onclick='showSarah();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioSarah();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

var sensor = false;


// ***see team member profile

// **YEONG
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
// ***

// **DK
function showProfileDK(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(leaderOutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(DKIn);	
    }, 0);
}

function profileOutDK(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(DKOut);
}, 0);
	setTimeout(function() {
	$('body').append(leaderInFromProfile);	
    }, 0);
}

function profileOutDKBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(DKBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(leaderInFromProfile);	
    }, 0);
}

function profileOutDKQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(DKQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(leaderInFromProfile);	
    }, 0);
}

function showBioDK(){
	$('#teamContent').remove();
	$('body').append(DKBio);	
}

function showQADK(){
	$('#teamContent').remove();
	$('body').append(DKQA);	
}

function showDK(){
	$('#teamContent').remove();
	$('body').append(DKFadeIn);
}
// ***

// **Annie
function showProfileAnnie(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(leaderOutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(AnnieIn);	
    }, 0);
}

function profileOutAnnie(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(AnnieOut);
}, 0);
	setTimeout(function() {
	$('body').append(leaderInFromProfile);	
    }, 0);
}

function profileOutAnnieBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(AnnieBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(leaderInFromProfile);	
    }, 0);
}

function profileOutAnnieQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(AnnieQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(leaderInFromProfile);	
    }, 0);
}

function showBioAnnie(){
	$('#teamContent').remove();
	$('body').append(AnnieBio);	
}

function showQAAnnie(){
	$('#teamContent').remove();
	$('body').append(AnnieQA);	
}

function showAnnie(){
	$('#teamContent').remove();
	$('body').append(AnnieFadeIn);
}
// ***

// **Eun - Leader
function showProfileEun(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(leader1OutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(EunIn);	
    }, 0);
}

function profileOutEun(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(EunOut);
}, 0);
	setTimeout(function() {
	$('body').append(leader1InFromProfile);	
    }, 0);
}

function profileOutEunBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(EunBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(leader1InFromProfile);	
    }, 0);
}

function profileOutEunQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(EunQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(leader1InFromProfile);	
    }, 0);
}

function showBioEun(){
	$('#teamContent').remove();
	$('body').append(EunBio);	
}

function showQAEun(){
	$('#teamContent').remove();
	$('body').append(EunQA);	
}

function showEun(){
	$('#teamContent').remove();
	$('body').append(EunFadeIn);
}
// ***

// **Sarah - events
function showProfileSarah(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(eventsOutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(SarahIn);	
    }, 0);
}

function profileOutSarah(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(SarahOut);
}, 0);
	setTimeout(function() {
	$('body').append(eventsInFromProfile);	
    }, 0);
}

function profileOutSarahBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(SarahBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(eventsInFromProfile);	
    }, 0);
}

function profileOutSarahQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(SarahQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(eventsInFromProfile);	
    }, 0);
}

function showBioSarah(){
	$('#teamContent').remove();
	$('body').append(SarahBio);	
}

function showQASarah(){
	$('#teamContent').remove();
	$('body').append(SarahQA);	
}

function showSarah(){
	$('#teamContent').remove();
	$('body').append(SarahFadeIn);
}
// ***

// ******


// ***skim through team members

// ***leaders
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
// *****

// ***events

function events(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(teamOut);
}, 10);
	setTimeout(function() {
	$('body').append(eventsIn);	
    }, 0);
}

function events1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(eventsOut1);
}, 10);
	setTimeout(function() {
	$('body').append(eventsIn1);	
    }, 0);
}

function eventTeamOut(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(eventsOut);
}, 10);
	setTimeout(function() {
	$('body').append(teamIn);	
    }, 0);
}

function eventTeamOut1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(eventsOut2);
}, 10);
	setTimeout(function() {
	$('body').append(eventsIn2);	
    }, 0);
}
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

