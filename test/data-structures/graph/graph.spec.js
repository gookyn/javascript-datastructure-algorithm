require('mocha');
const { expect } = require('chai');
const { Graph } = require('../../../src/data-structures');
const { CustomObj } = require('../../utils');

describe('Graph', () => {
	let graph;

	beforeEach(() => {
		graph = new Graph();
	});

	it('add vertex', () => {
		expect(graph.getVertices()).to.eql([]);

		graph.addVertex('A');
		expect(graph.getVertices()).to.eql(['A']);

		graph.addVertex('B');
		expect(graph.getVertices()).to.eql(['A', 'B']);

		graph.addVertex('C');
		expect(graph.getVertices()).to.eql(['A', 'B', 'C']);
	});

	it('add edge', () => {
		expect(graph.getVertices()).to.eql([]);

		graph.addEdge('A', 'B');
		expect(graph.getVertices()).to.eql(['A', 'B']);
		expect(graph.getAdjList().get('A')).to.eql(['B']);
		expect(graph.getAdjList().get('B')).to.eql(['A']);

		graph.addEdge('A', 'C');
		expect(graph.getVertices()).to.eql(['A', 'B', 'C']);
		expect(graph.getAdjList().get('A')).to.eql(['B', 'C']);
		expect(graph.getAdjList().get('B')).to.eql(['A']);
		expect(graph.getAdjList().get('C')).to.eql(['A']);

		graph.addEdge('B', 'D');
		expect(graph.getVertices()).to.eql(['A', 'B', 'C', 'D']);
		expect(graph.getAdjList().get('A')).to.eql(['B', 'C']);
		expect(graph.getAdjList().get('B')).to.eql(['A', 'D']);
		expect(graph.getAdjList().get('C')).to.eql(['A']);
		expect(graph.getAdjList().get('D')).to.eql(['B']);

		expect(graph.getAdjList().get('E')).to.undefined;
	});

	it('return string', () => {
		graph.addEdge('A', 'B');
		graph.addEdge('A', 'C');
		graph.addEdge('B', 'D');

		expect(graph.toString()).to.equal(
			'A -> B C \nB -> A D \nC -> A \nD -> B \n'
		);
	});
});
