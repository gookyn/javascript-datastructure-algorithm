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
			expect(current).to.not.be.an('undefined');

			if (current) {
				expect(current.element).to.not.be.an('undefined');
				expect(current.element).to.equals(i);

				if (i < max) {
					expect(current.next).to.not.be.an('undefined');

					if (current.next) {
						expect(current.next.element).to.equals(i + 1);
					}
				} else {
					expect(current.next).to.be.an('undefined');
				}

				current = current.next;
			}
		}
	}

	it('start empty', () => {
		expect(list.size()).to.equal(0);
		expect(list.isEmpty()).to.equal(true);
		expect(list.getHead()).to.be.an('undefined');
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
			expect(list.size()).to.equals(max - i);
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
		expect(list.getHead()).to.be.an('undefined');

		list.push(1);
		expect(list.getHead()).to.not.be.an('undefined');
		expect(list.getHead().element).to.equals(1);
	});

	/**
	 * getNodeAt
	 */
	it('return element at specific index: invalid position', () => {
		expect(list.getNodeAt(-1)).to.be.an('undefined');
		expect(list.getNodeAt(4)).to.be.an('undefined');
	});

	it('return element at specific index', () => {
		pushElements();

		let node;

		for (let i = min; i <= max; i++) {
			node = list.getNodeAt(i - 1);
			expect(node).to.not.be.an('undefined');

			if (node) {
				expect(node.element).to.equals(i);
			}
		}
	});

	/**
	 * indexOf
	 */
	it('return index of elements', () => {
		pushElements();

		for (let i = min; i <= max; i++) {
			expect(list.indexOf(i)).to.equals(i - 1);
		}

		expect(list.indexOf(min - 2)).to.equals(-1);
		expect(list.indexOf(max + 2)).to.equals(-1);
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
		expect(list.insert(element, 1)).to.equals(false);
	});

	it('insert elements at the invalid position of not empty list', () => {
		const element = 1;
		expect(list.insert(element, -1)).to.equals(false);
		expect(list.insert(element, 0)).to.equals(true);
		expect(list.insert(element, 2)).to.equals(false);
	});

	it('insert elements at the first position of empty list', () => {
		const element = 1;
		expect(list.insert(element, 0)).to.equals(true);

		max = 1;
		verifyList();
	});

	it('insert elements at the first position of not empty list', () => {
		let element = 2;
		expect(list.insert(element, 0)).to.equals(true);

		element = 1;
		expect(list.insert(element, 0)).to.equals(true);

		max = 2;
		verifyList();
	});

	it('insert elements at the middle position of list', () => {
		let element = 3;
		expect(list.insert(element, 0)).to.equals(true);

		element = 1;
		expect(list.insert(element, 0)).to.equals(true);

		element = 2;
		expect(list.insert(element, 1)).to.equals(true);

		verifyList();
	});

	it('insert elements at the end position of list', () => {
		max = 5;

		for (let i = 1; i <= max; i++) {
			expect(list.insert(i, i - 1)).to.equals(true);
		}

		verifyList();
	});

	/**
	 * removeAt
	 */
	it('remove element at the invalid position of empty list', () => {
		let index = 0;
		expect(list.removeAt(index)).to.be.an('undefined');

		index = 1;
		expect(list.removeAt(index)).to.be.an('undefined');
	});

	it('remove element at the invalid position of not empty list', () => {
		pushElements();

		let index = -1;
		expect(list.removeAt(index)).to.be.an('undefined');

		index = 5;
		expect(list.removeAt(index)).to.be.an('undefined');
	});

	it('remove element at the first position of list', () => {
		pushElements();

		const index = 0;
		expect(list.removeAt(index)).to.equals(1);
		expect(list.removeAt(index)).to.equals(2);

		expect(list.isEmpty()).to.equals(false);

		expect(list.removeAt(index)).to.equals(3);

		expect(list.isEmpty()).to.equals(true);
	});

	it('remove element at the middle position of list', () => {
		max = 5;
		pushElements();

		let index = 2;
		expect(list.removeAt(index)).to.equals(3);

		expect(list.removeAt(index)).to.equals(4);

		index = 1;
		expect(list.removeAt(index)).to.equals(2);

		expect(list.getHead()).to.not.be.an('undefined');
		expect(list.getHead().element).to.equals(1);
	});

	it('remove element at the end position of list', () => {
		pushElements();

		let index = 2;
		expect(list.removeAt(index)).to.equals(3);

		index = 1;
		expect(list.removeAt(index)).to.equals(2);

		expect(list.getHead()).to.not.be.an('undefined');
		expect(list.getHead().element).to.equals(1);
	});

	/**
	 * remove
	 */
	it('remove invalid elements', () => {
		pushElements();

		let element = -1;
		expect(list.remove(element)).to.be.an('undefined');

		element = 5;
		expect(list.remove(element)).to.be.an('undefined');
	});

	it('remove valid elements', () => {
		pushElements();

		let element;
		for (let i = min; i <= max; i++) {
			element = list.remove(i);
			expect(element).to.not.be.an('undefined');
			expect(element).to.equals(i);
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
