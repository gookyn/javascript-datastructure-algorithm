let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('原数组：', nums);

/* ***********************************  divider  *********************************** */

/**
 * 在数组末尾添加元素
 */

nums[nums.length] = 10;

nums.push(11);

nums.push(12, 13);

console.log('在数组末尾添加元素：', nums);

/**
 * 在数组开头添加元素
 */

// Array.prototype.insertFirstPosition = function (value) {
//   for (let i = this.length; i > 0; i--) {
//     this[i] = this[i - 1];
//   }
//   this[0] = value;
// };
// nums.insertFirstPosition(-1);

nums.unshift(-2);

nums.unshift(-4, -3);

console.log('在数组开头添加元素：', nums);

/* ***********************************  divider  *********************************** */

/**
 * 从数组末尾删除元素
 */

nums.pop();

console.log('从数组末尾删除元素：', nums);

/**
 * 从数组开头删除元素
 */

// Array.prototype.removeFirstPosition = function () {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = this[i + 1];
//   }

//   // 由于只是用后一位的值覆盖前一位的值，并没有删除元素，原数组长度不变，并且会多一个未定义元素
//   // 需要创建一个新数组，填充数据后，将其赋值给原数组
//   console.log(this.reIndex(this));
//   return this.reIndex(this);
// };

// Array.prototype.reIndex = function (arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== undefined) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// };

// // 注意：
// // 1. 要重新赋值
// // 2. 这个方法仅用于演示主要思路，不应该在真实项目中使用
// nums = nums.removeFirstPosition();

// 应该始终用 shift 方法
nums.shift();

console.log('从数组开头删除元素：', nums);

/* ***********************************  divider  *********************************** */

/**
 * 在任意位置添加或删除元素
 */

// 从索引 5 开始，删除 3 个元素
nums.splice(5, 3);

console.log('从索引 5 开始，删除 3 个元素：', nums);

// 从索引 5 开始，添加 3 个元素 3、4、5
// 第二个参数表示删除的元素个数，从第三个参数往后为添加的元素
nums.splice(5, 0, 3, 4, 5);

console.log('从索引 5 开始，添加 3 个元素 3、4、5：', nums);
