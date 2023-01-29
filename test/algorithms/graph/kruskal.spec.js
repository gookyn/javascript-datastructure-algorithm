require('mocha');
const { expect } = require('chai');
const { kruskal } = require('../../../src/algorithms');

describe('Kruskal Algorithm - Minimum Spanning Tree', () => {
	it('minimum spanning tree', () => {
		const graph = [
			[0, 2, 4, 0, 0, 0],
			[2, 0, 2, 4, 2, 0],
			[4, 2, 0, 0, 3, 0],
			[0, 4, 0, 0, 3, 2],
			[0, 2, 3, 3, 0, 2],
			[0, 0, 0, 2, 2, 0],
		];

		expect(kruskal(graph)).to.eql([, 0, 1, 1, 1, 3]);
	});
});
