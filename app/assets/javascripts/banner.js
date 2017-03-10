
// var banner = "<div id='top_banner' class='navigation'><div id='logInBanner'><a href='#'id='contactUsIcon' onclick='contactUsNow();'>CONTACT US</A><p id='line4'></p><img id='glass' src='/assets/magnifying.png'></div><a href='/'><img id='logoMoim' src='/assets/moimLogo.png'></a><ul><li><a class='aboutSelect' id='aboutTab'>About</a><ul id='aboutDrop'><li><a href='/mission'>THE MISSION</a></li><li><a href='/chronicle'>THE CHRONICLE</a></li><li><a href='/team'>THE TEAM</a></li><li><a href='/getinvolved'>GET INVOLVED</a></li></ul></li><li><a href='/events'>Events</a></li><li><a href='/blogs'>BLOG</a></li><li><a href='/galleries'>Gallery</a></li><li><a class='communitySelect'>Community</a><ul id='communityDrop'><li><a href='/external_events'>EXTERNAL EVENTS</a></li><li><a href='/careerboards'>CAREER BOARD</a></li><li><a href='/localhotspots'>LOCAL HOTSPOTS</a></li><li><a href='/freeboards'>FREEBOARD</a></li></ul></li><li><a href='/presses'>Press</a></li></ul></div>"



$(window).load(function() {

var searchField = "<input id='searchMoim' type='text' name='search'><p id='searchButton'>Press Enter to Search</p>"

	$('#top_banner').append(searchField);
	$('#top_banner_users').append(searchField);
	$('#searchMoim').hide();
	$('#searchButton').hide();

$('#glass').on('click', function(){
	$('#searchMoim').show();
	$('#searchMoim').focus();
	$('#searchButton').show();
	$('#glass').hide();
});

$('#searchMoim').blur(function() {
	$('#searchMoim').hide();
	$('#searchButton').hide();
  	$('#glass').show();
});

});