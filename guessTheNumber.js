/*
write a javascript program to generate a random number and store it in a varable.
the program then takes an input from the user to tell them wheather the guess was correct greater or lesser than the original number.
100 (no. of guesses) is the score of the user the number is guessed. number should be between 1 to 100.
*/
const prompt = require("prompt-sync")();
let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
let score = 100; // Initial score
let guess;
do {
    guess = prompt("Guess the number (between 1 and 100): ");
    guess = Number.parseInt(guess); // Convert input to integer

    if (guess < randomNumber) {
        console.log("Your guess is too low.");
        score -= 10; // Deduct points for incorrect guess
    } else if (guess > randomNumber) {
        console.log("Your guess is too high.");
        score -= 10; // Deduct points for incorrect guess
    } else {
        console.log("Congratulations! You've guessed the number correctly.");
        console.log("Your score is: " + score);
    }
}while (guess !== randomNumber && score > 0);
if (score <= 0) {
    console.log("Sorry, you've run out of points. The number was: " + randomNumber);
}
