require('mocha');
const { expect } = require('chai');
const LinkedList = require('../../../src/data-structures/linked-list/linked-list');
const { defaultEquals } = require('../../../src/utils');

describe('Linked List', () => {
	let list;
	let min;
	let max;

	beforeEach(() => {
		list = new LinkedList(defaultEquals);
		min = 1;
		max = 3;
	});

	function pushElements() {
		for (let i = min; i <= max; i++) {
			list.push(i);
		}
	}

	function verifyList() {
		let current = list.getHead();

		for (let i = min; i <= max && current; i++) {
			expect(current).to.not.undefined;

			if (current) {
				expect(current.element).to.not.undefined;
				expect(current.element).to.equal(i);

				if (i < max) {
					expect(current.next).to.not.undefined;

					if (current.next) {
						expect(current.next.element).to.equal(i + 1);
					}
				} else {
					expect(current.next).to.undefined;
				}

				current = current.next;
			}
		}
	}

	it('start empty', () => {
		expect(list.size()).to.equal(0);
		expect(list.isEmpty()).to.equal(true);
		expect(list.getHead()).to.undefined;
	});

	/**
	 * size
	 */
	it('return the size', () => {
		expect(list.size()).to.equal(0);

		pushElements();
		expect(list.size()).to.equal(3);

		for (let i = 1; i <= max; i++) {
			list.remove(i);
			expect(list.size()).to.equal(max - i);
		}
	});

	/**
	 * isEmpty
	 */
	it('return is empty', () => {
		expect(list.isEmpty()).to.equal(true);

		pushElements();
		expect(list.isEmpty()).to.equal(false);

		list.clear();
		expect(list.isEmpty()).to.equal(true);
	});

	/**
	 * getHead
	 */
	it('return the head of list', () => {
		expect(list.getHead()).to.undefined;

		list.push(1);
		expect(list.getHead()).to.not.undefined;
		expect(list.getHead().element).to.equal(1);
	});

	/**
	 * getNodeAt
	 */
	it('return element at specific index: invalid position', () => {
		expect(list.getNodeAt(-1)).to.undefined;
		expect(list.getNodeAt(4)).to.undefined;
	});

	it('return element at specific index', () => {
		pushElements();

		let node;

		for (let i = min; i <= max; i++) {
			node = list.getNodeAt(i - 1);
			expect(node).to.not.undefined;

			if (node) {
				expect(node.element).to.equal(i);
			}
		}
	});

	/**
	 * indexOf
	 */
	it('return index of elements', () => {
		pushElements();

		for (let i = min; i <= max; i++) {
			expect(list.indexOf(i)).to.equal(i - 1);
		}

		expect(list.indexOf(min - 2)).to.equal(-1);
		expect(list.indexOf(max + 2)).to.equal(-1);
	});

	/**
	 * push
	 */
	it('push elements', () => {
		pushElements();
		verifyList();
	});

	/**
	 * insert
	 */
	it('insert elements at the invalid position of empty list', () => {
		const element = 1;
		expect(list.insert(element, 1)).to.equal(false);
	});

	it('insert elements at the invalid position of not empty list', () => {
		const element = 1;
		expect(list.insert(element, -1)).to.equal(false);
		expect(list.insert(element, 0)).to.equal(true);
		expect(list.insert(element, 2)).to.equal(false);
	});

	it('insert elements at the first position of empty list', () => {
		const element = 1;
		expect(list.insert(element, 0)).to.equal(true);

		max = 1;
		verifyList();
	});

	it('insert elements at the first position of not empty list', () => {
		let element = 2;
		expect(list.insert(element, 0)).to.equal(true);

		element = 1;
		expect(list.insert(element, 0)).to.equal(true);

		max = 2;
		verifyList();
	});

	it('insert elements at the middle position of list', () => {
		let element = 3;
		expect(list.insert(element, 0)).to.equal(true);

		element = 1;
		expect(list.insert(element, 0)).to.equal(true);

		element = 2;
		expect(list.insert(element, 1)).to.equal(true);

		verifyList();
	});

	it('insert elements at the end position of list', () => {
		max = 5;

		for (let i = 1; i <= max; i++) {
			expect(list.insert(i, i - 1)).to.equal(true);
		}

		verifyList();
	});

	/**
	 * removeAt
	 */
	it('remove element at the invalid position of empty list', () => {
		let index = 0;
		expect(list.removeAt(index)).to.undefined;

		index = 1;
		expect(list.removeAt(index)).to.undefined;
	});

	it('remove element at the invalid position of not empty list', () => {
		pushElements();

		let index = -1;
		expect(list.removeAt(index)).to.undefined;

		index = 5;
		expect(list.removeAt(index)).to.undefined;
	});

	it('remove element at the first position of list', () => {
		pushElements();

		const index = 0;
		expect(list.removeAt(index)).to.equal(1);
		expect(list.removeAt(index)).to.equal(2);

		expect(list.isEmpty()).to.equal(false);

		expect(list.removeAt(index)).to.equal(3);

		expect(list.isEmpty()).to.equal(true);
	});

	it('remove element at the middle position of list', () => {
		max = 5;
		pushElements();

		let index = 2;
		expect(list.removeAt(index)).to.equal(3);

		expect(list.removeAt(index)).to.equal(4);

		index = 1;
		expect(list.removeAt(index)).to.equal(2);

		expect(list.getHead()).to.not.undefined;
		expect(list.getHead().element).to.equal(1);
	});

	it('remove element at the end position of list', () => {
		pushElements();

		let index = 2;
		expect(list.removeAt(index)).to.equal(3);

		index = 1;
		expect(list.removeAt(index)).to.equal(2);

		expect(list.getHead()).to.not.undefined;
		expect(list.getHead().element).to.equal(1);
	});

	/**
	 * remove
	 */
	it('remove invalid elements', () => {
		pushElements();

		let element = -1;
		expect(list.remove(element)).to.undefined;

		element = 5;
		expect(list.remove(element)).to.undefined;
	});

	it('remove valid elements', () => {
		pushElements();

		let element;
		for (let i = min; i <= max; i++) {
			element = list.remove(i);
			expect(element).to.not.undefined;
			expect(element).to.equal(i);
		}
	});

	/**
	 * clear
	 */
	it('clear the list', () => {
		list.clear();
		expect(list.isEmpty()).to.equal(true);

		pushElements();
		expect(list.isEmpty()).to.equal(false);

		list.clear();
		expect(list.isEmpty()).to.equal(true);
	});

	/**
	 * toString
	 */
	it('return string', () => {
		expect(list.toString()).to.equal('');

		class Obj {
			constructor(a, b) {
				this.a = a;
				this.b = b;
			}
			toString() {
				return `${this.a.toString()}:${this.b.toString()}`;
			}
		}

		list.push(new Obj(1, 2));
		expect(list.toString()).to.equal('1:2');

		list.push(new Obj(3, 4));
		expect(list.toString()).to.equal('1:2,3:4');
	});
});
