window.myVideo = myVideo;
window.playPause = playPause;
window.closeYoutube = closeYoutube;

var myVideo = document.getElementById("video1"); 
var play = document.getElementById("btnVideo");
var closeVideo = document.getElementById("closeVideo");
var modalVideo = document.getElementById("modalVideo");
var closeYoutube = document.getElementsByClassName("btn-close-youtube")[0];

closeYoutube.addEventListener("click", () => {
  var iframeYoutube = document.getElementById("iframeYoutube");
  iframeYoutube.src = "";

});

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

  if (myVideo.paused) {
    document.getElementById("video1").style.display = "block";
    myVideo.play(); 

  } else {
    myVideo.pause(); 

  }

} 
