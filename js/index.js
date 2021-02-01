var tigreUno = document.getElementById('tigre-uno');
var tigreDos = document.getElementById('tigre-dos');
var AudioUno = document.getElementById('audio-uno');
var AudioDos = document.getElementById('audio-dos');
var isPlayingUno = false;
var isPlayingDos = false;


function togglePlay() {
    isPlayingUno ? AudioUno.pause() : AudioUno.play();
}

AudioUno.onplaying = function() {
    isPlayingUno = true;
    tigreUno.classList.add('tigre-uno-active');
}

AudioUno.onpause = function() {
    isPlayingUno = false; 
    tigreUno.classList.remove('tigre-uno-active');
}



function togglePlayDos() {
    isPlayingDos ? AudioDos.pause() : AudioDos.play();
}

AudioDos.onplaying = function() {
    isPlayingDos = true;
    tigreDos.classList.add('tigre-dos-active');
}

AudioDos.onpause = function() {
    isPlayingDos = false; 
    tigreDos.classList.remove('tigre-dos-active');
}

// function togglePlay() {
//     cumbia.volume = .5;
//     isPlaying ? cumbia.pause() : cumbia.play();
//   };
  
//   cumbia.onplaying = function() {
//       isPlaying = true;
//       audio.innerHTML = "Mute Audio"
//     };
//     cumbia.onpause = function() {
//       isPlaying = false;
//       audio.innerHTML = "Unmute Audio"
//     };