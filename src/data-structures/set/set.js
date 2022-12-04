class Set {
	constructor() {
		this.items = {};
	}

	size() {
		// ES6
		// return Object.keys(this.items).length;

		// ES5
		let count = 0;
		for (let key in this.items) {
			if (this.items.hasOwnProperty(key)) {
				count++;
			}
		}
		return count;
	}

	isEmpty() {
		return this.size() === 0;
	}

	has(element) {
		// return element in this.items;
		return Object.prototype.hasOwnProperty.call(this.items, element);
	}

	add(element) {
		if (!this.has(element)) {
			this.items[element] = element;
			return true;
		}
		return false;
	}

	delete(element) {
		if (this.has(element)) {
			delete this.items[element];
			return true;
		}
		return false;
	}

	clear() {
		this.items = {};
	}

	values() {
		// ES2017
		// return Object.values(this.items);

		// ES5
		let values = [];
		for (let key in this.items) {
			if (this.items.hasOwnProperty(key)) {
				values.push(this.items[key]);
			}
		}
		return values;
	}

	toString() {
		if (this.isEmpty()) {
			return '';
		}

		const values = this.values();
		let str = `${values[0].toString()}`;
		for (let i = 1; i < this.size(); i++) {
			str += `,${values[i].toString()}`;
		}
		return str;
	}
}

module.exports = Set;
