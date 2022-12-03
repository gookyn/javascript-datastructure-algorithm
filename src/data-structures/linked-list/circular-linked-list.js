const { defaultEquals } = require('../../utils');
const LinkedList = require('./linked-list');
const { Node } = require('./models');

class CircularLinkedList extends LinkedList {
	constructor(equalsFn = defaultEquals) {
		super(equalsFn);
	}

	/**
	 * 向链表尾部添加一个新元素
	 *
	 * 两种情况：
	 * - 1、链表为空，添加的是第一个元素
	 * - 2、链表不为空，找到最后一个节点，追加新元素
	 */
	push(element) {
		const node = new Node(element);

		if (this.count === 0) {
			this.head = node;
			node.next = this.head;
		} else {
			const last = this.getNodeAt(this.count - 1);
			last.next = node;
			node.next = this.head;
		}

		this.count++;
	}

	/**
	 * 向指定位置添加一个元素
	 *
	 * 两种情况：
	 * - 1、添加到第一个位置
	 *    - 链表为空
	 *    - 链表不为空
	 * - 2、添加到第一个位置之外的其它位置
	 */
	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			const node = new Node(element);
			let current = this.head;

			if (index === 0) {
				if (this.head == null) {
					this.head = node;
					node.next = this.head;
				} else {
					node.next = current;
					const last = this.getNodeAt(this.count - 1);
					this.head = node;
					last.next = this.head;
				}
			} else {
				const previous = this.getNodeAt(index - 1);
				node.next = previous.next;
				previous.next = node;
			}

			this.count++;
			return true;
		}
		return false;
	}

	/**
	 * 从指定位置移除一个元素
	 *
	 * 两种情况：
	 * - 1、移除第一个元素
	 *    - 链表中只有一个元素
	 *    - 链表中有多个元素
	 * - 2、移除第一个元素之外的其它元素
	 */
	removeAt(index) {
		if (index >= 0 && index < this.count) {
			let current = this.head;

			if (index === 0) {
				if (this.count === 1) {
					this.head = undefined;
				} else {
					this.head = current.next;
					const last = this.getNodeAt(this.count - 1);
					last.next = this.head;
				}
			} else {
				const previous = this.getNodeAt(index - 1);
				current = previous.next;
				previous.next = current.next;
			}

			this.count--;
			return current.element;
		} else {
			return undefined;
		}
	}
}

module.exports = CircularLinkedList;
