class ArrayStack {
	constructor() {
		// 用数组来保存栈里的元素
		this.items = [];
	}

	size() {
		return this.items.length;
	}

	isEmpty() {
		return this.size() === 0;
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	clear() {
		this.items = [];
	}

	toString() {
		return this.items.toString();
	}
}

module.exports = ArrayStack;
