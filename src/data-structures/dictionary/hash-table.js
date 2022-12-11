const { defaultToString } = require('../../utils');
const { ValuePair } = require('./models');

class HashTable {
	constructor(toStrFn = defaultToString) {
		this.toStrFn = toStrFn;
		this.table = {};
	}

	size() {
		return Object.keys(this.table).length;
	}

	isEmpty() {
		return this.size() === 0;
	}

	// 散列函数
	loseloseHashCode(key) {
		if (typeof key === 'number') {
			return key;
		}

		const keyStr = this.toStrFn(key);
		let hash = 0;
		keyStr.split('').forEach(item => {
			hash += item.charCodeAt();
		});
		return hash % 37;
	}

	hashCode(key) {
		return this.loseloseHashCode(key);
	}

	put(key, value) {
		if (key != null && value != null) {
			const hashKey = this.hashCode(key);
			this.table[hashKey] = new ValuePair(hashKey, value);
			return true;
		}
		return false;
	}

	get(key) {
		const valuePair = this.table[this.hashCode(key)];
		return valuePair == null ? undefined : valuePair.value;
	}

	remove(key) {
		const hashKey = this.hashCode(key);
		const valuePair = this.get(hashKey);
		if (valuePair != null) {
			delete this.table[hashKey];
			return true;
		}
		return false;
	}

	getTable() {
		return this.table;
	}

	clear() {
		this.table = {};
	}

	toString() {
		if (this.isEmpty()) {
			return '';
		}

		// 格式：{hashKey => [#(hashKey):value]},{hashKey => [#(hashKey):value]}
		const keys = Object.keys(this.table);
		let str = `{${keys[0]} => ${this.table[keys[0]].toString()}}`;
		for (let i = 1; i < keys.length; i++) {
			str += `,{${keys[i]} => ${this.table[keys[i]].toString()}}`;
		}
		return str;
	}
}

module.exports = HashTable;
