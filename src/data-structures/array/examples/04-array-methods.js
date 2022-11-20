const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const isEven = (x) => x % 2 === 0;

/* ***********************************  divider  *********************************** */

/**
 * 迭代器函数
 */

/**
 * every：对数组中的每个元素运行给定函数，如果该函数对每个元素都返回 true，则返回 true；否则返回 false
 */
const everyResult = nums.every(isEven);
console.log('everyResult: ', everyResult); // false

/**
 * some：对数组中的每个元素运行给定函数，如果该函数对任一元素返回 true，则返回 true；否则返回 false
 */
const someResult = nums.some(isEven);
console.log('someResult: ', someResult); // true

/**
 * forEach：对数组中的每个元素运行给定函数，没有返回值
 */
nums.forEach((x) => console.log(`forEach ${x}: `, x % 2 === 0));

/**
 * map：对数组中的每个元素运行给定函数，返回每次函数执行结果组成的数组
 */
const mapResult = nums.map(isEven);
console.log('mapResult: ', mapResult); // [ false, true, false, true, false, true, false, true, false ]

/**
 * filter：对数组中的每个元素运行给定函数，返回该函数执行结果为 true 元素组成的数组
 */
const filterResult = nums.filter(isEven);
console.log('filterResult: ', filterResult); // [ 2, 4, 6, 8 ]

/**
 * reduce：传入一个累加函数，对数组中的所有元素累加，返回累加的结果
 */
const reduceResult = nums.reduce((pre, cur) => pre + cur);
console.log('reduceResult: ', reduceResult); // 45

/**
 * for...of
 */
for (const n of nums) {
  console.log(`for...of nums ${n}: `, n % 2 === 0 ? 'even' : 'odd');
}

/**
 * @@iterator 对象
 */
const iterator = nums[Symbol.iterator]();
// 不断调用 next()，就能依次得到数组中的值
console.log('iterator: ', iterator.next().value); // 1
console.log('iterator: ', iterator.next().value); // 2
console.log('iterator: ', iterator.next().value); // 3

/**
 * entries：返回包含键值对的 @@iterator
 */
let arrEntries = nums.entries(); // 得到键值对的迭代器
console.log('entries: ', arrEntries.next().value); // [0,1]
console.log('entries: ', arrEntries.next().value); // [1,2]
console.log('entries: ', arrEntries.next().value); // [2,3]

// 也可以循环读取
arrEntries = nums.entries();
for (const n of arrEntries) {
  console.log('for...of entries: ', n);
}

/**
 * keys：返回包含数组索引的 @@iterator
 */
const arrKeys = nums.keys(); // 得到数组索引的迭代器
console.log('keys: ', arrKeys.next()); // { value: 0, done: false }
console.log('keys: ', arrKeys.next()); // { value: 1, done: false }
console.log('keys: ', arrKeys.next()); // { value: 2, done: false }

// 一旦没有可迭代的值，arrKeys.next() 就会返回一个 value 为 undefined、done 为 true 的对象
// 如果 done 属性值为 false，则说明还有可迭代的值

/**
 * values：返回包含数组值的 @@iterator
 */
const arrValues = nums.values();
console.log('values: ', arrValues.next()); // { value: 1, done: false }
console.log('values: ', arrValues.next()); // { value: 2, done: false }
console.log('values: ', arrValues.next()); // { value: 3, done: false }

/* ***********************************  divider  *********************************** */

/**
 * concat：向一个数组传递数组、对象或元素，按照传入参数顺序连接到原数组，并返回新数组
 */
const zero = 0;
const positiveNums = [1, 2, 3];
const negativeNums = [-3, -2, -1];

const concatResult = negativeNums.concat(zero, positiveNums);
console.log('concatResult: ', concatResult); //  [ -3, -2, -1, 0, 1, 2, 3 ]

/* ***********************************  divider  *********************************** */

/**
 * Array.from：根据已有的数组创建一个新数组
 */
const nums2 = Array.from(nums);
console.log('Array.from nums2: ', nums2); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// 还可以传入一个过滤值的函数
const evens = Array.from(nums, (x) => x % 2 == 0);
console.log('Array.from evens: ', evens); // [ false, true, false, true, false, true, false, true, false ]

/**
 * Array.of：根据传入的参数创建一个新数组
 */
const nums3 = Array.of(1, 2, 3, 4, 5, 6);
console.log('Array.of nums3: ', nums3); // [ 1, 2, 3, 4, 5, 6 ]

const numsCopy = Array.of(...nums3);
console.log('Array.of numsCopy: ', numsCopy); // [ 1, 2, 3, 4, 5, 6 ]

/**
 * fill：用静态值填充数组
 */
const numsFill = Array.of(1, 2, 3, 4, 5, 6);

numsFill.fill(0);
console.log('numsFill: ', numsFill); // [ 0, 0, 0, 0, 0, 0 ]

// 从索引 1 开始的所有位置值都为 2
numsFill.fill(2, 1);
console.log('numsFill: ', numsFill); // [ 0, 2, 2, 2, 2, 2 ]

// 把 1 填充到数组索引 3-5 的位置（不包括 5）
numsFill.fill(1, 3, 5);
console.log('numsFill: ', numsFill); // [ 0, 2, 2, 1, 1, 2 ]

/**
 * copyWithin：复制数组中的一系列元素到同一数组指定的起始位置（会改变原数组）
 */
let copyArray = [1, 2, 3, 4, 5, 6];

// 把 4、5、6 复制到数组前 3 个位置
copyArray.copyWithin(0, 3);
console.log('copyWithin array: ', copyArray); // [ 4, 5, 6, 4, 5, 6 ]

// 把 4、5 两个值（在位置 3 和 4 上）复制到位置 1 和 2
copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(1, 3, 5);
console.log('copyWithin array: ', copyArray); // [ 1, 4, 5, 4, 5, 6 ]
