require('mocha');
const { expect } = require('chai');
const { breadthFirstSearch, BFS } = require('../../../src/algorithms');
const { Graph } = require('../../../src/data-structures');

describe('Breadth First Search', () => {
	const vertices = ['A', 'B', 'C', 'D', 'E'];
	let count;
	let graph;

	function assertCallback(value) {
		expect(value).to.equal(vertices[count]);
		count++;
	}

	beforeEach(() => {
		count = 0;
		graph = new Graph();

		vertices.forEach(v => {
			graph.addVertex(v);
		});

		graph.addEdge('A', 'B');
		graph.addEdge('A', 'C');
		graph.addEdge('B', 'D');
		graph.addEdge('B', 'E');
		graph.addEdge('C', 'E');
		graph.addEdge('D', 'E');
	});

	it('breadthFirstSearch', () => {
		breadthFirstSearch(graph, vertices[0], assertCallback);
	});

	it('shortest path - BFS', () => {
		const shortestPath = BFS(graph, vertices[0]);

		expect(shortestPath.distances).to.eql({
			A: 0,
			B: 1,
			C: 1,
			D: 2,
			C: 1,
			E: 2,
		});

		expect(shortestPath.predecessors).to.eql({
			A: null,
			B: 'A',
			C: 'A',
			D: 'B',
			E: 'B',
		});
	});
});
