//==================CHANGE DIV BASED ON TIME OF DAY==================

$(function(){
	var d = new Date();
	var n = d.getHours();
	if (n > 19 || n < 6){
    $('.monitors').toggleClass("night");
    // $('.bedroom_header').html('<p>Different</p>');
  }
	  // If time is after 7PM or before 6AM, apply night theme to ‘body’

	else if (n > 16 && n < 20)
	  // If time is between 4PM – 7PM sunset theme to ‘body’
    $('.monitors').toggleClass("sunset");
		else
	  // Else use ‘day’ theme
    $('.monitors').toggleClass("day");});

//==================REFRESH AT TIME==================

		function refreshAt(hours, minutes, seconds) {
		    var now = new Date();
		    var then = new Date();

		    if(now.getHours() > hours ||
		       (now.getHours() == hours && now.getMinutes() > minutes) ||
		        now.getHours() == hours && now.getMinutes() == minutes && now.getSeconds() >= seconds) {
		        then.setDate(now.getDate() + 1);
		    }
		    then.setHours(hours);
		    then.setMinutes(minutes);
		    then.setSeconds(seconds);

		    var timeout = (then.getTime() - now.getTime());
		    setTimeout(function() { window.location.reload(true); }, timeout);
		}


//==================END: CHANGE DIV BASED ON TIME OF DAY==================

//=========
//CLOCK
//========

function updateClock ()
 	{
 	var currentTime = new Date ( );
  	var currentHours = currentTime.getHours ( );
  	var currentMinutes = currentTime.getMinutes ( );
  	var currentSeconds = currentTime.getSeconds ( );

		// Convert the hours component to 12-hour format if needed
  	currentHours = ( currentHours > 12 ) ? currentHours - 12 : currentHours;

		// Convert an hours component of "0" to "12"
		currentHours = ( currentHours == 0 ) ? 12 : currentHours;

  	// Pad the minutes and seconds with leading zeros, if required
		currentHours = ( currentHours < 10 ? "0" : "" ) + currentHours;
  	currentMinutes = ( currentMinutes < 10 ? "0" : "" ) + currentMinutes;
  	currentSeconds = ( currentSeconds < 10 ? "0" : "" ) + currentSeconds;

  	// Choose either "AM" or "PM" as appropriate
  	var timeOfDay = ( currentHours < 12 ) ? "AM" : "PM";




  	// Compose the string for display
  	var currentTimeString = currentHours + ":" + currentMinutes;


   	$(".clock").html(currentTimeString);

 }

$(document).ready(function()
{
   setInterval('updateClock()', 1000);
});

//========================== SCROLLMAGIC =====================================

$(document).ready(function() {
	//init controller
var scrollMagicController = new ScrollMagic.Controller();

var monitordivsgrow = new TimelineMax()
	.to('.monitors',0.5,{
		backgroundSize:'5000px 5000px',
		// backgroundColor:'red',
		color:'black'
		})
	.to('.monitor_left', 0.5, {
		margin:'26px',
		height:'485px',
		width:'245px',
		// backgroundColor:'blue'
	},0)
	.to('.monitor_center', 0.5, {
		margin:'75px',
		height:'510px',
		width:'870px',
		backgroundColor:'white'
	},0)
	.to('.monitor_right', 0.5, {
		margin:'26px',
		height:'485px',
		width:'245px',
		// backgroundColor:'green'
	},0)
	.to('.clock', 0.5, {
		top:'88.5%',
		left:'66vw',
		fontSize:'105px'
	},0)
	.to('.piece',0.5, {
		fontSize:'25pt',
		fontFamily:'sans-serif'
	},0)
	.to('.piece_intro',0.5, {
		fontSize:'55pt',
		fontFamily:'Josefin Sans',
		fontWeight: 300
	},0)
	.to('.piece_spacer',0.5,{
		fontSize:'0px'
	},0)
	.to('.table_contents a',0.5, {
		fontSize:'45pt',
		opacity:'1',
		// fontFamily:'Josefin Sans',
		fontWeight: 100
	},0)
	;

var enlarge = new ScrollMagic.Scene({
triggerElement: '.scroll_dial',
duration:670
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
// enlarge.addIndicators();
});
