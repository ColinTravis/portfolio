//==================CHANGE DIV BASED ON TIME OF DAY==================

$(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6){
    $('.monitors').toggleClass("night");
    // $('.bedroom_header').html('<p>Different</p>');
  }
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’

	else if (n > 16 && n < 19)
	  // If time is between 4PM – 7PM sunset theme to ‘body’
	  document.body.className = "sunset";
	else
	  // Else use ‘day’ theme
	  document.body.className = "day";
});
//==================END: CHANGE DIV BASED ON TIME OF DAY==================


//========================== SCROLLMAGIC =====================================

$(document).ready(function() {
	//init controller
var scrollMagicController = new ScrollMagic.Controller();

var monitordivsgrow = new TimelineMax()
	.to('.monitors',0.5,{
		backgroundSize:'5000px 5000px',
		backgroundColor:'red',
		color:'white'
		})
	.to('.monitor_left', 0.5, {
		margin:'26px',
		height:'505px',
		width:'245px',
		backgroundColor:'blue'
	},0)
	.to('.monitor_center', 0.5, {
		margin:'75px',
		height:'490px',
		width:'870px',
		backgroundColor:'red',
		fontSize:'30pt'
	},0)
	.to('.monitor_right', 0.5, {
		margin:'26px',
		height:'505px',
		width:'245px',
		backgroundColor:'green'
	},0);

var enlarge = new ScrollMagic.Scene({
triggerElement: '.scroll_dial',
duration:750
})

var monitorpin = new ScrollMagic.Scene({
	triggerElement: '.scroll_dial',
	duration:800
})
.setPin('.monitors',{
pushFollowers: false
})
.addTo(scrollMagicController);

enlarge.setTween(monitordivsgrow)
.setClassToggle('.monitor_center','scroll')
enlarge.addTo(scrollMagicController)
enlarge.addIndicators();
});
