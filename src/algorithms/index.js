const heapSort = require('./sorting/heap-sort');
const { breadthFirstSearch, BFS } = require('./graph/breadth-first-search');
const { depthFirstSearch, DFS } = require('./graph/depth-first-search');
const dijkstra = require('./graph/dijkstra');
const floydWarshall = require('./graph/floyd-warshall');
const prim = require('./graph/prim');

module.exports = {
	heapSort,
	breadthFirstSearch,
	BFS,
	depthFirstSearch,
	DFS,
	dijkstra,
	floydWarshall,
	prim,
};
