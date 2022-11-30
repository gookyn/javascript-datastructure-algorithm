const Queue = require('../../../src/data-structures/queue/queue');

/**
 * 击鼓传花
 *
 * @param {array} playerList 玩家名单
 * @param {number} num 传递次数
 * @returns
 */
function hotPotato(playerList, num) {
	const queue = new Queue();

	// 被淘汰的玩家名单
	const eliminatedList = [];

	// 将所有玩家加入队列
	playerList.forEach(item => {
		queue.enqueue(item);
	});

	// 玩家多于一人时进行游戏
	while (queue.size() > 1) {
		// 没有达到指定传递次数时，继续游戏
		for (let i = 0; i < num; i++) {
			// 将传递过的人再加入到队列
			queue.enqueue(queue.dequeue());
		}
		// 达到指定传递次数，淘汰一人
		eliminatedList.push(queue.dequeue());
	}

	return {
		eliminatedList,
		winner: queue.dequeue(), // 最后一人为胜者
	};
}

const { eliminatedList = [], winner } = hotPotato(['A', 'B', 'C', 'D', 'E'], 5);

eliminatedList.forEach((item, index) => {
	console.log(`第 ${index + 1} 轮被淘汰的玩家：`, item);
});
// 第 1 轮被淘汰的玩家： A
// 第 2 轮被淘汰的玩家： C
// 第 3 轮被淘汰的玩家： B
// 第 4 轮被淘汰的玩家： E

console.log('最终赢家：', winner); // 最终赢家： D
