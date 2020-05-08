// JavaScript File
// let statements
let guessedNumber;
let randomNumber;
// function to get random number from 1-6, to see if it's the same as the inputted guess in order to send out one of two applicable messages
function numberGeneration() {
  // finds the inputted guess and assigns it to a variable
  guessedNumber = document.getElementById("guess").value;
  // programs picks a random number from 1-6
  randomNumber = Math.floor(Math.random() * 6) + 1;
  // alerts that the guess was right if it was
  if (guessedNumber == randomNumber) {
    alert("Good job! You guessed the right number!!! Guess again and the computer will have a new number for you!");
  }
  // alerts that the guess was wrong
  else {
    alert("Aww.. you guessed the wrong number... Feel free to try again with a new number");
  }
}
// event listener that triggers number generation and alert
document.getElementById("btn").addEventListener("click", numberGeneration);

