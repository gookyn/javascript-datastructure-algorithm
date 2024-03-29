require('mocha');
const { expect } = require('chai');
const { dijkstra } = require('../../../src/algorithms');

describe('Dijkstra Algorithm - Shortest Path', () => {
	it('shortest path', () => {
		const graph = [
			[0, 2, 4, 0, 0, 0],
			[0, 0, 2, 4, 2, 0],
			[0, 0, 0, 0, 3, 0],
			[0, 0, 0, 0, 0, 2],
			[0, 0, 0, 3, 0, 2],
			[0, 0, 0, 0, 0, 0],
		];

		expect(dijkstra(graph, 0)).to.eql([0, 2, 4, 6, 4, 6]);
	});
});
