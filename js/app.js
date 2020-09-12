let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const userScore_div = document.getElementById('user-score');
const compScore_div = document.getElementById('comp-score');
const result_p = document.querySelector('.result>p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissor_div = document.getElementById('s');
const playerHand = document.querySelector('.player-hand');
const computerHand = document.querySelector('.computer-hand');

// this function is used to get the word from the letter
function convert(letter) {
	return letter == 'r' ? 'Rock' : letter == 'p' ? 'Paper' : 'Scissors';
}

// this function is called when the user wins
function win(userChoice, compChoice) {
	userScore++;
	userScore_span.innerHTML = userScore;
	result_p.innerHTML = `${convert(userChoice)} beats ${convert(compChoice)}, You win!`;
}

// this function is called when the user loses
function lose(userChoice, compChoice) {
	compScore++;
	compScore_span.innerHTML = compScore;
	result_p.innerHTML = `${convert(userChoice)} loses to ${convert(compChoice)}, You lose.`;
}

// this function is called when its a tie
function draw() {
	result_p.innerHTML = "It's a Tie!";
}

// this function is used to generate a random choice
function getComputerChoice() {
	const choices = [ 'r', 'p', 's' ];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

// this function is called when the user selects one of the options
function game(userChoice, compChoice) {
	console.log(`User choice : ${userChoice}\nComputer choice: ${compChoice} `);
	switch (userChoice + compChoice) {
		case 'rs':
		case 'pr':
		case 'sp':
			win(userChoice, compChoice);
			break;
		case 'rp':
		case 'ps':
		case 'sr':
			lose(userChoice, compChoice);
			break;
		case 'rr':
		case 'pp':
		case 'ss':
			draw();
			break;
	}
}

// this is the main function
function main() {
	const playerHand = document.querySelector('.player-hand');
	const computerHand = document.querySelector('.computer-hand');
	const hands = document.querySelectorAll('.hands img');

	hands.forEach((hand) => {
		hand.addEventListener('animationend', function() {
			this.style.animation = '';
		});
	});

	rock_div.addEventListener('click', () => {
		const compChoice = getComputerChoice();
		setTimeout(() => {
			game('r', compChoice);
			//Update Images
			playerHand.src = `./img/Rock.png`;
			computerHand.src = `./img/${convert(compChoice)}.png`;
		}, 2000);
		//Animation
		playerHand.style.animation = 'shakePlayer 2s ease';
		computerHand.style.animation = 'shakeComputer 2s ease';
	});

	paper_div.addEventListener('click', () => {
		const compChoice = getComputerChoice();
		setTimeout(() => {
			game('p', compChoice);
			//Update Images
			playerHand.src = `./img/Paper.png`;
			computerHand.src = `./img/${convert(compChoice)}.png`;
		}, 2000);
		//Animation
		playerHand.style.animation = 'shakePlayer 2s ease';
		computerHand.style.animation = 'shakeComputer 2s ease';
	});

	scissor_div.addEventListener('click', () => {
		const compChoice = getComputerChoice();
		setTimeout(() => {
			game('s', compChoice);
			//Update Images
			playerHand.src = `./img/Scissors.png`;
			computerHand.src = `./img/${convert(compChoice)}.png`;
		}, 2000);
		//Animation
		playerHand.style.animation = 'shakePlayer 2s ease';
		computerHand.style.animation = 'shakeComputer 2s ease';
	});
}

//calling the main function
main();
