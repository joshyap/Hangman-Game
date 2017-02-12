var gameStarted = false;
var wins;
var letters;

var arrayWords = ["fox", "falco", "marth", "dreamland", "jigglypuff", "battlefield", "mario"];
var guessedLetters = ["a","b","c"];

wins = 0;
remainingGuesses = 15;

/*
for (i=0; i<guessedLetters.length; i++) {
	var newLetter = document.getElementById("guessedLetters");

      newLetter.innerHTML = guessedLetters[i];
}
*/

/*
var remainingGuesses = 15;
while (remainingGuesses<10) {
	alert("still alive");
}
*/

//helpful things from other hws
//var computerGuess = options[Math.floor(Math.random() * options.length)];