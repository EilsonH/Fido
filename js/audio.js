window.onload = function() {

MIDI.loadPlugin({
    soundfontUrl: "./soundfont/",
    instrument: "acoustic_grand_piano",
    onsuccess: function() {
        MIDI.noteOn(0, 69, 70, 0);
        MIDI.noteOff(0, 69, 0.75);
    }
});

var audioContext = new AudioContext();
var oscillator = audioContext.createOscillator();
oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
oscillator.type = "sine";

// // var AudioContext = window.AudioContext || window.webkitAudioContext;
// // var context = new AudioContext();
//
// // var oscillator = new context.createOscillator();
// // var gain = new context.createGain();
// const trackArray = [];
// const table = [(C0, 44), (D0, 45), (E0, 46), (F0, 47), (G0, 48), (A0, 49), (B0, 50), (C1, 51)]
//
//
// MIDI.loadPlugin(onsuccess);
// MIDI.loadPlugin({
//     instrument: "acoustic_grand_piano",
//     onsuccess: function() { }
// });
//
// function Track(instrument) {
//     this.onPlay = 'false';
//     this.instrument = instrument;
//     trackArray.push(this);
// }
//
// const playButton = document.getElementById("play");
// playButton.onclick = function () {
//     if(trackArray.length == 0) {
//         var track1 = new Track("acoustic_grand_piano");
//         track1.onPlay = 'true';
//     }
//     track.onPlay = "true";
//     playTrack();
// }


    // const keyNodeMap = {
    //     "65" : "A", // A
    //     "66" : "B",
    //     "67" : "C",
    //     "68" : "D",
    //     "69" : "E",
    //     "70" : "F",
    //     "71" : "G",
    //     "72" : "H",
    //     "73" : "I",
    //     "74" : "J",
    //     "75" : "K",

    // }

    var context = new (window.AudioContext || window.webkitAudioContext)();
    var oscillator = context.createOscillator();
    var gain = context.createGain();

    oscillator.frequency.setValueAtTime(440, context.currentTime);
    oscillator.type = 'sine';
    gain.gain.value = 0;
    oscillator.connect(gain);
    gain.connect(context.destination);
    oscillator.start(0);


    function soundOn() {
        gain.gain.value = 1;
    }

//     function soundOff() {
//         gain.gain.value = 0;
//     }

    document.addEventListener("keypress", function(event) {
        // var keyCode = event.keyCode;
        // var keyString = String.fromCharCode(keyCode);
        gain.gain.value = 1;
    })

    document.addEventListener("keyup", function() {
        gain.gain.value = 0;
    })

    
    
}





// oscillator.detune.setValueAtTime(200, context.currentTime + 1);
// oscillator.detune.setValueAtTime(400, context.currentTime + 2);
// oscillator.detune.setValueAtTime(500, context.currentTime + 3);
// oscillator.detune.setValueAtTime(700, context.currentTime + 4);
// oscillator.detune.setValueAtTime(900, context.currentTime + 5);
// oscillator.detune.setValueAtTime(1100, context.currentTime + 6);
// oscillator.detune.setValueAtTime(1200, context.currentTime + 7);

// oscillator.stop(context.currentTime + 8);


// console.log(gain);


// oscillator.connect(gain);
// gain.connect(context.destination);

