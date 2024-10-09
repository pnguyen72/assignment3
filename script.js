const video = document.getElementById("video")
var video_ended = false;

if (window.innerWidth > 1600) {
    video.play();
}

window.onresize = function () {
    if (window.innerWidth <= 1600) {
        video.pause();
        video.currentTime = 0;
    } else if (!video_ended) {
        video.play();
    }
}

video.addEventListener("ended", (event) => {
    video_ended = true;
    document.querySelector("body").remove();
});
