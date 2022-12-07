const { defaultToString } = require('../../utils');
const { ValuePair } = require('./models');

class Dictionary {
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

	hasKey(key) {
		return this.table[this.toStrFn(key)] != null;
	}

	set(key, value) {
		if (key != null && value != null) {
			// key 字符串
			const tableKey = this.toStrFn(key);
			// 保存原始的 key、value
			this.table[tableKey] = new ValuePair(key, value);
			return true;
		}
		return false;
	}

	get(key) {
		const valuePair = this.table[this.toStrFn(key)];
		return valuePair == null ? undefined : valuePair.value;
	}

	remove(key) {
		if (this.hasKey(key)) {
			delete this.table[this.toStrFn(key)];
			return true;
		}
		return false;
	}

	keyValues() {
		// ES2017
		// return Object.values(this.table)

		const valuePairs = [];
		for (let key in this.table) {
			if (this.hasKey(key)) {
				valuePairs.push(this.table[key]);
			}
		}
		return valuePairs;
	}

	keys() {
		return this.keyValues().map(item => item.key);
	}

	values() {
		return this.keyValues().map(item => item.value);
	}

	forEach(callback) {
		const valuePairs = this.keyValues();
		for (let i = 0; i < valuePairs.length; i++) {
			const result = callback(valuePairs[i].key, valuePairs[i].value);
			if (result === false) {
				break;
			}
		}
	}

	clear() {
		this.table = {};
	}

	toString() {
		if (this.isEmpty()) {
			return '';
		}

		const valuePairs = this.keyValues();
		let str = `${valuePairs[0].toString()}`;
		for (let i = 1; i < valuePairs.length; i++) {
			str += `,${valuePairs[i].toString()}`;
		}
		return str;
	}
}

module.exports = Dictionary;
