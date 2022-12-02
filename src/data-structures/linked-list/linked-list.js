const { defaultEquals } = require('../../utils');
const { Node } = require('./models');

class LinkedList {
	constructor(equalsFn = defaultEquals) {
		// 记录链表的元素数量
		this.count = 0;
		// 头部元素指针
		this.head = undefined;
		// 比较链表中的元素是否相等（可以自定义比较方法）
		this.equalsFn = equalsFn;
	}

	size() {
		return this.count;
	}

	isEmpty() {
		return this.size() === 0;
	}

	getHead() {
		return this.head;
	}

	// 获取目标位置的节点
	getNodeAt(index) {
		if (index >= 0 && index < this.count) {
			let current = this.head;
			for (let i = 0; i < index; i++) {
				current = current.next;
			}
			return current;
		}
		return undefined;
	}

	// 返回一个元素的位置
	indexOf(element) {
		let current = this.head;
		for (let i = 0; i < this.count && current != null; i++) {
			if (this.equalsFn(current.element, element)) {
				return i;
			}
			current = current.next;
		}
		return -1;
	}

	/**
	 * 向链表尾部添加一个新元素
	 *
	 * 两种情况：
	 * - 1、链表为空，添加的是第一个元素
	 * - 2、链表不为空，找到最后一个节点，追加新元素
	 */
	push(element) {
		// 创建需要插入的节点
		const node = new Node(element);

		// 链表为空时，直接添加为第一个元素
		if (this.head == null) {
			this.head = node;
		} else {
			// 链表不为空时，按序遍历到最后一个节点，将其指针指向新元素
			let current = this.head;
			while (current.next != null) {
				current = current.next;
			}
			current.next = node;
		}

		this.count++;

		// 注意以上的判断条件：
		// 链表最后一个节点的下一个元素始终是 null 或 undefined
		// this.head == null 等价于 this.head === null || this.head === undefined
		// current.next != null 等价于 current.next !== null && current.next !== undefined
	}

	/**
	 * 向指定位置添加一个元素
	 *
	 * 两种情况：
	 * - 1、添加到第一个位置
	 * - 2、添加到第一个位置之外的其它位置
	 */
	insert(element, index) {
		if (index >= 0 && index <= this.count) {
			const node = new Node(element);
			if (index === 0) {
				node.next = this.head;
				this.head = node;
			} else {
				const previous = this.getNodeAt(index - 1);
				node.next = previous.next;
				previous.next = node;
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
	 * 两种情况：
	 * - 1、移除第一个元素
	 * - 2、移除第一个元素之外的其它元素
	 */
	removeAt(index) {
		// 限制移除的范围
		if (index >= 0 && index < this.count) {
			let current = this.head;

			// 移除第一个元素
			if (index === 0) {
				this.head = current.next;
			} else {
				// 移除第一个元素之外的其它元素
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

	// 从链表中移除元素
	remove(element) {
		const index = this.indexOf(element);
		return this.removeAt(index);
	}

	clear() {
		this.head = undefined;
		this.count = 0;
	}

	toString() {
		if (this.head == null) {
			return '';
		}

		let str = `${this.head.element}`;
		let current = this.head.next;
		for (let i = 1; i < this.count && current != null; i++) {
			str += `,${current.element}`;
			current = current.next;
		}
		return str;
	}
}

module.exports = LinkedList;
