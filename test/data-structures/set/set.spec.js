require('mocha');
const { expect } = require('chai');
const { Set } = require('../../../src/data-structures');
const { CustomObj } = require('../../utils');

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

		set.add(new CustomObj(1, 2));
		expect(set.toString()).to.equal('1|2');

		set.add(new CustomObj(3, 4));
		expect(set.toString()).to.equal('1|2,3|4');
	});

	/**
	 * union
	 */
	function addValues(min, max) {
		set = new Set();
		for (let i = min; i <= max; i++) {
			set.add(i);
		}
		return set;
	}

	it('union between empty sets', () => {
		const set1 = new Set();
		const set2 = new Set();

		let resultSet = set1.union(set2);
		expect(resultSet.isEmpty()).to.equal(true);

		resultSet = set2.union(set1);
		expect(resultSet.isEmpty()).to.equal(true);
	});

	it('union between equal sets', () => {
		const set1 = addValues(1, 10);
		const set2 = addValues(1, 10);

		let resultSet = set1.union(set2);
		for (let i = 1; i <= 10; i++) {
			expect(resultSet.has(i)).to.equal(true);
		}

		resultSet = set2.union(set1);
		for (let i = 1; i <= 10; i++) {
			expect(resultSet.has(i)).to.equal(true);
		}
	});

	it('union between different sets', () => {
		const set1 = addValues(1, 5);
		const set2 = addValues(6, 10);

		let resultSet = set1.union(set2);
		for (let i = 1; i <= 10; i++) {
			expect(resultSet.has(i)).to.equal(true);
		}

		resultSet = set2.union(set1);
		for (let i = 1; i <= 10; i++) {
			expect(resultSet.has(i)).to.equal(true);
		}
	});

	it('union between sets with common values', () => {
		const set1 = addValues(1, 8);
		const set2 = addValues(3, 10);

		let resultSet = set1.union(set2);
		for (let i = 1; i <= 10; i++) {
			expect(resultSet.has(i)).to.equal(true);
		}

		resultSet = set2.union(set1);
		for (let i = 1; i <= 10; i++) {
			expect(resultSet.has(i)).to.equal(true);
		}
	});

	/**
	 * intersection
	 */
	it('intersection between empty sets', () => {
		const set1 = new Set();
		let set2 = new Set();

		let resultSet = set1.intersection(set2);
		expect(resultSet.isEmpty()).to.equal(true);

		resultSet = set2.intersection(set1);
		expect(resultSet.isEmpty()).to.equal(true);
	});

	it('intersection between equal sets', () => {
		const set1 = addValues(1, 10);
		const set2 = addValues(1, 10);

		let resultSet = set1.intersection(set2);
		for (let i = 1; i <= 10; i++) {
			expect(resultSet.has(i)).to.equal(true);
		}

		resultSet = set2.intersection(set1);
		for (let i = 1; i <= 10; i++) {
			expect(resultSet.has(i)).to.equal(true);
		}
	});

	it('intersection between different sets', () => {
		const set1 = addValues(1, 5);
		const set2 = addValues(6, 10);

		let resultSet = set1.intersection(set2);
		expect(resultSet.isEmpty()).to.equal(true);

		resultSet = set2.intersection(set1);
		expect(resultSet.isEmpty()).to.equal(true);
	});

	it('intersection between sets with common values', () => {
		const set1 = addValues(1, 8);
		const set2 = addValues(3, 10);

		let resultSet = set1.intersection(set2);
		for (let i = 3; i <= 8; i++) {
			expect(resultSet.has(i)).to.equal(true);
		}

		resultSet = set2.intersection(set1);
		for (let i = 3; i <= 8; i++) {
			expect(resultSet.has(i)).to.equal(true);
		}
	});

	/**
	 * difference
	 */
	it('difference between empty sets', () => {
		const set1 = new Set();
		let set2 = new Set();

		let resultSet = set1.union(set2);
		expect(resultSet.isEmpty()).to.equal(true);

		resultSet = set2.union(set1);
		expect(resultSet.isEmpty()).to.equal(true);
	});

	it('difference between equal sets', () => {
		const set1 = addValues(1, 10);
		const set2 = addValues(1, 10);

		let resultSet = set1.difference(set2);
		for (let i = 1; i <= 10; i++) {
			expect(resultSet.has(i)).to.equal(false);
		}

		resultSet = set2.difference(set1);
		for (let i = 1; i <= 10; i++) {
			expect(resultSet.has(i)).to.equal(false);
		}
	});

	it('difference between different sets', () => {
		const set1 = addValues(1, 5);
		const set2 = addValues(6, 10);

		let resultSet = set1.difference(set2);
		for (let i = 1; i <= 10; i++) {
			if (i <= 5) {
				expect(resultSet.has(i)).to.equal(true);
			} else {
				expect(resultSet.has(i)).to.equal(false);
			}
		}

		resultSet = set2.difference(set1);
		for (let i = 1; i <= 10; i++) {
			if (i <= 5) {
				expect(resultSet.has(i)).to.equal(false);
			} else {
				expect(resultSet.has(i)).to.equal(true);
			}
		}
	});

	it('difference between sets with common values', () => {
		const set1 = addValues(1, 8);
		const set2 = addValues(3, 10);

		let resultSet = set1.difference(set2);
		for (let i = 1; i <= 10; i++) {
			if (i < 3) {
				expect(resultSet.has(i)).to.equal(true);
			} else {
				expect(resultSet.has(i)).to.equal(false);
			}
		}

		resultSet = set2.difference(set1);
		for (let i = 1; i <= 10; i++) {
			if (i < 3) {
				expect(resultSet.has(i)).to.equal(false);
			} else if (i > 8) {
				expect(resultSet.has(i)).to.equal(true);
			}
		}
	});

	/**
	 * isSubsetOf
	 */
	it('isSubsetOf between empty sets', () => {
		const set1 = new Set();
		let set2 = new Set();

		expect(set1.isSubsetOf(set2)).to.equal(true);
		expect(set2.isSubsetOf(set1)).to.equal(true);
	});

	it('isSubsetOf between equal sets', () => {
		const set1 = addValues(1, 10);
		const set2 = addValues(1, 10);

		expect(set1.isSubsetOf(set2)).to.equal(true);
		expect(set2.isSubsetOf(set1)).to.equal(true);
	});

	it('isSubsetOf between different sets', () => {
		const set1 = addValues(1, 5);
		const set2 = addValues(6, 10);

		expect(set1.isSubsetOf(set2)).to.equal(false);
		expect(set1.isSubsetOf(set2)).to.equal(false);
	});

	it('isSubsetOf between sets with common values', () => {
		const set1 = addValues(1, 8);
		const set2 = addValues(3, 10);

		expect(set1.isSubsetOf(set2)).to.equal(false);
		expect(set1.isSubsetOf(set2)).to.equal(false);

		const set3 = addValues(1, 10);
		const set4 = addValues(3, 8);

		expect(set3.isSubsetOf(set4)).to.equal(false);
		expect(set4.isSubsetOf(set3)).to.equal(true);
	});
});
