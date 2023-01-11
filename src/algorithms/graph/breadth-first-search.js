const Queue = require('../../data-structures/queue/queue');

const COLORS = {
	WHITE: 0, // 顶点没有被访问过
	GRAY: 1, // 顶点被访问过，但没有被探索过
	BLACK: 2, // 顶点被访问过，且被完全探索过
};

const initColor = vertices => {
	const result = {};
	vertices.forEach(item => {
		result[item] = COLORS.WHITE;
	});
	return result;
};

const breadthFirstSearch = (graph, startVertex, callback) => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initColor(vertices);

	const queue = new Queue();
	queue.enqueue(startVertex);

	while (!queue.isEmpty()) {
		const u = queue.dequeue();
		const neighbors = adjList.get(u);
		color[u] = COLORS.GRAY;
		neighbors.forEach(neighbor => {
			if (color[neighbor] === COLORS.WHITE) {
				color[neighbor] = COLORS.GRAY;
				queue.enqueue(neighbor);
			}
		});
		color[u] = COLORS.BLACK;
		typeof callback === 'function' && callback(u);
	}
};

const BFS = (graph, startVertex) => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initColor(vertices);

	const distances = {}; // 顶点 v 到其它顶点 u 的距离
	const predecessors = {}; // 前溯点，用来推导出从顶点 v 到其它每个顶点 u 的最短路径

	vertices.forEach(v => {
		distances[v] = 0;
		predecessors[v] = null;
	});

	const queue = new Queue();
	queue.enqueue(startVertex);

	while (!queue.isEmpty()) {
		const u = queue.dequeue();
		const neighbors = adjList.get(u);
		color[u] = COLORS.GRAY;
		neighbors.forEach(neighbor => {
			if (color[neighbor] === COLORS.WHITE) {
				color[neighbor] = COLORS.GRAY;
				distances[neighbor] = distances[u] + 1;
				predecessors[neighbor] = u;
				queue.enqueue(neighbor);
			}
		});
		color[u] = COLORS.BLACK;
	}

	return {
		distances,
		predecessors,
	};
};

module.exports = {
	breadthFirstSearch,
	BFS,
};
