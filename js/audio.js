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
