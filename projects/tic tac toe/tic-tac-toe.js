// declaring & defining global variables //

let origBoard;
const cells = $(".cell"),
	huPlayer = 'O',
	aiPlayer = 'X',
	winCombos = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[6, 4, 2]
];

 window.getComputedStyle(document.documentElement).getPropertyValue('--default-light');



function startGame() {
	origBoard = Array.from(Array(9).keys());  // origBoard is now an array containing 9 indexes
	for (var i = 0; i < cells.length; i++) {
		/* completely reset all cells */
		cells[i].innerText = '';
		cells[i].style.removeProperty('background-color');
		cells[i].addEventListener('click', turnClick, false);
	}
};



function turnClick(square) {
	if (typeof origBoard[square.target.id] == 'number') {  // the above event listener will now keep track of id of the clicked cell; if id = number, it has not yet been played in
		turn(square.target.id, huPlayer);
		if (!checkWin(origBoard, huPlayer) && !checkTie()) {
			setTimeout(() =>
			{turn(bestSpot(), aiPlayer); },600) // this is the CPU turn, with a .6 sec delay
		}
	}
};


function turn(squareId, player) {
	origBoard[squareId] = player;
	document.getElementById(squareId).innerHTML = '<p>' + player + '</p>';  // inserts the player token into the clicked square
	
	let gameWon = checkWin(origBoard, player)  // runs at the end of each turn to check for a win
	if (gameWon) {
		gameOver(gameWon)
	};
};

/* CHECK FOR A WIN OR TIE */


function emptySquares() {
	return origBoard.filter(s => typeof s == 'number');
};

function checkTie() {
	if (emptySquares().length == 0) {  // if there are no empty squares and no one has won, it must be a tie 
		for (var i = 0; i < cells.length; i++) {
			cells[i].style.backgroundColor = window.getComputedStyle(document.documentElement).getPropertyValue('--default-light');
			cells[i].removeEventListener('click', turnClick, false);
		}
		return true;
	}
	return false;
};

function checkWin(board, player) {
	let plays = board.reduce((a, e, i) =>  // reduceS array to single value; a = accumulator, e = element, i = index
		(e === player) ? a.concat(i) : a, []);  // if a player has made a move in the space, it is added to the accumulator
	let gameWon = null;
	for (let [index, win] of winCombos.entries()) {  // specifies every win combo + its component index values
		if (win.every(elem => plays.indexOf(elem) > -1)) { // checks to see if the player has made a full win moveset in any of the win-combos
			gameWon = {index: index, player: player};  // clarifies which win combo was used, and which player won
			break;
		}
	}
	return gameWon;
};


/* GAMEOVER */ 

function gameOver(gameWon) {
	for (let index of winCombos[gameWon.index]) {  // captures all indexes of winning combo
		document.getElementById(index).style.backgroundColor =
			gameWon.player == huPlayer ? "blue" : "red";
	}
	for (let i = 0; i < cells.length; i++) {
		cells[i].removeEventListener('click', turnClick, false);  // remove event listeners to prevent further input
	};
};


// hard reset //

function hardReset(){
	location.reload()
}

// CPU //

function bestSpot() {
	return minimax(origBoard, aiPlayer).index;  // returns the index the CPU should play in
};


/* MINIMAX ALGORITHM - a recursive function (repeats through each available spot), returns a value based on a terminal state to evaluate those values and returns the best one */ 

function minimax(newBoard, player) {
	var availSpots = emptySquares(newBoard);  // remaining empty spaces

	if (checkWin(newBoard, huPlayer)) {
		return {score: -10};  // this indicates a negative outcome
	} else if (checkWin(newBoard, aiPlayer)) {
		return {score: 10};  // this indicates a good outcome
	} else if (availSpots.length === 0) {
		return {score: 0};
	}

	/* PLAY THROUGH THEORETICAL MOVES & DETERMINE SCORE FOR EACH MOVE */

	var moves = [];
	for (var i = 0; i < availSpots.length; i++) {
		var move = {};
		move.index = newBoard[availSpots[i]];   //populates the move object with indexed data from the available spots array
		newBoard[availSpots[i]] = player;

		if (player == aiPlayer) {
			var result = minimax(newBoard, huPlayer);
			move.score = result.score;  // the score of the board is stored in the move object once a terminal state is reached
		} else {
			var result = minimax(newBoard, aiPlayer);
			move.score = result.score;  // recursion until a score one level upward is reached
		}

		newBoard[availSpots[i]] = move.index;

		moves.push(move);
	}

	/* EVALUATE THEORETICAL MOVE SCORES */

	var bestMove;
	if(player === aiPlayer) {
		var bestScore = -10000;  // the algorithm now searches for a score higher than this to validate it as the best move for the CPU
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score > bestScore) {  // ensures only the highest score will be used to determine the CPU move
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	} else {
		var bestScore = 10000;  // for the player move, the algorithm tracks the potential move with the lowest score 
		for(var i = 0; i < moves.length; i++) {
			if (moves[i].score < bestScore) {  // only the very lowest score is taken into account
				bestScore = moves[i].score;
				bestMove = i;
			}
		}
	}

	return moves[bestMove];
};

startGame();