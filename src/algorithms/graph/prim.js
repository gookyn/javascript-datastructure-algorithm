const INF = Number.MAX_SAFE_INTEGER;

const minDistanceIndex = (graph, key, visited) => {
	let min = INF;
	let minIndex = 0;

	for (let i = 0; i < graph.length; i++) {
		if (visited[i] === false && key[i] < min) {
			min = key[i];
			minIndex = i;
		}
	}

	return minIndex;
};

const prim = graph => {
	const parent = [];
	const key = [];
	const visited = [];
	const { length } = graph;

	for (let i = 0; i < length; i++) {
		key[i] = INF;
		visited[i] = false;
	}

	key[0] = 0;
	parent[0] = -1;

	for (let i = 0; i < length - 1; i++) {
		const minIndex = minDistanceIndex(graph, key, visited);
		visited[minIndex] = true;
		for (let j = 0; j < length; j++) {
			if (graph[minIndex][j] && !visited[j] && graph[minIndex][j] < key[j]) {
				parent[j] = minIndex;
				key[j] = graph[minIndex][j];
			}
		}
	}

	return parent;
};

module.exports = prim;
