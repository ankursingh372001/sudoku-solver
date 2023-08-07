import Cell from "./Cell.js";

class GameBoard {
	#gameboardElement;
	#gameboardSize;
	#cells;

	constructor() {
		this.#gameboardElement = document.querySelector("#game-board");
		this.#gameboardSize = 9;
		this.createCells();
	}

	createCells() {
		const n = this.#gameboardSize;
		const cells = new Array(n);

		for (let r = 0; r < n; ++r) {
			cells[r] = new Array(n);

			for (let c = 0; c < n; ++c) {
				const cell = new Cell(r, c);
				this.#gameboardElement.appendChild(cell.cellElement);
				cells[r][c] = cell;
			}
		}

		for (let r = 0; r < n; ++r) {
			for (let c = 0; c < n; ++c) {
				cells[r][c].cellElement.addEventListener("click", e => {
					for (let i = 0; i < n; ++i) {
						for (let j = 0; j < n; ++j) {
							cells[i][j].cellElement.classList.remove("active");
						}
					}

					e.target.classList.add("active");
				});
			}
		}

		this.#cells = cells;
	}

	clear() {
		const n = this.#gameboardSize;
		const cells = this.#cells;

		for (let r = 0; r < n; ++r) {
			for (let c = 0; c < n; ++c) {
				cells[r][c].cellElement.textContent = "";
				cells[r][c].cellElement.classList.remove("active");
				cells[r][c].cellElement.classList.remove("filled");
			}
		}
	}

	solveSudoku() {
		const n = this.#gameboardSize;
		const cells = this.#cells;
		const board = new Array(n);

		for (let r = 0; r < n; ++r) {
			board[r] = new Array(n);

			for (let c = 0; c < n; ++c) {
				board[r][c] = parseInt(cells[r][c].data);
			}
		}

		if (this.solveSudokuUtil(board, 0, 0)) {
			for (let r = 0; r < n; ++r) {
				for (let c = 0; c < n; ++c) {
					this.#cells[r][c].cellElement.classList.remove("active");

					if (!this.#cells[r][c].cellElement.classList.contains("filled")) {
						this.#cells[r][c].cellElement.textContent = board[r][c];
					}
				}
			}
		} else {
			alert("Wrong Input");
		}
	}

	solveSudokuUtil(board, r, c) {
		if (r == 9) {
			return true;
		}

		if (board[r][c] !== 0) {
			return this.solveSudokuUtil(board, r + Math.floor((c + 1) / 9), (c + 1) % 9);
		}

		for (let value = 1; value <= 9; ++value) {
			if (this.isValid(board, r, c, value)) {
				board[r][c] = value;

				if (this.solveSudokuUtil(board, r + Math.floor((c + 1) / 9), (c + 1) % 9)) {
					return true;
				}

				board[r][c] = 0;
			}
		}

		return false;
	}

	isValid(board, row, col, value) {
		const n = this.#gameboardSize;

		for (let c = 0; c < n; ++c) {
			if (board[row][c] == value) {
				return false;
			}
		}

		for (let r = 0; r < n; ++r) {
			if (board[r][col] == value) {
				return false;
			}
		}

		for (let i = 0; i < 3; ++i) {
			for (let j = 0; j < 3; ++j) {
				let r = Math.floor(row / 3) * 3 + i;
				let c = Math.floor(col / 3) * 3 + j;

				if (board[r][c] == value) {
					return false;
				}
			}
		}

		return true;
	}

	fillActiveCell(value) {
		const n = this.#gameboardSize;
		const cells = this.#cells;

		for (let r = 0; r < n; ++r) {
			for (let c = 0; c < n; ++c) {
				if (cells[r][c].cellElement.classList.contains("active")) {
					cells[r][c].data = value;
					cells[r][c].cellElement.textContent = value;
					cells[r][c].cellElement.classList.add("filled");
				}
			}
		}
	}

	clearFilledCell() {
		const n = this.#gameboardSize;
		const cells = this.#cells;

		console.log("hello world");

		for (let r = 0; r < n; ++r) {
			for (let c = 0; c < n; ++c) {
				if (cells[r][c].cellElement.classList.contains("active")) {
					cells[r][c].cellElement.textContent = "";
					cells[r][c].cellElement.classList.remove("filled");
				}
			}
		}
	}
}

export default GameBoard;
