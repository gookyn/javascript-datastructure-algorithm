require('mocha');
const { expect } = require('chai');
const { Dictionary } = require('../../../src/data-structures');
const { CustomObj } = require('../../utils');

describe('Dictionary', () => {
	let dictionary;

	beforeEach(() => {
		dictionary = new Dictionary();
	});

	it('start empty', () => {
		expect(dictionary.size()).to.equal(0);
		expect(dictionary.isEmpty()).to.equal(true);
	});

	/**
	 * size
	 */
	it('return the size', () => {
		expect(dictionary.size()).to.equal(0);

		for (let i = 1; i <= 5; i++) {
			expect(dictionary.set(`${i}`, i)).to.equal(true);
		}

		expect(dictionary.size()).to.equal(5);
	});

	/**
	 * isEmpty
	 */
	it('return is empty', () => {
		expect(dictionary.isEmpty()).to.equal(true);

		for (let i = 1; i <= 5; i++) {
			expect(dictionary.set(`${i}`, i)).to.equal(true);
		}
		expect(dictionary.isEmpty()).to.equal(false);

		for (let i = 1; i <= 5; i++) {
			expect(dictionary.remove(i)).to.equal(true);
		}
		expect(dictionary.isEmpty()).to.equal(true);
	});

	/**
	 * hasKey
	 */
	it('return includes the key ', () => {
		expect(dictionary.hasKey('1')).to.equal(false);

		for (let i = 1; i <= 5; i++) {
			expect(dictionary.set(`${i}`, i)).to.equal(true);
		}

		for (let i = 1; i <= 5; i++) {
			expect(dictionary.hasKey(i)).to.equal(true);
		}
	});

	/**
	 * set、get
	 */
	it('set keys and values with undefined and null', () => {
		expect(dictionary.get(1)).to.undefined;

		expect(dictionary.set(undefined, undefined)).to.equal(false);
		expect(dictionary.set(undefined, 1)).to.equal(false);
		expect(dictionary.set(1, undefined)).to.equal(false);
		expect(dictionary.set('undefined', undefined)).to.equal(false);
		expect(dictionary.set('undefined', 1)).to.equal(true);
		expect(dictionary.set(1, 'undefined')).to.equal(true);

		expect(dictionary.set(null, null)).to.equal(false);
		expect(dictionary.set(null, 1)).to.equal(false);
		expect(dictionary.set(1, null)).to.equal(false);
		expect(dictionary.set('null', null)).to.equal(false);
		expect(dictionary.set('null', 1)).to.equal(true);
		expect(dictionary.set(1, 'null')).to.equal(true);
	});

	it('set values with string key', () => {
		for (let i = 1; i <= 5; i++) {
			expect(dictionary.set(`${i}`, i)).to.equal(true);
		}

		for (let i = 1; i <= 5; i++) {
			expect(dictionary.get(i)).to.equal(i);
		}
	});

	it('set values with number key', () => {
		for (let i = 1; i <= 5; i++) {
			expect(dictionary.set(i, i)).to.equal(true);
		}

		for (let i = 1; i <= 5; i++) {
			expect(dictionary.get(i)).to.equal(i);
		}
	});

	it('set values with object key (toString has been implemented)', () => {
		const objList = [];
		for (let i = 0; i <= 5; i++) {
			objList.push(new CustomObj(i, i));
		}

		for (let i = 0; i <= 5; i++) {
			expect(dictionary.set(objList[i], objList[i])).to.equal(true);
		}

		for (let i = 0; i <= 5; i++) {
			expect(dictionary.get(objList[i])).to.equal(objList[i]);
		}
	});

	/**
	 * remove
	 */
	it('remove elements', () => {
		for (let i = 1; i <= 5; i++) {
			expect(dictionary.set(`${i}`, i)).to.equal(true);
		}

		expect(dictionary.isEmpty()).to.equal(false);

		for (let i = 1; i <= 5; i++) {
			expect(dictionary.remove(i)).to.equal(true);
		}

		expect(dictionary.isEmpty()).to.equal(true);
	});

	/**
	 * keyValues、keys、values
	 */
	it('returns values, keys and value pairs', () => {
		for (let i = 1; i <= 5; i++) {
			expect(dictionary.set(`${i}`, i)).to.equal(true);
		}

		const keyValues = dictionary.keyValues();
		for (let i = 0; i < 5; i++) {
			expect(keyValues[i].key).to.equal(`${i + 1}`);
			expect(keyValues[i].value).to.equal(i + 1);
		}

		const keys = dictionary.keys();
		for (let i = 0; i < 5; i++) {
			expect(keys[i]).to.equal(`${i + 1}`);
		}

		const values = dictionary.values();
		for (let i = 0; i < 5; i++) {
			expect(values[i]).to.equal(i + 1);
		}
	});

	/**
	 * forEach
	 */
	it('iterate with forEach', () => {
		for (let i = 1; i <= 5; i++) {
			expect(dictionary.set(`${i}`, i)).to.equal(true);
		}

		dictionary.forEach((key, value) => {
			expect(dictionary.hasKey(key)).to.equal(true);
			expect(dictionary.get(key)).to.equal(value);
		});
	});

	/**
	 * clear
	 */
	it('clear the dictionary', () => {
		dictionary.clear();
		expect(dictionary.isEmpty()).to.equal(true);

		for (let i = 1; i <= 5; i++) {
			expect(dictionary.set(`${i}`, i)).to.equal(true);
		}

		dictionary.clear();
		expect(dictionary.isEmpty()).to.equal(true);
	});

	/**
	 * toString
	 */
	it('return string', () => {
		expect(dictionary.toString()).to.equal('');
		dictionary.set('a', 'b');
		expect(dictionary.toString()).to.equal('[#(a):b]');

		dictionary.clear();

		dictionary.set(1, 2);
		expect(dictionary.toString()).to.equal('[#(1):2]');

		dictionary.clear();

		dictionary.set(new CustomObj(1, 2), 'a');
		expect(dictionary.toString()).to.equal('[#(1|2):a]');

		dictionary.set(new CustomObj(3, 4), 'b');
		expect(dictionary.toString()).to.equal('[#(1|2):a],[#(3|4):b]');
	});
});
