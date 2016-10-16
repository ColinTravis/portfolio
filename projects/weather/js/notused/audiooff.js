window.onload = function() {

    var context = new window.webkitAudioContext(),
        osc = context.createOscillator(),
        osc2 = context.createOscillator(),
        gain = context.createGain(),
        w = window.innerWidth,
        h = window.innerHeight;

    osc.frequency = data.hourly.data[22].temperature; //sets the base in case the mouse doesn't work

    osc.connect(context.destination);
    osc.start(0);

    gain.gain.value = 100; //sets the base in case the mouse doesn't work
    gain.connect(osc.frequency);

    osc2.frequency.value = 1; //sets the base in case the mouse doesn't work
    osc2.connect(gain);
    osc2.type = "triangle"
    osc2.start(0);

    // document.addEventListener("mousemove", function(e) {
    //     // osc.frequency.value = e.clientY / h * data.hourly.data[22].temperature + data.hourly.data[20].dewPoint;
    //     // osc2.frequency.value = e.clientX / w * 15 + .5;
    // });
};
