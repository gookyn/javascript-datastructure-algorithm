const COLORS = {
	WHITE: 0,
	GRAY: 1,
	BLACK: 2,
};

const initColor = vertices => {
	const result = {};
	vertices.forEach(v => {
		result[v] = COLORS.WHITE;
	});
	return result;
};

const depthFirstSearchVisit = (v, color, adjList, callback) => {
	color[v] = COLORS.GRAY;
	typeof callback === 'function' && callback(v);

	const neighbors = adjList.get(v);
	neighbors.forEach(neighbor => {
		if (color[neighbor] === COLORS.WHITE) {
			depthFirstSearchVisit(neighbor, color, adjList, callback);
		}
	});

	color[v] = COLORS.BLACK;
};

const depthFirstSearch = (graph, callback) => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initColor(vertices);

	vertices.forEach(v => {
		if (color[v] === COLORS.WHITE) {
			depthFirstSearchVisit(v, color, adjList, callback);
		}
	});
};

const DFSVisit = (
	v,
	color,
	discovery,
	finished,
	predecessors,
	time,
	adjList
) => {
	color[v] = COLORS.GRAY;
	discovery[v] = ++time.count;

	const neighbors = adjList.get(v);
	neighbors.forEach(neighbor => {
		if (color[neighbor] === COLORS.WHITE) {
			predecessors[neighbor] = v;
			DFSVisit(
				neighbor,
				color,
				discovery,
				finished,
				predecessors,
				time,
				adjList
			);
		}
	});

	color[v] = COLORS.BLACK;
	finished[v] = ++time.count;
};

const DFS = graph => {
	const vertices = graph.getVertices();
	const adjList = graph.getAdjList();
	const color = initColor(vertices);

	const discovery = {}; // 顶点的发现时间
	const finished = {}; // 顶点的完成探索时间
	const predecessors = {}; // 前溯点

	// 追踪发现时间和完成探索时间
	const time = {
		count: 0,
	};

	vertices.forEach(v => {
		discovery[v] = 0;
		finished[v] = 0;
		predecessors[v] = null;
	});

	vertices.forEach(v => {
		if (color[v] === COLORS.WHITE) {
			DFSVisit(v, color, discovery, finished, predecessors, time, adjList);
		}
	});

	return {
		discovery,
		finished,
		predecessors,
	};
};

module.exports = {
	depthFirstSearch,
	DFS,
};
