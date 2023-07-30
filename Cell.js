class Cell {
	#cellElement;
	#row;
	#col;

	constructor(gameboardElement, row, col) {
		this.#row = row;
		this.#col = col;

		this.#cellElement = document.createElement("div");
		this.#cellElement.classList.add("cell");

		if (row % 3 === 0) this.#cellElement.classList.add("border-top");
		if (col % 3 === 0) this.#cellElement.classList.add("border-left");
		if (row === 8) this.#cellElement.classList.add("border-bottom");
		if (col === 8) this.#cellElement.classList.add("border-right");

		gameboardElement.appendChild(this.#cellElement);
	}

	get cellElement() {
		return this.#cellElement;
	}
}

export default Cell;
