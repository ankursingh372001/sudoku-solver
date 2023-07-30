import Cell from "./Cell.js";

class GameBoard {
	#gameboardElement;
	#gameboardSize;
	#cells;
	#currentRow;
	#currentCol;

	constructor() {
		this.#gameboardElement = document.querySelector("#game-board");
		this.#gameboardSize = 9;

		// create cell elements and link it with its cell object
		this.#cells = new Array(this.#gameboardSize);
		for (let r = 0; r < this.#gameboardSize; ++r) {
			this.#cells[r] = [];

			for (let c = 0; c < this.#gameboardSize; ++c) {
				this.#cells[r].push(new Cell(this.#gameboardElement, r, c));
			}
		}

		this.#currentRow = 0;
		this.#currentCol = 0;
		this.#cells[0][0].cellElement.setAttribute("style", "border: 1px solid red;");

		for (let r = 0; r < this.#gameboardSize; ++r) {
			for (let c = 0; c < this.#gameboardSize; ++c) {
				this.#cells[r][c].cellElement.addEventListener("click", e => {
					const prevCellElement = this.#cells[this.#currentRow][this.#currentCol].cellElement;
					if (prevCellElement.textContext === "") {
						prevCellElement.setAttribute("style", "background: none; color: #000;");
					}

					this.#currentRow = r;
					this.#currentCol = c;
					e.target.setAttribute("style", "background: red; color: #fff;");
					// e.target.textContent = "9";
					// e.target.addEventListener("keydown", () => {});
				});
			}
		}
	}
}

export default GameBoard;
