const Dictionary = require('../dictionary/dictionary');

class Graph {
	constructor(isDirected = false) {
		// 是否为有向图
		this.isDirected = isDirected;
		// 所有顶点
		this.vertices = [];
		// 邻接表
		this.adjList = new Dictionary();
	}

	addVertex(v) {
		if (!this.vertices.includes(v)) {
			this.vertices.push(v);
			this.adjList.set(v, []);
		}
	}

	addEdge(v, w) {
		if (!this.adjList.get(v)) {
			this.addVertex(v);
		}
		if (!this.adjList.get(w)) {
			this.addVertex(w);
		}
		this.adjList.get(v).push(w);
		if (!this.isDirected) {
			this.adjList.get(w).push(v);
		}
	}

	getVertices() {
		return this.vertices;
	}

	getAdjList() {
		return this.adjList;
	}

	toString() {
		let str = '';
		this.vertices.forEach(vertex => {
			str += `${vertex} -> `;
			const neighbors = this.adjList.get(vertex);
			neighbors.forEach(n => {
				str += `${n} `;
			});
			str += '\n';
		});
		return str;
	}
}

module.exports = Graph;
