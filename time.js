var prompt = require("prompt-sync")();
//start variabel
var seconds = 0;
var minutes = 0;
var hours = 0;
var control = 0;
var countingTime;

// a function that will display the time in the format hh:mm:ss
function time() {
  document.getElementById(
    "counting-time"
  ).textContent = `${hours}:${minutes}:${seconds}`;
  seconds++;
  if (seconds == 61) {
    seconds = 0;
    document.getElementById(
      "counting-time"
    ).textContent = `${hours}:${minutes}:${seconds}`;
    minutes++;
    if (minutes == 61) {
      minutes = 0;
      document.getElementById(
        "counting-time"
      ).textContent = `${hours}:${minutes}:${seconds}`;
      hours++;
    }
  }
}
// Call the function every second
window.onload = function () {
  // button that will start the time
  document.getElementById("start").addEventListener("click", function () {
    countingTime = setInterval(time, 1000);
  });
  // button that will stop the time
  document.getElementById("stop").addEventListener("click", function () {
    clearInterval(countingTime);
  });
  // button that will reset the time
  document.getElementById("reset").addEventListener("click", function () {
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById(
      "counting-time"
    ).textContent = `${hours}:${minutes}:${seconds}`;
  });
};
