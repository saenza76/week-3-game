var letters = [
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z"];

		function randomPick(max) {
			return Math.floor(Math.random()*max);
		}
		var win = 0;
		var lose = 0;
		var guessesRemaining = 9;
		var guessList = [];
		function game()
{
			var randomLetter = randomPick(letters.length);
			var currentLetter = letters[randomLetter].toLowerCase();
			document.onkeyup = function(event){
			var userguess = String.fromCharCode(event.keyCode).toLowerCase();
				console.log(currentLetter);
				if (guessesRemaining > 0){
					if (currentLetter == userguess){
						win++;
						document.getElementById("wins").innerHTML = "<h3> You Win!!!</h3> Wins: " + win;
						guessesRemaining = 0;
						document.getElementById("gameOverDiv").innerHTML = "<h1>The Game is over!<h1><hr>Press SpaceBar to begin again!"
					document.body.onkeyup = function(e){
					    if(e.keyCode == 32){
					        guessesRemaining = 9;
					        document.getElementById("wins").innerHTML = "Wins: " + win;
							document.getElementById("guesses_remaining").innerHTML = "Guesses Left: 9";
							guessList = [];
					        document.getElementById("gameOverDiv").innerHTML = "";
					        game();
					    }
					    }
					}
					else {
						lose++;
						guessesRemaining--;
						guessList.push(userguess);
						document.getElementById("losses").innerHTML = "Losses: " + lose;
						document.getElementById("guesses_remaining").innerHTML = "Guesses Left: " + guessesRemaining;
						document.getElementById("guesses").innerHTML = "Your Guesses so far: " + guessList;
					}
				}
				else{
					document.getElementById("gameOverDiv").innerHTML = "<h1>The Game is over!<h1><hr>Press SpaceBar to begin again!"
					document.body.onkeyup = function(e){
					    if(e.keyCode == 32){
					        guessesRemaining = 9;
					        document.getElementById("wins").innerHTML = "Wins: " + win;
							document.getElementById("guesses_remaining").innerHTML = "Guesses Left: 9";
							guessList = [];
					        document.getElementById("gameOverDiv").innerHTML = "";
					        game();
					    }
					}
				}
			}
		}
		game();








		