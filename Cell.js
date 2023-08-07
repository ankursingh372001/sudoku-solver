class Cell {
	#cellElement;
	#row;
	#col;
	#data;

	constructor(row, col) {
		this.#row = row;
		this.#col = col;
		this.#data = 0;

		this.#cellElement = document.createElement("div");
		this.#cellElement.classList.add("cell");

		if (row % 3 === 0) this.#cellElement.classList.add("border-top");
		if (col % 3 === 0) this.#cellElement.classList.add("border-left");
		if (row === 8) this.#cellElement.classList.add("border-bottom");
		if (col === 8) this.#cellElement.classList.add("border-right");
	}

	get cellElement() {
		return this.#cellElement;
	}

	get row() {
		return this.#row;
	}

	get col() {
		return this.#col;
	}

	get data() {
		return this.#data;
	}

	set data(value) {
		this.#data = value;
		this.#cellElement.textContent = value;
	}
}

export default Cell;
