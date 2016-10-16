$(function() { //start application
        $.getJSON("php/getWeatherData.php", function(data) { //pull weather data in
                //success
                console.log(data); //debug



                $.getJSON('js/colors.json', function(colors) { //pull color array in
                    /*JQuery callback */
                    console.log(colors.color[68]) //color checker debug


                //================STYLE PAGE=========================
                //+++++CREATE TEXT++++++
                // $('.condition').html(data.currently.summary); //replace with condition outside

                $('.temperature').append(data.hourly.data[22].temperature); //replace with temperature " + "&deg;" for degrees sign

                // $('.dewpoint').html("Dew Point: " + data.hourly.data[15].dewPoint); //replace with dew point

                //+++++CHANGE CSS++++++
                var tempColor = Math.round(data.hourly.data[48].temperature)
                console.log(tempColor)

                $('p').css({
                    "color" : "green"
                });

                $(".flex-main").css(
                    "background-color", (colors.color[tempColor])
                );


                //==============CREATE SOUND=========================

                var context =
                    new window.webkitAudioContext(); //creates audio context object or windows

                var osc = context.createOscillator(); //creates oscillator which is base sound
                osc.frequency.value = (data.hourly.data[48].temperature); //sets frequency of oscillator base sound (in Hz)
                osc.connect(context.destination); //connects oscillator to destination, speakers
                osc.type = "triangle"; //type of wave sine square sawtooth triangle
                osc.start(0)


                var gain = context.createGain(); //create gain node
                gain.gain.value = (data.hourly.data[48].dewPoint); //gain set to 100
                gain.connect(osc.frequency); //cannot connect gain node to oscillator (no inputs), so it's connected to frequency

                var osc2 = context.createOscillator(); //second oscillator
                osc2.frequency.value = 1;
                osc2.connect(gain); //connect to gain node
                osc2.type = "sawtooth";
                osc2.start(0);
            }) //end JSON color references
          }) //end JSON weather references
    }) //end jQuery
