const COMPARE = {
	LESS_THAN: -1,
	BIGGER_THAN: 1,
	EQUALS: 0,
};

function defaultCompare(a, b) {
	if (a < b) {
		return COMPARE.LESS_THAN;
	} else if (a === b) {
		return COMPARE.EQUALS;
	} else {
		return COMPARE.BIGGER_THAN;
	}
}

function reverseCompare(compareFn) {
	return (a, b) => compareFn(b, a);
}

module.exports = {
	COMPARE,
	defaultCompare,
	reverseCompare,
};
