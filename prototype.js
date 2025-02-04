const prompt=require("prompt-sync")();
// Function to generate a random number
function getRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
var score=0;
var next=1;
function getScore(){
    while(next===1){
   
        var number1 = getRandomNumber(1,1000);
    var number2 = getRandomNumber(1,1000);
    var result = number1 + number2;
    var answer = Number(prompt(`What is ${number1} + ${number2}? `));
    if (answer == result)
        score=score+1;
    console.log(`Your score is ${score}`);
      next=Number(prompt("Do you want to continue? 1.Yes 2.No"));
    }
    return score;
}
getScore();
