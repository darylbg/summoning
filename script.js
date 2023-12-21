const eye = document.getElementById("eye_container");
const title = document.getElementById("title");
const eyeLine = document.getElementById("eye_line");

function updateEyeRotationToMouse(e) {
  var rect = eye.getBoundingClientRect();
  var originX = rect.left + rect.width / 2; // Center of the eye
  var originY = rect.top + rect.height / 2; // Center of the eye

  var angle = Math.atan2(e.pageY - originY, e.pageX - originX);
  var angleInDegrees = angle * (180 / Math.PI) + 180;

  eye.style.transform = "rotate(" + angleInDegrees + "deg)";
  eye.style.transformOrigin = "center center"; // Set the rotation origin to center

  // Calculate the distance from the eye origin to the mouse position
  var distance = Math.sqrt(Math.pow(e.pageX - originX, 2) + Math.pow(e.pageY - originY, 2));

  // Set the width of the eyeLine
  eyeLine.style.width = distance + "px";
}

function updateEyeRotationToTitle() {
  var rect = eye.getBoundingClientRect();
  var originX = rect.left + rect.width / 2; // Center of the eye
  var originY = rect.top + rect.height / 2; // Center of the eye

  var targetRect = title.getBoundingClientRect();
  var targetCenterX = targetRect.left + targetRect.width / 2;
  var targetCenterY = targetRect.top + targetRect.height / 2;

  var angle = Math.atan2(targetCenterY - originY, targetCenterX - originX);
  var angleInDegrees = angle * (180 / Math.PI) + 180;

  eye.style.transform = "rotate(" + angleInDegrees + "deg)";
  eye.style.transformOrigin = "center center"; // Set the rotation origin to center

  // Calculate the distance from the eye origin to the title position
  var distance = Math.sqrt(Math.pow(targetCenterX - originX, 2) + Math.pow(targetCenterY - originY, 2));

  // Set the width of the eyeLine
  eyeLine.style.width = distance + "px";
}

// Initial tracking to title
updateEyeRotationToTitle();

// After 3 seconds, switch to tracking to mouse
setTimeout(() => {
  window.addEventListener("mousemove", updateEyeRotationToMouse);
}, 1000); // 3000 milliseconds (3 seconds)
