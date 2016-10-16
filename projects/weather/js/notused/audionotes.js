window.onload = function() {

    var audio = new window.webkitAudioContext(),
        position = 0,
        scale = {
            g: 392,
            f: 349.23,
            e: 329.63,
            b: 493.88,
            a: 440,
            d: 293.63
        },
        // song = "gfefgg-fff-gbb-gfefggggffgfe---";
        song = "bagb--degabbagg--";

    setInterval(play, 1000 / 4);

    function createOscillator(freq) {
      var attack = 10,
          decay = 250,
          gain = audio.createGain(),
          osc = audio.createOscillator();

          gain.connect(audio.destination);
          gain.gain.setValueAtTime(0, audio.currentTime);
          gain.gain.linearRampToValueAtTime(1, audio.currentTime + attack / 1000); //divide by 1000 for milliseconds as this is in seconds
          gain.gain.linearRampToValueAtTime(0, audio.currentTime + decay / 1000);

          osc.frequency.value = freq;
          osc.type = "square";
          osc.connect(gain);
          osc.start(0);

      setTimeout(function(){
        osc.stop(0);
        osc.disconnect(gain);
        osc.disconnect(audio.destination);
      }, decay)
    }

    function play() {
        var note = song.charAt(position),
            freq = scale[note];
        position += 1;
        if (position >= song.length) {
            position = 0;
        }
        if (freq) {
            createOscillator(freq);
        }
    }

};





// window.onload = function() {
//
//     var context = new window.webkitAudioContext(),
//         osc = context.createOscillator(),
//         osc2 = context.createOscillator(),
//         gain = context.createGain(),
//         w = window.innerWidth,
//         h = window.innerHeight;
//
//     osc.frequency = 100;
//
//     osc.connect(context.destination);
//     osc.start(0);
//
//     gain.gain.value = 100;
//     gain.connect(osc.frequency);
//
//     osc2.frequency.value = .1; //sets the base in case the mouse doesn't work
//     osc2.connect(gain);
//     osc2.type = "triangle"
//     osc2.start(0);
//
//     document.addEventListener("mousemove", function(e) {
//         osc.frequency.value = e.clientY / h * 1500 + 30;
//         osc2.frequency.value = e.clientX / w * 15 + .5;
//     });
// };


// var context =
// new window.webkitAudioContext(); //creates audio context object or windows
//
// var osc = context.createOscillator(); //creates oscillator which is base sound
// osc.frequency.value = 440; //sets frequency of oscillator base sound (in Hz)
// osc.connect(context.destination); //connects oscillator to destination, speakers
// osc.type = "triangle"; //type of wave sine square sawtooth triangle
// osc.start(0)
//
//
// var gain = context.createGain(); //create gain node
// gain.gain.value = 100; //gain set to 100
// gain.connect(osc.frequency); //cannot connect gain node to oscillator (no inputs), so it's connected to frequency
//
// var osc2 = context.createOscillator(); //second oscillator
// osc2.frequency.value = 1;
// osc2.connect(gain); //connect to gain node
// osc2.type = "sawtooth";
// osc2.start(0);
