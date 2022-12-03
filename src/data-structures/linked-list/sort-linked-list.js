const { defaultEquals, defaultCompare, COMPARE } = require('../../utils');
const LinkedList = require('./linked-list');

class SortLinkedList extends LinkedList {
	constructor(equalsFn = defaultEquals, compareFn = defaultCompare) {
		super(equalsFn);
		this.equalsFn = equalsFn;
		this.compareFn = compareFn;
	}

	push(element) {
		if (this.isEmpty()) {
			return super.push(element);
		}

		const position = this.getNextSortedElementIndex(element);
		super.insert(element, position);
	}

	insert(element, index = 0) {
		if (this.isEmpty()) {
			return super.insert(element, 0);
		}

		const position = this.getNextSortedElementIndex(element);
		return super.insert(element, position);
	}

	getNextSortedElementIndex(element) {
		let current = this.head;
		let i = 0;

		for (; i < this.size() && current; i++) {
			if (this.compareFn(element, current.element) === COMPARE.LESS_THAN) {
				return i;
			}
			current = current.next;
		}

		return i;
	}
}

module.exports = SortLinkedList;
