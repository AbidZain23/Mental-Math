function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Function to set the numbers for the math exercise
function setNumbers() {
  number1 = getRandomNumber(1, 1000);
  number2 = getRandomNumber(1, 1000);
  document.getElementById("number1").textContent = `${number1} + ${number2}`;
}
var number1, number2, result;
//metal math function
var score = 0;
var next = 1;
function getScore() {
  if (next === 1) {
    setNumbers();
    result = number1 + number2;
  }
}

// Call setNumbers when the page loads
window.onload = function () {
  getScore();
  var answerInput = Number(document.getElementById("answerInput").value);
  var scoreElement = document.getElementById("score");
  function getAnswer() {
    const answer = Number(answerInput.value);
    if (answer === result) {
      score++;
      scoreElement.textContent = `Your Score: ${score}`;
    } else {
      scoreElement.textContent = `Incorrect! ${number1} + ${number2} = ${result}`;
    }
  }
  var answerInput = document.getElementById("answerInput");
  answerInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      getAnswer();
      document.getElementById("answerInput").value = ""; // Clear the input field
      getScore();
    }
  });
  document
    .getElementById("answerButton")
    .addEventListener("click", function () {
      getAnswer();
      document.getElementById("answerInput").value = ""; // Clear the input field
      getScore();
    });
  document.getElementById("endButton").addEventListener("click", function () {
    next = 0;
    alert(`You Got Score: ${score} in ${hours}:${minutes}:${seconds}`);
    score = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;
    clearInterval(countingTime);
    document.getElementById(
      "counting-time"
    ).textContent = `${hours}:${minutes}:${seconds}`;
    document.getElementById("score").textContent = `Your Score: ${score}`;
  });
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

//Counting Time
//start variabel
var seconds = 0;
var minutes = 0;
var hours = 0;
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
