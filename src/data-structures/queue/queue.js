class Queue {
	constructor() {
		// 用对象来保存队列里的元素
		this.items = {};
		// 记录队首元素索引
		this.frontIndex = 0;
		// 记录队尾元素索引
		this.rearIndex = 0;
	}

	size() {
		return this.rearIndex - this.frontIndex;
	}

	isEmpty() {
		return this.size() === 0;
	}

	enqueue(element) {
		this.items[this.rearIndex] = element;
		this.rearIndex++;
	}

	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}

		const result = this.items[this.frontIndex];
		delete this.items[this.frontIndex];
		this.frontIndex++;
		return result;
	}

	peek() {
		if (this.isEmpty()) {
			return undefined;
		}

		return this.items[this.frontIndex];
	}

	clear() {
		this.items = {};
		this.frontIndex = 0;
		this.rearIndex = 0;
	}

	toString() {
		if (this.isEmpty()) {
			return '';
		}

		let str = `${this.items[this.frontIndex]}`;
		for (let i = this.frontIndex + 1; i < this.rearIndex; i++) {
			str += `,${this.items[i]}`;
		}
		return str;
	}
}

module.exports = Queue;
