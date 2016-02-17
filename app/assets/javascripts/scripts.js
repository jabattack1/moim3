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
var leaderIn="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Leadership communicates with every team to ensure everything runs smoothly and everyone is on the same page.<br>As the main liaison to sponsors, vendors, and other external constituents, the Chief Officers also align MOI’M’s enterprises and activities with our mission.</h5><div class='memeberOne'><div id='leaderMemberOnePic' onclick='showProfileYeong();return false;'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic' onclick='showProfileDK();return false;'></div></div><div class='memeberThree'><div id='leaderMemberThreePic' onclick='showProfileAnnie();return false;'></div></div></div>";
var leaderIn1="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='leadershipOut1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Leadership communicates with every team to ensure everything runs smoothly and everyone is on the same page.<br>As the main liaison to sponsors, vendors, and other external constituents, the Chief Officers also align MOI’M’s enterprises and activities with our mission.</h5><div class='memeberOne'><div id='leaderMemberFourPic' onclick='showProfileEun();return false;'></div></div></div>";
var leaderIn2="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Leadership communicates with every team to ensure everything runs smoothly and everyone is on the same page.<br>As the main liaison to sponsors, vendors, and other external constituents, the Chief Officers also align MOI’M’s enterprises and activities with our mission.</h5><div class='memeberOne'><div id='leaderMemberOnePic' onclick='showProfileYeong();return false;'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic' onclick='showProfileDK();return false;'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'onclick='showProfileAnnie();return false;'></div></div></div>";
var leaderOut="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><<img id='membersLine' src = '/assets/line.png'>h5 id='teamIntro'>The Leadership communicates with every team to ensure everything runs smoothly and everyone is on the same page.<br>As the main liaison to sponsors, vendors, and other external constituents, the Chief Officers also align MOI’M’s enterprises and activities with our mission.</h5><div class='memeberOne'><div id='leaderMemberOnePic'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'></div></div></div>";
var leaderOut1="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Leadership communicates with every team to ensure everything runs smoothly and everyone is on the same page.<br>As the main liaison to sponsors, vendors, and other external constituents, the Chief Officers also align MOI’M’s enterprises and activities with our mission.</h5><div class='memeberOne'><div id='leaderMemberOnePic'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'></div></div></div>";
var leaderOut2="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='leadershipOut1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><h5 id='teamIntro'>The Leadership communicates with every team to ensure everything runs smoothly and everyone is on the same page.<br>As the main liaison to sponsors, vendors, and other external constituents, the Chief Officers also align MOI’M’s enterprises and activities with our mission.</h5><div class='memeberOne'><div id='leaderMemberFourPic'></div></div></div>";

var leaderOutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Leadership communicates with every team to ensure everything runs smoothly and everyone is on the same page.<br>As the main liaison to sponsors, vendors, and other external constituents, the Chief Officers also align MOI’M’s enterprises and activities with our mission.</h5><div class='memeberOne'><div id='leaderMemberOnePic'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic'></div></div><div class='memeberThree'><div id='leaderMemberThreePic'></div></div></div>";
var leaderInFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='leadershipOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='leaders1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Leadership communicates with every team to ensure everything runs smoothly and everyone is on the same page.<br>As the main liaison to sponsors, vendors, and other external constituents, the Chief Officers also align MOI’M’s enterprises and activities with our mission.</h5><div class='memeberOne'><div id='leaderMemberOnePic' onclick='showProfileYeong();return false;'></div></div><div class='memeberTwo'><div id='leaderMemberTwoPic' onclick='showProfileDK();return false;'></div></div><div class='memeberThree'><div id='leaderMemberThreePic' onclick='showProfileAnnie();return false;'></div></div></div>";
var leader1OutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='leadershipOut1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Leadership communicates with every team to ensure everything runs smoothly and everyone is on the same page.<br>As the main liaison to sponsors, vendors, and other external constituents, the Chief Officers also align MOI’M’s enterprises and activities with our mission.</h5><div class='memeberOne'><div id='leaderMemberFourPic' onclick='showProfileEun();return false;'></div></div></div>";
var leader1InFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='leadershipOut1();return false;'><h2 id='leaderHeading'>LEADERSHIP TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Leadership communicates with every team to ensure everything runs smoothly and everyone is on the same page.<br>As the main liaison to sponsors, vendors, and other external constituents, the Chief Officers also align MOI’M’s enterprises and activities with our mission.</h5><div class='memeberOne'><div id='leaderMemberFourPic' onclick='showProfileEun();return false;'></div></div></div>";
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
var eventsIn="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='eventTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='events1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Event Team defines who we are by producing events that have never been attempted before.<br>The team handles the logistics and planning of MOI’M events starting from pre-production to post-production.</h5><div class='memeberOne'><div id='eventsMemberOnePic' onclick='showProfileSarah();return false;'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic' onclick='showProfileRyan();return false;'></div></div><div class='memeberThree'><div id='eventsMemberThreePic' onclick='showProfileBrent();return false;'></div></div></div>";
var eventsIn1="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='eventTeamOut1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Event Team defines who we are by producing events that have never been attempted before.<br>The team handles the logistics and planning of MOI’M events starting from pre-production to post-production.</h5><div class='memeberOne'><div id='eventsMemberFourPic' onclick='showProfileAmy();return false;'></div></div></div>";
var eventsIn2="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='eventTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='events1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Event Team defines who we are by producing events that have never been attempted before.<br>The team handles the logistics and planning of MOI’M events starting from pre-production to post-production.</h5><div class='memeberOne'><div id='eventsMemberOnePic' onclick='showProfileSarah();return false;'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic' onclick='showProfileRyan();return false;'></div></div><div class='memeberThree'><div id='eventsMemberThreePic'onclick='showProfileBrent();return false;'></div></div></div>";
var eventsOut="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='eventTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='events1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Event Team defines who we are by producing events that have never been attempted before.<br>The team handles the logistics and planning of MOI’M events starting from pre-production to post-production.</h5><div class='memeberOne'><div id='eventsMemberOnePic'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic'></div></div><div class='memeberThree'><div id='eventsMemberThreePic'></div></div></div>";
var eventsOut1="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='eventTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='events1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Event Team defines who we are by producing events that have never been attempted before.<br>The team handles the logistics and planning of MOI’M events starting from pre-production to post-production.</h5><div class='memeberOne'><div id='eventsMemberOnePic'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic'></div></div><div class='memeberThree'><div id='eventsMemberThreePic'></div></div></div>";
var eventsOut2="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='eventTeamOut1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Event Team defines who we are by producing events that have never been attempted before.<br>The team handles the logistics and planning of MOI’M events starting from pre-production to post-production.</h5><div class='memeberOne'><div id='eventsMemberFourPic'></div></div></div>";

var eventsOutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='eventTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='events1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Event Team defines who we are by producing events that have never been attempted before.<br>The team handles the logistics and planning of MOI’M events starting from pre-production to post-production.</h5><div class='memeberOne'><div id='eventsMemberOnePic'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic'></div></div><div class='memeberThree'><div id='eventsMemberThreePic'></div></div></div>";
var eventsInFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='eventTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='events1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Event Team defines who we are by producing events that have never been attempted before.<br>The team handles the logistics and planning of MOI’M events starting from pre-production to post-production.</h5><div class='memeberOne'><div id='eventsMemberOnePic' onclick='showProfileSarah();return false;'></div></div><div class='memeberTwo'><div id='eventsMemberTwoPic' onclick='showProfileRyan();return false;'></div></div><div class='memeberThree'><div id='eventsMemberThreePic' onclick='showProfileBrent();return false;'></div></div></div>";
var events1OutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='eventTeamOut1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Event Team defines who we are by producing events that have never been attempted before.<br>The team handles the logistics and planning of MOI’M events starting from pre-production to post-production.</h5><div class='memeberOne'><div id='eventsMemberFourPic' onclick='showProfileAmy();return false;'></div></div></div>";
var events1InFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='eventTeamOut1();return false;'><h2 id='leaderHeading'>EVENTS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Event Team defines who we are by producing events that have never been attempted before.<br>The team handles the logistics and planning of MOI’M events starting from pre-production to post-production.</h5><div class='memeberOne'><div id='eventsMemberFourPic' onclick='showProfileAmy();return false;'></div></div></div>";
// ***

// ***Sarah
var SarahIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarah();return false;'><img id='profilePic' src = '/assets/SarahSinBig.png'><h3 id='profileHead'>SARAH SIN   |   신영은</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, EVENTS<br>Industry: FASHION PRINT DESIGN<br>Email: sarah@moimnewyork.com<br><br>MOTTO: Hold the vision, Trust the Process – Unknown<br>모토: 비전을 가지고, 방법을 신뢰하라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSarah();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASarah();return false;'>FUN FACTS</h4></div>";
var SarahOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarah();return false;'><img id='profilePic' src = '/assets/SarahSinBig.png'><h3 id='profileHead'>SARAH SIN   |   신영은</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, EVENTS<br>Industry: FASHION PRINT DESIGN<br>Email: sarah@moimnewyork.com<br><br>MOTTO: Hold the vision, Trust the Process – Unknown<br>모토: 비전을 가지고, 방법을 신뢰하라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSarah();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASarah();return false;'>FUN FACTS</h4></div>";
var SarahFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarah();return false;'><img id='profilePic' src = '/assets/SarahSinBig.png'><h3 id='profileHead'>SARAH SIN   |   신영은</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, EVENTS<br>Industry: FASHION PRINT DESIGN<br>Email: sarah@moimnewyork.com<br><br>MOTTO: Hold the vision, Trust the Process – Unknown<br>모토: 비전을 가지고, 방법을 신뢰하라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSarah();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASarah();return false;'>FUN FACTS</h4></div>";

var SarahBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarahBio();return false;'><h3 id='profileHeadBio'>SARAH SIN   |   신영은</h3><p id='profileBio'>Sarah Sin calls Kenya her birthplace and Russia and New York her hometown. She studied Communication Design at Pratt Institute, and is currently working as a Print<br> Designer for swimwear at LF USA. Over the years she has volunteered for non-profit organizations (D2 fashion non-profit) and most recently traveled to Benin, Africa for<br> a series of teen fashion projects. Sarah is passionate about the arts, philanthropy and mission based work.<br>Side note: Sarah’s work philosophy is – get fed first and work hard.<br><br>케냐에서 태어나 러시아와 뉴욕에서 자랐으며 Pratt Institute 에서 광고 디자인 학과를 전공. 현재 스윔웨어 Print Designer 로서 활동 중. 여러 선교 및 비영리 단체활동에 꾸준히 종사해 왔으며,<br>최근 2년동안 벤닌, 아프리카 청소년 패션 프로젝트에 참여. 예술과 봉사, 자선 활동에 큰 열정을 가지고 있다.</p><h4 id='mainButton' onclick='showSarah();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQASarah();return false;'>FUN FACTS</h4></div>";
var SarahBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarah();return false;'><h3 id='profileHeadBio'>SARAH SIN   |   신영은</h3><p id='profileBio'>Sarah Sin calls Kenya her birthplace and Russia and New York her hometown. She studied Communication Design at Pratt Institute, and is currently working as a Print<br> Designer for swimwear at LF USA. Over the years she has volunteered for non-profit organizations (D2 fashion non-profit) and most recently traveled to Benin, Africa for<br> a series of teen fashion projects. Sarah is passionate about the arts, philanthropy and mission based work.<br>Side note: Sarah’s work philosophy is – get fed first and work hard.<br><br>케냐에서 태어나 러시아와 뉴욕에서 자랐으며 Pratt Institute 에서 광고 디자인 학과를 전공. 현재 스윔웨어 Print Designer 로서 활동 중. 여러 선교 및 비영리 단체활동에 꾸준히 종사해 왔으며,<br>최근 2년동안 벤닌, 아프리카 청소년 패션 프로젝트에 참여. 예술과 봉사, 자선 활동에 큰 열정을 가지고 있다.</p><h4 id='mainButton' onclick='showSarah();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQASarah();return false;'>FUN FACTS</h4></div>";

var SarahQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarahQA();return false;'><h3 id='profileHeadBio'>SARAH SIN   |   신영은</h3><p id='profileQuestions1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would withdraw all of my cash and give food and allowance to the homeless,<br> enjoy the most delicious meal with my loved ones, and attend church service to<br> look back on my life before the \“end\”.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: No problem! & Thank you! (in speech) Fighting! (in messages)<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: Soundcloud for its dynamic gathering of musical talents and Instagram for<br> its beautiful images and interesting storytelling.<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: Regardless of the season, I always need to keep my toes covered and ears<br> warm when I sleep.<br><br><span id='question'>Q: Inspiration?</span><br>A: I am inspired by those who have overcome adversity: whether it be physical,<br> emotional, or financial.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Living life to the fullest. An ongoing challenge!</p><p id='profileQuestions2'><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 내 통장에 있는 모든 돈을 뽑아서 길 거리에 있는 노숙자들에게 배불이 먹을 양식과 그들 또한 마지막<br>을 즐길 용돈을 나눠주고 내가 제일 사랑하는 사람들과 세상에서 제일 맛있는 음식을 먹고, 교회에서 예<br>배를 드리면서 나의 인생을 돌아보고 마지막을 준비한다.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: No problem! & 고마워요! (말할때) / 파이팅! (문자)<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 다양한 사람들의 음악과 재능을 들을수 있는 Soundcloud와 아름다운 사진들이 전해주는 독특한<br> 이야기 공간인 인스타그램을 자주 사용한다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 계절과 상관없이 잘때는 발과 귀를 꼭 따뜻하게 해야된다.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 여러가지 어려움들을 (육체적, 심리적, 재정적 등등) 극복한 사람들의 삶을 통해 많은 영감과 희망을<br> 얻는다.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 세상을 알차게, 후회없이 사는 것 – 끊이지 않는 도전.</p><h4 id='mainButton' onclick='showSarah();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioSarah();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var SarahQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSarah();return false;'><h3 id='profileHeadBio'>SARAH SIN   |   신영은</h3><p id='profileQuestions1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would withdraw all of my cash and give food and allowance to the homeless,<br> enjoy the most delicious meal with my loved ones, and attend church service to<br> look back on my life before the \“end\”.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: No problem! & Thank you! (in speech) Fighting! (in messages)<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: Soundcloud for its dynamic gathering of musical talents and Instagram for<br> its beautiful images and interesting storytelling.<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: Regardless of the season, I always need to keep my toes covered and ears<br> warm when I sleep.<br><br><span id='question'>Q: Inspiration?</span><br>A: I am inspired by those who have overcome adversity: whether it be physical,<br> emotional, or financial.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Living life to the fullest. An ongoing challenge!</p><p id='profileQuestions2'><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 내 통장에 있는 모든 돈을 뽑아서 길 거리에 있는 노숙자들에게 배불이 먹을 양식과 그들 또한 마지막<br>을 즐길 용돈을 나눠주고 내가 제일 사랑하는 사람들과 세상에서 제일 맛있는 음식을 먹고, 교회에서 예<br>배를 드리면서 나의 인생을 돌아보고 마지막을 준비한다.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: No problem! & 고마워요! (말할때) / 파이팅! (문자)<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 다양한 사람들의 음악과 재능을 들을수 있는 Soundcloud와 아름다운 사진들이 전해주는 독특한<br> 이야기 공간인 인스타그램을 자주 사용한다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 계절과 상관없이 잘때는 발과 귀를 꼭 따뜻하게 해야된다.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 여러가지 어려움들을 (육체적, 심리적, 재정적 등등) 극복한 사람들의 삶을 통해 많은 영감과 희망을<br> 얻는다.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 세상을 알차게, 후회없이 사는 것 – 끊이지 않는 도전.</p><h4 id='mainButton' onclick='showSarah();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioSarah();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***Ryan
var RyanIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRyan();return false;'><img id='profilePic' src = '/assets/RyanJeongBig.png'><h3 id='profileHead'>RYAN JEONG   |   정진훈</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, PROGRAM DEVELOPMENT<br>Industry: DENTISTRY<br>Email: Ryan@moimnewyork.com<br><br>MOTTO: Relax<br>모토: 릴랙스~</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioRyan();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQARyan();return false;'>FUN FACTS</h4></div>";
var RyanOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRyan();return false;'><img id='profilePic' src = '/assets/RyanJeongBig.png'><h3 id='profileHead'>RYAN JEONG   |   정진훈</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, PROGRAM DEVELOPMENT<br>Industry: DENTISTRY<br>Email: Ryan@moimnewyork.com<br><br>MOTTO: Relax<br>모토: 릴랙스~</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioRyan();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQARyan();return false;'>FUN FACTS</h4></div>";
var RyanFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRyan();return false;'><img id='profilePic' src = '/assets/RyanJeongBig.png'><h3 id='profileHead'>RYAN JEONG   |   정진훈</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, PROGRAM DEVELOPMENT<br>Industry: DENTISTRY<br>Email: Ryan@moimnewyork.com<br><br>MOTTO: Relax<br>모토: 릴랙스~</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioRyan();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQARyan();return false;'>FUN FACTS</h4></div>";

var RyanBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRyanBio();return false;'><h3 id='profileHeadBio'>RYAN JEONG   |   정진훈</h3><p id='profileBio'>Born and raised in a beach-town of Los Angeles, Ryan Jeong first stepped on the concrete blocks of NYC in 2006 as an undergraduate student at NYU. He graduated<br> from NYU College of Dentistry in 2013, and currently works as a resident at Jersey City Medical Center in NJ. Throughout the long years of studying, Ryan depended<br> heavily on music to relieve stress and keep himself motivated. Having played in a jazz band all throughout his teenage years, Ryan absolutely loves jazz. A couple years<br> ago he found a new passion in drums which he practices every day. He currently lives with a 1 year old parakeet named 꼬몽 (Kkomong).<br><br>LA에 있는 한 바닷가 마을에서 태어나고 자랐으며, 2006년 NYU에 입학하면서 뉴욕으로 건너옴. 2013년에 NYU 치과대학을 졸업하고, 현재 뉴저지에 있는 저지시티 메디컬 센터에서 레지던트로 근무중.<br>10대 시절 재즈 밴드에서 활동하기도 하였으며, 치과대학 재학기간 동안 음악이 없이는 버틸 수 없었다고 할 정도로 재즈음악을 사랑함.<br>몇 년 전 처음 시작하여, 이제는 매일 연습하고 있는 드럼실력은 꽤나 수준급이다. 1살 된 잉꼬앵무새 ‘꼬몽’과 함께 살고 있다.</p><h4 id='mainButton' onclick='showRyan();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQARyan();return false;'>FUN FACTS</h4></div>";
var RyanBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRyan();return false;'><h3 id='profileHeadBio'>RYAN JEONG   |   정진훈</h3><p id='profileBio'>Born and raised in a beach-town of Los Angeles, Ryan Jeong first stepped on the concrete blocks of NYC in 2006 as an undergraduate student at NYU. He graduated<br> from NYU College of Dentistry in 2013, and currently works as a resident at Jersey City Medical Center in NJ. Throughout the long years of studying, Ryan depended<br> heavily on music to relieve stress and keep himself motivated. Having played in a jazz band all throughout his teenage years, Ryan absolutely loves jazz. A couple years<br> ago he found a new passion in drums which he practices every day. He currently lives with a 1 year old parakeet named 꼬몽 (Kkomong).<br><br>LA에 있는 한 바닷가 마을에서 태어나고 자랐으며, 2006년 NYU에 입학하면서 뉴욕으로 건너옴. 2013년에 NYU 치과대학을 졸업하고, 현재 뉴저지에 있는 저지시티 메디컬 센터에서 레지던트로 근무중.<br>10대 시절 재즈 밴드에서 활동하기도 하였으며, 치과대학 재학기간 동안 음악이 없이는 버틸 수 없었다고 할 정도로 재즈음악을 사랑함.<br>몇 년 전 처음 시작하여, 이제는 매일 연습하고 있는 드럼실력은 꽤나 수준급이다. 1살 된 잉꼬앵무새 ‘꼬몽’과 함께 살고 있다.</p><h4 id='mainButton' onclick='showRyan();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQARyan();return false;'>FUN FACTS</h4></div>";

var RyanQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRyanQA();return false;'><h3 id='profileHeadBio'>RYAN JEONG   |   정진훈</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: The deli on 14th St. and 3rd Ave. makes really good philly cheesesteak.<br><br><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would go to the New York Auto Show and steal a Ferrari.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: I want to go dog-sledding in Alaska.<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: 2048. I wont stop until I beat it.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Love.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: 14번가와 3번애비뉴 코너에 있는 델리가게. 거기서 파는 필리치즈스테이크는 진짜 맛있다.<br><br><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 뉴욕오토쇼에가서 페라리를 훔칠 것이다.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 알래스카에 가서 개썰매를 타고 싶다.<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 2048 (게임). 다 깰때 까지 계속 할 것이다.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 사랑..</p><h4 id='mainButton' onclick='showRyan();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioRyan();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var RyanQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRyan();return false;'><h3 id='profileHeadBio'>RYAN JEONG   |   정진훈</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: The deli on 14th St. and 3rd Ave. makes really good philly cheesesteak.<br><br><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I would go to the New York Auto Show and steal a Ferrari.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: I want to go dog-sledding in Alaska.<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: 2048. I wont stop until I beat it.<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Love.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: 14번가와 3번애비뉴 코너에 있는 델리가게. 거기서 파는 필리치즈스테이크는 진짜 맛있다.<br><br><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 뉴욕오토쇼에가서 페라리를 훔칠 것이다.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 알래스카에 가서 개썰매를 타고 싶다.<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 2048 (게임). 다 깰때 까지 계속 할 것이다.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 사랑..</p></p><h4 id='mainButton' onclick='showRyan();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioRyan();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***Brent
var BrentIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBrent();return false;'><img id='profilePic' src = '/assets/BrentKimBig.png'><h3 id='profileHead'>BRENT KIM   |   김하규</h3><h5 id='profileStat'>Title in MOI’M: EVENT PRODUCER<br>Industry: FINANCE<br><br>MOTTO: “It ain’t over ‘till it’s over.” – Yogi Berra<br>모토: 끝날 때까지 끝난 게 아니다. –요기 베라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioBrent();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQABrent();return false;'>FUN FACTS</h4></div>";
var BrentOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBrent();return false;'><img id='profilePic' src = '/assets/BrentKimBig.png'><h3 id='profileHead'>BRENT KIM   |   김하규</h3><h5 id='profileStat'>Title in MOI’M: EVENT PRODUCER<br>Industry: FINANCE<br><br>MOTTO: “It ain’t over ‘till it’s over.” – Yogi Berra<br>모토: 끝날 때까지 끝난 게 아니다. –요기 베라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioBrent();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQABrent();return false;'>FUN FACTS</h4></div>";
var BrentFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBrent();return false;'><img id='profilePic' src = '/assets/BrentKimBig.png'><h3 id='profileHead'>BRENT KIM   |   김하규</h3><h5 id='profileStat'>Title in MOI’M: EVENT PRODUCER<br>Industry: FINANCE<br><br>MOTTO: “It ain’t over ‘till it’s over.” – Yogi Berra<br>모토: 끝날 때까지 끝난 게 아니다. –요기 베라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioBrent();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQABrent();return false;'>FUN FACTS</h4></div>";

var BrentBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBrentBio();return false;'><h3 id='profileHeadBio'>BRENT KIM   |   김하규</h3><p id='profileBio'>Hakyu Kim graduated from Corona Del Mar High School in California in 2010 and currently pursues a B.A. in Economics from New York University. For his mandatory<br> military service, he served as an interpreter in the Republic of Korea Air Force Materiel Command and the Republic of Korea Joint Support Group in the Philippines.<br> Hakyu was discharged from service on January 2015. Since then he has worked at a consulting company and a start-up company and prepared to go back to school on<br> August 2015. After graduating from NYU, he wants to work in the finance industry.<br><br>2010년 미국 캘리포니아 Corona Del Mar High School을 졸업 후 뉴욕대학교에서 경제학 학사 과정을 수료 중임. 공군 물자사령부와 필리핀 합동 지원단에서 통역병으로 군 복무를 하였으며<br>2015년 1월 군 복무를 마침. 전역 이후 컨설팅 회사와 스타트업 업체에서 인턴 경험을 하면서 2015년 가을학기 복학 준비를 하고 있으며, 졸업 후 금융권에 종사하기를 희망.</p><h4 id='mainButton' onclick='showBrent();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQABrent();return false;'>FUN FACTS</h4></div>";
var BrentBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBrent();return false;'><h3 id='profileHeadBio'>BRENT KIM   |   김하규</h3><p id='profileBio'>Hakyu Kim graduated from Corona Del Mar High School in California in 2010 and currently pursues a B.A. in Economics from New York University. For his mandatory<br> military service, he served as an interpreter in the Republic of Korea Air Force Materiel Command and the Republic of Korea Joint Support Group in the Philippines.<br> Hakyu was discharged from service on January 2015. Since then he has worked at a consulting company and a start-up company and prepared to go back to school on<br> August 2015. After graduating from NYU, he wants to work in the finance industry.<br><br>2010년 미국 캘리포니아 Corona Del Mar High School을 졸업 후 뉴욕대학교에서 경제학 학사 과정을 수료 중임. 공군 물자사령부와 필리핀 합동 지원단에서 통역병으로 군 복무를 하였으며<br>2015년 1월 군 복무를 마침. 전역 이후 컨설팅 회사와 스타트업 업체에서 인턴 경험을 하면서 2015년 가을학기 복학 준비를 하고 있으며, 졸업 후 금융권에 종사하기를 희망.</p><h4 id='mainButton' onclick='showBrent();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQABrent();return false;'>FUN FACTS</h4></div>";

var BrentQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBrentQA();return false;'><h3 id='profileHeadBio'>BRENT KIM   |   김하규</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Shopsin’s. A small restaurant in Essex St Market with a unique name and a vast<br> menu with a variety of different dishes.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Eternal Sunshine of the Spotless Mind. A movie featuring a new side of Jim<br> Carrey and highlighting Michel Gondry’s amazing ability to portray memory and<br> time. Also, it is a great story that depicts the essence of love.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: Montauk in the winter (Eternal Sunshine has left a great impression…)<br><br><span id='question'>Q: Inspiration?</span><br>A: Henry Kissinger, Alain de Botton, Billy Beane, my dad</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: 독특한 이름인 Shopsin’s 라고 불리는 조그만 레스토랑. Essex St Market에 위치하고 있고 다양<br>한 메뉴가 매력적이다.<br><br><span id='question'>Q: 가장 감명깊게 본 영화? 이유?</span><br>A: 이터널 선샤인. 짐 캐리의 새로운 모습, 기억과 시간을 멋지게 엮은 미셀 공드리 감독, 그리고 사랑의<br> 본질에 관한 최고의 이야기.<br><br><span id='question'>Q: 가고 싶은 휴양지?</span><br>A: 겨울의 Montauk (Eternal Sunshine을 너무 감명 깊게 본 나머지…)<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 헨리 키신저, 알랭 드 보통, 빌리 빈, 우리 아빠</p><h4 id='mainButton' onclick='showBrent();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioBrent();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var BrentQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBrent();return false;'><h3 id='profileHeadBio'>BRENT KIM   |   김하규</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Shopsin’s. A small restaurant in Essex St Market with a unique name and a vast<br> menu with a variety of different dishes.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Eternal Sunshine of the Spotless Mind. A movie featuring a new side of Jim<br> Carrey and highlighting Michel Gondry’s amazing ability to portray memory and<br> time. Also, it is a great story that depicts the essence of love.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: Montauk in the winter (Eternal Sunshine has left a great impression…)<br><br><span id='question'>Q: Inspiration?</span><br>A: Henry Kissinger, Alain de Botton, Billy Beane, my dad</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: 독특한 이름인 Shopsin’s 라고 불리는 조그만 레스토랑. Essex St Market에 위치하고 있고 다양<br>한 메뉴가 매력적이다.<br><br><span id='question'>Q: 가장 감명깊게 본 영화? 이유?</span><br>A: 이터널 선샤인. 짐 캐리의 새로운 모습, 기억과 시간을 멋지게 엮은 미셀 공드리 감독, 그리고 사랑의<br> 본질에 관한 최고의 이야기.<br><br><span id='question'>Q: 가고 싶은 휴양지?</span><br>A: 겨울의 Montauk (Eternal Sunshine을 너무 감명 깊게 본 나머지…)<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 헨리 키신저, 알랭 드 보통, 빌리 빈, 우리 아빠</p></p><h4 id='mainButton' onclick='showBrent();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioBrent();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ****Amy - Leader
var AmyIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAmy();return false;'><img id='profilePic' src = '/assets/AmyYooBig.png'><h3 id='profileHead'>AMY YOO   |   유채영</h3><h5 id='profileStat'>Title in MOI’M: EVENT PRODUCER<br>Industry: ACCOUNTING<br><br>MOTTO: Communicate with others open-mindedly.<br>모토: 오픈마인드로 사람들과 소통하라.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAmy();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAmy();return false;'>FUN FACTS</h4></div>";
var AmyOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAmy();return false;'><img id='profilePic' src = '/assets/AmyYooBig.png'><h3 id='profileHead'>AMY YOO   |   유채영</h3><h5 id='profileStat'>Title in MOI’M: EVENT PRODUCER<br>Industry: ACCOUNTING<br><br>MOTTO: Communicate with others open-mindedly.<br>모토: 오픈마인드로 사람들과 소통하라.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAmy();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAmy();return false;'>FUN FACTS</h4></div>";
var AmyFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAmy();return false;'><img id='profilePic' src = '/assets/AmyYooBig.png'><h3 id='profileHead'>AMY YOO   |   유채영</h3><h5 id='profileStat'>Title in MOI’M: EVENT PRODUCER<br>Industry: ACCOUNTING<br><br>MOTTO: Communicate with others open-mindedly.<br>모토: 오픈마인드로 사람들과 소통하라.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAmy();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAmy();return false;'>FUN FACTS</h4></div>";

var AmyBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAmyBio();return false;'><h3 id='profileHeadBio'>AMY YOO   |   유채영</h3><p id='profileBio'>Amy Yoo is currently enrolled at Baruch College as an Accounting student. She works part-time at Take 31 INC as a staff accountant. She plans to minor in both Business<br> Communication and Computer Information Systems (CIS). Her goal is to become a professional accountant.<br><br>현재 버룩 대학교 회계학과 재학중. Take 31에서 파트타임 경리로 근무. 비지니스 커뮤니케이션과 컴퓨터 정보 시스템 복수 부전공 계획중. 공인회계사가 되길 희망.</p><h4 id='mainButton' onclick='showAmy();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAAmy();return false;'>FUN FACTS</h4></div>";
var AmyBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAmy();return false;'><h3 id='profileHeadBio'>AMY YOO   |   유채영</h3><p id='profileBio'>Amy Yoo is currently enrolled at Baruch College as an Accounting student. She works part-time at Take 31 INC as a staff accountant. She plans to minor in both Business<br> Communication and Computer Information Systems (CIS). Her goal is to become a professional accountant.<br><br>현재 버룩 대학교 회계학과 재학중. Take 31에서 파트타임 경리로 근무. 비지니스 커뮤니케이션과 컴퓨터 정보 시스템 복수 부전공 계획중. 공인회계사가 되길 희망.</p><h4 id='mainButton' onclick='showAmy();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAAmy();return false;'>FUN FACTS</h4></div>";

var AmyQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAmyQA();return false;'><h3 id='profileHeadBio'>AMY YOO   |   유채영</h3><p id='profileQuestions1'><span id='question'>Q: Inspirational Film?</span><br>A: 200 Pounds Beauty because I like its message that no matter how beautiful<br> you are on the outside, the inside is what counts.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: I really want to go to Venice, Italy<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: Nowadays an app called MOCI. I can interact with other people and my<br> network and can ask for advice or suggestions and share stories.<br><br><span id='question'>Q: Perfect Day?</span><br>A: A day when I don’t have to go to work and can just stay at home with a cup of<br> coffee and relax on my bed watching Korean dramas and show programs all<br> day.</p><p id='profileQuestions2'><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 미녀는 괴로워. 아무리 외면이 예뻐도 사람의 내면이 가장 중요하다는 메세지가 마음에 들어서.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 이탈리아 베니스에 꼭 가고 싶어요.<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 요즘엔 모씨라는 어플. 사람들과 익명으로 소통하고 조언도 구하고 스토리도 공유한다는게 마음에 들<br>어요.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 일 안하고 커피한잔의 여유를 가지며 침대에서 뒹굴거리면서 한국 드라마와 쇼프로 하루종일 보기.</p><h4 id='mainButton' onclick='showAmy();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioAmy();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var AmyQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAmy();return false;'><h3 id='profileHeadBio'>AMY YOO   |   유채영</h3><p id='profileQuestionsShort1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Elephant & Castle<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: I find Zio, hold him and sleep for five more minutes.<br><br><span id='question'>Q: The word/phrase you say the most?</span><br>A: zi~o~~~ zio~~~ z • i • o!!!!!!!!!!!!<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Exercising every day</p><p id='profileQuestionsShort2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Elephant & Castle<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 지오찾아 안고 오분만 더자기.<br><br><span id='question'>Q: 하루중 가장 많이 하는 말은?</span><br>A: 지~오~~~ 지오~~~ ㅈㅣㅇㅗ!!!!<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 매일 운동하기.</p><h4 id='mainButton' onclick='showAmy();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioAmy();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***


// ***creative**
var creativeIn="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creative1();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberOnePic' onclick='showProfileRichard();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberTwoPic' onclick='showProfileAngie();return false;'></div></div><div class='memeberThree'><div id='creativeMemberThreePic' onclick='showProfileHyoBee();return false;'></div></div></div>";
var creativeIn1="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut1();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creative2();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberFourPic' onclick='showProfileSam();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberFivePic' onclick='showProfileBella();return false;'></div></div><div class='memeberThree'><div id='creativeMemberSixPic' onclick='showProfileEunSung();return false;'></div></div></div>";
var creativeIn1a="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut2();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberSevenPic' onclick='showProfileSeung();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberEightPic' onclick='showProfileWhitney();return false;'></div></div></div>";

var creativeIn2="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creative1();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberOnePic' onclick='showProfileRichard();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberTwoPic' onclick='showProfileAngie();return false;'></div></div><div class='memeberThree'><div id='creativeMemberThreePic' onclick='showProfileHyoBee();return false;'></div></div></div>";
var creativeIn3="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut1();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creative2();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberFourPic' onclick='showProfileSam();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberFivePic' onclick='showProfileBella();return false;'></div></div><div class='memeberThree'><div id='creativeMemberSixPic' onclick='showProfileEunSung();return false;'></div></div></div>";

var creativeOut="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creative1();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberOnePic'></div></div><div class='memeberTwo'><div id='creativeMemberTwoPic'></div></div><div class='memeberThree'><div id='creativeMemberThreePic'></div></div></div>";
var creativeOut1="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creative1();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberOnePic'></div></div><div class='memeberTwo'><div id='creativeMemberTwoPic'></div></div><div class='memeberThree'><div id='creativeMemberThreePic'></div></div></div>";
var creativeOut2="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut1();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberFourPic'></div></div><div class='memeberTwo'><div id='creativeMemberFivePic'></div></div><div class='memeberThree'><div id='creativeMemberSixPic'></div></div></div>";
var creativeOut3="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut1();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberFourPic'></div></div><div class='memeberTwo'><div id='creativeMemberFivePic'></div></div><div class='memeberThree'><div id='creativeMemberSixPic'></div></div></div>";
var creativeOut4="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut1();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberSevenPic'></div></div><div class='memeberTwo'><div id='creativeMemberEightPic'></div></div></div>";
var creativeOut5="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut1();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberSevenPic'></div></div><div class='memeberTwo'><div id='creativeMemberEightPic'></div></div></div>";


var creativeOutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creative1();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberOnePic'></div></div><div class='memeberTwo'><div id='creativeMemberTwoPic'></div></div><div class='memeberThree'><div id='creativeMemberThreePic'></div></div></div>";
var creativeInFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creative1();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberOnePic' onclick='showProfileRichard();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberTwoPic' onclick='showProfileAngie();return false;'></div></div><div class='memeberThree'><div id='creativeMemberThreePic' onclick='showProfileHyoBee();return false;'></div></div></div>";
var creative1OutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut1();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creative2();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberFourPic' onclick='showProfileSam();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberFivePic' onclick='showProfileBella();return false;'></div></div><div class='memeberThree'><div id='creativeMemberSixPic' onclick='showProfileEunSung();return false;'></div></div></div>";
var creative1InFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut1();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='creative2();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberFourPic' onclick='showProfileSam();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberFivePic' onclick='showProfileBella();return false;'></div></div><div class='memeberThree'><div id='creativeMemberSixPic' onclick='showProfileEunSung();return false;'></div></div></div>";
var creative2OutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut2();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberSevenPic' onclick='showProfileSeung();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberEightPic' onclick='showProfileWhitney();return false;'></div></div></div>";
var creative2InFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='creativeTeamOut2();return false;'><h2 id='leaderHeading'>CREATIVE TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>As the face of MOI’M, the Creative Team shapes our brand image.<br>The Creative Team creates not only all promotional materials for MOI’M, but also acts as the nerve center for every artistic aspect of our work.<br>It ensures that our design coheres with our mission to inspire through creative networking.</h5><div class='memeberOne'><div id='creativeMemberSevenPic' onclick='showProfileSeung();return false;'></div></div><div class='memeberTwo'><div id='creativeMemberEightPic' onclick='showProfileWhitney();return false;'></div></div></div>";

// ***Richard
var RichardIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRichard();return false;'><img id='profilePic' src = '/assets/RichardShimBig.png'><h3 id='profileHead'>RICHARD SHIM   |   심민중</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, CREATIVE<br>Industry: ARCHITECTURE<br>Email: minjoong@moimnewyork.com<br><br>MOTTO: Take the slower but more rewarding path.<br>모토: 조금 느리더라도 보람있는 길을 택하라.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioRichard();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQARichard();return false;'>FUN FACTS</h4></div>";
var RichardOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRichard();return false;'><img id='profilePic' src = '/assets/RichardShimBig.png'><h3 id='profileHead'>RICHARD SHIM   |   심민중</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, CREATIVE<br>Industry: ARCHITECTURE<br>Email: minjoong@moimnewyork.com<br><br>MOTTO: Take the slower but more rewarding path.<br>모토: 조금 느리더라도 보람있는 길을 택하라.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioRichard();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQARichard();return false;'>FUN FACTS</h4></div>";
var RichardFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRichard();return false;'><img id='profilePic' src = '/assets/RichardShimBig.png'><h3 id='profileHead'>RICHARD SHIM   |   심민중</h3><h5 id='profileStat'>Title in MOI’M: DIRECTOR, CREATIVE<br>Industry: ARCHITECTURE<br>Email: minjoong@moimnewyork.com<br><br>MOTTO: Take the slower but more rewarding path.<br>모토: 조금 느리더라도 보람있는 길을 택하라.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioRichard();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQARichard();return false;'>FUN FACTS</h4></div>";

var RichardBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRichardBio();return false;'><h3 id='profileHeadBio'>RICHARD SHIM   |   심민중</h3><p id='profileBio'>Richard is currently an architectural designer at Ewingcole. He graduated from Trinity College majoring in Studio Art and Architectural Studies. He continued to create<br> art during his fellowship at Trinity, focusing on metal sculpting before studying architecture at the University of Pennsylvania. While in graduate school, Richard served<br> as president for the Penn Korean Graduate Student Association and Korean Architecture Student Association. Richard has also studied abroad in Copenhagen, Denmark<br> for architecture. Aside from designing buildings, Richard also enjoys traveling, singing, and DJ’ing.<br><br>현재 EwingCole 건축사무소에서 건축가로 근무중이다. 2010년 트리니티 대학에서 미술을 전공하면서 조각 연구장학생으로 1년간 트리니티에서 연구하기도 하였다.<br>2014년 펜실베니아대학교 펜디자인 대학원 건축석사학위를 취득하였고, 재학중에 대학원 한인 학생회, 펜디자인 한인학생회 회장으로 활동하였다. 대학시절 덴마크 코펜하겐에서 건축 공부를 한 경험도 있다.</p><h4 id='mainButton' onclick='showRichard();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQARichard();return false;'>FUN FACTS</h4></div>";
var RichardBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRichard();return false;'><h3 id='profileHeadBio'>RICHARD SHIM   |   심민중</h3><p id='profileBio'>Richard is currently an architectural designer at Ewingcole. He graduated from Trinity College majoring in Studio Art and Architectural Studies. He continued to create<br> art during his fellowship at Trinity, focusing on metal sculpting before studying architecture at the University of Pennsylvania. While in graduate school, Richard served<br> as president for the Penn Korean Graduate Student Association and Korean Architecture Student Association. Richard has also studied abroad in Copenhagen, Denmark<br> for architecture. Aside from designing buildings, Richard also enjoys traveling, singing, and DJ’ing.<br><br>현재 EwingCole 건축사무소에서 건축가로 근무중이다. 2010년 트리니티 대학에서 미술을 전공하면서 조각 연구장학생으로 1년간 트리니티에서 연구하기도 하였다.<br>2014년 펜실베니아대학교 펜디자인 대학원 건축석사학위를 취득하였고, 재학중에 대학원 한인 학생회, 펜디자인 한인학생회 회장으로 활동하였다. 대학시절 덴마크 코펜하겐에서 건축 공부를 한 경험도 있다.</p><h4 id='mainButton' onclick='showRichard();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQARichard();return false;'>FUN FACTS</h4></div>";

var RichardQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRichardQA();return false;'><h3 id='profileHeadBio'>RICHARD SHIM   |   심민중</h3><p id='profileQuestions1'><span id='question'>Q: Dream Vacation?</span><br>A: Rome, Italy<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Cedar Rapids because it is a calm, funny and down-to-earth American<br> comedy.<br><br><span id='question'>Q: Perfect Day?</span><br>A: Sipping on an espresso in front of the San Quattro Fontane in Rome.<br><br><span id='question'>Q: Inspiration?</span><br>A: Simple people who work hard every day</p><p id='profileQuestions2'><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 로마<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 시더 래피즈. 조금 유치하지만 미국적이고 차분한 코메디 영화.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 로마의 산 카를로 알레 콰트로 폰타네 성당 앞에서 커피 한잔.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 매일 열심히 일하는 일반인들.</p><h4 id='mainButton' onclick='showRichard();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioRichard();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var RichardQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutRichard();return false;'><h3 id='profileHeadBio'>RICHARD SHIM   |   심민중</h3><p id='profileQuestions1'><span id='question'>Q: Dream Vacation?</span><br>A: Rome, Italy<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Cedar Rapids because it is a calm, funny and down-to-earth American<br> comedy.<br><br><span id='question'>Q: Perfect Day?</span><br>A: Sipping on an espresso in front of the San Quattro Fontane in Rome.<br><br><span id='question'>Q: Inspiration?</span><br>A: Simple people who work hard every day</p><p id='profileQuestions2'><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 로마<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 시더 래피즈. 조금 유치하지만 미국적이고 차분한 코메디 영화.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 로마의 산 카를로 알레 콰트로 폰타네 성당 앞에서 커피 한잔.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 매일 열심히 일하는 일반인들.</p><h4 id='mainButton' onclick='showRichard();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioRichard();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***Angie
var AngieIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAngie();return false;'><img id='profilePic' src = '/assets/AngieHongBig.png'><h3 id='profileHead'>ANGIE HONG   |   홍은지</h3><h5 id='profileStat'>Title in MOI’M: DESIGNER<br>Industry: ARCHITECTURE & GRAPHIC DESIGN<br><br>MOTTO: When life doesn’t go right, go left.<br>모토: 막힌 길은 돌아가라.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAngie();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAngie();return false;'>FUN FACTS</h4></div>";
var AngieOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAngie();return false;'><img id='profilePic' src = '/assets/AngieHongBig.png'><h3 id='profileHead'>ANGIE HONG   |   홍은지</h3><h5 id='profileStat'>Title in MOI’M: DESIGNER<br>Industry: ARCHITECTURE & GRAPHIC DESIGN<br><br>MOTTO: When life doesn’t go right, go left.<br>모토: 막힌 길은 돌아가라.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAngie();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAngie();return false;'>FUN FACTS</h4></div>";
var AngieFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAngie();return false;'><img id='profilePic' src = '/assets/AngieHongBig.png'><h3 id='profileHead'>ANGIE HONG   |   홍은지</h3><h5 id='profileStat'>Title in MOI’M: DESIGNER<br>Industry: ARCHITECTURE & GRAPHIC DESIGN<br><br>MOTTO: When life doesn’t go right, go left.<br>모토: 막힌 길은 돌아가라.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioAngie();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAAngie();return false;'>FUN FACTS</h4></div>";

var AngieBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAngieBio();return false;'><h3 id='profileHeadBio'>ANGIE HONG   |   홍은지</h3><p id='profileBio'>Angie Hong graduated from the University of Pennsylvania, PennDesign in 2015 and currently works as a Junior Architect in New York.<br>Angie received her B.S. in Management from SUNY Binghamton, with a minor in Fine Arts. She loves traveling and has many working experiences in different countries.<br>Although her background is architecture, she loves every design-related field, such as furniture design, interior design, product design, and fashion design.<br><br>2015년 펜실베니아 대학교 건축과 대학원을 졸업. 현재 뉴욕에서 Junior Architect로 근무중. 학부는 뉴욕주립대학교에서 비지니스 전공 & 미술 부전공.<br>여행을 좋아해서 학부와 대학원시절 다양한 나라에서 인턴 경험. 건축뿐만 아니라 가구 디자인, 인테리어 디자인, 제품 디자인, 패션 디자인 등 디자인에 관련된 다양한 분야에 관심이 많음.</p><h4 id='mainButton' onclick='showAngie();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAAngie();return false;'>FUN FACTS</h4></div>";
var AngieBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAngie();return false;'><h3 id='profileHeadBio'>ANGIE HONG   |   홍은지</h3><p id='profileBio'>Angie Hong graduated from the University of Pennsylvania, PennDesign in 2015 and currently works as a Junior Architect in New York.<br>Angie received her B.S. in Management from SUNY Binghamton, with a minor in Fine Arts. She loves traveling and has many working experiences in different countries.<br>Although her background is architecture, she loves every design-related field, such as furniture design, interior design, product design, and fashion design.<br><br>2015년 펜실베니아 대학교 건축과 대학원을 졸업. 현재 뉴욕에서 Junior Architect로 근무중. 학부는 뉴욕주립대학교에서 비지니스 전공 & 미술 부전공.<br>여행을 좋아해서 학부와 대학원시절 다양한 나라에서 인턴 경험. 건축뿐만 아니라 가구 디자인, 인테리어 디자인, 제품 디자인, 패션 디자인 등 디자인에 관련된 다양한 분야에 관심이 많음.</p><h4 id='mainButton' onclick='showAngie();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAAngie();return false;'>FUN FACTS</h4></div>";

var AngieQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAngieQA();return false;'><h3 id='profileHeadBio'>ANGIE HONG   |   홍은지</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Rockin’ Raw. The best raw vegan restaurant with good service and a great<br> location.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: The first thing I do when I open my eyes in the morning is eat breakfast.<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: Google Maps because I have no sense of direction.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: I’ve heard that I look like Jung Ilwoo and Lee Ji Ah. I guess Jung Ilwoo + Lee Ji<br> Ah = what…? :(</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Rockin’ Raw. 좋은 위치에 있고 훌륭한 서비스를 자랑하는 곳. 생식 위주의 엄격한 채식주의 레스토<br>랑으로 웰빙을 지향하는 사람들에게 최고를 선사한다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: ‘눈뜨자마자’ 아침 먹어요.<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 구글맵 – 길치에게 필수앱.<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 예쁜남자 정일우랑 여배우 이지아 닮았다는 소리를 들어봤어요. 아마 둘을 합친것이 저와 비슷한가 봅<br>니다…</p><h4 id='mainButton' onclick='showAngie();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioAngie();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var AngieQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutAngie();return false;'><h3 id='profileHeadBio'>ANGIE HONG   |   홍은지</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Rockin’ Raw. The best raw vegan restaurant with good service and a great<br> location.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: The first thing I do when I open my eyes in the morning is eat breakfast.<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: Google Maps because I have no sense of direction.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: I’ve heard that I look like Jung Ilwoo and Lee Ji Ah. I guess Jung Ilwoo + Lee Ji<br> Ah = what…? :(</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Rockin’ Raw. 좋은 위치에 있고 훌륭한 서비스를 자랑하는 곳. 생식 위주의 엄격한 채식주의 레스토<br>랑으로 웰빙을 지향하는 사람들에게 최고를 선사한다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: ‘눈뜨자마자’ 아침 먹어요.<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 구글맵 – 길치에게 필수앱.<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 예쁜남자 정일우랑 여배우 이지아 닮았다는 소리를 들어봤어요. 아마 둘을 합친것이 저와 비슷한가 봅<br>니다…</p><h4 id='mainButton' onclick='showAngie();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioAngie();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ***HyoBee
var HyoBeeIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutHyoBee();return false;'><img id='profilePic' src = '/assets/HyobeeKimBig.png'><h3 id='profileHead'>HYOBEE KIM   |   김효비</h3><h5 id='profileStat'>Title in MOI’M: DESIGNER<br>Industry: ADVERTISING<br><br>MOTTO: Don’t limit yourself – Mary Kay Ash<br>모토: 스스로를 제한하지 말라 – 메리 케이 애시</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioHyoBee();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAHyoBee();return false;'>FUN FACTS</h4></div>";
var HyoBeeOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutHyoBee();return false;'><img id='profilePic' src = '/assets/HyobeeKimBig.png'><h3 id='profileHead'>HYOBEE KIM   |   김효비</h3><h5 id='profileStat'>Title in MOI’M: DESIGNER<br>Industry: ADVERTISING<br><br>MOTTO: Don’t limit yourself – Mary Kay Ash<br>모토: 스스로를 제한하지 말라 – 메리 케이 애시</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioHyoBee();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAHyoBee();return false;'>FUN FACTS</h4></div>";
var HyoBeeFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutHyoBee();return false;'><img id='profilePic' src = '/assets/HyobeeKimBig.png'><h3 id='profileHead'>HYOBEE KIM   |   김효비</h3><h5 id='profileStat'>Title in MOI’M: DESIGNER<br>Industry: ADVERTISING<br><br>MOTTO: Don’t limit yourself – Mary Kay Ash<br>모토: 스스로를 제한하지 말라 – 메리 케이 애시</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioHyoBee();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAHyoBee();return false;'>FUN FACTS</h4></div>";

var HyoBeeBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutHyoBeeBio();return false;'><h3 id='profileHeadBio'>HYOBEE KIM   |   김효비</h3><p id='profileBio'>Hyobee Kim is a Junior Art Director at Erwin Penland Advertising Agency in New York City. A graduate from the School of Visual Arts in 2013 for advertising,<br>Hyobee was the Director of Event Planning for the SVA Korean International Student Association. Personality wise,<br>Hyobee is an optimistic and experimental person who loves interactive advertising.<br><br>현재 Erwin Penland 라는 Advertising agency에서 Jr. Art Director로 활동하고있는 사회 새내기. 토론토에 있는 예술특목고 재학당시 더 크고 넓은 크리에이티브 세계를 꿈꾸며<br>2013년에 School of Visual Arts 광고과 졸업. 대학교 재학당시 SVA KISA (한인학생회) 1기로 시작하여 기획부장으로 활동함. SVAD (학교내 광고동아리), KANA (뉴욕한인예술연합) 를 거쳐<br>현재는 MOI’M에 합류하게 됨. 인터렉티브광고에 관심이 많고, 새로운것들을 시도하거나 보고 느끼는것을 좋아하며, 자연을 즐기고 요리가 취미인 초긍정주의자임.</p><h4 id='mainButton' onclick='showHyoBee();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAHyoBee();return false;'>FUN FACTS</h4></div>";
var HyoBeeBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutHyoBee();return false;'><h3 id='profileHeadBio'>HYOBEE KIM   |   김효비</h3><p id='profileBio'>Hyobee Kim is a Junior Art Director at Erwin Penland Advertising Agency in New York City. A graduate from the School of Visual Arts in 2013 for advertising,<br>Hyobee was the Director of Event Planning for the SVA Korean International Student Association. Personality wise,<br>Hyobee is an optimistic and experimental person who loves interactive advertising.<br><br>현재 Erwin Penland 라는 Advertising agency에서 Jr. Art Director로 활동하고있는 사회 새내기. 토론토에 있는 예술특목고 재학당시 더 크고 넓은 크리에이티브 세계를 꿈꾸며<br>2013년에 School of Visual Arts 광고과 졸업. 대학교 재학당시 SVA KISA (한인학생회) 1기로 시작하여 기획부장으로 활동함. SVAD (학교내 광고동아리), KANA (뉴욕한인예술연합) 를 거쳐<br>현재는 MOI’M에 합류하게 됨. 인터렉티브광고에 관심이 많고, 새로운것들을 시도하거나 보고 느끼는것을 좋아하며, 자연을 즐기고 요리가 취미인 초긍정주의자임.</p><h4 id='mainButton' onclick='showHyoBee();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAHyoBee();return false;'>FUN FACTS</h4></div>";

var HyoBeeQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutHyoBeeQA();return false;'><h3 id='profileHeadBio'>HYOBEE KIM   |   김효비</h3><p id='profileQuestions1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: (If 100% certain) After having a long phone call with loved ones, I would take<br> sleeping pills and go into a deep sleep. (If 90% certain) After having a long<br> phone call with loved ones, with 1% of hope I would go into an underground<br> shelter with food and necessities.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: After quickly calculating how much longer I can sleep, I go back to sleep.<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: It’s a secret.<br><br><span id='question'>Q: Inspiration?</span><br>A: Everything in the world.</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Martha’s Bakery – Very Berry Napoleon은 정말 최고임. 뉴욕에 3곳밖에 없어서 그런지 사<br>람들이 잘 모른다. 구지 이걸 먹으러 N,Q 종점까지 가야한다는건 비밀. 그렇지만 한번 중독되면 이것만<br> 사먹게 된다는건 안비밀.<br><br><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: (지구가 꼭. 100% 종말한다는 전제하에) 내 소중한 사람들과 길고 긴 전화통화를 한뒤, 미리 수면제<br>를 잔뜩먹고 잠에들겠다. (지구가 99% 종말한다는 전제하에) 마찬가지로 내 소중한 사람들과 길고 긴<br> 전화통화를 한뒤, 1%의 희망을 가지고 지하벙커를 사고 식량을 가득 채워넣겠다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 얼마나 더 잘수있는지 빠른계산을 한뒤 다시잔다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 비밀.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 지구안에 모든것.</p><h4 id='mainButton' onclick='showHyoBee();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioHyoBee();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var HyoBeeQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutHyoBee();return false;'><h3 id='profileHeadBio'>HYOBEE KIM   |   김효비</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Rockin’ Raw. The best raw vegan restaurant with good service and a great<br> location.<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: The first thing I do when I open my eyes in the morning is eat breakfast.<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: Google Maps because I have no sense of direction.<br><br><span id='question'>Q: Celebrity Look-alike?</span><br>A: I’ve heard that I look like Jung Ilwoo and Lee Ji Ah. I guess Jung Ilwoo + Lee Ji<br> Ah = what…? :(</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Rockin’ Raw. 좋은 위치에 있고 훌륭한 서비스를 자랑하는 곳. 생식 위주의 엄격한 채식주의 레스토<br>랑으로 웰빙을 지향하는 사람들에게 최고를 선사한다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: ‘눈뜨자마자’ 아침 먹어요.<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 구글맵 – 길치에게 필수앱.<br><br><span id='question'>Q: 닮은꼴 연예인?</span><br>A: 예쁜남자 정일우랑 여배우 이지아 닮았다는 소리를 들어봤어요. 아마 둘을 합친것이 저와 비슷한가 봅<br>니다…</p><h4 id='mainButton' onclick='showHyoBee();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioHyoBee();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ****

// ****Sam - creative
var SamIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSam();return false;'><img id='profilePic' src = '/assets/SamRahmanBig.png'><h3 id='profileHead'>SAM RAHMAN</h3><h5 id='profileStat'>Title in MOI’M: DESIGNER<br>Industry: GRAPHIC DESIGN<br><br>MOTTO: “Anyone can love a thing because. That’s as easy as<br> putting a penny in your pocket. But to love something<br> despite. To know the flaws and love them too. That is rare<br> and pure and perfect.” – Patrick Rothfuss<br>모토: “누구나 무언가를 사랑할 수 있다. 왜나하면 그것은 동전을 주머니에 넣는<br> 것만큼 쉽기 때문이다. 하지만 흠을 알고 경멸하는 무언가를 사랑하는 것은 진귀<br>하고, 순수하고 완벽한 것이다.” – 패트릭 로드푸스</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSam();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASam();return false;'>FUN FACTS</h4></div>";
var SamOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSam();return false;'><img id='profilePic' src = '/assets/SamRahmanBig.png'><h3 id='profileHead'>SAM RAHMAN</h3><h5 id='profileStat'>Title in MOI’M: DESIGNER<br>Industry: GRAPHIC DESIGN<br><br>MOTTO: “Anyone can love a thing because. That’s as easy as<br> putting a penny in your pocket. But to love something<br> despite. To know the flaws and love them too. That is rare<br> and pure and perfect.” – Patrick Rothfuss<br>모토: “누구나 무언가를 사랑할 수 있다. 왜나하면 그것은 동전을 주머니에 넣는<br> 것만큼 쉽기 때문이다. 하지만 흠을 알고 경멸하는 무언가를 사랑하는 것은 진귀<br>하고, 순수하고 완벽한 것이다.” – 패트릭 로드푸스</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSam();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASam();return false;'>FUN FACTS</h4></div>";
var SamFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSam();return false;'><img id='profilePic' src = '/assets/SamRahmanBig.png'><h3 id='profileHead'>SAM RAHMAN</h3><h5 id='profileStat'>Title in MOI’M: DESIGNER<br>Industry: GRAPHIC DESIGN<br><br>MOTTO: “Anyone can love a thing because. That’s as easy as<br> putting a penny in your pocket. But to love something<br> despite. To know the flaws and love them too. That is rare<br> and pure and perfect.” – Patrick Rothfuss<br>모토: “누구나 무언가를 사랑할 수 있다. 왜나하면 그것은 동전을 주머니에 넣는<br> 것만큼 쉽기 때문이다. 하지만 흠을 알고 경멸하는 무언가를 사랑하는 것은 진귀<br>하고, 순수하고 완벽한 것이다.” – 패트릭 로드푸스</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSam();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASam();return false;'>FUN FACTS</h4></div>";

var SamBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSamBio();return false;'><h3 id='profileHeadBio'>SAM RAHMAN</h3><p id='profileBio'>Sam Rahman is a graphic designer living and working in Philadelphia, specializing in branding, print, and interactive design. He is also a senior at Tyler School of Art in<br> Temple University, where he is earning a B.F.A. in graphic design. Sam loves to learn about different cultures and when he’s not designing, he likes to experience art in as<br> many ways as possible, be it through photography, creative writing, or traveling.<br><br>현재 Tyler School of Art in Temple University에서 그래픽 디자인 전공으로 4학년에 재학 중. 필라델피아에서 그래픽 디자이너로 일하고 있으며, 브랜딩, 프린트, 인터렉티브 디자인을 전문적으로 함. 디자인하<br>지 않을 때는 다른 문화를 배우는 것을 좋아함. 이외에도 예술을 사진, 창의적 글쓰기, 여행 등 다양한 방법을 통해 경험하는 것을 즐김.</p><h4 id='mainButton' onclick='showSam();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQASam();return false;'>FUN FACTS</h4></div>";
var SamBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSam();return false;'><h3 id='profileHeadBio'>SAM RAHMAN</h3><p id='profileBio'>Sam Rahman is a graphic designer living and working in Philadelphia, specializing in branding, print, and interactive design. He is also a senior at Tyler School of Art in<br> Temple University, where he is earning a B.F.A. in graphic design. Sam loves to learn about different cultures and when he’s not designing, he likes to experience art in as<br> many ways as possible, be it through photography, creative writing, or traveling.<br><br>현재 Tyler School of Art in Temple University에서 그래픽 디자인 전공으로 4학년에 재학 중. 필라델피아에서 그래픽 디자이너로 일하고 있으며, 브랜딩, 프린트, 인터렉티브 디자인을 전문적으로 함. 디자인하<br>지 않을 때는 다른 문화를 배우는 것을 좋아함. 이외에도 예술을 사진, 창의적 글쓰기, 여행 등 다양한 방법을 통해 경험하는 것을 즐김.</p><h4 id='mainButton' onclick='showSam();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQASam();return false;'>FUN FACTS</h4></div>";

var SamQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSamQA();return false;'><h3 id='profileHeadBio'>SAM RAHMAN</h3><p id='profileQuestions1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I’m not sure I’d do anything differently. I already try to live everyday like I have<br> nothing to lose<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)? Why?</span><br>A: iBooks. I try to find as much time as possible during the day to read.<br><br><span id='question'>Q: Inspiration?</span><br>A: I find inspiration in random little things, like listening to people’s stories,<br> finding old photographs, playing with my nieces, taking long walks in unfamiliar<br> places, the list goes on…<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Staying on the good side of crazy.</p><p id='profileQuestions2'><span id='question'>Q. 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 이미 잃을 것이 아무것도 없는 것처럼 매일 살고 있어서 평상시와 비슷한 생활을 할 것 같음.<br><br><span id='question'>Q. 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: iBooks. 매일 시간이 나는 대로 독서를 하려고 노력 중.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 연관이 없는 작은 것들로 부터 영감을 받음. 예를 들어 사람들의 이야기를 듣고서, 오래된 사진을 보고<br>서, 조카와 놀아주면서, 익숙하지 않은 곳을 걷다가 등등.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 좋은 미친 쪽에 머물기.</p><h4 id='mainButton' onclick='showSam();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioSam();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var SamQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSam();return false;'><h3 id='profileHeadBio'>SAM RAHMAN</h3><p id='profileQuestionsShort1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I’m not sure I’d do anything differently. I already try to live everyday like I have<br> nothing to lose<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)? Why?</span><br>A: iBooks. I try to find as much time as possible during the day to read.<br><br><span id='question'>Q: Inspiration?</span><br>A: I find inspiration in random little things, like listening to people’s stories,<br> finding old photographs, playing with my nieces, taking long walks in unfamiliar<br> places, the list goes on…<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Staying on the good side of crazy.</p><p id='profileQuestions2'><span id='question'>Q. 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 이미 잃을 것이 아무것도 없는 것처럼 매일 살고 있어서 평상시와 비슷한 생활을 할 것 같음.<br><br><span id='question'>Q. 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: iBooks. 매일 시간이 나는 대로 독서를 하려고 노력 중.<br><br><span id='question'>Q: 나에게 영감을 준 한가지?</span><br>A: 연관이 없는 작은 것들로 부터 영감을 받음. 예를 들어 사람들의 이야기를 듣고서, 오래된 사진을 보고<br>서, 조카와 놀아주면서, 익숙하지 않은 곳을 걷다가 등등.<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 좋은 미친 쪽에 머물기.</p><h4 id='mainButton' onclick='showSam();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioSam();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Bella - creative
var BellaIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBella();return false;'><img id='profilePic' src = '/assets/BellaParkBig.png'><h3 id='profileHead'>BELLA PARK   |   박정현</h3><h5 id='profileStat'>Title in MOI’M: JUNIOR MOTION GRAPHICS DESIGNER<br>Industry: COMPUTER ART/MOTION GRAPHICS<br><br>MOTTO: Do it Yourself<br>모토: 스스로 해라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioBella();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQABella();return false;'>FUN FACTS</h4></div>";
var BellaOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBella();return false;'><img id='profilePic' src = '/assets/BellaParkBig.png'><h3 id='profileHead'>BELLA PARK   |   박정현</h3><h5 id='profileStat'>Title in MOI’M: JUNIOR MOTION GRAPHICS DESIGNER<br>Industry: COMPUTER ART/MOTION GRAPHICS<br><br>MOTTO: Do it Yourself<br>모토: 스스로 해라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioBella();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQABella();return false;'>FUN FACTS</h4></div>";
var BellaFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBella();return false;'><img id='profilePic' src = '/assets/BellaParkBig.png'><h3 id='profileHead'>BELLA PARK   |   박정현</h3><h5 id='profileStat'>Title in MOI’M: JUNIOR MOTION GRAPHICS DESIGNER<br>Industry: COMPUTER ART/MOTION GRAPHICS<br><br>MOTTO: Do it Yourself<br>모토: 스스로 해라</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioBella();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQABella();return false;'>FUN FACTS</h4></div>";

var BellaBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBellaBio();return false;'><h3 id='profileHeadBio'>BELLA PARK   |   박정현</h3><p id='profileBio'>Bella Park is currently a Motion Graphics student at the School of Visual Arts in New York. She received her B.A. in Film, TV & Multimedia at Korea National University of<br> Arts in Korea. To explore her visual languages as an artist, Bella enjoys observing her surroundings and the people around her. Based on her understandings of visual<br> effects that she have acquired through experiences at both broadcasting and corporate companies, she hopes to create high quality moving images to visualize<br> personal reflections on her interests and/or imagination.<br><br>현재 뉴욕 School of Visual Arts에서 모션 그래픽을 전공. 한국예술종합학교에서 방송영상학과 학사 취득. 예술인으로서의 시각적 소통법를 넓히고자 그녀는 항상 주변과 사람들을 관찰하는 것을 즐긴다.<br>방송국와 미디어 회사에서의 경험을 바탕으로 그녀는 자신의 관심사와 상상력을 시각적으로 잘 표현해주는 작품활동을 하고 싶다.</p><h4 id='mainButton' onclick='showBella();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQABella();return false;'>FUN FACTS</h4></div>";
var BellaBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBella();return false;'><h3 id='profileHeadBio'>BELLA PARK   |   박정현</h3><p id='profileBio'>Bella Park is currently a Motion Graphics student at the School of Visual Arts in New York. She received her B.A. in Film, TV & Multimedia at Korea National University of<br> Arts in Korea. To explore her visual languages as an artist, Bella enjoys observing her surroundings and the people around her. Based on her understandings of visual<br> effects that she have acquired through experiences at both broadcasting and corporate companies, she hopes to create high quality moving images to visualize<br> personal reflections on her interests and/or imagination.<br><br>현재 뉴욕 School of Visual Arts에서 모션 그래픽을 전공. 한국예술종합학교에서 방송영상학과 학사 취득. 예술인으로서의 시각적 소통법를 넓히고자 그녀는 항상 주변과 사람들을 관찰하는 것을 즐긴다.<br>방송국와 미디어 회사에서의 경험을 바탕으로 그녀는 자신의 관심사와 상상력을 시각적으로 잘 표현해주는 작품활동을 하고 싶다.</p><h4 id='mainButton' onclick='showBella();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQABella();return false;'>FUN FACTS</h4></div>";

var BellaQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBellaQA();return false;'><h3 id='profileHeadBio'>BELLA PARK   |   박정현</h3><p id='profileQuestions1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I’d have a picnic<br><br><span id='question'>Q: Perfect Day?</span><br>A: New Year’s Eve<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Kumdo competition<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: Google maps / New York is big.</p><p id='profileQuestions2'><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 피크닉을 가겠다.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 12월 31일<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 검도시합…<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 구글 맵 / 뉴욕은 참 넓다.</p><h4 id='mainButton' onclick='showBella();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioBella();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var BellaQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutBella();return false;'><h3 id='profileHeadBio'>BELLA PARK   |   박정현</h3><p id='profileQuestions1'><span id='question'>Q: If tomorrow was the Apocalypse?</span><br>A: I’d have a picnic<br><br><span id='question'>Q: Perfect Day?</span><br>A: New Year’s Eve<br><br><span id='question'>Q: Biggest Challenge?</span><br>A: Kumdo competition<br><br><span id='question'>Q: App that you use the most (excluding Facebook and messaging apps)?</span><br>A: Google maps / New York is big.</p><p id='profileQuestions2'><span id='question'>Q: 내일 지구가 종말하면 난 오늘 OOO를 하겠다.</span><br>A: 피크닉을 가겠다.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 12월 31일<br><br><span id='question'>Q: 나에게 가장 어려운 것?</span><br>A: 검도시합…<br><br><span id='question'>Q: 페이스북과 메신저 앱을 제외한 앱중 가장 자주 사용하는 앱은? 이유는?</span><br>A: 구글 맵 / 뉴욕은 참 넓다.</p><h4 id='mainButton' onclick='showBella();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioBella();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****EunSung - creative
var EunSungIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEunSung();return false;'><img id='profilePic' src = '/assets/EunsungJeonBig.png'><h3 id='profileHead'>EUNSUNG JEON   |   전은성</h3><h5 id='profileStat'>Title in MOI’M: PHOTOGRAPHER & EDITOR<br>Industry: PHOTOGRAPHY, PAINTING<br><br>MOTTO: What is bound to be accomplished will be<br> accomplished.<br>모토: 될 일은 된다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioEunSung();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAEunSung();return false;'>FUN FACTS</h4></div>";
var EunSungOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEunSung();return false;'><img id='profilePic' src = '/assets/EunsungJeonBig.png'><h3 id='profileHead'>EUNSUNG JEON   |   전은성</h3><h5 id='profileStat'>Title in MOI’M: PHOTOGRAPHER & EDITOR<br>Industry: PHOTOGRAPHY, PAINTING<br><br>MOTTO: What is bound to be accomplished will be<br> accomplished.<br>모토: 될 일은 된다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioEunSung();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAEunSung();return false;'>FUN FACTS</h4></div>";
var EunSungFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEunSung();return false;'><img id='profilePic' src = '/assets/EunsungJeonBig.png'><h3 id='profileHead'>EUNSUNG JEON   |   전은성</h3><h5 id='profileStat'>Title in MOI’M: PHOTOGRAPHER & EDITOR<br>Industry: PHOTOGRAPHY, PAINTING<br><br>MOTTO: What is bound to be accomplished will be<br> accomplished.<br>모토: 될 일은 된다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioEunSung();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAEunSung();return false;'>FUN FACTS</h4></div>";

var EunSungBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEunSungBio();return false;'><h3 id='profileHeadBio'>EUNSUNG JEON   |   전은성</h3><p id='profileBio'>Eunsung Jeon graduated from the School of Visual Arts MPS Digital Photography in 2015, and currently works as a freelance photographer and a photo illustrator in New<br> York. Before coming to the States, Eunsung studied both western and Eastern art and thus has an understanding of a variety of styles. She studied the fine arts for most<br> of her art career and she currently incorporates this experience into her photography.<br><br>2015년 School of Visual Arts MPS Digital Photography 졸업하고 현재 프리랜서 사진가로 활동중. 서양 미술 뿐 아니라 학부에서 한국화와 중어중문학을 전공하며 동양 미술에 대한 이해를 키워왔다. 오랜 기<br>간 순수미술을 공부하였고 이를 바탕으로 현재 그림과 사진을 융합하는 작업을 이어오고 있다.</p><h4 id='mainButton' onclick='showEunSung();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAEunSung();return false;'>FUN FACTS</h4></div>";
var EunSungBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEunSung();return false;'><h3 id='profileHeadBio'>EUNSUNG JEON   |   전은성</h3><p id='profileBio'>Eunsung Jeon graduated from the School of Visual Arts MPS Digital Photography in 2015, and currently works as a freelance photographer and a photo illustrator in New<br> York. Before coming to the States, Eunsung studied both western and Eastern art and thus has an understanding of a variety of styles. She studied the fine arts for most<br> of her art career and she currently incorporates this experience into her photography.<br><br>2015년 School of Visual Arts MPS Digital Photography 졸업하고 현재 프리랜서 사진가로 활동중. 서양 미술 뿐 아니라 학부에서 한국화와 중어중문학을 전공하며 동양 미술에 대한 이해를 키워왔다. 오랜 기<br>간 순수미술을 공부하였고 이를 바탕으로 현재 그림과 사진을 융합하는 작업을 이어오고 있다.</p><h4 id='mainButton' onclick='showEunSung();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAEunSung();return false;'>FUN FACTS</h4></div>";

var EunSungQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEunSungQA();return false;'><h3 id='profileHeadBio'>EUNSUNG JEON   |   전은성</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Boqueria. A great place to have a glass of wine and enjoy tapas.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Samsara. A must see film for photographers or videographers. This silent film<br> shows a wide range of the visual language.<br><br><span id='question'>Q: Wildest Dream?</span><br>A: To go on a trip around the world with my camera and then afterwards<br> publishing a book about my experience.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: Cancun</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Boqueria. 가볍게 와인 한 잔과 타파스 먹기 좋은 곳.<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: Samsara. 사진가 혹은 비디오그래퍼라면 한번 쯤은 꼭 봤으면 하는 영화.<br> 무언(대사가 없)는 영화이지만 시각적인 언어가 굉장히 다채로운 영화<br><br><span id='question'>Q: 최고의 꿈?</span><br>A: 아무 걱정 없이 카메라 들고 세계여행, 그 후에 책 출간하기.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 칸쿤</p><h4 id='mainButton' onclick='showEunSung();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioEunSung();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var EunSungQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutEunSung();return false;'><h3 id='profileHeadBio'>EUNSUNG JEON   |   전은성</h3><p id='profileQuestions1'><span id='question'>Q: New York’s Best-Kept-Secret Restaurant?</span><br>A: Boqueria. A great place to have a glass of wine and enjoy tapas.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: Samsara. A must see film for photographers or videographers. This silent film<br> shows a wide range of the visual language.<br><br><span id='question'>Q: Wildest Dream?</span><br>A: To go on a trip around the world with my camera and then afterwards<br> publishing a book about my experience.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: Cancun</p><p id='profileQuestions2'><span id='question'>Q: 뉴욕에서 나만 아는 꼭 가봐야하는 restaurant는?</span><br>A: Boqueria. 가볍게 와인 한 잔과 타파스 먹기 좋은 곳.<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: Samsara. 사진가 혹은 비디오그래퍼라면 한번 쯤은 꼭 봤으면 하는 영화.<br> 무언(대사가 없)는 영화이지만 시각적인 언어가 굉장히 다채로운 영화<br><br><span id='question'>Q: 최고의 꿈?</span><br>A: 아무 걱정 없이 카메라 들고 세계여행, 그 후에 책 출간하기.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 칸쿤</p><h4 id='mainButton' onclick='showEunSung();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioEunSung();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Seung - creative
var SeungIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSeung();return false;'><img id='profilePic' src = '/assets/SeunghoParkBig.png'><h3 id='profileHead'>SEUNGHO BRIAN PARK   |   박승호</h3><h5 id='profileStat'>Title in MOI’M: JUNIOR PHOTOGRAPHER & EDITOR<br>Industry: ECONOMICS<br><br>MOTTO: Creativity is inventing, experimenting, growing,<br> taking risks, breaking rules, making mistakes, and having<br> fun – MARY LOU COOK<br>모토: 창의성은 발명하고, 실험하고, 성장하고, 모험하고, 규칙을 위반하고, 실수<br>하고, 즐기는 것이다 – 메리 루 쿡</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSeung();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASeung();return false;'>FUN FACTS</h4></div>";
var SeungOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSeung();return false;'><img id='profilePic' src = '/assets/SeunghoParkBig.png'><h3 id='profileHead'>SEUNGHO BRIAN PARK   |   박승호</h3><h5 id='profileStat'>Title in MOI’M: JUNIOR PHOTOGRAPHER & EDITOR<br>Industry: ECONOMICS<br><br>MOTTO: Creativity is inventing, experimenting, growing,<br> taking risks, breaking rules, making mistakes, and having<br> fun – MARY LOU COOK<br>모토: 창의성은 발명하고, 실험하고, 성장하고, 모험하고, 규칙을 위반하고, 실수<br>하고, 즐기는 것이다 – 메리 루 쿡</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSeung();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASeung();return false;'>FUN FACTS</h4></div>";
var SeungFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSeung();return false;'><img id='profilePic' src = '/assets/SeunghoParkBig.png'><h3 id='profileHead'>SEUNGHO BRIAN PARK   |   박승호</h3><h5 id='profileStat'>Title in MOI’M: JUNIOR PHOTOGRAPHER & EDITOR<br>Industry: ECONOMICS<br><br>MOTTO: Creativity is inventing, experimenting, growing,<br> taking risks, breaking rules, making mistakes, and having<br> fun – MARY LOU COOK<br>모토: 창의성은 발명하고, 실험하고, 성장하고, 모험하고, 규칙을 위반하고, 실수<br>하고, 즐기는 것이다 – 메리 루 쿡</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioSeung();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQASeung();return false;'>FUN FACTS</h4></div>";

var SeungBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSeungBio();return false;'><h3 id='profileHeadBio'>SEUNGHO BRIAN PARK   |   박승호</h3><p id='profileBio'>Seungho Brian Park spent most of his childhood in the New York metropolitan area and is currently attending Stony Brook University majoring in Economics.<br> Photography has become a recent passion of Seungho. He loves the way a simple still photo can tell thousands of different stories and this passion drives him to<br> continue to work on his craft. In addition to photography, during his free time, Seungho enjoys traveling and trying different types of cuisine from around the world.<br><br>현재 스토니브룩 대학교에서 경제학 전공 중. 사진에 입문을 하고 난 이후 단 한 번도 사진에 대한 열정을 잊은 적이 없음. 한 장의 사진이 수천 가지의 이야기를 담을 수 있다는 것에 매력을 느낌. 여행을 좋아하고 전 세<br>계 각 지역 특색이 담긴 음식을 먹어보는 것을 즐김.</p><h4 id='mainButton' onclick='showSeung();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQASeung();return false;'>FUN FACTS</h4></div>";
var SeungBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSeung();return false;'><h3 id='profileHeadBio'>SEUNGHO BRIAN PARK   |   박승호</h3><p id='profileBio'>Seungho Brian Park spent most of his childhood in the New York metropolitan area and is currently attending Stony Brook University majoring in Economics.<br> Photography has become a recent passion of Seungho. He loves the way a simple still photo can tell thousands of different stories and this passion drives him to<br> continue to work on his craft. In addition to photography, during his free time, Seungho enjoys traveling and trying different types of cuisine from around the world.<br><br>현재 스토니브룩 대학교에서 경제학 전공 중. 사진에 입문을 하고 난 이후 단 한 번도 사진에 대한 열정을 잊은 적이 없음. 한 장의 사진이 수천 가지의 이야기를 담을 수 있다는 것에 매력을 느낌. 여행을 좋아하고 전 세<br>계 각 지역 특색이 담긴 음식을 먹어보는 것을 즐김.</p><h4 id='mainButton' onclick='showSeung();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQASeung();return false;'>FUN FACTS</h4></div>";

var SeungQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSeungQA();return false;'><h3 id='profileHeadBio'>SEUNGHO BRIAN PARK   |   박승호</h3><p id='profileQuestions1'><span id='question'>Q: Dream Vacation?</span><br>A: I have heard that in 100 years the Maldives will be completely under water. I<br> want to personally visit the Maldives to share with future generations the beauty<br> of the islands.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: My friend recommended that I watch Paris, Je T’Aime. When I first watched<br> the movie I found it both shocking and new and interesting at the same time. I<br> realized that such a movie can be considered artistic and it opened my eyes to<br> the freedom of art<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: I calculate how much longer I can sleep based on how long it will take me to<br> go to school and then I regret wasting 15 minutes.<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: I’m scared of cats. Actually, I just don’t like them. Sometimes when I look at<br> cats, I think they can read our minds.</p><p id='profileQuestions2'><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 100년안에 몰디브가 침몰한다고 들었다. 앞으론 몰디브에 가보지 못하는 나의 후손들에게 몰디브의<br> 아름다움을 전하기 위해 직접 느껴보고 싶다.<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 지인의 추천으로 “Paris, Je T’Aime” 라는 영화를 보았다. 충격적이면서도 신선하게 다가왔다. 처<br>음으로 이런 영화도 예술이 될 수가 있다고 느낀 후 예술의 자유로움을 배웠다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 학교까지 걸리는 시간을 고려하여 얼마나 더 잘 수 있는지를 계산한다. 그러고 15분을 날린 걸 후회한<br>다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 고양이를 무서워한다. 아니 너무 싫다. 고양이들은 인간이 무슨 생각을 하고 있는지 아는 것 같다.</p><h4 id='mainButton' onclick='showSeung();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioSeung();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var SeungQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutSeung();return false;'><h3 id='profileHeadBio'>SEUNGHO BRIAN PARK   |   박승호</h3><p id='profileQuestions1'><span id='question'>Q: Dream Vacation?</span><br>A: I have heard that in 100 years the Maldives will be completely under water. I<br> want to personally visit the Maldives to share with future generations the beauty<br> of the islands.<br><br><span id='question'>Q: Inspirational Film?</span><br>A: My friend recommended that I watch Paris, Je T’Aime. When I first watched<br> the movie I found it both shocking and new and interesting at the same time. I<br> realized that such a movie can be considered artistic and it opened my eyes to<br> the freedom of art<br><br><span id='question'>Q: The first thing you do when you wake up?</span><br>A: I calculate how much longer I can sleep based on how long it will take me to<br> go to school and then I regret wasting 15 minutes.<br><br><span id='question'>Q: Something that your friends do not know about you?</span><br>A: I’m scared of cats. Actually, I just don’t like them. Sometimes when I look at<br> cats, I think they can read our minds.</p><p id='profileQuestions2'><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 100년안에 몰디브가 침몰한다고 들었다. 앞으론 몰디브에 가보지 못하는 나의 후손들에게 몰디브의<br> 아름다움을 전하기 위해 직접 느껴보고 싶다.<br><br><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A: 지인의 추천으로 “Paris, Je T’Aime” 라는 영화를 보았다. 충격적이면서도 신선하게 다가왔다. 처<br>음으로 이런 영화도 예술이 될 수가 있다고 느낀 후 예술의 자유로움을 배웠다.<br><br><span id='question'>Q: 아침에 눈을 뜨자마자 하는 행동은?</span><br>A: 학교까지 걸리는 시간을 고려하여 얼마나 더 잘 수 있는지를 계산한다. 그러고 15분을 날린 걸 후회한<br>다.<br><br><span id='question'>Q: 친구들이 잘 모르는 당신에 대한 한 가지는?</span><br>A: 고양이를 무서워한다. 아니 너무 싫다. 고양이들은 인간이 무슨 생각을 하고 있는지 아는 것 같다.</p><h4 id='mainButton' onclick='showSeung();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioSeung();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ****Whitney - creative
var WhitneyIn ="<div id='teamContent' class='animated slideInDown' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutWhitney();return false;'><img id='profilePic' src = '/assets/WhitneyLovettBig.png'><h3 id='profileHead'>WHITNEY LOVETT</h3><h5 id='profileStat'>Title in MOI’M: VIDEO PRODUCER<br>Industry: FILM AND TV<br><br>MOTTO: At the end of hardship comes happiness.<br>모토: 고생 끝에 낙이 온다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioWhitney();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAWhitney();return false;'>FUN FACTS</h4></div>";
var WhitneyOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutWhitney();return false;'><img id='profilePic' src = '/assets/WhitneyLovettBig.png'><h3 id='profileHead'>WHITNEY LOVETT</h3><h5 id='profileStat'>Title in MOI’M: VIDEO PRODUCER<br>Industry: FILM AND TV<br><br>MOTTO: At the end of hardship comes happiness.<br>모토: 고생 끝에 낙이 온다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioWhitney();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAWhitney();return false;'>FUN FACTS</h4></div>";
var WhitneyFadeIn ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutWhitney();return false;'><img id='profilePic' src = '/assets/WhitneyLovettBig.png'><h3 id='profileHead'>WHITNEY LOVETT</h3><h5 id='profileStat'>Title in MOI’M: VIDEO PRODUCER<br>Industry: FILM AND TV<br><br>MOTTO: At the end of hardship comes happiness.<br>모토: 고생 끝에 낙이 온다.</h5><h4 id='mainButton'><font color='#66E5FF'>MAIN</font></h4><h4 id='bioButton' onclick='showBioWhitney();return false;'>BIOGRAPHY</h4><h4 id='qaButton' onclick='showQAWhitney();return false;'>FUN FACTS</h4></div>";

var WhitneyBio ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutWhitneyBio();return false;'><h3 id='profileHeadBio'>WHITNEY LOVETT</h3><p id='profileBio'>Whitney Lovett was born in Texas but grew up in Florida, right across the street from Walt Disney World. In college, she studied Radio, TV & Film, with a minor in<br> Journalism and Japanese. During her time in school, she was a founding member and later president and historian for the University of North Texas’s Korean Culture<br> Exchange Club. She also spent a summer studying abroad in Japan, as well as a year in Seoul, South Korea at Yonsei University. Previously, Whitney has written for<br> major music magazines, and worked at a local TV station, an independent film studio in Austin, Texas, and a live event company showcasing corporate, award and<br> fashion shows. Whitney is new to the Big Apple, so when she isn’t busy applying for jobs, you can find her snuggled up with Kimchi (her cat, not the food).<br><br>텍사스에서 태어나 플로리다 디즈니월드 옆에서 자람. 대학에서 RTVF 전공, 저널리즘과 일본어를 부전공. UNT의 한국문화교류클럽의 창립멤버, 회장, 서기 역임. 일본에서 여름학기와 연세대학교에서 1년 교환학생으<br>로 공부. 과거에 주요 음악 잡지, TV방송국, 영화 스튜디오와 라이브 이벤트 회사에서 일한 경력이 있는 뉴욕 새내기. 고양이의 이름이 ‘김치’.</p><h4 id='mainButton' onclick='showWhitney();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAWhitney();return false;'>FUN FACTS</h4></div>";
var WhitneyBioOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutWhitney();return false;'><h3 id='profileHeadBio'>WHITNEY LOVETT</h3><p id='profileBio'>Whitney Lovett was born in Texas but grew up in Florida, right across the street from Walt Disney World. In college, she studied Radio, TV & Film, with a minor in<br> Journalism and Japanese. During her time in school, she was a founding member and later president and historian for the University of North Texas’s Korean Culture<br> Exchange Club. She also spent a summer studying abroad in Japan, as well as a year in Seoul, South Korea at Yonsei University. Previously, Whitney has written for<br> major music magazines, and worked at a local TV station, an independent film studio in Austin, Texas, and a live event company showcasing corporate, award and<br> fashion shows. Whitney is new to the Big Apple, so when she isn’t busy applying for jobs, you can find her snuggled up with Kimchi (her cat, not the food).<br><br>텍사스에서 태어나 플로리다 디즈니월드 옆에서 자람. 대학에서 RTVF 전공, 저널리즘과 일본어를 부전공. UNT의 한국문화교류클럽의 창립멤버, 회장, 서기 역임. 일본에서 여름학기와 연세대학교에서 1년 교환학생으<br>로 공부. 과거에 주요 음악 잡지, TV방송국, 영화 스튜디오와 라이브 이벤트 회사에서 일한 경력이 있는 뉴욕 새내기. 고양이의 이름이 ‘김치’.</p><h4 id='mainButton' onclick='showWhitney();return false;'>MAIN</h4><h4 id='bioButton'><font color='#66E5FF'>BIOGRAPHY</font></h4><h4 id='qaButton' onclick='showQAWhitney();return false;'>FUN FACTS</h4></div>";

var WhitneyQA ="<div id='teamContent' class='animated fadeIn' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutWhitneyQA();return false;'><h3 id='profileHeadBio'>WHITNEY LOVETT</h3><p id='profileQuestions1'><span id='question'>Q: Inspirational Film?</span><br>A:  Singing in the Rain, it inspired my love for classic films, dance, and music.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: Backpacking across Europe.<br><br><span id='question'>Q: Perfect Day?</span><br>A: My perfect day would be reading a book by the window or watching dramas,<br> cuddled up with my cat.<br><br><span id='question'>Q: Idol?</span><br>A: Walt Disney, Gene Kelly & TOP</p><p id='profileQuestions2'><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A:  Singing in the Rain을 통해 고전 영화, 춤, 음악에 대한 큰 영감을 받았다.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 유럽​​ 전역에 걸친 배낭 여행.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 창가에서 책을 읽거나 고양이랑 드라마를 보는 것.<br><br><span id='question'>Q: 당신만의 우상?</span><br>A: 월트 디즈니, 진 켈리, TOP</p><h4 id='mainButton' onclick='showWhitney();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioWhitney();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
var WhitneyQAOut ="<div id='teamContent' class='animated slideOutUp' onclick='closeLogin();return false;'><img id='x' src = '/assets/closeIcon.png' onclick='profileOutWhitney();return false;'><h3 id='profileHeadBio'>WHITNEY LOVETT</h3><p id='profileQuestions1'><span id='question'>Q: Inspirational Film?</span><br>A:  Singing in the Rain, it inspired my love for classic films, dance, and music.<br><br><span id='question'>Q: Dream Vacation?</span><br>A: Backpacking across Europe.<br><br><span id='question'>Q: Perfect Day?</span><br>A: My perfect day would be reading a book by the window or watching dramas,<br> cuddled up with my cat.<br><br><span id='question'>Q: Idol?</span><br>A: Walt Disney, Gene Kelly & TOP</p><p id='profileQuestions2'><span id='question'>Q: 가장 감명깊게 본 영화는? 그 이유는?</span><br>A:  Singing in the Rain을 통해 고전 영화, 춤, 음악에 대한 큰 영감을 받았다.<br><br><span id='question'>Q: 당신이 가고 싶은/가봤었던 최고의 휴양지는?</span><br>A: 유럽​​ 전역에 걸친 배낭 여행.<br><br><span id='question'>Q: 최고의 하루?</span><br>A: 창가에서 책을 읽거나 고양이랑 드라마를 보는 것.<br><br><span id='question'>Q: 당신만의 우상?</span><br>A: 월트 디즈니, 진 켈리, TOP</p><h4 id='mainButton' onclick='showWhitney();return false;'>MAIN</h4><h4 id='bioButton' onclick='showBioWhitney();return false;'>BIOGRAPHY</h4><h4 id='qaButton'><font color='#66E5FF'>FUN FACTS</font></h4></div>";
// ***

// ***pr**
var prIn="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='prTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='pr1();return false;'><h2 id='leaderHeading'>PUBLIC RELATIONS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In our current society where image is everything, it is important to maintain positive relationships with others<br>while projecting our brand during successful event promotion.<br>The Public Relations Team is responsible for communication with external constituents and all online and offline promotion of our events.</h5><div class='memeberOne'><div id='prMemberOnePic' onclick='showProfileSungJun();return false;'></div></div><div class='memeberTwo'><div id='prMemberTwoPic' onclick='showProfileDodo();return false;'></div></div><div class='memeberThree'><div id='prMemberThreePic' onclick='showProfileCharlotte();return false;'></div></div></div>";
var prIn1="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='prTeamOut1();return false;'><h2 id='leaderHeading'>PUBLIC RELATIONS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In our current society where image is everything, it is important to maintain positive relationships with others<br>while projecting our brand during successful event promotion.<br>The Public Relations Team is responsible for communication with external constituents and all online and offline promotion of our events.</h5><div class='memeberOne'><div id='prMemberFourPic' onclick='showProfileHenry();return false;'></div></div><div class='memebertwo'><div id='prMemberFivePic' onclick='showProfileHanna();return false;'></div></div><div class='memeberThree'><div id='prMemberSixPic' onclick='showProfileMinji();return false;'></div></div></div>";
var prIn2="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='prTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='pr1();return false;'><h2 id='leaderHeading'>PUBLIC RELATIONS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In our current society where image is everything, it is important to maintain positive relationships with others<br>while projecting our brand during successful event promotion.<br>The Public Relations Team is responsible for communication with external constituents and all online and offline promotion of our events.</h5><div class='memeberOne'><div id='prMemberOnePic' onclick='showProfileSungJun();return false;'></div></div><div class='memeberTwo'><div id='prMemberTwoPic' onclick='showProfileDodo();return false;'></div></div><div class='memeberThree'><div id='prMemberThreePic'onclick='showProfileCharlotte();return false;'></div></div></div>";
var prOut="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='prTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='pr1();return false;'><h2 id='leaderHeading'>PUBLIC RELATIONS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In our current society where image is everything, it is important to maintain positive relationships with others<br>while projecting our brand during successful event promotion.<br>The Public Relations Team is responsible for communication with external constituents and all online and offline promotion of our events.</h5><div class='memeberOne'><div id='prMemberOnePic'></div></div><div class='memeberTwo'><div id='prMemberTwoPic'></div></div><div class='memeberThree'><div id='prMemberThreePic'></div></div></div>";
var prOut1="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='prTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='pr1();return false;'><h2 id='leaderHeading'>PUBLIC RELATIONS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In our current society where image is everything, it is important to maintain positive relationships with others<br>while projecting our brand during successful event promotion.<br>The Public Relations Team is responsible for communication with external constituents and all online and offline promotion of our events.</h5><div class='memeberOne'><div id='prMemberOnePic'></div></div><div class='memeberTwo'><div id='prMemberTwoPic'></div></div><div class='memeberThree'><div id='prMemberThreePic'></div></div></div>";
var prOut2="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='prTeamOut1();return false;'><h2 id='leaderHeading'>PUBLIC RELATIONS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In our current society where image is everything, it is important to maintain positive relationships with others<br>while projecting our brand during successful event promotion.<br>The Public Relations Team is responsible for communication with external constituents and all online and offline promotion of our events.</h5><div class='memeberOne'><div id='prMemberFourPic' onclick='showProfileHenry();return false;'></div></div><div class='memebertwo'><div id='prMemberFivePic' onclick='showProfileHanna();return false;'></div></div><div class='memeberThree'><div id='prMemberSixPic' onclick='showProfileMinji();return false;'></div></div></div>";

var prOutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='prTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='pr1();return false;'><h2 id='leaderHeading'>PUBLIC RELATIONS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In our current society where image is everything, it is important to maintain positive relationships with others<br>while projecting our brand during successful event promotion.<br>The Public Relations Team is responsible for communication with external constituents and all online and offline promotion of our events.</h5><div class='memeberOne'><div id='prMemberOnePic'></div></div><div class='memeberTwo'><div id='prMemberTwoPic'></div></div><div class='memeberThree'><div id='prMemberThreePic'></div></div></div>";
var prInFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='prTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='pr1();return false;'><h2 id='leaderHeading'>PUBLIC RELATIONS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In our current society where image is everything, it is important to maintain positive relationships with others<br>while projecting our brand during successful event promotion.<br>The Public Relations Team is responsible for communication with external constituents and all online and offline promotion of our events.</h5><div class='memeberOne'><div id='prMemberOnePic' onclick='showProfileSungJun();return false;'></div></div><div class='memeberTwo'><div id='prMemberTwoPic' onclick='showProfileDodo();return false;'></div></div><div class='memeberThree'><div id='prMemberThreePic' onclick='showProfileCharlotte();return false;'></div></div></div>";
var pr1OutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='prTeamOut1();return false;'><h2 id='leaderHeading'>PUBLIC RELATIONS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In our current society where image is everything, it is important to maintain positive relationships with others<br>while projecting our brand during successful event promotion.<br>The Public Relations Team is responsible for communication with external constituents and all online and offline promotion of our events.</h5><div class='memeberOne'><div id='prMemberFourPic' onclick='showProfileHenry();return false;'></div></div><div class='memebertwo'><div id='prMemberFivePic' onclick='showProfileHanna();return false;'></div></div><div class='memeberThree'><div id='prMemberSixPic' onclick='showProfileMinji();return false;'></div></div></div>";
var pr1InFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='prTeamOut1();return false;'><h2 id='leaderHeading'>PUBLIC RELATIONS TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In our current society where image is everything, it is important to maintain positive relationships with others<br>while projecting our brand during successful event promotion.<br>The Public Relations Team is responsible for communication with external constituents and all online and offline promotion of our events.</h5><div class='memeberOne'><div id='prMemberFourPic' onclick='showProfileHenry();return false;'></div></div><div class='memebertwo'><div id='prMemberFivePic' onclick='showProfileHanna();return false;'></div></div><div class='memeberThree'><div id='prMemberSixPic' onclick='showProfileMinji();return false;'></div></div></div>";
// ***


