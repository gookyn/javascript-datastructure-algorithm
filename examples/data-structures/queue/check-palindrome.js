const Deque = require('../../../src/data-structures/queue/deque');

/**
 * 检查是否回文
 *
 * @param {string} str 需要检查的字符串
 * @returns {boolean}
 */
function checkPalindrome(str) {
	if (!str) {
		return false;
	}

	// 忽略空格、大小写（规则可自定义）
	str = str.toLocaleLowerCase().split(' ').join('');

	let result = true;
	const deque = new Deque();

	// 将所有字符入队
	for (let i = 0; i < str.length; i++) {
		deque.addRear(str.charAt(i));
	}

	// 当有多个字符并且首尾字符相同时，执行检查
	while (deque.size() > 1 && result) {
		// 将首尾字符出队，检查是否相等
		if (deque.removeFront() !== deque.removeRear()) {
			result = false;
		}
	}

	return result;
}

console.log(checkPalindrome('abcdcba')); // true
console.log(checkPalindrome('ab cd cba')); // true
console.log(checkPalindrome('Ab cd cBa')); // true
console.log(checkPalindrome('abcdefg')); // false
console.log(checkPalindrome('123321')); // true
console.log(checkPalindrome('12 33 21')); // true
console.log(checkPalindrome('12-3321')); // false
