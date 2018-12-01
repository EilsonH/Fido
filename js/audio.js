
// function audioContextCheck() {
//     if (typeof AudioContext !== "undefined") {
//       return new AudioContext();
//     } else if (typeof webkitAudioContext !== "undefined") {
//       return new webkitAudioContext();
//     } else if (typeof mozAudioContext !== "undefined") {
//       return new mozAudioContext();
//     } else {
//       throw new Error('AudioContext not supported');
//     }
//   }
  
var context = new AudioContext();

var oscillator = context.createOscillator();



var gain = context.createGain();

console.log(oscillator);
oscillator.frequency.setValueAtTime(440, context.currentTime);
oscillator.type = 'sine';
oscillator.connect(context.destination);
oscillator.start();
oscillator.detune.setValueAtTime(200, context.currentTime + 1);
oscillator.detune.setValueAtTime(400, context.currentTime + 2);
oscillator.detune.setValueAtTime(500, context.currentTime + 3);
oscillator.detune.setValueAtTime(700, context.currentTime + 4);
oscillator.detune.setValueAtTime(900, context.currentTime + 5);
oscillator.detune.setValueAtTime(1100, context.currentTime + 6);
oscillator.detune.setValueAtTime(1200, context.currentTime + 7);

oscillator.stop(context.currentTime + 8);


// console.log(gain);


// oscillator.connect(gain);
// gain.connect(context.destination);
