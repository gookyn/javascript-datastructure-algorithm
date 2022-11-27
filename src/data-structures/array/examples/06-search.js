const nums = [1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1];

/**
 * indexOf：返回与参数匹配的第一个元素索引，没有匹配到时返回 -1
 */
const indexOf3 = nums.indexOf(3);
console.log('indexOf3: ', indexOf3); // 2

/**
 * lastIndexOf：返回与参数匹配的最后一个元素索引，没有匹配到时返回 -1
 */
const lastIndexOf3 = nums.lastIndexOf(3);
console.log('lastIndexOf3: ', lastIndexOf3); // 8

/**
 * find：根据回调函数给定的条件，从数组中查找元素，如果找到则返回第一个满足条件的元素，没有找到返回 undefined
 */
function multipleOf3(element) {
	return element % 3 === 0;
}

const findNum = nums.find(multipleOf3);
console.log('findNum: ', findNum); // 3

/**
 * findIndex：根据回调函数给定的条件，从数组中查找元素，如果找到则返回第一个满足条件的元素索引，没有找到返回 -1
 */
const findNumIndex = nums.findIndex(multipleOf3);
console.log('findNumIndex: ', findNumIndex); // 2

/**
 * includes：如果数组中存在某个元素则返回 true，否则返回 false
 */
const isIncludes = nums.includes(6);
console.log('isIncludes: ', isIncludes); // true

// 如果第二个参数传入一个起始索引，则会从索引指定的位置开始
const isIncludesFrom5 = nums.includes(6, 8);
console.log('isIncludesFrom5: ', isIncludesFrom5); // false
