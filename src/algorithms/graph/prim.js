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

/**
 * 求解加权无向连通图的 最小生成树（MST）问题 的贪婪算法
 *
 * 找出一个边的子集，使其构成的树包含图中所有顶点，且边的权值之和最小
 *
 * 与 Dijkstra 算法相似
 */
const prim = graph => {
	const parent = []; // 包含 MST 的结果
	const key = [];
	const visited = [];
	const { length } = graph;

	// 初始化顶点和已访问
	for (let i = 0; i < length; i++) {
		key[i] = INF;
		visited[i] = false;
	}

	key[0] = 0; // 选择第一个 key 作为第一个顶点
	parent[0] = -1; // 第一个顶点总是 MST 的根节点

	// 对所有顶点求 MST
	for (let i = 0; i < length - 1; i++) {
		// 从未处理的顶点集合中选出 key 值最小的顶点
		const minIndex = minDistanceIndex(graph, key, visited);
		visited[minIndex] = true;
		// 如果有更小的权值，则保存 MST 路径，并更新其权值
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
