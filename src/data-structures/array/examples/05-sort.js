const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

/**
 * reverse：反序排列数组（会改变原数组）
 */
nums.reverse();
console.log('nums reverse: ', nums); // [ 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ]

/* ***********************************  divider  *********************************** */

/**
 * sort：默认按照字母顺序对数组排序，可以传入自定义比较函数（会改变原数组）
 */
nums.sort();
console.log('nums sort by default: ', nums); // [ 1, 10, 11, 12, 2, 3, 4, 5, 6, 7, 8, 9 ]

nums.sort((a, b) => a - b);
console.log('nums sort: ', nums); // [ 1, 2, 3, 4, 5, 6 ]

/**
 * 自定义排序
 */
const friends = [
  { name: 'John', age: 26 },
  { name: 'Ana', age: 22 },
  { name: 'Chris', age: 28 },
];
function comparePerson(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  return 0;
}
console.log('friends sort: ', friends.sort(comparePerson));
// [ { name: 'Ana', age: 22 },
//   { name: 'John', age: 26 },
//   { name: 'Chris', age: 28 } ]

/**
 * 字符串排序
 */
let names = ['Ana', 'ana', 'john', 'John'];
console.log(names.sort()); // [ 'Ana', 'John', 'ana', 'john' ]
// 默认会按照首字母的 ASCII 值排序：A-65，J-74，a-97，j-106

names = ['Ana', 'ana', 'john', 'John'];
function compareName(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) {
    return -1;
  }
  if (a.toLowerCase() > b.toLowerCase()) {
    return 1;
  }
  return 0;
}
console.log('names sort: ', names.sort(compareName)); // [ 'Ana', 'ana', 'john', 'John' ]
