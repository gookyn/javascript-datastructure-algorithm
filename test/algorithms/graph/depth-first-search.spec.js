require('mocha');
const { expect } = require('chai');
const { depthFirstSearch, DFS } = require('../../../src/algorithms');
const { Graph } = require('../../../src/data-structures');

describe('Depth First Search', () => {
	const vertices = ['A', 'B', 'C', 'D', 'E'];
	const dfsCallBack = ['A', 'B', 'D', 'E', 'C'];

	let count;
	let graph;

	function assertCallback(value) {
		expect(value).to.equal(dfsCallBack[count]);
		count++;
	}

	beforeEach(() => {
		count = 0;
		graph = new Graph(true);

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
		depthFirstSearch(graph, assertCallback);
	});

	it('topological sort - DFS', () => {
		const result = DFS(graph);

		expect(result.discovery).to.eql({
			A: 1,
			B: 2,
			C: 8,
			D: 3,
			E: 4,
		});

		expect(result.finished).to.eql({
			A: 10,
			B: 7,
			C: 9,
			D: 6,
			E: 5,
		});

		expect(result.predecessors).to.eql({
			A: null,
			B: 'A',
			C: 'A',
			D: 'B',
			E: 'D',
		});
	});
});
