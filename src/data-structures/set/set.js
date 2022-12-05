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

	// 并集
	union(otherSet) {
		const unionSet = new Set();
		this.values().forEach(item => unionSet.add(item));
		otherSet.values().forEach(item => unionSet.add(item));
		return unionSet;
	}

	// 交集
	intersection(otherSet) {
		const intersectionSet = new Set();

		let smallerSet = this;
		let biggerSet = otherSet;
		if (this.size() > otherSet.size()) {
			smallerSet = otherSet;
			biggerSet = this;
		}

		// 迭代长度较小的集合
		smallerSet.values().forEach(item => {
			if (biggerSet.has(item)) {
				intersectionSet.add(item);
			}
		});

		return intersectionSet;
	}

	// 差集
	difference(otherSet) {
		const differenceSet = new Set();
		this.values().forEach(item => {
			if (!otherSet.has(item)) {
				differenceSet.add(item);
			}
		});
		return differenceSet;
	}

	// 当前集合是否为另一个集合的子集
	isSubsetOf(otherSet) {
		if (this.size() > otherSet.size()) {
			return false;
		}

		return this.values().every(item => otherSet.has(item));
	}

	// 使用 ES6 扩展运算符
	// this 需要可迭代
	// union(otherSet) {
	// 	return new Set([...this, ...otherSet]);
	// }

	// intersection(otherSet) {
	// 	return new Set([...this].filter(item => otherSet.has(item)));
	// }

	// difference(otherSet) {
	// 	return new Set([...this].filter(item => !otherSet.has(item)));
	// }

	// isSubsetOf(otherSet) {
	// 	return [...this].every(item => otherSet.has(item));
	// }
}

module.exports = Set;
