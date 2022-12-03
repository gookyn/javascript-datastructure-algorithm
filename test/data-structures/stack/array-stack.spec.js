require('mocha');
const ArrayStack = require('../../../src/data-structures/stack/array-stack');
const shareCases = require('./share-cases');

describe('Array Stack', () => {
	shareCases(ArrayStack);
});
