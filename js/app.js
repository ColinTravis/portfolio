//==================CHANGE DIV BASED ON TIME OF DAY==================
$(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6){
    $('.bedroom_header').toggleClass("night");
    $('.bedroom_header').html('<p>Different</p>');
  }
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’

	else if (n > 16 && n < 19)
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.body.className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.body.className = "day";
});//==================END: CHANGE DIV BASED ON TIME OF DAY==================


//========================== SCROLLMAGIC =====================================

$(document).ready(function() {
	//init controller
var scrollMagicController = new ScrollMagic.Controller();
var tween1 = TweenMax.to('.block',0.5,{
	backgroundColor:'red',
	color:'white'
});

var scene1 = new ScrollMagic.Scene({
triggerElement: '.container',
duration:200
})
.setPin('.blockpin',{
pushFollowers: false
})

scene1.setTween(tween1)
scene1.addTo(scrollMagicController)
scene1.addIndicators();
});
