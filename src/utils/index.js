const equals = require('./equals');
const compare = require('./compare');
const string = require('./string');
const array = require('./array');

module.exports = {
	...equals,
	...compare,
	...string,
	...array,
};
