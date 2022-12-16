const { defaultToString } = require('../../utils');
const HashTable = require('./hash-table');
const { ValuePair } = require('../dictionary/models');

class HashTableLinearProbing extends HashTable {
	constructor(toStrFn = defaultToString) {
		super(toStrFn);
	}

	put(key, value) {
		if (key != null && value != null) {
			let index = this.hashCode(key);
			while (this.table[index] != null) {
				index++;
			}
			this.table[index] = new ValuePair(key, value);
			return true;
		}
		return false;
	}

	get(key) {
		let index = this.hashCode(key);
		let valuePair = this.table[index];
		if (valuePair != null && valuePair.key === key) {
			return valuePair.value;
		}

		while (valuePair != null) {
			index++;
			valuePair = this.table[index];
			if (valuePair.key === key) {
				return valuePair.value;
			}
		}

		return undefined;
	}

	remove(key) {
		let index = this.hashCode(key);
		let valuePair = this.table[index];
		if (valuePair != null && valuePair.key === key) {
			delete this.table[index];
			this.verifyRemoveSideEffect(key, index);
			return true;
		}

		while (valuePair != null) {
			index++;
			valuePair = this.table[index];
			if (valuePair.key === key) {
				delete this.table[index];
				this.verifyRemoveSideEffect(key, index);
				return true;
			}
		}

		return false;
	}

	verifyRemoveSideEffect(key, removedIndex) {
		const removedHash = this.hashCode(key);
		let index = removedIndex + 1;
		while (this.table[index] != null) {
			const currentHash = this.hashCode(this.table[index].key);
			if (currentHash <= removedHash || currentHash <= removedIndex) {
				this.table[removedIndex] = this.table[index];
				delete this.table[index];
				removedIndex = index;
			}
			index++;
		}
	}
}

module.exports = HashTableLinearProbing;
