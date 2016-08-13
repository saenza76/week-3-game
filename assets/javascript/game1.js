	//Global Variables (variables that can be called on that are not tied to a function)//
	var wins = 0
	var guesses = []
	var guessesLeft = 12
	var currentWord = generateWord()
	var displayedWord = displayWord(currentWord)


	// Chooses a random beer type from the array //
	function generateWord() {
		var beer = ['lager', 'stout', 'pilsner', 'porter', 'amber', 'wheat'];
		var selection = beer[Math.floor(Math.random() * beer.length)];
		return selection;
	}

	// Takes generated word and adds underscores //
	function displayWord(x) {
		var str = '';
		var add = '_';
		var len = x.length;
		for (i = 0; i < len; i++) {
			str = str.concat(add);
		}
		str = str.trim();
		return str;
	}

	function checkGuess(x, arr) {
		return arr.includes(' ' + x);
	}

	function checkInWord(x, word) {
		return word.includes(x);
	}

	function appendToGuesses(x, arr) {
		arr.push(' ' + x)
	}

	function appendToWord(char, word, completeWord) {
		var index = [];
		for(var i = 0; i < completeWord.length; i++) {
			if (completeWord[i] === char) {
				index.push(i);
			}
		}

		for(ind in index) {
			word = word.substr(0, index[ind]) + char + word.substr(index[ind] + 1);
		}
		return word;
	}
	
	function checkWin(given, final) {
		return given === final
	}

	function reset() {
		guesses = [];
		guessesLeft = 12;
		currentWord = generateWord();
		displayedWord = displayWord(currentWord);
	}


	document.onkeyup = function(event) {
		var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


		if (!checkGuess(userGuess, guesses)) {

			guessesLeft--
			if (checkInWord(userGuess, currentWord)) {
				displayedWord = appendToWord(userGuess, displayedWord, currentWord);
				appendToGuesses(userGuess, guesses);
			}else {
				appendToGuesses(userGuess, guesses);
			}
		}

		if (guessesLeft == 0) {
			reset();
		}

		if (checkWin(displayedWord, currentWord)) {
			wins++;
			reset();
		}


		// Taking the variable data and displaying them in HTML
		var winsHtml = '<p>Wins = ' + wins + '</p>';
		var displayWordHtml = '<p>Current word = <span>' + displayedWord + '</span></p>'
		var guessesRemainingHtml = '<p>Number of guesses remaining = ' + guessesLeft + '</p>'
		var guessesHtml = '<p>Letters guessed already = ' + guesses + '</p>'
	
	
		// Placing the updated html
		document.querySelector('#wins').innerHTML = winsHtml;
		document.querySelector('#current_word').innerHTML = displayWordHtml;
		document.querySelector('#guesses_remaining').innerHTML = guessesRemainingHtml;
		document.querySelector('#guesses').innerHTML = guessesHtml;
	}



