const video = document.getElementById("video")
console.log(video)
function start() {
  const nav = navigator;
  console.log(nav.mediaDevices)
  nav.mediaDevices.getUserMedia({
    audio: false,
    video: true
  }).then(stream => {
    video.srcObject = stream;
    video.setAttribute("autoplay", true)
  }).catch(console.log)

}

window.addEventListener("load", start, false)