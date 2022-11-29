const Stack = require('../../../src/data-structures/stack/stack');

/**
 * 十进制转换其它进制
 *
 * 操作方法（以二进制为例）：
 * 将十进制数除以 2 并对商取整，直到商为 0
 * 将余数倒序取出，即为转换后的进制数
 */

/**
 * 十进制转二进制
 */
function decimalToBinary(decNumber) {
	// 通过栈来保存余数
	const remStack = new Stack();

	// 商
	let number = decNumber;

	// 余数
	let rem;

	// 二进制数字符串
	let result = '';

	while (number > 0) {
		rem = Math.floor(number % 2);
		remStack.push(rem);
		number = Math.floor(number / 2);
	}

	while (!remStack.isEmpty()) {
		result += remStack.pop().toString();
	}

	return result;
}

console.log(decimalToBinary(10)); // 1010

/**
 * 十进制转 2~36 的任意进制
 */
function baseConverter(decNumber, base) {
	if (base < 2 || base > 36) {
		return '';
	}

	const digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	const remStack = new Stack();
	let number = decNumber;
	let rem;
	let result = '';

	while (number > 0) {
		rem = Math.floor(number % base);
		remStack.push(rem);
		number = Math.floor(number / base);
	}

	while (!remStack.isEmpty()) {
		result += digits[remStack.pop()];
	}

	return result;
}

console.log(baseConverter(1003, 1)); // ''
console.log(baseConverter(1003, 2)); // 1111101011
console.log(baseConverter(1003, 8)); // 1753
console.log(baseConverter(1003, 16)); // 3EB
console.log(baseConverter(1003, 32)); // VB
console.log(baseConverter(1003, 37)); // ''
