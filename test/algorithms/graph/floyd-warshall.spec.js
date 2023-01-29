require('mocha');
const { expect } = require('chai');
const { floydWarshall } = require('../../../src/algorithms');

describe('Floyd-Warshall Algorithm - All-Pairs Shortest Path', () => {
	it('all-pairs shortest path', () => {
		const INF = Infinity;
		const graph = [
			[INF, 2, 4, INF, INF, INF],
			[INF, INF, 2, 4, 2, INF],
			[INF, INF, INF, INF, 3, INF],
			[INF, INF, INF, INF, INF, 2],
			[INF, INF, INF, 3, INF, 2],
			[INF, INF, INF, INF, INF, INF],
		];

		expect(floydWarshall(graph)).to.eql([
			[0, 2, 4, 6, 4, 6],
			[INF, 0, 2, 4, 2, 4],
			[INF, INF, 0, 6, 3, 5],
			[INF, INF, INF, 0, INF, 2],
			[INF, INF, INF, 3, 0, 2],
			[INF, INF, INF, INF, INF, 0],
		]);
	});
});
