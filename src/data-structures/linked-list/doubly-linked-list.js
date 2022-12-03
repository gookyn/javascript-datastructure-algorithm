const LinkedList = require('./linked-list');
const { defaultEquals } = require('../../utils');
const { DoublyNode } = require('./models');

class DoublyLinedList extends LinkedList {
	constructor(equalsFn = defaultEquals) {
		super(equalsFn);
		this.tail = undefined;
	}

	getTail() {
		return this.tail;
	}

	/**
	 * 向链表尾部添加一个新元素
	 *
	 * 两种情况：
	 * - 1、链表为空，添加的是第一个元素
	 * - 2、链表不为空，找到最后一个节点，追加新元素
	 */
	push(element) {
		const node = new DoublyNode(element);
		if (this.head == null) {
			this.head = node;
			this.tail = node;
		} else {
			const current = this.getNodeAt(this.count - 1);
			current.next = node;
			node.prev = current;
			this.tail = node;
		}
		this.count++;
	}

	/**
	 * 向指定位置添加一个元素
	 *
	 * 三种情况：
	 * - 1、添加到第一个位置
	 *    - 链表为空
	 *    - 链表不为空
	 * - 2、添加到最后一个位置
	 * - 3、添加到中间一个位置
	 */
	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			const node = new DoublyNode(element);
			let current = this.head;

			if (index === 0) {
				if (this.head == null) {
					this.head = node;
					this.tail = node;
				} else {
					node.next = this.head;
					current.prev = node;
					this.head = node;
				}
			} else if (index === this.count) {
				current = this.tail;
				current.next = node;
				node.prev = current;
				this.tail = node;
			} else {
				const previous = this.getNodeAt(index - 1);
				current = previous.next;
				previous.next = node;
				node.prev = previous;
				node.next = current;
				current.prev = node;
			}
			this.count++;
			return true;
		} else {
			return false;
		}
	}

	/**
	 * 从指定位置移除一个元素
	 *
	 * 三种情况：
	 * - 1、移除第一个元素
	 *    - 链表只有一项
	 *    - 链表有多项
	 * - 2、移除最后一个元素
	 * - 3、移除中间一个元素
	 */
	removeAt(index) {
		if (index >= 0 && index < this.count) {
			let current = this.head;
			if (index === 0) {
				this.head = current.next;
				if (this.count === 1) {
					this.tail = undefined;
				} else {
					current.next.prev = undefined;
				}
			} else if (index === this.count - 1) {
				current = this.getTail();
				current.prev.next = undefined;
				this.tail = current.prev;
			} else {
				const previous = this.getNodeAt(index - 1);
				current = previous.next;
				previous.next = current.next;
				current.next.prev = previous;
			}
			this.count--;
			return current.element;
		} else {
			return undefined;
		}
	}

	clear() {
		super.clear();
		this.tail = undefined;
	}
}

module.exports = DoublyLinedList;
