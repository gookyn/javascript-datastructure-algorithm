const INF = Number.MAX_SAFE_INTEGER;

const find = (i, parent) => {
	while (parent[i]) {
		i = parent[i];
	}
	return i;
};

const union = (i, j, parent) => {
	if (i !== j) {
		parent[j] = i;
		return true;
	}
	return false;
};

const initCost = graph => {
	const cost = [];
	const { length } = graph;

	for (let i = 0; i < length; i++) {
		cost[i] = [];
		for (let j = 0; j < length; j++) {
			if (graph[i][j] === 0) {
				cost[i][j] = INF;
			} else {
				cost[i][j] = graph[i][j];
			}
		}
	}

	return cost;
};

/**
 * 求解加权无向连通图的 MST 问题的贪婪算法
 */
const kruskal = graph => {
	const parent = []; // 包含 MST 的结果
	const { length } = graph;

	let ne = 0; // 边数
	let a, b, u, v; // 记录不同的边

	// 复制数组，保留原始值
	const cost = initCost(graph);

	// 边数小于顶点数 - 1
	while (ne < length - 1) {
		// 找出权值最小的边
		for (let i = 0, min = INF; i < length; i++) {
			for (let j = 0; j < length; j++) {
				if (cost[i][j] < min) {
					min = cost[i][j];
					a = u = i;
					b = v = j;
				}
			}
		}

		// 检查 MST 中是否已存在这条边，避免环路
		u = find(u, parent);
		v = find(v, parent);

		// 如果 u 和 v 是不同的边，则将其加入 MST
		if (union(u, v, parent)) {
			ne++;
		}

		// 从列表中移除这些边，避免重复计算
		cost[a][b] = cost[b][a] = INF;
	}

	return parent;
};

module.exports = kruskal;
