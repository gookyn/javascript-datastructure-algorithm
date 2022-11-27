let daysOfWeek = new Array();

daysOfWeek = new Array(7);

daysOfWeek = new Array('Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat');

// 推荐
daysOfWeek = [];

daysOfWeek = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];

console.log('daysOfWeek.length: ', daysOfWeek.length); // 7

for (let i = 0; i < daysOfWeek.length; i++) {
	console.log(`daysOfWeek[${i}]: `, daysOfWeek[i]);
}

/**
 * 斐波那契数列（Fibonacci Numbers）
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
 */
const fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
	fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
}

console.log('fibonacci: ', fibonacci);

for (let i = 1; i < fibonacci.length; i++) {
	console.log(`fibonacci[${i}]: `, fibonacci[i]);
}
