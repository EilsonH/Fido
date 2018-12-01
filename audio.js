var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();

var oscillator = new context.createOscillator();
var gain = new context.createGain();



