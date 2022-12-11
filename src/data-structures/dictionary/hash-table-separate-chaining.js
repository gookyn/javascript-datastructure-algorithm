const { defaultToString } = require('../../utils');
const { HashTable, LinkedList } = require('..');
const { ValuePair } = require('./models');

class HashTableSeparateChaining extends HashTable {
	constructor(toStrFn = defaultToString) {
		super(toStrFn);
	}

	size() {
		let count = 0;
		Object.values(this.table).forEach(linkedList => {
			count += linkedList.size();
		});
		return count;
	}

	put(key, value) {
		if (key != null && value != null) {
			const hashKey = this.hashCode(key);
			if (this.table[hashKey] == null) {
				this.table[hashKey] = new LinkedList();
			} else {
				this.table[hashKey].push(new ValuePair(key, value));
			}
			return true;
		}
		return false;
	}

	get(key) {
		const hashKey = this.hashCode(key);
		const linkedList = this.table[hashKey];
		if (linkedList != null && !linkedList.isEmpty()) {
			let current = linkedList.getHead();
			while (current.next != null) {
				if (current.element.key === key) {
					return current.element.value;
				}
				current = current.next;
			}
			return undefined;
		}
		return undefined;
	}

	remove(key) {
		const hashKey = this.hashCode(key);
		const linkedList = this.table[hashKey];
		if (linkedList != null && !linkedList.isEmpty()) {
			let current = linkedList.getHead();
			while (current.next != null) {
				if (current.element.key === key) {
					linkedList.remove(current.element);
					if (linkedList.isEmpty()) {
						delete this.table[hashKey];
					}
					return true;
				}
				current = current.next;
			}
			return false;
		}
		return false;
	}
}

module.exports = HashTableSeparateChaining;
