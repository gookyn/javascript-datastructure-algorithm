const equals = require('./equals');
const compare = require('./compare');
const string = require('./string');

module.exports = {
	...equals,
	...compare,
	...string,
};
