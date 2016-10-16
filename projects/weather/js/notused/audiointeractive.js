window.onload = function() {

    var context = new window.webkitAudioContext(),
        osc = context.createOscillator(),
        osc2 = context.createOscillator(),
        gain = context.createGain(),
        w = window.innerWidth,
        h = window.innerHeight;

    osc.frequency = 100;

    osc.connect(context.destination);
    osc.start(0);

    gain.gain.value = 100;
    gain.connect(osc.frequency);

    osc2.frequency.value = .1; //sets the base in case the mouse doesn't work
    osc2.connect(gain);
    osc2.type = "triangle"
    osc2.start(0);

    document.addEventListener("mousemove", function(e) {
        osc.frequency.value = e.clientY / h * 1500 + 30;
        osc2.frequency.value = e.clientX / w * 15 + .5;
    });
};





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
