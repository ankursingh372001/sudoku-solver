import GameBoard from "./GameBoard.js";

const gameBoardObject = new GameBoard();

// const Board = document.querySelector("#board");
// const solveBtn = document.querySelector("button[type='submit']");

// let cells = [];
// const board = [[], [], [], [], [], [], [], [], []];

// initialize();

// function initialize() {
// 	for (let r = 0; r < 9; ++r) {
// 		for (let c = 0; c < 9; ++c) {
// 			// create a cell and set its class and attribute values
// 			const cell = document.createElement("div");
// 			cell.classList.add("cell");
// 			cell.setAttribute("tabIndex", `${r * 9 + c}`);
// 			cell.setAttribute("data-row", r);
// 			cell.setAttribute("data-col", c);

// 			if (r % 3 === 0) cell.classList.add("border-top");
// 			else if (r === 8) cell.classList.add("border-bottom");

// 			if (c % 3 === 0) cell.classList.add("border-left");
// 			else if (c === 8) cell.classList.add("border-right");

// 			Board.appendChild(cell);
// 		}
// 	}

// 	cells = Array.from(Board.querySelectorAll(".cell"));

// 	cells[0].classList.add("active");
// }

// window.addEventListener("keydown", e => {
// 	const cell = Board.querySelector(".active");

// 	let r = parseInt(cell.getAttribute("data-row"));
// 	let c = parseInt(cell.getAttribute("data-col"));
// 	let t = r * 9 + c;

// 	if (e.key == "ArrowRight") {
// 		if (c < 8) {
// 			cells[t].classList.remove("active");
// 			cells[t + 1].classList.add("active");
// 		}
// 	} else if (e.key == "ArrowLeft") {
// 		if (c > 0) {
// 			cells[t].classList.remove("active");
// 			cells[t - 1].classList.add("active");
// 		}
// 	} else if (e.key == "ArrowDown") {
// 		if (r < 8) {
// 			cells[t].classList.remove("active");
// 			cells[t + 9].classList.add("active");
// 		}
// 	} else if (e.key == "ArrowUp") {
// 		if (r > 0) {
// 			cells[t].classList.remove("active");
// 			cells[t - 9].classList.add("active");
// 		}
// 	} else if (parseInt(e.key) >= 1 && parseInt(e.key) <= 9) {
// 		cell.textContent = e.key;
// 	} else if (e.key == "Backspace") {
// 		cell.textContent = "";
// 	}
// });

// solveBtn.addEventListener("click", () => {
// 	for (let r = 0; r < 9; ++r) {
// 		for (let c = 0; c < 9; ++c) {
// 			if (cells[r * 9 + c].textContent) {
// 				board[r][c] = +cells[r * 9 + c].textContent;
// 			} else {
// 				cells[r * 9 + c].style.color = "red";
// 				board[r][c] = 0;
// 			}
// 		}
// 	}

// 	if (solveSudoko()) {
// 		cells.forEach(cell => (cell.textContent = board[+cell.getAttribute("data-row")][+cell.getAttribute("data-col")]));
// 	} else {
// 		alert("please enter valid sudoko");
// 	}
// });

// function solveSudoko(r = 0, c = 0) {
// 	if (r === 9) return true;

// 	if (board[r][c] === 0) {
// 		for (let key = 1; key <= 9; ++key) {
// 			let flag = true;

// 			for (let i = 0; i < 9; ++i) if (board[i][c] === key) flag = false;
// 			for (let j = 0; j < 9; ++j) if (board[r][j] === key) flag = false;

// 			let R = Math.floor(r / 3) * 3;
// 			let C = Math.floor(c / 3) * 3;

// 			for (let i = 0; i < 3; ++i) {
// 				for (let j = 0; j < 3; ++j) {
// 					if (board[R + i][C + j] === key) {
// 						flag = false;
// 					}
// 				}
// 			}

// 			if (flag) {
// 				board[r][c] = key;
// 				if (solveSudoko(r + Math.floor((c + 1) / 9), (c + 1) % 9)) return true;
// 				board[r][c] = 0;
// 			}
// 		}

// 		return false;
// 	}

// 	return solveSudoko(r + Math.floor((c + 1) / 9), (c + 1) % 9);
// }
