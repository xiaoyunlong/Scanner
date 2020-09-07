document.querySelector("#message").innerHTML =
  "getUserMedia" in navigator.mediaDevices
    ? "api is exist"
    : "api is not exist";
var count = 0;
const constraints = {
  audio: false,
  video: {
    width: 180,
    height: 320,
    facingMode: { exact: "environment" },
  },
};
window.navigator.mediaDevices
  .getUserMedia(constraints)
  .then((mediaStream) => {
    const video = document.querySelector("video");
    video.srcObject = mediaStream;
    video.onloadedmetadata = (e) => {
      video.play();
    };
    // video.addEventListener("timeupdate", checkCode);
  })
  .catch((err) => {
    document.querySelector("#error").innerHTML = err.name + ": " + err.message;
  });
