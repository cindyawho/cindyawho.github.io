let playerTurn = true;
let computerMoveTimeout = 0;

const gameStatus = {
	MORE_MOVES_LEFT: 1,
	HUMAN_WINS: 2,
	COMPUTER_WINS: 3,
	DRAW_GAME: 4
};

window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
	// Setup the click event for the "New game" button
	const newBtn = document.getElementById("newGameButton");
	newBtn.addEventListener("click", newGame);
	// Create click-event handlers for each game board button
	const buttons = getGameBoardButtons();
	for (let button of buttons) {
		button.addEventListener("click", function () { boardButtonClicked(button); });
	}
	// Clear the board
	newGame();
}

// Returns an array of 9 <button> elements that make up the game board. The first 3 
// elements are the top row, the next 3 the middle row, and the last 3 the 
// bottom row. 
function getGameBoardButtons() {
	return document.querySelectorAll("#gameBoard > button");
}

function checkForWinner() {
	const buttons = getGameBoardButtons();
	// Ways to win
	const possibilities = [
		[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
		[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
		[0, 4, 8], [2, 4, 6] // diagonals
	];
	// Check for a winner first
	for (let indices of possibilities) {
		if (buttons[indices[0]].innerHTML !== "" &&
			buttons[indices[0]].innerHTML === buttons[indices[1]].innerHTML &&
			buttons[indices[1]].innerHTML === buttons[indices[2]].innerHTML) {
			// Found a winner
			if (buttons[indices[0]].innerHTML === "X") {
				return gameStatus.HUMAN_WINS;
			}
			else {
				return gameStatus.COMPUTER_WINS;
			}
		}
	}
	// See if any more moves are left
	for (let button of buttons) {
		if (button.innerHTML !== "X" && button.innerHTML !== "O") {
			return gameStatus.MORE_MOVES_LEFT;
		}
	}
	// If no winner and no moves left, then it's a draw
	return gameStatus.DRAW_GAME;
}

function newGame() {
	// TODO: Complete the function
	clearTimeout(computerMoveTimeout); //Implement newGame() Step 1
	computerMoveTimeout = 0;

	const buttons = getGameBoardButtons(); //Implement newGame() Step 2
	for(let button of buttons){ 
		button.innerHTML = "";
		button.classList.remove("x"); 
		button.classList.remove("o");
		button.disabled = false;
	}

	playerTurn = true; //Implement newGame() Step 3

	let turnInfo = document.getElementById("turnInfo"); //Implement newGame() Step 4
	turnInfo.innerHTML = "Your turn";
}

function boardButtonClicked(button) {
	// TODO: Complete the function
	if(playerTurn == true){
		button.innerHTML = "X";
		button.classList.add("x");
		button.disabled = true;
		switchTurn();
	}
}

function switchTurn() {
	// TODO: Complete the function
	let gameStatus = checkForWinner();
	if(gameStatus == 1){ //more moves available
		if(playerTurn == true){
			computerMoveTimeout = setTimeout(makeComputerMove, 1000);
			playerTurn = false;
			turnInfo.innerHTML = "Computer's turn";
		} else if(playerTurn == false){
			playerTurn = true;
			turnInfo.innerHTML = "Your turn";
		}
	}
	else if(gameStatus == 2){ //Human Wins
		playerTurn = false;
		turnInfo.innerHTML = "You win!";
	} 
	else if(gameStatus == 3){ //Computer Wins
		playerTurn = false;
		turnInfo.innerHTML = "Computer wins!";
	}
	else if(gameStatus == 4){ //Draw
		playerTurn = false;
		turnInfo.innerHTML = "Draw game";
	}
}

function makeComputerMove() {
	// TODO: Complete the function
	const buttons = getGameBoardButtons(); 
	const availableButtons = [];
	let i = 0;
	for(let button of buttons){
		if(button.disabled == false){
			availableButtons.push(button);
		}
	}

	let chosenButton = availableButtons[(Math.floor(Math.random()*availableButtons.length))];

	chosenButton.innerHTML = "O";
	chosenButton.classList.add("o");
	chosenButton.disabled = "true";

	switchTurn();
}