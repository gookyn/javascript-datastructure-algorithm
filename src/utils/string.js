function defaultToString(item) {
	if (item === null) {
		return 'NULL';
	} else if (item === undefined) {
		return 'UNDEFINED';
	} else if (typeof item === 'string' || item instanceof String) {
		return `${item}`;
	}

	// 其它的数据类型要能实现 toString
	return item.toString();
}

module.exports = {
	defaultToString,
};
