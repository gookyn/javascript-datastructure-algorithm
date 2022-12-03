const DoublyLinkedList = require('../linked-list/doubly-linked-list');

class LinkedListStack {
	constructor() {
		this.items = new DoublyLinkedList();
	}

	size() {
		return this.items.size();
	}

	isEmpty() {
		return this.items.isEmpty();
	}

	push(element) {
		this.items.push(element);
	}

	pop() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items.removeAt(this.size() - 1);
	}

	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items.getNodeAt(this.size() - 1).element;
	}

	clear() {
		this.items.clear();
	}

	toString() {
		return this.items.toString();
	}
}

module.exports = LinkedListStack;
