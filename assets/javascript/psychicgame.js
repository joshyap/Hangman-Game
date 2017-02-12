var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var inputGuess;
var Letters = ["a","b","c",'d',"e","f","g","h",'i',"j","k",'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var guesses = [];


//document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

function reset() {
	wins = 0;
	//losses = 0;
	guessesRemaining = 10;
	inputGuess;
	//var Letters = ["a","b","c",'d',"e","f","g","h",'i',"j","k",'l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
	guesses = [];
	document.getElementById("guessesRemaining").innerHTML = 0;
	document.getElementById("losses").innerHTML = 0;
	document.getElementById("wins").innerHTML = 0;
	document.getElementById("guessedLetters").innerHTML = "";
}

/*function selectedLetters() {
    var guesses = [];
    document.onkeyup = function(event) {
    	var letterGuess = event.key.toLowerCase();
    }
    guesses.push(letterGuess);
    document.getElementById("guessedLetters").innerHTML = guesses;
}*/

/*
function selectedLetters() {



	//var guesses=[];
	var a = guesses.indexOf(e)
	if (a == -1) {
		guesses.push(a);
	} else {
		alert("guess has already been used");
	}
	document.getElementById("guessedLetters").innerHTML = guesses;
}
*/

function myFunction() {
    var fruits = ["Banana", "Orange", "Apple", "Mango"];
    var a = fruits.indexOf("Appleeeeee");
    document.getElementById("demo").innerHTML = a;
}


document.onkeydown = function(e) {

	var randomLetter = Letters[Math.floor(Math.random() * Letters.length)];
	
		//if the user input key is the same as randomly selected letter
		if (e.key === randomLetter) {
			wins++;
			document.getElementById("wins").innerHTML = wins;
			alert("Computer chose " + randomLetter[Math.floor(Math.random() * randomLetter.length)] + " and you chose " + e.key);
		//do this when input key != randomly selected letter
		} else {
			
			guessesRemaining--;
			document.getElementById("guessesRemaining").innerHTML = guessesRemaining;

			
			//trying to get the letters to show as guesses
			var userInput = e.key.toLowerCase();
			if (userInput == guesses.indexOf) {
				selectedLetters();
			}
			guesses.push(userInput);
			document.getElementById("guessedLetters").innerHTML = _.uniq(guesses);
		
			

		//triggered game over and reset
		if (guessesRemaining === 0 ) {
			alert("game over");
			reset();
			losses++;
		document.getElementById("losses").innerHTML = losses;
		}
		
		
	}
}

