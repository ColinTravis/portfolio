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

//=========
//CLOCK
//========

$(function(){


function hhmmss(hour, min, sec){
  var hText = ""
  var mText = ""

  if(hour == 1){
    hText = ""
  }
  if(min == 1){
    mText = ""
  }
  if(hour && min){ //if hour +min is true (Without stating the variable, it always defaults to true)
    return hour + ":" + min;
  }
  if(!hour && min){ //if hours are false, minutes are true, seconds are true. Bang (!) equals not true
    return min + mText + ":";
  }
  if(hour && !min){ //if (hour == true && min == false && sec == true)
    return hour + hText + ":";
  }
  if(hour && min ){
    return hour + hText + ":" + min + mText;
  }

}

setInterval(function(){
  var hours = new Date().getHours();
	var hours = (hours+24)%24;
	var minutes = new Date().getMinutes();
	var mid='am';
	if(hours==0){ //At 00 hours we need to show 12 am
	hours=12;
	}
	else if(hours>12)
	{
	hours=hours%12;
	mid='pm';
	}
    $('.clock').text(  hhmmss( hours,
		minutes, mid )) //replace the .hhmmss class with text pulled from the computer clock, and adhering to the format of the hhmmss function


},1000)


})

/*

$('.clock').text(function () {
    var hours = new Date().getHours();
    var hours = (hours+24)%24;
		var minutes = new Date().getMinutes();
    var mid='am';
    if(hours==0){ //At 00 hours we need to show 12 am
    hours=12;
    }
    else if(hours>12)
    {
    hours=hours%12;
    mid='pm';
    }
    alert ('Time now: ' + hours + ":" + minutes + mid);
});

*/




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
