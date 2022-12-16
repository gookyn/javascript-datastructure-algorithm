/**
 * 斐波那契数
 */
function fibonacci(n) {
	if (n < 1) return 0;
	if (n <= 2) return 1;
	return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(0)); // 0
console.log(fibonacci(1)); // 1
console.log(fibonacci(2)); // 1
console.log(fibonacci(3)); // 2

console.log(fibonacci(5)); // 5

console.log(fibonacci(10)); // 55

/**
 * 记忆化斐波那契数
 */
function fibonacciMemoization(n) {
	const memo = [0, 1];

	const fibonacci = n => {
		if (memo[n] != null) {
			return memo[n];
		}
		memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
		return memo[n];
	};

	return fibonacci(n);
}

console.log(fibonacciMemoization(0)); // 0
console.log(fibonacciMemoization(1)); // 1
console.log(fibonacciMemoization(2)); // 1
console.log(fibonacciMemoization(3)); // 2

console.log(fibonacciMemoization(5)); // 5

console.log(fibonacciMemoization(10)); // 55
