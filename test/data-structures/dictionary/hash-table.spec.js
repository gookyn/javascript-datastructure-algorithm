require('mocha');
const { expect } = require('chai');
const { HashTable } = require('../../../src/data-structures');
const { CustomObj } = require('../../utils');

describe('Hash Table', () => {
	let hashTable;

	beforeEach(() => {
		hashTable = new HashTable();
	});

	it('start empty', () => {
		expect(hashTable.size()).to.equal(0);
		expect(hashTable.isEmpty()).to.equal(true);
	});

	/**
	 * size
	 */
	it('return the size', () => {
		expect(hashTable.size()).to.equal(0);

		for (let i = 1; i <= 5; i++) {
			expect(hashTable.put(i, i)).to.equal(true);
		}

		expect(hashTable.size()).to.equal(5);
	});

	/**
	 * isEmpty
	 */
	it('return is empty', () => {
		expect(hashTable.isEmpty()).to.equal(true);

		for (let i = 1; i <= 5; i++) {
			expect(hashTable.put(i, i)).to.equal(true);
		}
		expect(hashTable.isEmpty()).to.equal(false);

		for (let i = 1; i <= 5; i++) {
			expect(hashTable.remove(i)).to.equal(true);
		}
		expect(hashTable.isEmpty()).to.equal(true);
	});

	/**
	 * hashCode
	 */
	it('generate hash code', () => {
		expect(hashTable.hashCode(1)).to.equal(1);
		expect(hashTable.hashCode(10)).to.equal(10);
		expect(hashTable.hashCode(100)).to.equal(100);

		expect(hashTable.hashCode('1')).to.equal(12);
		expect(hashTable.hashCode('10')).to.equal(23);
		expect(hashTable.hashCode('100')).to.equal(34);

		expect(hashTable.hashCode('a')).to.equal(23);
		expect(hashTable.hashCode('A')).to.equal(28);
		expect(hashTable.hashCode('Abc')).to.equal(3);

		const objList = [];
		for (let i = 1; i <= 3; i++) {
			objList.push(new CustomObj(i, i));
		}

		expect(hashTable.hashCode(objList[0])).to.equal(0);
		expect(hashTable.hashCode(objList[1])).to.equal(2);
		expect(hashTable.hashCode(objList[2])).to.equal(4);
	});

	/**
	 * put、get
	 */
	it('put keys and values with undefined and null', () => {
		expect(hashTable.get(1)).to.undefined;

		expect(hashTable.put(undefined, undefined)).to.equal(false);
		expect(hashTable.put(undefined, 1)).to.equal(false);
		expect(hashTable.put(1, undefined)).to.equal(false);
		expect(hashTable.put('undefined', undefined)).to.equal(false);
		expect(hashTable.put('undefined', 1)).to.equal(true);
		expect(hashTable.put(1, 'undefined')).to.equal(true);

		expect(hashTable.put(null, null)).to.equal(false);
		expect(hashTable.put(null, 1)).to.equal(false);
		expect(hashTable.put(1, null)).to.equal(false);
		expect(hashTable.put('null', null)).to.equal(false);
		expect(hashTable.put('null', 1)).to.equal(true);
		expect(hashTable.put(1, 'null')).to.equal(true);
	});

	it('put values with string key', () => {
		for (let i = 0; i <= 5; i++) {
			expect(hashTable.put(`${i}`, i)).to.equal(true);
		}

		for (let i = 0; i <= 5; i++) {
			expect(hashTable.get(hashTable.hashCode(`${i}`))).to.equal(i);
		}
	});

	it('put values with number key', () => {
		for (let i = 0; i <= 5; i++) {
			expect(hashTable.put(i, i)).to.equal(true);
		}

		for (let i = 0; i <= 5; i++) {
			expect(hashTable.hashCode(i)).to.equal(i);
			expect(hashTable.get(i)).to.equal(i);
		}
	});

	it('put values with object key (toString has been implemented)', () => {
		const objList = [];
		for (let i = 0; i <= 5; i++) {
			objList.push(new CustomObj(i, i));
		}

		for (let i = 0; i <= 5; i++) {
			expect(hashTable.put(objList[i], objList[i])).to.equal(true);
		}

		for (let i = 0; i <= 5; i++) {
			expect(hashTable.get(objList[i])).to.equal(objList[i]);
		}
	});

	it('put values with same key', () => {
		for (let i = 0; i <= 5; i++) {
			expect(hashTable.put(1, i)).to.equal(true);
		}

		expect(hashTable.size()).to.equal(1);
		expect(hashTable.get(hashTable.hashCode(1))).to.equal(5);
	});

	/**
	 * remove
	 */
	it('remove elements', () => {
		for (let i = 0; i <= 5; i++) {
			expect(hashTable.put(i, i)).to.equal(true);
		}

		expect(hashTable.isEmpty()).to.equal(false);

		for (let i = 0; i <= 5; i++) {
			expect(hashTable.remove(i)).to.equal(true);
		}

		expect(hashTable.isEmpty()).to.equal(true);
	});

	/**
	 * clear
	 */
	it('clear the hashTable', () => {
		hashTable.clear();
		expect(hashTable.isEmpty()).to.equal(true);

		for (let i = 0; i <= 5; i++) {
			expect(hashTable.put(i, i)).to.equal(true);
		}

		hashTable.clear();
		expect(hashTable.isEmpty()).to.equal(true);
	});

	/**
	 * toString
	 */
	it('return string', () => {
		expect(hashTable.toString()).to.equal('');
		hashTable.put(1, 2);
		expect(hashTable.toString()).to.equal('{1 => [#(1):2]}');

		hashTable.clear();

		hashTable.put('a', 'a');
		expect(hashTable.toString()).to.equal('{23 => [#(23):a]}');

		hashTable.clear();

		hashTable.put(new CustomObj(1, 2), 'a');
		expect(hashTable.toString()).to.equal('{1 => [#(1):a]}');

		hashTable.put(new CustomObj(3, 4), 'b');
		expect(hashTable.toString()).to.equal('{1 => [#(1):a]},{5 => [#(5):b]}');
	});
});
