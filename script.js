video = document.getElementById("video")

if (window.innerWidth >= 1600) {
    video.play();
}

window.onresize = function () {
    if (window.innerWidth < 1600) {
        video.pause();
        video.currentTime = 0;
    } else {
        video.play();
    }
}