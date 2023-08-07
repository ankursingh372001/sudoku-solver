import GameBoard from "./GameBoard.js";

const clearBtn = document.querySelector("#clear-btn");
const solveBtn = document.querySelector("#solve-btn");

const gameBoard = new GameBoard();
clearBtn.addEventListener("click", () => gameBoard.clear());
solveBtn.addEventListener("click", () => gameBoard.solveSudoku());

window.addEventListener("keydown", e => {
	if (e.keyCode >= 49 && e.keyCode <= 57) {
		gameBoard.fillActiveCell(e.keyCode - 48);
	} else if (e.keyCode === 8) {
		gameBoard.clearFilledCell();
	}
});
