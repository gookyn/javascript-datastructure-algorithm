const INF = Number.MAX_SAFE_INTEGER;

const minDistanceIndex = (dist, visited) => {
	let min = INF;
	let minIndex = -1;

	dist.forEach((item, index) => {
		if (visited[index] === false && item <= min) {
			min = item;
			minIndex = index;
		}
	});

	return minIndex;
};

const dijkstra = (graph, src) => {
	const dist = [];
	const visited = [];
	const { length } = graph;

	for (let i = 0; i < length; i++) {
		dist[i] = INF;
		visited[i] = false;
	}

	dist[src] = 0;

	for (let i = 0; i < length - 1; i++) {
		const minIndex = minDistanceIndex(dist, visited);
		visited[minIndex] = true;
		for (let j = 0; j < length; j++) {
			if (
				!visited[j] &&
				graph[minIndex][j] !== 0 &&
				dist[minIndex] !== INF &&
				dist[minIndex] + graph[minIndex][j] < dist[j]
			) {
				dist[j] = dist[minIndex] + graph[minIndex][j];
			}
		}
	}

	return dist;
};

module.exports = dijkstra;
