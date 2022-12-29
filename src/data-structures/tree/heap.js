const {
	defaultCompare,
	COMPARE,
	swap,
	reverseCompare,
} = require('../../utils');

class MinHeap {
	constructor(compareFn = defaultCompare) {
		this.compareFn = compareFn;
		this.heap = [];
	}

	size() {
		return this.heap.length;
	}

	isEmpty() {
		return this.size() === 0;
	}

	findMinimum() {
		return this.isEmpty() ? undefined : this.heap[0];
	}

	getLeftIndex(index) {
		return 2 * index + 1;
	}

	getRightIndex(index) {
		return 2 * index + 2;
	}

	getParentIndex(index) {
		if (index === 0) {
			return undefined;
		}
		return Math.floor((index - 1) / 2);
	}

	insert(value) {
		if (value == null) {
			return false;
		}

		this.heap.push(value);
		this.siftUp(this.heap.length - 1);
		return true;
	}

	siftUp(index) {
		let parent = this.getParentIndex(index);
		while (
			index > 0 &&
			this.compareFn(this.heap[parent], this.heap[index]) ===
				COMPARE.BIGGER_THAN
		) {
			swap(this.heap, parent, index);
			index = parent;
			parent = this.getParentIndex(index);
		}
	}

	extract() {
		if (this.isEmpty()) {
			return undefined;
		}
		if (this.size() === 1) {
			return this.heap.shift();
		}
		const removedValue = this.heap[0];
		this.heap[0] = this.heap.pop();
		this.siftDown(0);
		return removedValue;
	}

	siftDown(index) {
		let element = index;
		const left = this.getLeftIndex(index);
		const right = this.getRightIndex(index);
		const size = this.size();

		if (
			left < size &&
			this.compareFn(this.heap[element], this.heap[left]) ===
				COMPARE.BIGGER_THAN
		) {
			element = left;
		}

		if (
			right < size &&
			this.compareFn(this.heap[element], this.heap[right]) ===
				COMPARE.BIGGER_THAN
		) {
			element = right;
		}

		if (index !== element) {
			swap(this.heap, index, element);
			this.siftDown(element);
		}
	}

	clear() {
		this.heap = [];
	}

	getAsArray() {
		return this.heap;
	}
}

class MaxHeap extends MinHeap {
	constructor(compareFn = defaultCompare) {
		super(compareFn);
		this.compareFn = reverseCompare(compareFn);
	}
}

module.exports = { MinHeap, MaxHeap };
