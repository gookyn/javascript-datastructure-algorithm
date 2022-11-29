class Queue {
	constructor() {
		// 用对象来保存队列里的元素
		this.items = {};
		// 头指针，若队列不为空，指向队首元素
		this.front = 0;
		// 尾指针，若队列不为空，指向队列尾元素的下一个位置
		this.rear = 0;
	}

	size() {
		return this.rear - this.front;
	}

	isEmpty() {
		return this.size() === 0;
	}

	enqueue(element) {
		this.items[this.rear] = element;
		this.rear++;
	}

	dequeue() {
		if (this.isEmpty()) {
			return undefined;
		}

		const result = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return result;
	}

	peek() {
		if (this.isEmpty()) {
			return undefined;
		}

		return this.items[this.front];
	}

	clear() {
		this.items = {};
		this.front = 0;
		this.rear = 0;
	}

	toString() {
		if (this.isEmpty()) {
			return '';
		}

		let str = `${this.items[this.front]}`;
		for (let i = this.front + 1; i < this.rear; i++) {
			str += `,${this.items[i]}`;
		}
		return str;
	}
}

module.exports = Queue;
