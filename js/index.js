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
    tigreUno.style.background = 'url(../assets/tiger_one_active.png)';
}

AudioUno.onpause = function() {
    isPlayingUno = false; 
    tigreUno.style.background = 'url(../assets/tiger_one.gif)';
}



function togglePlayDos() {
    isPlayingDos ? AudioDos.pause() : AudioDos.play();
}

AudioDos.onplaying = function() {
    isPlayingDos = true;
    tigreDos.style.background = 'url(../assets/tiger_two_active.png)';
}

AudioDos.onpause = function() {
    isPlayingDos = false; 
    tigreDos.style.background = 'url(../assets/tiger_two.gif)';
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