require('mocha');
const { expect } = require('chai');
const Set = require('../../../src/data-structures/set/set');

describe('Set', () => {
	let set;

	beforeEach(() => {
		set = new Set();
	});

	it('start empty', () => {
		expect(set.size()).to.equal(0);
		expect(set.isEmpty()).to.equal(true);
	});

	/**
	 * size
	 */
	it('return the size', () => {
		expect(set.size()).to.equal(0);

		set.add(1);
		expect(set.size()).to.equal(1);

		set.add(2);
		expect(set.size()).to.equal(2);

		set.delete(1);
		expect(set.size()).to.equal(1);

		set.delete(2);
		expect(set.size()).to.equal(0);
	});

	/**
	 * isEmpty
	 */
	it('return is empty', () => {
		expect(set.isEmpty()).to.equal(true);

		set.add(1);
		set.add(2);
		expect(set.isEmpty()).to.equal(false);

		set.delete(1);
		set.delete(2);
		expect(set.isEmpty()).to.equal(true);
	});

	/**
	 * has
	 */
	it('has element', () => {
		for (let i = 0; i < 5; i++) {
			expect(set.add(i));
			expect(set.has(i)).to.equal(true);
		}

		for (let i = 0; i < 5; i++) {
			expect(set.delete(i));
			expect(set.has(i)).to.equal(false);
		}
	});

	/**
	 * add
	 */
	it('add elements', () => {
		set.add(1);
		expect(set.size()).to.equal(1);

		set.add(2);
		expect(set.size()).to.equal(2);

		set.add(3);
		expect(set.size()).to.equal(3);

		expect(set.isEmpty()).to.equal(false);
	});

	it('does not allow duplicated elements', () => {
		let expected = true;
		for (let i = 0; i < 5; i++) {
			expect(set.add(i)).to.equal(expected);
		}

		expected = false;
		for (let i = 0; i < 5; i++) {
			expect(set.add(i)).to.equal(expected);
		}
	});

	/**
	 * delete
	 */
	it('delete elements', () => {
		for (let i = 0; i < 5; i++) {
			expect(set.add(i));
		}

		for (let i = 0; i < 5; i++) {
			expect(set.delete(i)).to.equal(true);
		}

		for (let i = 0; i < 5; i++) {
			expect(set.delete(i)).to.equal(false);
		}

		expect(set.isEmpty()).to.equal(true);
	});

	/**
	 * clear
	 */
	it('clear the set', () => {
		set.clear();
		expect(set.isEmpty()).to.equal(true);

		set.add(1);
		set.add(2);
		expect(set.isEmpty()).to.equal(false);

		set.clear();
		expect(set.isEmpty()).to.equal(true);
	});

	/**
	 * toString
	 */
	it('return string', () => {
		expect(set.toString()).to.equal('');

		class Obj {
			constructor(a, b) {
				this.a = a;
				this.b = b;
			}
			toString() {
				return `${this.a.toString()}:${this.b.toString()}`;
			}
		}

		set.add(new Obj(1, 2));
		expect(set.toString()).to.equal('1:2');

		set.add(new Obj(3, 4));
		expect(set.toString()).to.equal('1:2,3:4');
	});
});
