import './loader.js'

// var AudioContext = window.AudioContext || window.webkitAudioContext;
// var context = new AudioContext();

// var oscillator = new context.createOscillator();
// var gain = new context.createGain();

const trackArray = [];

function Track(instrument) {
    this.onPlay = 'false';
    this.instrument = instrument;
    trackArray.push(this);
}

const playButton = document.getElementById("play");
playButton.onclick = function () {
    if(trackArray.length == 0) {
        var track1 = new Track("acoustic_grand_piano");
        track1.onPlay = 'true';
    }
    track.onPlay = "true";
    playTrack();
}

function() {

}



MIDI.loadPlugin(onsuccess);
// simple example to get started;
MIDI.loadPlugin({
    instrument: "acoustic_grand_piano", // or the instrument code 1 (aka the default)
    instruments: [ "acoustic_grand_piano", "acoustic_guitar_nylon" ], // or multiple instruments
    onsuccess: function() { }
});