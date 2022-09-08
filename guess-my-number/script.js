// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🥳 Correct Number!";
// document.querySelector(".number").textContent = 29;
// document.querySelector(".lives").textContent = 9;
let highscore = 0;
const startGame = function () {
	document.querySelector(".message").textContent = "Start Your Guess...";
	const secretNumber = Math.trunc(Math.random() * 100) + 1;
	document.querySelector(".number").textContent = secretNumber;
	let lives = 10;

	const checkGuess = function () {
		const guess = Number(document.querySelector(".guess").value);
		console.log(guess, typeof guess);

		if (lives != 0) {
			if (!guess) {
				document.querySelector(".message").textContent = "⛔ No Number!";
			} else if (guess == secretNumber) {
				document.querySelector(".message").textContent = "🥳 Correct Number!";
				highscore += lives;
				document.querySelector(".highscore").textContent = highscore;
			} else if (guess != secretNumber) {
				if (guess > secretNumber) {
					document.querySelector(".message").textContent = "‼️ Too High";
				} else if (guess < secretNumber) {
					document.querySelector(".message").textContent = "‼️ Too Low";
				}
				lives--;
				document.querySelector(".lives").textContent = lives;
			}
		} else if (lives == 0) {
			document.querySelector(".message").textContent = "‼ Game Over";
		}
	};
	document.querySelector(".check").addEventListener("click", checkGuess);
};

document.querySelector(".again").addEventListener("click", startGame);
startGame();
