const nums = [1, 2, 3, 4, 5, 6, 7, 8];
/**
 * toString：将数组作为字符串返回
 */
const numString = nums.toString();
console.log('numString: ', numString); // 1,2,3,4,5,6,7,8

/**
 * join：将所有的数组元素连接成一个字符串
 */
const numJoinString = nums.join('-');
console.log('numJoinString: ', numJoinString); // 1-2-3-4-5-6-7-8
