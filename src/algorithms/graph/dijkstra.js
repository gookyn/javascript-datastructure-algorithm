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

/**
 * 计算从单个源到所有其他源的最短路径的贪婪算法
 */
const dijkstra = (graph, src) => {
	const dist = []; // 从源顶点到图中其他顶点的最短路径
	const visited = []; // 记录顶点是否已访问
	const { length } = graph;

	// 初始化所有的距离和已访问
	for (let i = 0; i < length; i++) {
		dist[i] = INF;
		visited[i] = false;
	}

	// 源顶点到自己的距离为 0
	dist[src] = 0;

	// 找出到其余顶点的最短路径
	for (let i = 0; i < length - 1; i++) {
		// 从尚未处理的顶点中选出距离最近的顶点
		const minIndex = minDistanceIndex(dist, visited);
		visited[minIndex] = true;
		for (let j = 0; j < length; j++) {
			// 如果找到最短的路径，则更新最短路径的值
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