// ***soar**
var soarIn="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='soarTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='soar1();return false;'><h2 id='leaderHeading'>SOCIAL OUTREACH AND RESPONSIBILITY (SOAR) TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Social Outreach & Responsibility Team (SOAR) understands the power of connecting MOI’M’s activities with organizations with the pursuit of shared value.<br>It works to partner with organizations to implement meaningful ways to transform the quality of life in local and international communities<br>and inspire action in MOI’M’s network.</h5><div class='memeberOne'><div id='soarMemberOnePic' onclick='showProfileEsther();return false;'></div></div><div class='memeberTwo'><div id='soarMemberTwoPic' onclick='showProfileAlison();return false;'></div></div><div class='memeberThree'><div id='soarMemberThreePic' onclick='showProfileYooSun();return false;'></div></div></div>";
var soarIn1="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='soarTeamOut1();return false;'><h2 id='leaderHeading'>SOCIAL OUTREACH AND RESPONSIBILITY (SOAR) TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Social Outreach & Responsibility Team (SOAR) understands the power of connecting MOI’M’s activities with organizations with the pursuit of shared value.<br>It works to partner with organizations to implement meaningful ways to transform the quality of life in local and international communities<br>and inspire action in MOI’M’s network.</h5><div class='memeberOne'><div id='soarMemberFourPic' onclick='showProfileKatie();return false;'></div></div></div>";
var soarIn2="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='soarTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='soar1();return false;'><h2 id='leaderHeading'>SOCIAL OUTREACH AND RESPONSIBILITY (SOAR) TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Social Outreach & Responsibility Team (SOAR) understands the power of connecting MOI’M’s activities with organizations with the pursuit of shared value.<br>It works to partner with organizations to implement meaningful ways to transform the quality of life in local and international communities<br>and inspire action in MOI’M’s network.</h5><div class='memeberOne'><div id='soarMemberOnePic' onclick='showProfileEsther();return false;'></div></div><div class='memeberTwo'><div id='soarMemberTwoPic' onclick='showProfileAlison();return false;'></div></div><div class='memeberThree'><div id='soarMemberThreePic'onclick='showProfileYooSun();return false;'></div></div></div>";
var soarOut="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='soarTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='soar1();return false;'><h2 id='leaderHeading'>SOCIAL OUTREACH AND RESPONSIBILITY (SOAR) TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Social Outreach & Responsibility Team (SOAR) understands the power of connecting MOI’M’s activities with organizations with the pursuit of shared value.<br>It works to partner with organizations to implement meaningful ways to transform the quality of life in local and international communities<br>and inspire action in MOI’M’s network.</h5><div class='memeberOne'><div id='soarMemberOnePic'></div></div><div class='memeberTwo'><div id='soarMemberTwoPic'></div></div><div class='memeberThree'><div id='soarMemberThreePic'></div></div></div>";
var soarOut1="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='soarTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='soar1();return false;'><h2 id='leaderHeading'>SOCIAL OUTREACH AND RESPONSIBILITY (SOAR) TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Social Outreach & Responsibility Team (SOAR) understands the power of connecting MOI’M’s activities with organizations with the pursuit of shared value.<br>It works to partner with organizations to implement meaningful ways to transform the quality of life in local and international communities<br>and inspire action in MOI’M’s network.</h5><div class='memeberOne'><div id='soarMemberOnePic'></div></div><div class='memeberTwo'><div id='soarMemberTwoPic'></div></div><div class='memeberThree'><div id='soarMemberThreePic'></div></div></div>";
var soarOut2="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='soarTeamOut1();return false;'><h2 id='leaderHeading'>SOCIAL OUTREACH AND RESPONSIBILITY (SOAR) TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Social Outreach & Responsibility Team (SOAR) understands the power of connecting MOI’M’s activities with organizations with the pursuit of shared value.<br>It works to partner with organizations to implement meaningful ways to transform the quality of life in local and international communities<br>and inspire action in MOI’M’s network.</h5><div class='memeberOne'><div id='soarMemberFourPic'></div></div></div>";

var soarOutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='soarTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='soar1();return false;'><h2 id='leaderHeading'>SOCIAL OUTREACH AND RESPONSIBILITY (SOAR) TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Social Outreach & Responsibility Team (SOAR) understands the power of connecting MOI’M’s activities with organizations with the pursuit of shared value.<br>It works to partner with organizations to implement meaningful ways to transform the quality of life in local and international communities<br>and inspire action in MOI’M’s network.</h5><div class='memeberOne'><div id='soarMemberOnePic'></div></div><div class='memeberTwo'><div id='soarMemberTwoPic'></div></div><div class='memeberThree'><div id='soarMemberThreePic'></div></div></div>";
var soarInFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='soarTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='soar1();return false;'><h2 id='leaderHeading'>SOCIAL OUTREACH AND RESPONSIBILITY (SOAR) TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Social Outreach & Responsibility Team (SOAR) understands the power of connecting MOI’M’s activities with organizations with the pursuit of shared value.<br>It works to partner with organizations to implement meaningful ways to transform the quality of life in local and international communities<br>and inspire action in MOI’M’s network.</h5><div class='memeberOne'><div id='soarMemberOnePic' onclick='showProfileEsther();return false;'></div></div><div class='memeberTwo'><div id='soarMemberTwoPic' onclick='showProfileAlison();return false;'></div></div><div class='memeberThree'><div id='soarMemberThreePic' onclick='showProfileYooSun();return false;'></div></div></div>";
var soar1OutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='soarTeamOut1();return false;'><h2 id='leaderHeading'>SOCIAL OUTREACH AND RESPONSIBILITY (SOAR) TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Social Outreach & Responsibility Team (SOAR) understands the power of connecting MOI’M’s activities with organizations with the pursuit of shared value.<br>It works to partner with organizations to implement meaningful ways to transform the quality of life in local and international communities<br>and inspire action in MOI’M’s network.</h5><div class='memeberOne'><div id='soarMemberFourPic' onclick='showProfileKatie();return false;'></div></div></div>";
var soar1InFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='soarTeamOut1();return false;'><h2 id='leaderHeading'>SOCIAL OUTREACH AND RESPONSIBILITY (SOAR) TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>The Social Outreach & Responsibility Team (SOAR) understands the power of connecting MOI’M’s activities with organizations with the pursuit of shared value.<br>It works to partner with organizations to implement meaningful ways to transform the quality of life in local and international communities<br>and inspire action in MOI’M’s network.</h5><div class='memeberOne'><div id='soarMemberFourPic' onclick='showProfileKatie();return false;'></div></div></div>";
// ***

// ***it**
var itIn="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='it1();return false;'><h2 id='leaderHeading'>IT TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In a generation where social and virtual networking is a core part of our lives, the IT Team understands the power that the internet can hold.<br>As the strategic masterminds of our website and online platforms, our IT Team ensures that MOI’M’s mission is translated into the virtual space through our website.</h5><div class='memeberOne'><div id='itMemberOnePic' onclick='showProfileNah();return false;'></div></div><div class='memeberTwo'><div id='itMemberTwoPic' onclick='showProfileLarry();return false;'></div></div><div class='memeberThree'><div id='itMemberThreePic' onclick='showProfilePeter();return false;'></div></div></div>";
var itIn1="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itTeamOut1();return false;'><h2 id='leaderHeading'>IT TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In a generation where social and virtual networking is a core part of our lives, the IT Team understands the power that the internet can hold.<br>As the strategic masterminds of our website and online platforms, our IT Team ensures that MOI’M’s mission is translated into the virtual space through our website.</h5><div class='memeberOne'><div id='itMemberFourPic' onclick='showProfileJunho();return false;'></div></div></div>";
var itIn2="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='it1();return false;'><h2 id='leaderHeading'>IT TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In a generation where social and virtual networking is a core part of our lives, the IT Team understands the power that the internet can hold.<br>As the strategic masterminds of our website and online platforms, our IT Team ensures that MOI’M’s mission is translated into the virtual space through our website.</h5><div class='memeberOne'><div id='itMemberOnePic' onclick='showProfileNah();return false;'></div></div><div class='memeberTwo'><div id='itMemberTwoPic' onclick='showProfileLarry();return false;'></div></div><div class='memeberThree'><div id='itMemberThreePic'onclick='showProfilePeter();return false;'></div></div></div>";
var itOut="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='it1();return false;'><h2 id='leaderHeading'>IT TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In a generation where social and virtual networking is a core part of our lives, the IT Team understands the power that the internet can hold.<br>As the strategic masterminds of our website and online platforms, our IT Team ensures that MOI’M’s mission is translated into the virtual space through our website.</h5><div class='memeberOne'><div id='itMemberOnePic'></div></div><div class='memeberTwo'><div id='itMemberTwoPic'></div></div><div class='memeberThree'><div id='itMemberThreePic'></div></div></div>";
var itOut1="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='it1();return false;'><h2 id='leaderHeading'>IT TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In a generation where social and virtual networking is a core part of our lives, the IT Team understands the power that the internet can hold.<br>As the strategic masterminds of our website and online platforms, our IT Team ensures that MOI’M’s mission is translated into the virtual space through our website.</h5><div class='memeberOne'><div id='itMemberOnePic'></div></div><div class='memeberTwo'><div id='itMemberTwoPic'></div></div><div class='memeberThree'><div id='itMemberThreePic'></div></div></div>";
var itOut2="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itTeamOut1();return false;'><h2 id='leaderHeading'>IT TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In a generation where social and virtual networking is a core part of our lives, the IT Team understands the power that the internet can hold.<br>As the strategic masterminds of our website and online platforms, our IT Team ensures that MOI’M’s mission is translated into the virtual space through our website.</h5><div class='memeberOne'><div id='itMemberFourPic'></div></div></div>";

var itOutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='it1();return false;'><h2 id='leaderHeading'>IT TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In a generation where social and virtual networking is a core part of our lives, the IT Team understands the power that the internet can hold.<br>As the strategic masterminds of our website and online platforms, our IT Team ensures that MOI’M’s mission is translated into the virtual space through our website.</h5><div class='memeberOne'><div id='itMemberOnePic'></div></div><div class='memeberTwo'><div id='itMemberTwoPic'></div></div><div class='memeberThree'><div id='itMemberThreePic'></div></div></div>";
var itInFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='it1();return false;'><h2 id='leaderHeading'>IT TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In a generation where social and virtual networking is a core part of our lives, the IT Team understands the power that the internet can hold.<br>As the strategic masterminds of our website and online platforms, our IT Team ensures that MOI’M’s mission is translated into the virtual space through our website.</h5><div class='memeberOne'><div id='itMemberOnePic' onclick='showProfileNah();return false;'></div></div><div class='memeberTwo'><div id='itMemberTwoPic' onclick='showProfileLarry();return false;'></div></div><div class='memeberThree'><div id='itMemberThreePic' onclick='showProfilePeter();return false;'></div></div></div>";
var it1OutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itTeamOut1();return false;'><h2 id='leaderHeading'>IT TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In a generation where social and virtual networking is a core part of our lives, the IT Team understands the power that the internet can hold.<br>As the strategic masterminds of our website and online platforms, our IT Team ensures that MOI’M’s mission is translated into the virtual space through our website.</h5><div class='memeberOne'><div id='itMemberFourPic' onclick='showProfileJunho();return false;'></div></div></div>";
var it1InFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='itTeamOut1();return false;'><h2 id='leaderHeading'>IT TEAM</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>In a generation where social and virtual networking is a core part of our lives, the IT Team understands the power that the internet can hold.<br>As the strategic masterminds of our website and online platforms, our IT Team ensures that MOI’M’s mission is translated into the virtual space through our website.</h5><div class='memeberOne'><div id='itMemberFourPic' onclick='showProfileJunho();return false;'></div></div></div>";
// ***

// ***advisory**
var advisoryIn="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='advisoryTeamOut();return false;'><h2 id='leaderHeading'>ADVISORY COUNCIL</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Comprised of attorneys and seasoned professionals, the Advisory Council provides advice and suggestions on issues related to policy,<br>strategy, and the law to help dictate the action behind the scenes.</h5><div class='memeberOne'><div id='advisoryMemberOnePic' onclick='showProfileSung();return false;'></div></div><div class='memeberTwo'><div id='advisoryMemberTwoPic' onclick='showProfileJeongSeok();return false;'></div></div></div>";
var advisoryIn2="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='advisoryTeamOut();return false;'><h2 id='leaderHeading'>ADVISORY COUNCIL</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Comprised of attorneys and seasoned professionals, the Advisory Council provides advice and suggestions on issues related to policy,<br>strategy, and the law to help dictate the action behind the scenes.</h5><div class='memeberOne'><div id='advisoryMemberOnePic' onclick='showProfileSung();return false;'></div></div><div class='memeberTwo'><div id='advisoryMemberTwoPic' onclick='showProfileJeongSeok();return false;'></div></div></div>";
var advisoryOut="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='advisoryTeamOut();return false;'><h2 id='leaderHeading'>ADVISORY COUNCIL</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Comprised of attorneys and seasoned professionals, the Advisory Council provides advice and suggestions on issues related to policy,<br>strategy, and the law to help dictate the action behind the scenes.</h5><div class='memeberOne'><div id='advisoryMemberOnePic'></div></div><div class='memeberTwo'><div id='advisoryMemberTwoPic'></div></div></div>";
var advisoryOut1="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='advisoryTeamOut();return false;'><h2 id='leaderHeading'>ADVISORY COUNCIL</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Comprised of attorneys and seasoned professionals, the Advisory Council provides advice and suggestions on issues related to policy,<br>strategy, and the law to help dictate the action behind the scenes.</h5><div class='memeberOne'><div id='advisoryMemberOnePic'></div></div><div class='memeberTwo'><div id='advisoryMemberTwoPic'></div></div></div>";

var advisoryOutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='advisoryTeamOut();return false;'><h2 id='leaderHeading'>ADVISORY COUNCIL</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Comprised of attorneys and seasoned professionals, the Advisory Council provides advice and suggestions on issues related to policy,<br>strategy, and the law to help dictate the action behind the scenes.</h5><div class='memeberOne'><div id='advisoryMemberOnePic'></div></div><div class='memeberTwo'><div id='advisoryMemberTwoPic'></div></div></div>";
var advisoryInFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='advisoryTeamOut();return false;'><h2 id='leaderHeading'>ADVISORY COUNCIL</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Comprised of attorneys and seasoned professionals, the Advisory Council provides advice and suggestions on issues related to policy,<br>strategy, and the law to help dictate the action behind the scenes.</h5><div class='memeberOne'><div id='advisoryMemberOnePic' onclick='showProfileSung();return false;'></div></div><div class='memeberTwo'><div id='advisoryMemberTwoPic' onclick='showProfileJeongSeok();return false;'></div></div></div>";
// ***

// ***contributors**
var contributorsIn="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributors1();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberOnePic' onclick='showProfileJoslyn();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberTwoPic' onclick='showProfileAndrew();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberThreePic' onclick='showProfileFei();return false;'></div></div></div>";
var contributorsIn1="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut1();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributors2();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberFourPic' onclick='showProfileYoon();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberFivePic' onclick='showProfileJi();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberSixPic' onclick='showProfileJieun();return false;'></div></div></div>";
var contributorsIn1a="<div id='teamContent' class='animated slideInRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut2();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberSevenPic' onclick='showProfileGrace();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberEightPic' onclick='showProfileJong();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberNinePic' onclick='showProfileJai();return false;'></div></div></div>";

var contributorsIn2="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributors1();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberOnePic' onclick='showProfileJoslyn();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberTwoPic' onclick='showProfileAndrew();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberThreePic' onclick='showProfileFei();return false;'></div></div></div>";
var contributorsIn3="<div id='teamContent' class='animated slideInLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut1();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributors2();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberFourPic' onclick='showProfileYoon();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberFivePic' onclick='showProfileJi();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberSixPic' onclick='showProfileJieun();return false;'></div></div></div>";

