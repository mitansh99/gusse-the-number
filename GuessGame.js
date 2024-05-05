const randNumber = Math.floor(Math.random() * 100) + 1; //genrating random number

let score = 0; // storing a score into var
let scoreBoard = document.querySelector("#score"); //score html elm
let userGuess = document.querySelector("#guess"); //taking user guess
let outputText = document.getElementById("text"); //output access

function myfunction() {
  let userGuessNumber = parseInt(userGuess.value);

  if (randNumber == userGuessNumber) {
    //check the numbers are equal or not
    outputText.innerHTML = "Hurry !! you are win 🏆";
    scoreBoard.innerHTML = "Score is :  " + (100 - score);
  } else if (randNumber > userGuessNumber) {
    //check smaller or not
    outputText.innerHTML = "your guess small is then actual number ";
    score++; // increse the score by one
    console.log(score);
  } else {
    //if number is bigger then random number
    outputText.innerHTML = "your guess is big then actual number";
    score++; // increse the score by one
    console.log(score);
  }
}
