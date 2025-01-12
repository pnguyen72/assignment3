const body = document.querySelector("body");
const jumpscare = document.getElementById("jumpscare");
const gridContainer = document.getElementById("grid-container");
const video = document.getElementById("video");
var videoEnded = false;

function removeAllContent(backgroundColor = "initial") {
  jumpscare.remove();
  gridContainer.remove();
  body.style.backgroundColor = backgroundColor;
  body.style.backgroundImage = "initial";
  videoEnded = true;
}

if (window.innerWidth > 1800) video.play();

window.onresize = function () {
  if (window.innerWidth <= 1800) {
    video.pause();
    video.currentTime = 0;
  } else if (!videoEnded) {
    video.play();
  }
};

video.addEventListener("ended", (event) => {
  removeAllContent((backgroundColor = "black"));
});