var contributorsOut="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributors1();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberOnePic'></div></div><div class='memeberTwo'><div id='contributorsMemberTwoPic'></div></div><div class='memeberThree'><div id='contributorsMemberThreePic'></div></div></div>";
var contributorsOut1="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributors1();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberOnePic'></div></div><div class='memeberTwo'><div id='contributorsMemberTwoPic'></div></div><div class='memeberThree'><div id='contributorsMemberThreePic'></div></div></div>";
var contributorsOut2="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut1();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberFourPic'></div></div><div class='memeberTwo'><div id='contributorsMemberFivePic'></div></div><div class='memeberThree'><div id='contributorsMemberSixPic'></div></div></div>";
var contributorsOut3="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut1();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberFourPic'></div></div><div class='memeberTwo'><div id='contributorsMemberFivePic'></div></div><div class='memeberThree'><div id='contributorsMemberSixPic'></div></div></div>";
var contributorsOut4="<div id='teamContent' class='animated slideOutRight' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut1();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberSevenPic'></div></div><div class='memeberTwo'><div id='contributorsMemberEightPic'></div></div><div class='memeberThree'><div id='contributorsMemberNinePic' onclick='showProfileJai();return false;'></div></div></div>";
var contributorsOut5="<div id='teamContent' class='animated slideOutLeft' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut1();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberSevenPic'></div></div><div class='memeberTwo'><div id='contributorsMemberEightPic'></div></div><div class='memeberThree'><div id='contributorsMemberNinePic' onclick='showProfileJai();return false;'></div></div></div>";


var contributorsOutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributors1();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberOnePic'></div></div><div class='memeberTwo'><div id='contributorsMemberTwoPic'></div></div><div class='memeberThree'><div id='contributorsMemberThreePic'></div></div></div>";
var contributorsInFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributors1();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberOnePic' onclick='showProfileJoslyn();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberTwoPic' onclick='showProfileAndrew();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberThreePic' onclick='showProfileFei();return false;'></div></div></div>";
var contributors1OutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut1();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributors2();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberFourPic' onclick='showProfileYoon();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberFivePic' onclick='showProfileJi();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberSixPic' onclick='showProfileJieun();return false;'></div></div></div>";
var contributors1InFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut1();return false;'><img id='forwardArrow' src = '/assets/arrowForward.png' onclick='contributors2();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberFourPic' onclick='showProfileYoon();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberFivePic' onclick='showProfileJi();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberSixPic' onclick='showProfileJieun();return false;'></div></div></div>";
var contributors2OutForProfile="<div id='teamContent' class='animated slideOutDown' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut2();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberSevenPic' onclick='showProfileGrace();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberEightPic' onclick='showProfileJong();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberNinePic' onclick='showProfileJai();return false;'></div></div></div>";
var contributors2InFromProfile="<div id='teamContent' class='animated slideInUp' onclick='closeLogin();return false;'><img id='backArrow' src = '/assets/arrowBack.png' onclick='contributorsTeamOut2();return false;'><h2 id='leaderHeading'>CONTRIBUTORS</h2><img id='membersLine' src = '/assets/line.png'><h5 id='teamIntro'>Contributors consist of talented individuals who are passionate about MOI’M and contribute their skills to its cause through their photography,<br>international communications/coordination, blogging, and more.</h5><div class='memeberOne'><div id='contributorsMemberSevenPic' onclick='showProfileGrace();return false;'></div></div><div class='memeberTwo'><div id='contributorsMemberEightPic' onclick='showProfileJong();return false;'></div></div><div class='memeberThree'><div id='contributorsMemberNinePic' onclick='showProfileJai();return false;'></div></div></div>";

// ****

// ***

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

// **Ryan - events
function showProfileRyan(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(eventsOutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(RyanIn);	
    }, 0);
}

function profileOutRyan(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(RyanOut);
}, 0);
	setTimeout(function() {
	$('body').append(eventsInFromProfile);	
    }, 0);
}

function profileOutRyanBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(RyanBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(eventsInFromProfile);	
    }, 0);
}

function profileOutRyanQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(RyanQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(eventsInFromProfile);	
    }, 0);
}

function showBioRyan(){
	$('#teamContent').remove();
	$('body').append(RyanBio);	
}

function showQARyan(){
	$('#teamContent').remove();
	$('body').append(RyanQA);	
}

function showRyan(){
	$('#teamContent').remove();
	$('body').append(RyanFadeIn);
}
// ***

// **Brent - events
function showProfileBrent(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(eventsOutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(BrentIn);	
    }, 0);
}

function profileOutBrent(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(BrentOut);
}, 0);
	setTimeout(function() {
	$('body').append(eventsInFromProfile);	
    }, 0);
}

function profileOutBrentBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(BrentBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(eventsInFromProfile);	
    }, 0);
}

function profileOutBrentQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(BrentQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(eventsInFromProfile);	
    }, 0);
}

function showBioBrent(){
	$('#teamContent').remove();
	$('body').append(BrentBio);	
}

function showQABrent(){
	$('#teamContent').remove();
	$('body').append(BrentQA);	
}

function showBrent(){
	$('#teamContent').remove();
	$('body').append(BrentFadeIn);
}
// ***

// **Amy - Events
function showProfileAmy(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(events1OutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(AmyIn);	
    }, 0);
}

function profileOutAmy(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(AmyOut);
}, 0);
	setTimeout(function() {
	$('body').append(events1InFromProfile);	
    }, 0);
}

function profileOutAmyBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(AmyBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(events1InFromProfile);	
    }, 0);
}

function profileOutAmyQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(AmyQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(events1InFromProfile);	
    }, 0);
}

function showBioAmy(){
	$('#teamContent').remove();
	$('body').append(AmyBio);	
}

function showQAAmy(){
	$('#teamContent').remove();
	$('body').append(AmyQA);	
}

function showAmy(){
	$('#teamContent').remove();
	$('body').append(AmyFadeIn);
}
// ***

// **Richard - creative
function showProfileRichard(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(creativeOutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(RichardIn);	
    }, 0);
}

function profileOutRichard(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(RichardOut);
}, 0);
	setTimeout(function() {
	$('body').append(creativeInFromProfile);	
    }, 0);
}

function profileOutRichardBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(RichardBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(creativeInFromProfile);	
    }, 0);
}

function profileOutRichardQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(RichardQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(creativeInFromProfile);	
    }, 0);
}

function showBioRichard(){
	$('#teamContent').remove();
	$('body').append(RichardBio);	
}

function showQARichard(){
	$('#teamContent').remove();
	$('body').append(RichardQA);	
}

function showRichard(){
	$('#teamContent').remove();
	$('body').append(RichardFadeIn);
}
// ***

// **Angie - creative
function showProfileAngie(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(creativeOutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(AngieIn);	
    }, 0);
}

function profileOutAngie(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(AngieOut);
}, 0);
	setTimeout(function() {
	$('body').append(creativeInFromProfile);	
    }, 0);
}

function profileOutAngieBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(AngieBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(creativeInFromProfile);	
    }, 0);
}

function profileOutAngieQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(AngieQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(creativeInFromProfile);	
    }, 0);
}

function showBioAngie(){
	$('#teamContent').remove();
	$('body').append(AngieBio);	
}

function showQAAngie(){
	$('#teamContent').remove();
	$('body').append(AngieQA);	
}

function showAngie(){
	$('#teamContent').remove();
	$('body').append(AngieFadeIn);
}
// ***

// **HyoBee - creative
function showProfileHyoBee(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(creativeOutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(HyoBeeIn);	
    }, 0);
}

function profileOutHyoBee(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(HyoBeeOut);
}, 0);
	setTimeout(function() {
	$('body').append(creativeInFromProfile);	
    }, 0);
}

function profileOutHyoBeeBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(HyoBeeBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(creativeInFromProfile);	
    }, 0);
}

function profileOutHyoBeeQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(HyoBeeQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(creativeInFromProfile);	
    }, 0);
}

function showBioHyoBee(){
	$('#teamContent').remove();
	$('body').append(HyoBeeBio);	
}

function showQAHyoBee(){
	$('#teamContent').remove();
	$('body').append(HyoBeeQA);	
}

function showHyoBee(){
	$('#teamContent').remove();
	$('body').append(HyoBeeFadeIn);
}
// ***

// **Sam - Creative
function showProfileSam(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(creative1OutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(SamIn);	
    }, 0);
}

function profileOutSam(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(SamOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative1InFromProfile);	
    }, 0);
}

function profileOutSamBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(SamBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative1InFromProfile);	
    }, 0);
}

function profileOutSamQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(SamQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative1InFromProfile);	
    }, 0);
}

function showBioSam(){
	$('#teamContent').remove();
	$('body').append(SamBio);	
}

function showQASam(){
	$('#teamContent').remove();
	$('body').append(SamQA);	
}

function showSam(){
	$('#teamContent').remove();
	$('body').append(SamFadeIn);
}
// ***

// **Bella - Creative
function showProfileBella(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(creative1OutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(BellaIn);	
    }, 0);
}

function profileOutBella(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(BellaOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative1InFromProfile);	
    }, 0);
}

function profileOutBellaBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(BellaBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative1InFromProfile);	
    }, 0);
}

function profileOutBellaQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(BellaQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative1InFromProfile);	
    }, 0);
}

function showBioBella(){
	$('#teamContent').remove();
	$('body').append(BellaBio);	
}

function showQABella(){
	$('#teamContent').remove();
	$('body').append(BellaQA);	
}

function showBella(){
	$('#teamContent').remove();
	$('body').append(BellaFadeIn);
}
// ***
// **EunSung - Creative
function showProfileEunSung(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(creative1OutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(EunSungIn);	
    }, 0);
}

function profileOutEunSung(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(EunSungOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative1InFromProfile);	
    }, 0);
}

function profileOutEunSungBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(EunSungBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative1InFromProfile);	
    }, 0);
}

function profileOutEunSungQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(EunSungQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative1InFromProfile);	
    }, 0);
}

function showBioEunSung(){
	$('#teamContent').remove();
	$('body').append(EunSungBio);	
}

function showQAEunSung(){
	$('#teamContent').remove();
	$('body').append(EunSungQA);	
}

function showEunSung(){
	$('#teamContent').remove();
	$('body').append(EunSungFadeIn);
}
// ***

// **Seung - Creative
function showProfileSeung(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(creative2OutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(SeungIn);	
    }, 0);
}

function profileOutSeung(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(SeungOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative2InFromProfile);	
    }, 0);
}

function profileOutSeungBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(SeungBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative2InFromProfile);	
    }, 0);
}

function profileOutSeungQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(SeungQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative2InFromProfile);	
    }, 0);
}

function showBioSeung(){
	$('#teamContent').remove();
	$('body').append(SeungBio);	
}

function showQASeung(){
	$('#teamContent').remove();
	$('body').append(SeungQA);	
}

function showSeung(){
	$('#teamContent').remove();
	$('body').append(SeungFadeIn);
}
// ***

// **Whitney - Creative
function showProfileWhitney(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(creative2OutForProfile);
}, 0);
	setTimeout(function() {
	$('body').append(WhitneyIn);	
    }, 0);
}

function profileOutWhitney(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(WhitneyOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative2InFromProfile);	
    }, 0);
}

function profileOutWhitneyBio(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(WhitneyBioOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative2InFromProfile);	
    }, 0);
}

function profileOutWhitneyQA(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(WhitneyQAOut);
}, 0);
	setTimeout(function() {
	$('body').append(creative2InFromProfile);	
    }, 0);
}

function showBioWhitney(){
	$('#teamContent').remove();
	$('body').append(WhitneyBio);	
}

function showQAWhitney(){
	$('#teamContent').remove();
	$('body').append(WhitneyQA);	
}

function showWhitney(){
	$('#teamContent').remove();
	$('body').append(WhitneyFadeIn);
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

// ***creative

function creative(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(teamOut);
}, 10);
	setTimeout(function() {
	$('body').append(creativeIn);	
    }, 0);
}

function creative1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(creativeOut1);
}, 10);
	setTimeout(function() {
	$('body').append(creativeIn1);	
    }, 0);
}

function creative2(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(creativeOut3);
}, 10);
	setTimeout(function() {
	$('body').append(creativeIn1a);	
    }, 0);
}

function creativeTeamOut(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(creativeOut);
}, 10);
	setTimeout(function() {
	$('body').append(teamIn);	
    }, 0);
}

function creativeTeamOut1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(creativeOut2);
}, 10);
	setTimeout(function() {
	$('body').append(creativeIn2);	
    }, 0);
}

function creativeTeamOut2(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(creativeOut4);
}, 10);
	setTimeout(function() {
	$('body').append(creativeIn3);	
    }, 0);
}
// *****

// ***pr

function pr(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(teamOut);
}, 10);
	setTimeout(function() {
	$('body').append(prIn);	
    }, 0);
}

function pr1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(prOut1);
}, 10);
	setTimeout(function() {
	$('body').append(prIn1);	
    }, 0);
}

function prTeamOut(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(prOut);
}, 10);
	setTimeout(function() {
	$('body').append(teamIn);	
    }, 0);
}

function prTeamOut1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(prOut2);
}, 10);
	setTimeout(function() {
	$('body').append(prIn2);	
    }, 0);
}
// *****

// ***soar

function soar(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(teamOut);
}, 10);
	setTimeout(function() {
	$('body').append(soarIn);	
    }, 0);
}

function soar1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(soarOut1);
}, 10);
	setTimeout(function() {
	$('body').append(soarIn1);	
    }, 0);
}

function soarTeamOut(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(soarOut);
}, 10);
	setTimeout(function() {
	$('body').append(teamIn);	
    }, 0);
}

function soarTeamOut1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(soarOut2);
}, 10);
	setTimeout(function() {
	$('body').append(soarIn2);	
    }, 0);
}
// *****

// ***it

function it(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(teamOut);
}, 10);
	setTimeout(function() {
	$('body').append(itIn);	
    }, 0);
}

function it1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(itOut1);
}, 10);
	setTimeout(function() {
	$('body').append(itIn1);	
    }, 0);
}

function itTeamOut(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(itOut);
}, 10);
	setTimeout(function() {
	$('body').append(teamIn);	
    }, 0);
}

function itTeamOut1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(itOut2);
}, 10);
	setTimeout(function() {
	$('body').append(itIn2);	
    }, 0);
}
// *****

// ***advisory

function advisory(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(teamOut);
}, 10);
	setTimeout(function() {
	$('body').append(advisoryIn);	
    }, 0);
}

function advisory1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(advisoryOut1);
}, 10);
	setTimeout(function() {
	$('body').append(advisoryIn1);	
    }, 0);
}

function advisoryTeamOut(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(advisoryOut);
}, 10);
	setTimeout(function() {
	$('body').append(teamIn);	
    }, 0);
}

function advisoryTeamOut1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(advisoryOut2);
}, 10);
	setTimeout(function() {
	$('body').append(advisoryIn2);	
    }, 0);
}
// *****

// ***contributors

function contributors(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(teamOut);
}, 10);
	setTimeout(function() {
	$('body').append(contributorsIn);	
    }, 0);
}

function contributors1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(contributorsOut1);
}, 10);
	setTimeout(function() {
	$('body').append(contributorsIn1);	
    }, 0);
}

function contributors2(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(contributorsOut3);
}, 10);
	setTimeout(function() {
	$('body').append(contributorsIn1a);	
    }, 0);
}

function contributorsTeamOut(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(contributorsOut);
}, 10);
	setTimeout(function() {
	$('body').append(teamIn);	
    }, 0);
}

function contributorsTeamOut1(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(contributorsOut2);
}, 10);
	setTimeout(function() {
	$('body').append(contributorsIn2);	
    }, 0);
}

function contributorsTeamOut2(){
	setTimeout(function() {
	$('#teamContent').remove();
	$('body').append(contributorsOut4);
}, 10);
	setTimeout(function() {
	$('body').append(contributorsIn3);	
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

