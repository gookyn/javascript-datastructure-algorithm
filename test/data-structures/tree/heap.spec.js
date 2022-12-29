require('mocha');
const { expect } = require('chai');
const { MinHeap } = require('../../../src/data-structures');

describe('Heap', () => {
	let heap;

	beforeEach(() => {
		heap = new MinHeap();
	});

	it('start empty', () => {
		expect(heap.size()).to.equal(0);
		expect(heap.isEmpty()).to.equal(true);
	});

	it('insert values', () => {
		const resultArray = [];
		for (let i = 1; i < 10; i++) {
			resultArray.push(i);
			heap.insert(i);
			expect(heap.getAsArray()).to.eql(resultArray);
		}
	});

	it('extract values', () => {
		let resultArray = [];
		for (let i = 1; i < 10; i++) {
			resultArray.push(i);
			heap.insert(i);
			expect(heap.getAsArray()).to.eql(resultArray);
		}

		resultArray = [
			[],
			[2, 4, 3, 8, 5, 6, 7, 9],
			[3, 4, 6, 8, 5, 9, 7],
			[4, 5, 6, 8, 7, 9],
			[5, 7, 6, 8, 9],
			[6, 7, 9, 8],
			[7, 8, 9],
			[8, 9],
			[9],
			[],
		];

		for (let i = 1; i < 10; i++) {
			expect(heap.extract()).to.equal(i);
			expect(heap.getAsArray()).to.eql(resultArray[i]);
		}
	});

	it('find the min value', () => {
		const resultArray = [];
		for (let i = 10; i > 0; i--) {
			resultArray.push(i);
			heap.insert(i);
			expect(heap.findMinimum()).to.equal(i);
		}
	});
});
