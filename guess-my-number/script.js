let highscore = 0;
let message = document.querySelector(".message");
let body = document.querySelector("body");
let numberDisplay = document.querySelector(".number");

const displayMessage = function (text) {
	message.textContent = text;
};

const startGame = function () {
	let mode = prompt("Choose a mode: type 'easy' or 'hard' to get started");
	body.style.backgroundColor = "#333";
	numberDisplay.style.width = "15rem";
	displayMessage("Start Your Guess...");
	numberDisplay.textContent = "?";
	const secretNumber = Math.trunc(Math.random() * 100) + 1;

	let lives = 0;
	if (mode == "easy") lives = 10;
	else if (mode == "hard") lives = 5;
	document.querySelector(".lives").textContent = lives;

	console.log(lives);
	const checkGuess = function () {
		const guess = Number(document.querySelector(".guess").value);
		console.log(guess, typeof guess);

		if (lives != 0) {
			// When there's no input
			if (!guess) {
				displayMessage("⛔ No Number!");

				// When player wins
			} else if (guess == secretNumber) {
				displayMessage("🥳 Correct Number!");
				highscore += lives;
				document.querySelector(".highscore").textContent = highscore;
				numberDisplay.textContent = secretNumber;
				body.style.backgroundColor = "#60b347";
				numberDisplay.style.width = "30rem";

				// When player wrong
			} else if (guess != secretNumber) {
				// When player guesses too high or too low
				displayMessage(guess > secretNumber ? "‼️ Too High" : "‼️ Too Low");
				lives--;
				document.querySelector(".lives").textContent = lives;
			}

			// When player has no life left
		} else if (lives == 0) {
			displayMessage("‼ Game Over");
			body.style.backgroundColor = "red";
		}
	};
	document.querySelector(".check").addEventListener("click", checkGuess);
};

document.querySelector(".again").addEventListener("click", startGame);
startGame();
