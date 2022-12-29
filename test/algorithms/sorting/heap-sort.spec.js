require('mocha');
const { expect } = require('chai');
const { heapSort } = require('../../../src/algorithms');

describe('Heap Sort', () => {
	it('heap sort', () => {
		const array = [2, 6, 7, 4, 3, 5, 8];
		expect(heapSort(array)).to.eql([2, 3, 4, 5, 6, 7, 8]);
	});
});
