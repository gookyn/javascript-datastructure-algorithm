/**
 * 计算图中所有最短路径的动态规划算法
 *
 * 可以找出从所有源到所有顶点的最短路径
 */
const floydWarshall = graph => {
	const dist = [];
	const { length } = graph;

	// 初始化每个顶点之间的权值
	for (let i = 0; i < length; i++) {
		dist[i] = [];
		for (let j = 0; j < length; j++) {
			if (i === j) {
				dist[i][j] = 0;
			} else if (!isFinite(graph[i][j])) {
				dist[i][j] = Infinity;
			} else {
				dist[i][j] = graph[i][j];
			}
		}
	}

	// 判断最短路径并更新
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length; j++) {
			for (let k = 0; k < length; k++) {
				if (dist[j][i] + dist[i][k] < dist[j][k]) {
					dist[j][k] = dist[j][i] + dist[i][k];
				}
			}
		}
	}

	return dist;
};

module.exports = floydWarshall;
