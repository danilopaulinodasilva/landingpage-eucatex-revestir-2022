window.myVideo = myVideo;
window.playPause = playPause;

var myVideo = document.getElementById("video1"); 
var play = document.getElementById("btnVideo");
var closeVideo = document.getElementById("closeVideo");
var modalVideo = document.getElementById("modalVideo");
      
play.addEventListener("click", () => {
  myVideo.play();

});

closeVideo.addEventListener("click", () => {
  myVideo.pause();

});

modalVideo.addEventListener("click", () => {
  myVideo.pause();

});

myVideo.currentTime = 0;

function playPause() { 
  console.log('play');

  if (myVideo.paused) {
    document.getElementById("video1").style.display = "block";
    myVideo.play(); 

  } else {
    myVideo.pause(); 

  }

} 
