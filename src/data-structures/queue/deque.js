class Deque {
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

	// 向队尾添加元素
	addRear(element) {
		this.items[this.rear] = element;
		this.rear++;
	}

	/**
	 * 向队首添加元素
	 *
	 * 三种情况：
	 * - 1、队列为空，直接将新元素添加到队尾
	 * - 2、队首已经移除过元素，将队首指针减 1 并添加新元素
	 * - 3、队列不为空并且队首没有移除过元素，则将所有元素向后移动一位，并将新元素添加到队首
	 */
	addFront(element) {
		if (this.isEmpty()) {
			this.addRear(element);
		} else if (this.front > 0) {
			this.front--;
			this.items[this.front] = element;
		} else {
			for (let i = this.rear; i >= 0; i--) {
				this.items[i + 1] = this.items[i];
			}
			this.front = 0;
			this.rear++;
			this.items[0] = element;
		}
	}

	removeRear() {
		if (this.isEmpty()) {
			return undefined;
		}

		this.rear--;
		const result = this.items[this.rear];
		delete this.items[this.rear];
		return result;
	}

	removeFront() {
		if (this.isEmpty()) {
			return undefined;
		}

		const result = this.items[this.front];
		delete this.items[this.front];
		this.front++;
		return result;
	}

	peekRear() {
		if (this.isEmpty()) {
			return undefined;
		}

		return this.items[this.rear - 1];
	}

	peekFront() {
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

module.exports = Deque;
